import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function pageMetadata({ title, description, path, image = "/images/field-surveyor-total-station.jpg", noIndex = false }: PageMetadata): Metadata {
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: site.name,
      title,
      description,
      url: absoluteUrl(path),
      images: [{ url: imageUrl, alt: `${site.shortName} land surveying and geospatial services` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
