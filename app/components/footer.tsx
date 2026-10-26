import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { navItems, services, site } from "../lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div className="footer-intro"><Link href="/" className="wordmark footer-mark"><Image className="company-logo" src="/images/lutex-survey-logo-cropped.jpeg" width={690} height={560} alt="Lutex Survey & Planning Services" /></Link><p>Measured advice and spatial clarity for considered land decisions.</p><Link href="/request-a-survey" className="footer-primary-link">Request a survey <ArrowUpRight size={15} /></Link></div>
      <div><h2>Explore</h2>{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
      <div><h2>Core services</h2>{services.slice(0, 4).map((item) => <Link key={item.slug} href={`/services#${item.slug}`}>{item.title}</Link>)}</div>
      <div className="footer-contact-block"><h2>Speak with us</h2><p>{site.serviceArea}</p><a href={`tel:${site.phoneHref}`}>{site.phone}</a><a href={`https://wa.me/${site.whatsapp}`}>WhatsApp: {site.whatsappDisplay}</a><p>{site.email}</p><Link href="/contact" className="footer-contact">Contact details <ArrowUpRight size={16} /></Link></div>
    </div>
    <div className="shell legal"><span>© {year} {site.name}. All rights reserved.</span><div><Link href="/privacy">Privacy policy</Link></div></div>
  </footer>;
}
