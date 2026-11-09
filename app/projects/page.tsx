import Image from "next/image";
import type { Metadata } from "next";
import { ArrowDownRight, MapPin, MoveUpRight } from "lucide-react";
import { Button } from "../components/button";
import { PageHero } from "../components/page-hero";
import { estateProjects, projectDeliverables } from "../lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Estate Surveying Projects",
  description: "Geomatics and engineering surveying across Landmark Corporate Realty’s premium estates, from master plan parcellation to statutory survey documentation.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Project portfolio"
        title="From master plan to clearly marked ground."
        intro="Geomatics and engineering surveying across Landmark Corporate Realty’s premium residential and commercial estates—turning land concepts into precise layouts, verified boundaries and statutory survey documentation."
      >
        <div className={styles.heroMeta}>
          <span><MapPin aria-hidden="true" /> Lagos & Abuja</span>
          <span>Residential · Commercial · Resort</span>
        </div>
      </PageHero>

      <section className={styles.portfolioIntro}>
        <div className="shell">
          <div className={styles.introLead}>
            <p className="eyebrow">The work</p>
            <h2>One connected survey process.<br /><em>From concept to allocation.</em></h2>
          </div>
          <div className={styles.introBody}>
            <p>Across Landmark Corporate Realty’s estate portfolio, surveying connected the master plan to the physical site and its legal records. The work combined precise land division, boundary evidence, terrain information, plot beaconing and construction checks.</p>
            <div className={styles.allocationNote}>
              <span>300 / 500</span>
              <p>Standardized residential plot allocations, with commercial parcels incorporated into estate layouts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.deliverables}`}>
        <div className="shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Scope & deliverables</p>
              <h2>Survey detail that<br /><em>moves projects forward.</em></h2>
            </div>
            <p>Integrated field, engineering and cadastral work supported estate planning, allocation, documentation and construction.</p>
          </div>
          <div className={styles.deliverableGrid}>
            {projectDeliverables.map((item) => (
              <article className={styles.deliverable} key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <ArrowDownRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.estates}>
        <div className="shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Featured estates</p>
              <h2>Selected work<br /><em>across the portfolio.</em></h2>
            </div>
            <p>Estate developments supported through Landmark Corporate Realty’s premium residential, commercial and resort portfolio.</p>
          </div>
          <div className={styles.estateGrid}>
            {estateProjects.map((project, index) => (
              <article className={styles.estateCard} id={project.slug} key={project.slug}>
                <div className={styles.estateImage}>
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {project.featured && <span className={styles.featuredTag}>Selected work</span>}
                </div>
                <div className={styles.estateContent}>
                  <p className={styles.estateLocation}><MapPin aria-hidden="true" /> {project.location}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className="shell">
          <div>
            <p className="eyebrow">A measured foundation</p>
            <h2>Clear land information.<br /><em>Confident next steps.</em></h2>
          </div>
          <Button href="/request-a-survey">Discuss a survey <MoveUpRight size={16} /></Button>
        </div>
      </section>
    </main>
  );
}
