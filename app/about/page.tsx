import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Building2, ClipboardCheck, Compass, Map, Route, Waves } from "lucide-react";
import { Button } from "../components/button";
import { PageHero } from "../components/page-hero";
import { StructuredData } from "../components/structured-data";
import { pageMetadata } from "../lib/metadata";
import { jsonLd } from "../lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "About Our Surveying Practice",
  description: "Meet Lutex Survey & Planning Services: collaborative land surveying and geospatial work in Lagos, from cadastral plans to topographic mapping and construction setting-out.",
  path: "/about",
  image: "/images/about-profile.jpg",
});

const services = [
  { title: "Road construction surveys", icon: Route },
  { title: "Road alignment", icon: Compass },
  { title: "Topographic surveys", icon: Map },
  { title: "Coastline mapping", icon: Waves },
  { title: "Building construction setting-out", icon: Building2 },
  { title: "Cadastral plan production", icon: ClipboardCheck },
  { title: "Detailed surveys of existing projects", icon: Map },
];

export default function AboutPage() {
  return (
    <main>
      <StructuredData data={jsonLd("business")} />
      <PageHero
        eyebrow="About"
        title="Surveying and planning experience built around the needs of each project."
        intro="We deliver surveying and spatial information for land, infrastructure and building projects, with a focus on accuracy, professional standards and dependable project delivery."
      />

      <section className={styles.profile}>
        <div className="shell">
          <div className={styles.profileCopy}>
            <p className="eyebrow">Our approach</p>
            <h2>Good project work is built through <em>collaboration.</em></h2>
            <p>Over the years, we have worked alongside civil engineers, surveyors, town planners, architects, builders and other professionals. We coordinate survey work with the wider project team so that site information, design and construction requirements stay connected.</p>
            <p>We bring commitment and care to every commission, prioritising professional standards and accurate project information. Our experience includes the delivery of major projects across land development, infrastructure and building work.</p>
          </div>
          <div className={styles.profileVisual}>
            <Image
              src="/images/about-profile.jpg"
              alt="Surveying professional in the field"
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
            />
            <span>Surveying · planning · project delivery</span>
          </div>
        </div>
      </section>

      <section className={styles.focus}>
        <div className="shell">
          <div className={styles.focusHeading}>
            <div>
              <p className="eyebrow">Areas of work</p>
              <h2>Spatial work, from field<br />survey to <em>project plans.</em></h2>
            </div>
            <p>We enjoy projects involving spatial information, particularly cadastral surveys, layout design and building plans.</p>
          </div>
          <div className={styles.serviceList}>
            {services.map(({ title, icon: Icon }, index) => (
              <div className={styles.serviceItem} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.credentials}>
        <div className="shell">
          <div className={styles.credentialsHeading}>
            <p className="eyebrow">Professional record</p>
            <h2>Experience and registration.</h2>
          </div>
          <div className={styles.milestones}>
            <div><span>2018</span><p>Project experience</p></div>
            <div><span>2023</span><p>TOPREC registration</p></div>
            <div><span>2024</span><p>SURCON registration</p></div>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className="shell">
          <div>
            <p className="eyebrow">Work with us</p>
            <h2>Have a spatial project<br /><em>to discuss?</em></h2>
          </div>
          <Button href="/request-a-survey" variant="text">Tell us about your project <ArrowRight size={17} /></Button>
        </div>
      </section>
    </main>
  );
}
