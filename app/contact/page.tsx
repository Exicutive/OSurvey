import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "../components/enquiry-form";
import { PageHero } from "../components/page-hero";
import { pageMetadata } from "../lib/metadata";
import { site } from "../lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Contact a Land Surveyor in Lagos",
  description: "Contact Lutex Survey & Planning Services about cadastral, boundary, topographic, construction or geospatial surveying in Lagos, Nigeria.",
  path: "/contact",
});

const mapQuery = "Lagos Business School, Lekki, Lagos";
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export default function ContactPage() {
  const contacts = [
    { icon: Phone, title: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
    { icon: Mail, title: "Email", value: site.email, href: site.email.includes("@") ? `mailto:${site.email}` : undefined },
    { icon: MessageCircle, title: "WhatsApp", value: site.whatsappDisplay, href: `https://wa.me/${site.whatsapp}` },
    { icon: MapPin, title: "Service area", value: site.serviceArea },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let’s start with the details that matter."
        intro="Tell us about your site, project or land question. A few property details can help make the first conversation more useful."
      />
      <section className={styles.location}>
        <div className="shell">
          <p className="eyebrow">Find us</p>
          <h2>Visit Us.</h2>
          <div className={styles.map}>
            <iframe title="Map showing Lagos Business School" src={mapEmbedUrl} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            <a className={styles.mapLink} href={mapUrl} target="_blank" rel="noreferrer">Open this location in Google Maps</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-details">
            <p className="eyebrow">Contact details</p>
            {contacts.filter(({ title }) => title !== "Email" || site.email.includes("@")).map(({ icon: Icon, title, value, href }) => (
              <div className="contact-item" key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <h2>{title}</h2>
                  {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">Make an enquiry</p>
            <h2>What can we help you measure?</h2>
            <aside className={styles.preparation}>
              <h3>Helpful property details to have ready</h3>
              <ul>
                <li>Property location</li>
                <li>Approximate property size</li>
                <li>Title or available property documents</li>
                <li>Any current or previous litigation</li>
                <li>Site access and accessibility</li>
              </ul>
              <p>This is a guide only. These details are not collected in the enquiry form.</p>
            </aside>
            <EnquiryForm compact />
          </div>
        </div>
      </section>
    </main>
  );
}
