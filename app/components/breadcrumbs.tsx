import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ label }: { label: string }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">{label}</span></nav>;
}
