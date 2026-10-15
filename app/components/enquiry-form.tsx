"use client";

import { useState, type FormEvent } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { services } from "../lib/site";

type FormState = "idle" | "sending" | "sent" | "error";
type Props = { compact?: boolean };

export function EnquiryForm({ compact = false }: Props) {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setMessage("");
    const form = event.currentTarget;
    try { const res = await fetch("/api/enquiries", { method: "POST", body: new FormData(form) }); const data = await res.json(); if (!res.ok) throw new Error(data.message || "Unable to send your enquiry."); setStatus("sent"); setMessage("Thank you — your enquiry was sent successfully."); form.reset(); }
    catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Unable to send your enquiry."); }
  }
  return <form className="enquiry-form" onSubmit={submit} noValidate><div className="honeypot" aria-hidden="true"><label htmlFor="company">Company</label><input id="company" name="company" tabIndex={-1} autoComplete="off" /></div>
    <div className="form-grid"><label>Full name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" inputMode="tel" autoComplete="tel" placeholder="Your phone number" /></label><label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>{!compact && <label>Preferred contact method<select name="contactMethod" defaultValue=""><option value="" disabled>Select an option</option><option>Phone call</option><option>WhatsApp</option><option>Email</option></select></label>}<label className={compact ? "" : "form-span"}>Service needed<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.slug}>{service.title}</option>)}<option>Not sure yet</option></select></label>{!compact && <label className="form-span">Property or project location<input required name="location" placeholder="Area, town or site reference" /></label>}<label className="form-span">Tell us about the project<textarea required name="description" rows={compact ? 4 : 5} placeholder="What do you need to achieve? Include useful timing or site details." /></label></div><button className="button button--solid submit" type="submit" disabled={status === "sending"}>{status === "sending" ? <><LoaderCircle className="spin" size={17} /> Sending…</> : <>Send enquiry <Send size={16} /></>}</button>{message && <p className={status === "sent" ? "form-message success" : "form-message error"} role="status">{message}</p>}<p className="form-privacy">By submitting, you agree to be contacted about this enquiry. See our <a href="/privacy">privacy policy</a>.</p></form>;
}
