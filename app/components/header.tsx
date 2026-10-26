"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "../lib/site";
import styles from "./header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className={`site-header ${styles.header}`}>
    <div className="shell nav-wrap">
      <Link href="/" className="wordmark" onClick={() => setOpen(false)} aria-label={`${site.name} home`}>
        <Image className="company-logo" src="/images/lutex-survey-logo-cropped.jpeg" width={690} height={560} priority alt="Lutex Survey & Planning Services" />
      </Link>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}<span className="sr-only">Toggle menu</span>
      </button>
      <nav id="primary-nav" className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "active" : ""}>{item.label}</Link>)}
        <Link className="nav-cta" href="/request-a-survey" onClick={() => setOpen(false)}>Request a Survey</Link>
      </nav>
    </div>
  </header>;
}
