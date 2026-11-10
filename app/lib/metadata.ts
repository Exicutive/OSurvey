import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/field-surveyor-total-station.jpg",
  imageAlt = "Land surveyor carrying out field measurements",
}: PageMetadata): Metadata {
  const imageUrl = absoluteUrl(image);
  const socialImage = { url: imageUrl, alt: imageAlt };

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: site.name,
      title,
      description,
      url: absoluteUrl(path),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
