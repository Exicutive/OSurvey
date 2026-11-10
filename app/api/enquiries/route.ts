import { NextResponse } from "next/server";
import { services, trainingServiceLabel } from "../../lib/site";

export const runtime = "nodejs";

const fieldLimits = {
  name: 120,
  phone: 40,
  email: 254,
  contactMethod: 40,
  service: 120,
  location: 300,
  description: 5000,
} as const;

function getField(data: FormData, key: keyof typeof fieldLimits) {
  return String(data.get(key) || "").trim();
}

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ message: "Unable to read the enquiry. Please try again." }, { status: 400 });
  }

  if (String(data.get("company") || "").trim()) {
    return NextResponse.json({ message: "Unable to send enquiry." }, { status: 400 });
  }

  const formType = String(data.get("formType") || "");
  const enquiry = {
    formType,
    name: getField(data, "name"),
    phone: getField(data, "phone"),
    email: getField(data, "email"),
    contactMethod: getField(data, "contactMethod"),
    service: getField(data, "service"),
    location: getField(data, "location"),
    description: getField(data, "description"),
  };

  const oversizedField = (Object.keys(fieldLimits) as Array<keyof typeof fieldLimits>)
    .find((field) => enquiry[field].length > fieldLimits[field]);
  if (oversizedField) {
    return NextResponse.json({ message: `Please shorten the ${oversizedField} field and try again.` }, { status: 400 });
  }

  if (!["contact", "request-a-plan"].includes(formType)) {
    return NextResponse.json({ message: "Invalid enquiry form." }, { status: 400 });
  }

  const validServices = [...services.map((service) => service.title), trainingServiceLabel, "Not sure yet"];
  if (!validServices.includes(enquiry.service)) {
    return NextResponse.json({ message: "Please select a valid service." }, { status: 400 });
  }

  if (!enquiry.name || !enquiry.phone || !enquiry.email || !enquiry.service || !enquiry.description || (formType === "request-a-plan" && !enquiry.location)) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const endpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  const token = process.env.GOOGLE_SHEETS_WEB_APP_TOKEN;
  if (!endpoint || !token) {
    return NextResponse.json({ message: "Enquiries are temporarily unavailable. Please contact us by phone or WhatsApp." }, { status: 503 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, enquiry }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json() as { ok?: boolean; alertSent?: boolean };

    if (!response.ok || !result.ok) {
      console.error("Google Sheets rejected an enquiry", { status: response.status });
      return NextResponse.json({ message: "We could not deliver your enquiry. Please try again or contact us directly." }, { status: 502 });
    }

    return NextResponse.json({
      message: result.alertSent === false
        ? "Your enquiry was received, but the email alert could not be sent. You do not need to submit it again."
        : "Thank you — your enquiry was sent successfully.",
    });
  } catch (error) {
    console.error("Google Sheets enquiry delivery failed", error instanceof Error ? error.message : "Unknown delivery error");
    return NextResponse.json({ message: "We could not deliver your enquiry. Please try again or contact us directly." }, { status: 502 });
  }
}
