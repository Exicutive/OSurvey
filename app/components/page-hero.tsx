import type { ReactNode } from "react";
import { Breadcrumbs } from "./breadcrumbs";

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="shell"><Breadcrumbs label={eyebrow} /><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p>{children}</div></section>;
}
