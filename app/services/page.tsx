import type { Metadata } from "next";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "../components/button";
import { ServiceIcon } from "../components/icons";
import { PageHero } from "../components/page-hero";
import { StructuredData } from "../components/structured-data";
import { pageMetadata } from "../lib/metadata";
import { jsonLd } from "../lib/seo";
import { services } from "../lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Surveying, Geospatial & Training Services in Lagos",
  description: "Explore cadastral and boundary surveys, topographic mapping, construction setting-out, subdivision, GIS, hydrographic surveying and training in Lagos, Nigeria.",
  path: "/services",
});
export default function ServicesPage() {
  const serviceTypes = [...services.map((service) => service.title), "Surveying and geospatial training"];

  return (
    <main>
      <StructuredData data={jsonLd("service", {
        name: "Surveying, geospatial and training services",
        description: "Cadastral, boundary, topographic, construction setting-out, subdivision, GIS and hydrographic surveying, alongside training.",
        serviceType: serviceTypes,
        areaServed: { "@type": "AdministrativeArea", name: "Lagos, Nigeria" },
      })} />
      <PageHero
        eyebrow="Services"
        title="Surveying services for better-informed land and project decisions."
        intro="Explore surveying and spatial services for land, development, construction and infrastructure projects."
      />
      <section className="section">
        <div className="shell service-detail-list">
          {services.map((service, index) => (
            <article id={service.slug} key={service.slug} className="service-detail">
              <div className="service-detail-head">
                <span>0{index + 1}</span>
                <ServiceIcon slug={service.slug} />
                <h2>{service.title}</h2>
              </div>
              <div>
                <p>{service.overview}</p>
                <dl>
                  <div><dt>Who may need it</dt><dd>{service.for}</dd></div>
                  <div><dt>Practical value</dt><dd>{service.benefit}</dd></div>
                </dl>
                <Button href="/request-a-survey" variant="text">Request a quotation <ArrowRight size={17} /></Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="training" className={styles.trainingSection} aria-labelledby="training-title">
        <div className={`shell ${styles.trainingPanel}`}>
          <div className={styles.trainingMark}><GraduationCap aria-hidden="true" /></div>
          <div className={styles.trainingCopy}>
            <p className={styles.trainingEyebrow}>A distinct OSurvey service</p>
            <h2 id="training-title">Training in surveying &amp; spatial work.</h2>
            <p>OSurvey also offers training. Get in touch to discuss your learning goals, intended participants and the subject areas you want to cover. We can confirm a suitable scope and format with you.</p>
            <Button href="/contact">Enquire about training <ArrowRight size={17} /></Button>
          </div>
          <span className={styles.trainingNumber} aria-hidden="true">T</span>
        </div>
      </section>
      <section className="final-cta compact-cta">
        <div className="shell">
          <p className="eyebrow">Need to talk it through?</p>
          <h2>Start with the project,<br />not the jargon.</h2>
          <Button href="/contact">Get in touch <ArrowRight size={17} /></Button>
        </div>
      </section>
    </main>
  );
}
