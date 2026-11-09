import type { MetadataRoute } from "next";
import { estateProjects, absoluteUrl } from "./lib/site";

const publicPages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/request-a-survey", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...publicPages.map(({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      changeFrequency,
      priority,
    })),
    ...estateProjects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.7 : 0.6,
    })),
  ];
}
