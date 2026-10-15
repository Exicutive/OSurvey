import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "../components/enquiry-form";
import { PageHero } from "../components/page-hero";
import { site } from "../lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact [Surveyor Name] about your land surveying or geospatial project.", alternates: { canonical: "/contact" } };
export default function ContactPage() { const contacts = [{ icon: Phone, title: "Phone", value: site.phone, href: `tel:${site.phoneHref}` }, { icon: Mail, title: "Email", value: site.email, href: site.email.includes("@") ? `mailto:${site.email}` : undefined }, { icon: MessageCircle, title: "WhatsApp", value: site.whatsappDisplay, href: `https://wa.me/${site.whatsapp}` }, { icon: MapPin, title: "Service area", value: site.serviceArea }]; return <main><PageHero eyebrow="Contact" title="Let’s start with the details that matter." intro="Tell us about your site, project or land question. We will use the information to understand the best next step." /><section className="section"><div className="shell contact-grid"><div className="contact-details"><p className="eyebrow">Contact details</p>{contacts.map(({ icon: Icon, title, value, href }) => <div className="contact-item" key={title}><Icon aria-hidden="true" /><div><h2>{title}</h2>{href ? <a href={href}>{value}</a> : <p>{value}</p>}</div></div>)}</div><div><p className="eyebrow">Make an enquiry</p><h2>What can we help you measure?</h2><EnquiryForm compact /></div></div></section></main>; }
