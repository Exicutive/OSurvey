import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, MapPin, MoveUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "../../components/button";
import { estateProjects, projectDeliverables } from "../../lib/site";
import styles from "./page.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return estateProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = estateProjects.find((estate) => estate.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: `${project.name} in ${project.location} — estate surveying, land documentation and project details.`,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = estateProjects.findIndex((estate) => estate.slug === slug);
  const project = estateProjects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = estateProjects[(projectIndex + 1) % estateProjects.length];

  return (
    <main>
      <section className={styles.hero}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`shell ${styles.heroContent}`}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span aria-current="page">{project.name}</span>
          </nav>
          <p className={styles.eyebrow}>Estate project</p>
          <h1>{project.name}</h1>
          <p className={styles.location}><MapPin aria-hidden="true" />{project.location}</p>
        </div>
        <span className={styles.heroIndex}>{String(projectIndex + 1).padStart(2, "0")} / {String(estateProjects.length).padStart(2, "0")}</span>
      </section>

      <section className={styles.overview}>
        <div className="shell">
          <div className={styles.overviewTitle}>
            <p className="eyebrow">Project overview</p>
            <h2>Measured from<br /><em>plan to place.</em></h2>
          </div>
          <div className={styles.overviewCopy}>
            <p>{project.description} Surveying and land documentation helped translate development plans into clearly defined plots, verified site boundaries and practical information for engineering and statutory processes.</p>
            <div className={styles.projectFacts}>
              <div><span>Project type</span><strong>Estate development</strong></div>
              <div><span>Location</span><strong>{project.location}</strong></div>
              <div><span>Survey focus</span><strong>Planning · boundaries · delivery</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.scope}>
        <div className="shell">
          <div className={styles.scopeHeading}>
            <div>
              <p className="eyebrow">Survey scope</p>
              <h2>Coordinated work.<br /><em>Clear information.</em></h2>
            </div>
            <p>The estate portfolio combined cadastral, engineering and topographical survey work at key stages of land planning and development.</p>
          </div>
          <div className={styles.scopeGrid}>
            {projectDeliverables.map((item) => (
              <article className={styles.scopeItem} key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.projectNav}>
        <div className="shell">
          <Link href="/projects" className={styles.backLink}><ArrowLeft aria-hidden="true" /> All projects</Link>
          <Link href={`/projects/${nextProject.slug}`} className={styles.nextLink}>
            <span>Next project</span>
            <strong>{nextProject.name}</strong>
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.closing}>
        <div className="shell">
          <div>
            <p className="eyebrow">Planning a development?</p>
            <h2>Start with a clear<br /><em>survey foundation.</em></h2>
          </div>
          <Button href="/request-a-survey">Discuss your project <MoveUpRight size={16} /></Button>
        </div>
      </section>
    </main>
  );
}
