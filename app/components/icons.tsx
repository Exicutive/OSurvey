import type { LucideIcon } from "lucide-react";
import { Binoculars, Compass, Map, Ruler, ScanLine, Waypoints, Waves } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "land-cadastral-surveys": Map,
  "boundary-beacon-identification": Compass,
  "topographic-surveys": ScanLine,
  "construction-setting-out": Ruler,
  "subdivision-layout": Waypoints,
  "gis-digital-mapping": Binoculars,
  "hydrographic-survey": Waves,
};

export function ServiceIcon({ slug }: { slug: string }) {
  const Icon = icons[slug] ?? Map;
  return <Icon aria-hidden="true" strokeWidth={1.5} />;
}
