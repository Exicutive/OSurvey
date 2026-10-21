import Image from "next/image";
import type { Metadata } from "next";
import { ImageOff } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { projectPlaceholders } from "../lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "A project gallery reserved for verified land surveying, mapping and setting-out work.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="A portfolio will tell the story behind the measurements."
        intro="No verified projects have been supplied, so this gallery is deliberately presented as a portfolio placeholder — not as completed client work."
      />
      <section className="section">
        <div className="shell">
          <div className={styles.gallery}>
            {projectPlaceholders.map((project) => (
              <article className={styles.card} key={project.image}>
                <div className={styles.image}>
                  <Image
                    src={project.image}
                    alt="Placeholder for verified survey project photography"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.content}>
                  <span className={styles.category}>{project.category} · Placeholder</span>
                  <h2>{project.title}</h2>
                  <p>Replace this card with the project context, methods and outcomes once permission to publish has been confirmed.</p>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.callout}>
            <ImageOff aria-hidden="true" />
            <div>
              <h2>Ready for authentic case studies</h2>
              <p>Add only approved photography, locations, client names and deliverables. This area intentionally avoids invented results or statistics.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
