import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.formData();
  if (data.get("company")) return NextResponse.json({ message: "Unable to send enquiry." }, { status: 400 });
  const required = ["name", "phone", "email", "service", "description"];
  if (required.some((field) => !String(data.get(field) || "").trim())) return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  // Add a secure transactional email or CRM integration here. This route intentionally
  // does not claim delivery until an owner configures one.
  return NextResponse.json({ message: "Enquiries are not configured yet. Please use the verified contact details once they are added." }, { status: 503 });
}
