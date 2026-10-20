import { absoluteUrl, site } from "./site";

export function jsonLd(type: "website" | "person" | "service", extra: Record<string, unknown> = {}) {
  const common = { "@context": "https://schema.org", "@id": absoluteUrl("/#identity") };
  if (type === "website") return { ...common, "@type": "WebSite", name: site.name, url: site.url, description: site.description, ...extra };
  if (type === "person") return { ...common, "@type": "Person", name: site.name, jobTitle: "Land surveyor", url: site.url, ...extra };
  return { ...common, "@type": "Service", provider: { "@type": "Person", name: site.name }, ...extra };
}
