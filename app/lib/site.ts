export const site = {
  name: "Lutex Survey & Planning Services",
  shortName: "Lutex",
  description:
    "Professional land surveying and planning services for clear, confident land decisions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  phone: "+234 707 621 2073",
  phoneHref: "+2347076212073",
  email: "[Email address]",
  whatsapp: "2348138582155",
  whatsappDisplay: "+234 813 858 2155",
  serviceArea: "No. 2, Akabogu Street, Lagos Business School, Ajah, Lagos",
  address: "No. 2, Akabogu Street, Lagos Business School, Ajah, Lagos",
  social: { linkedin: "", instagram: "" },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  overview: string;
  for: string;
  benefit: string;
};

export const services: Service[] = [
  {
    slug: "land-cadastral-surveys",
    title: "Land & cadastral surveys",
    short: "Clear land records and survey plans for property matters.",
    overview: "Establish and document land interests with careful field observations and clear survey outputs.",
    for: "Property owners, buyers, legal professionals and developers.",
    benefit: "A reliable basis for land decisions, documentation and project planning.",
  },
  {
    slug: "boundary-beacon-identification",
    title: "Boundary & beacon identification",
    short: "Find, assess and clearly communicate property boundaries.",
    overview: "A practical site-based review of existing boundary evidence, marks and survey information.",
    for: "Owners, neighbours and buyers who need boundary clarity.",
    benefit: "Helps inform discussions and next steps with a measured understanding of the site.",
  },
  {
    slug: "topographic-surveys",
    title: "Topographic surveys",
    short: "Accurate terrain and feature data for better site design.",
    overview: "Capture levels, visible features and site conditions in a format suited to design and planning teams.",
    for: "Architects, engineers, planners and property developers.",
    benefit: "Gives project teams a dependable spatial picture before design decisions are made.",
  },
  {
    slug: "construction-setting-out",
    title: "Construction setting-out",
    short: "Translate approved plans into precise positions on site.",
    overview: "Support construction with measured control, set-out points and checks against agreed drawings.",
    for: "Contractors, engineers, architects and project managers.",
    benefit: "Supports orderly construction coordination and reduces avoidable dimensional uncertainty.",
  },
  {
    slug: "subdivision-layout",
    title: "Subdivision & layout",
    short: "Measured support for land layout and subdivision planning.",
    overview: "Develop practical survey information for proposed layouts and subdivision workflows.",
    for: "Landowners, developers and planning teams.",
    benefit: "A clear survey foundation for evaluating land use and proposed plot arrangements.",
  },
  {
    slug: "gis-digital-mapping",
    title: "GIS & digital mapping",
    short: "Spatial information organised for practical decisions.",
    overview: "Structure location data and mapping outputs for land, infrastructure and asset-focused projects.",
    for: "Organisations that need accessible spatial information.",
    benefit: "Makes location-based information easier to share, understand and use.",
  },
];

export const projectPlaceholders = [
  { category: "Topographic survey", title: "Site context & terrain mapping", description: "Measured terrain and visible features, structured for confident design decisions.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85" },
  { category: "Land information", title: "Spatial data for land decisions", description: "Clear location intelligence for property, planning and development teams.", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85" },
  { category: "Field control", title: "Precision on active sites", description: "Survey control that helps plans translate accurately on the ground.", image: "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1400&q=85" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
