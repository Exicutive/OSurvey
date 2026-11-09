import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/button";
import { ServiceIcon } from "../components/icons";
import { PageHero } from "../components/page-hero";
import { StructuredData } from "../components/structured-data";
import { pageMetadata } from "../lib/metadata";
import { jsonLd } from "../lib/seo";
import { services } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Land Surveying Services in Lagos",
  description: "Explore cadastral and boundary surveys, topographic mapping, construction setting-out, subdivision, GIS and hydrographic surveying in Lagos, Nigeria.",
  path: "/services",
});
export default function ServicesPage() { return <main><StructuredData data={jsonLd("service", { name: "Land surveying services", description: "Cadastral, boundary, topographic, construction setting-out, subdivision, GIS and hydrographic surveying services.", serviceType: services.map((service) => service.title), areaServed: { "@type": "AdministrativeArea", name: "Lagos, Nigeria" } })} /><PageHero eyebrow="Services" title="Surveying services for better-informed land and project decisions." intro="Explore surveying and spatial services for land, development, construction and infrastructure projects." /><section className="section"><div className="shell service-detail-list">{services.map((service, index) => <article id={service.slug} key={service.slug} className="service-detail"><div className="service-detail-head"><span>0{index + 1}</span><ServiceIcon slug={service.slug} /><h2>{service.title}</h2></div><div><p>{service.overview}</p><dl><div><dt>Who may need it</dt><dd>{service.for}</dd></div><div><dt>Practical value</dt><dd>{service.benefit}</dd></div></dl><Button href="/request-a-survey" variant="text">Request a quotation <ArrowRight size={17} /></Button></div></article>)}</div></section><section className="final-cta compact-cta"><div className="shell"><p className="eyebrow">Need to talk it through?</p><h2>Start with the project,<br />not the jargon.</h2><Button href="/contact">Get in touch <ArrowRight size={17} /></Button></div></section></main>; }
