import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./brand.css";
import "./projects-showcase.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { site } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Land Surveying & Geospatial Services in Lagos", template: `%s | ${site.shortName}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: "Land Surveying & Geospatial Services in Lagos",
    description: site.description,
    url: site.url,
    images: [{ url: "/images/field-surveyor-total-station.jpg", alt: "Land surveyor carrying out field measurements" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Land Surveying & Geospatial Services in Lagos",
    description: site.description,
    images: ["/images/field-surveyor-total-station.jpg"],
  },
  icons: { icon: [{ url: "/images/lutex-survey-logo-cropped.jpeg", type: "image/jpeg" }] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#092b83", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-NG"><body><Header />{children}<Footer /></body></html>;
}
