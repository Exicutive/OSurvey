import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy information about enquiries submitted to Lutex Survey & Planning Services.",
  path: "/privacy",
  noIndex: true,
});
export default function PrivacyPage() { return <main><PageHero eyebrow="Privacy policy" title="How enquiry information is handled." intro="This template must be reviewed and completed by the site owner before collecting live enquiries." /><section className="section"><article className="shell policy"><p className="placeholder-note">Implementation note: form delivery is currently disabled until an email or CRM provider is connected. Do not publish live data collection until this policy includes the legal business name, contact details, retention period and actual processing arrangements.</p><h2>Information collected</h2><p>When enabled, the enquiry form may collect your name, contact details, project location, service interest and project description so that the surveyor can respond to your request.</p><h2>How information is used</h2><p>Information should only be used to assess and respond to an enquiry, provide agreed services, and meet applicable professional or legal obligations.</p><h2>Your choices</h2><p>Provide a real contact address here so visitors can request access, correction or deletion where applicable. Replace all placeholder business details before launch.</p></article></section></main>; }
