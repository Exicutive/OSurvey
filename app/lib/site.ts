export const site = {
  name: "Lutex Survey & Planning Services",
  shortName: "Lutex",
  description:
    "Land surveying, geospatial mapping and practical surveying training in Lagos, Nigeria, including cadastral, boundary, topographic, hydrographic and construction services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.lutexspatial.com",
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
    description: "Premium residential and commercial estate development in Ibeju-Lekki.",
    surveySummary: "Surveyed the estate layout from master plan parcellation through on-site plot identification and infrastructure checks.",
    workAreas: "Parcellation · beaconing · site checks",
    workDone: [
      { title: "Translate the master plan", description: "Reviewed the approved layout and plot schedule, then set out the residential 300 sqm and 500 sqm parcels and commercial allocations on the ground. Plot dimensions and access alignments were checked against the plan." },
      { title: "Mark and identify plots", description: "Transferred plot-corner positions from the survey layout to the site, then placed concrete boundary pillars. Each beacon received a unique identification number and was checked against its plot position." },
      { title: "Check infrastructure construction", description: "Surveyed constructed road and drainage alignments and compared their positions with the approved layout. The as-built information was recorded for review against the design." },
      { title: "Prepare survey records", description: "Compiled the measured plot and boundary information into survey documentation with geodetic data, then prepared the plans for certification and statutory land processing." },
    ],
    image: "/images/marbella-luxury-smart-estate.jpg",
    imageAlt: "Entrance to Marbella Luxury Smart Estate in Ibeju-Lekki, Lagos",
    featured: true,
  },
  {
    slug: "queens-garden-annex",
    name: "Queen’s Garden Annex",
    location: "Isheri-North GRA, Lagos",
    description: "Residential estate development in Isheri-North GRA.",
    surveySummary: "Focused on confirming the estate perimeter and documenting cadastral boundary information for land records.",
    workAreas: "Perimeter · cadastral verification · plans",
    workDone: [
      { title: "Review boundary records", description: "Reviewed the available cadastral plan and land records to understand the recorded estate perimeter and adjoining boundaries before field verification." },
      { title: "Verify the perimeter on site", description: "Inspected existing boundary evidence and measured the perimeter positions. Field observations were compared with the recorded plan to confirm the boundary alignment and identify any differences for follow-up." },
      { title: "Record boundary marks", description: "Documented the verified boundary positions and associated beacon information so the perimeter could be identified and checked on the ground." },
      { title: "Complete cadastral plans", description: "Compiled the verified survey information and geodetic data into cadastral survey-plan documentation, then prepared the plans for certification and statutory processing." },
    ],
    image: "/images/queens-garden-annex.jpg",
    imageAlt: "Residential homes along a street at Queen’s Garden Annex in Isheri-North GRA, Lagos",
    featured: true,
  },
  {
    slug: "lakeview-park-and-resort",
    name: "Lakeview Park and Resort",
    location: "Ketu-Epe, Lagos",
    description: "Park and resort development in Ketu-Epe.",
    surveySummary: "Mapped site terrain, elevations and water-flow patterns to inform engineering design for the park and resort development.",
    workAreas: "Topography · contours · water flow",
    workDone: [
      { title: "Capture site detail and levels", description: "Surveyed terrain elevations and visible site features to build a measured representation of the resort site." },
      { title: "Prepare the contour plan", description: "Organised the elevation observations into contour information showing how the ground rises, falls and changes across the site." },
      { title: "Map surface-water patterns", description: "Used the recorded levels and terrain shape to identify surface flow patterns and provide drainage-planning information to the engineering team." },
      { title: "Issue design survey information", description: "Compiled the topographic plan and level data for use in assessing drainage routes, site grading and foundation design." },
    ],
    image: "/images/lakeview-park-and-resort.jpg",
    imageAlt: "Aerial view of the Lakeview Park and Resort site in Ketu-Epe, Lagos",
    featured: true,
  },
  {
    slug: "cityview-park-and-resort-queens-park",
    name: "Cityview Park & Resort / Queen’s Park",
    location: "Abuja axis",
    description: "Park and resort developments in the Abuja area.",
    surveySummary: "Surveyed and documented land layout information to support planning and physical plot identification across the park and resort developments.",
    workAreas: "Layout · boundaries · documentation",
    workDone: [
      { title: "Relate the plan to the site", description: "Reviewed the estate layout and available land information, then established the site positions needed to carry the proposed parcel and access arrangement into the field." },
      { title: "Survey and define boundaries", description: "Measured the perimeter and plot boundary positions and checked their relationship to the planned layout to support clear land identification." },
      { title: "Set out physical plot marks", description: "Transferred the designated boundary positions to the site and marked plot corners with identified concrete beacons for allocation and later reference." },
      { title: "Prepare land survey documentation", description: "Compiled the measured layout and boundary information with geodetic data into survey plans for certification and statutory land-record processes." },
    ],
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
