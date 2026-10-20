import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/button";
import { ServiceIcon } from "../components/icons";
import { PageHero } from "../components/page-hero";
import { StructuredData } from "../components/structured-data";
import { jsonLd } from "../lib/seo";
import { services } from "../lib/site";

export const metadata: Metadata = { title: "Surveying Services", description: "Explore land surveying, topographic, construction setting-out, GIS and mapping service options.", alternates: { canonical: "/services" } };
export default function ServicesPage() { return <main><StructuredData data={jsonLd("service", { name: "Land surveying services" })} /><PageHero eyebrow="Services" title="Surveying services for better-informed land and project decisions." intro="Services shown here are presented as configurable options. Confirm the services you provide before publishing." /><section className="section"><div className="shell service-detail-list">{services.map((service, index) => <article id={service.slug} key={service.slug} className="service-detail"><div className="service-detail-head"><span>0{index + 1}</span><ServiceIcon slug={service.slug} /><h2>{service.title}</h2></div><div><p>{service.overview}</p><dl><div><dt>Who may need it</dt><dd>{service.for}</dd></div><div><dt>Practical value</dt><dd>{service.benefit}</dd></div></dl><Button href="/request-a-survey" variant="text">Request a quotation <ArrowRight size={17} /></Button></div></article>)}</div></section><section className="final-cta compact-cta"><div className="shell"><p className="eyebrow">Need to talk it through?</p><h2>Start with the project,<br />not the jargon.</h2><Button href="/contact">Get in touch <ArrowRight size={17} /></Button></div></section></main>; }
