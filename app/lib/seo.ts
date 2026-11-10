import { absoluteUrl, services, site } from "./site";

export function jsonLd(type: "website" | "business" | "service", extra: Record<string, unknown> = {}) {
  const common = { "@context": "https://schema.org" };
  if (type === "website") {
    return { ...common, "@type": "WebSite", "@id": absoluteUrl("/#website"), name: site.name, url: site.url, description: site.description, inLanguage: "en-NG", publisher: { "@id": absoluteUrl("/#business") }, ...extra };
  }
  if (type === "business") {
    return {
      ...common,
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/#business"),
      name: site.name,
      url: site.url,
      description: site.description,
      telephone: site.phone,
      image: absoluteUrl("/images/field-surveyor-total-station.jpg"),
      logo: absoluteUrl("/images/lutex-survey-logo-cropped.jpeg"),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Surveying, geospatial and training services",
        itemListElement: [
          ...services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.title, description: service.overview },
          })),
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Surveying and geospatial training",
              description: "Training in surveying and spatial work, with scope and format discussed to suit the learners' goals.",
            },
          },
        ],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 2, Akabogu Street, Lagos Business School",
        addressLocality: "Ajah",
        addressRegion: "Lagos",
        addressCountry: "NG",
      },
      areaServed: { "@type": "AdministrativeArea", name: "Lagos, Nigeria" },
      ...extra,
    };
  }
  return { ...common, "@type": "Service", provider: { "@id": absoluteUrl("/#business") }, ...extra };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}
