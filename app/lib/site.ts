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
  image: string;
};

export const services: Service[] = [
  {
    slug: "land-cadastral-surveys",
    title: "Land & cadastral surveys",
    short: "Clear land records and survey plans for property matters.",
    overview: "Establish and document land interests with careful field observations and clear survey outputs.",
    for: "Property owners, buyers, legal professionals and developers.",
    benefit: "A reliable basis for land decisions, documentation and project planning.",
    image: "/images/topographic-field-map.svg",
  },
  {
    slug: "boundary-beacon-identification",
    title: "Boundary & beacon identification",
    short: "Find, assess and clearly communicate property boundaries.",
    overview: "A practical site-based review of existing boundary evidence, marks and survey information.",
    for: "Owners, neighbours and buyers who need boundary clarity.",
    benefit: "Helps inform discussions and next steps with a measured understanding of the site.",
    image: "/images/topographic-survey-total-station.jpg",
  },
  {
    slug: "topographic-surveys",
    title: "Topographic surveys",
    short: "Accurate terrain and feature data for better site design.",
    overview: "Capture levels, visible features and site conditions in a format suited to design and planning teams.",
    for: "Architects, engineers, planners and property developers.",
    benefit: "Gives project teams a dependable spatial picture before design decisions are made.",
    image: "/images/geospatial-terrain-model.svg",
  },
  {
    slug: "construction-setting-out",
    title: "Construction setting-out",
    short: "Translate approved plans into precise positions on site.",
    overview: "Support construction with measured control, set-out points and checks against agreed drawings.",
    for: "Contractors, engineers, architects and project managers.",
    benefit: "Supports orderly construction coordination and reduces avoidable dimensional uncertainty.",
    image: "/images/field-surveyor-total-station.jpg",
  },
  {
    slug: "subdivision-layout",
    title: "Subdivision & layout",
    short: "Measured support for land layout and subdivision planning.",
    overview: "Develop practical survey information for proposed layouts and subdivision workflows.",
    for: "Landowners, developers and planning teams.",
    benefit: "A clear survey foundation for evaluating land use and proposed plot arrangements.",
    image: "/images/subdivision-layout.svg",
  },
  {
    slug: "gis-digital-mapping",
    title: "GIS & digital mapping",
    short: "Spatial information organised for practical decisions.",
    overview: "Structure location data and mapping outputs for land, infrastructure and asset-focused projects.",
    for: "Organisations that need accessible spatial information.",
    benefit: "Makes location-based information easier to share, understand and use.",
    image: "/images/gis-digital-mapping.svg",
  },
  {
    slug: "hydrographic-survey",
    title: "Hydrographic survey",
    short: "Measured underwater data for waterways and coastal projects.",
    overview: "Capture and map underwater levels and features to support planning, design and assessment of aquatic environments.",
    for: "Marine, coastal, infrastructure and waterway project teams.",
    benefit: "Provides spatial information to help understand underwater conditions and inform project decisions.",
    image: "/images/hydrographic-survey.svg",
  },
];

export const estateProjects = [
  {
    slug: "marbella-luxury-smart-estate",
    name: "Marbella Luxury Smart Estate",
    location: "Ibeju-Lekki, Lagos",
    description: "A premium residential and commercial estate in Landmark Corporate Realty’s Lagos portfolio.",
    image: "/images/subdivision-layout.svg",
    imageAlt: "Illustration of surveyed estate parcels and access routes",
    featured: true,
  },
  {
    slug: "queens-garden-annex",
    name: "Queen’s Garden Annex",
    location: "Isheri-North GRA, Lagos",
    description: "An estate development in the Landmark Corporate Realty portfolio in Isheri-North.",
    image: "/images/topographic-field-map.svg",
    imageAlt: "Illustration of a surveyed site boundary and topographic contours",
    featured: true,
  },
  {
    slug: "lake-view-park-and-resort",
    name: "Lake View Park and Resort",
    location: "Ketu-Epe, Lagos",
    description: "A park and resort development in the Landmark Corporate Realty portfolio.",
    image: "/images/geospatial-terrain-model.svg",
    imageAlt: "Illustration of a mapped terrain model with contour features",
    featured: true,
  },
  {
    slug: "city-view-park-and-resort-queens-park",
    name: "City View Park & Resort / Queen’s Park",
    location: "Abuja axis",
    description: "Park and resort projects included in the Landmark Corporate Realty portfolio across the Abuja axis.",
    image: "/images/gis-digital-mapping.svg",
    imageAlt: "Illustration of digital mapping layers and surveyed control points",
    featured: false,
  },
] as const;

export const featuredProjects = estateProjects.filter((project) => project.featured);

export const projectDeliverables = [
  {
    number: "01",
    title: "Master plan parcellation",
    description: "Translated raw master plan concepts into precise residential and commercial plot layouts, including standardized 300 sqm and 500 sqm allocations.",
  },
  {
    number: "02",
    title: "Boundary verification",
    description: "Carried out perimeter and cadastral surveys to establish estate limits, verify boundaries and support title integrity.",
  },
  {
    number: "03",
    title: "Topographical & contour mapping",
    description: "Mapped terrain, elevations and water-flow patterns to inform drainage routes, foundation design and engineering decisions.",
  },
  {
    number: "04",
    title: "Beaconing & physical allocation",
    description: "Coordinated the fabrication, placement and unique numbering of concrete boundary pillars for plot identification and allocation.",
  },
  {
    number: "05",
    title: "Statutory survey documentation",
    description: "Prepared and certified stamped survey plans with geodetic data to support processing of Governor’s Consents and Certificates of Occupancy.",
  },
  {
    number: "06",
    title: "As-built infrastructure audits",
    description: "Checked road and drainage alignments during construction against approved estate layouts.",
  },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
