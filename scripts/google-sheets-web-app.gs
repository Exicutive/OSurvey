const HEADERS = [
  "Received at",
  "Form",
  "Name",
  "Phone",
  "Email",
  "Preferred contact method",
  "Service",
  "Location",
  "Project description",
];

const FIELD_LIMITS = {
  name: 120,
  phone: 40,
  email: 254,
  contactMethod: 40,
  service: 120,
  location: 300,
  description: 5000,
};

function doPost(event) {
  const body = JSON.parse(event.postData.contents);
  const properties = PropertiesService.getScriptProperties();
  const expectedToken = properties.getProperty("WEBHOOK_TOKEN");

  if (!expectedToken || body.token !== expectedToken) {
    return jsonResponse({ ok: false, message: "Unauthorized." });
  }

  const enquiry = body.enquiry;
  const requiredFields = ["formType", "name", "phone", "email", "service", "description"];
  if (!enquiry || requiredFields.some((field) => !String(enquiry[field] || "").trim())) {
    return jsonResponse({ ok: false, message: "Required fields are missing." });
  }

  if (Object.keys(FIELD_LIMITS).some((field) => String(enquiry[field] || "").length > FIELD_LIMITS[field])) {
    return jsonResponse({ ok: false, message: "A field is too long." });
  }

  if (enquiry.formType === "request-a-plan" && !String(enquiry.location || "").trim()) {
    return jsonResponse({ ok: false, message: "Project location is required." });
  }

  if (!["contact", "request-a-plan"].includes(enquiry.formType)) {
    return jsonResponse({ ok: false, message: "Invalid form type." });
  }

  const spreadsheetId = properties.getProperty("SPREADSHEET_ID");
  if (!spreadsheetId) {
    return jsonResponse({ ok: false, message: "Spreadsheet is not configured." });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow([
      new Date(),
      safeCell(enquiry.formType === "contact" ? "Contact page" : "Request a Plan"),
      safeCell(enquiry.name),
      safeCell(enquiry.phone),
      safeCell(enquiry.email),
      safeCell(enquiry.contactMethod),
      safeCell(enquiry.service),
      safeCell(enquiry.location),
      safeCell(enquiry.description),
    ]);
  } finally {
    lock.releaseLock();
  }

  return jsonResponse({ ok: true });
}

function safeCell(value) {
  const text = String(value || "");
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
