import type { LucideIcon } from "lucide-react";
import { Binoculars, Compass, Map, Ruler, ScanLine, Waypoints } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "land-cadastral-surveys": Map,
  "boundary-beacon-identification": Compass,
  "topographic-surveys": ScanLine,
  "construction-setting-out": Ruler,
  "subdivision-layout": Waypoints,
  "gis-digital-mapping": Binoculars,
};

export function ServiceIcon({ slug }: { slug: string }) {
  const Icon = icons[slug] ?? Map;
  return <Icon aria-hidden="true" strokeWidth={1.5} />;
}
