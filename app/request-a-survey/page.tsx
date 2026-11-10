import type { Metadata } from "next";
import { EnquiryForm } from "../components/enquiry-form";
import { PageHero } from "../components/page-hero";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Request a Land Survey in Lagos",
  description: "Request a survey or discuss a land, cadastral, topographic, construction setting-out or geospatial project in Lagos, Nigeria.",
  path: "/request-a-survey",
});
export default function RequestSurveyPage() { return <main><PageHero eyebrow="Request a Plan" title="Tell us what you need to achieve on site." intro="Share a few details and we can establish the right questions, scope and route to a quotation." /><section className="section request-section"><div className="shell request-grid"><aside><p className="eyebrow">Before you begin</p><h2>Helpful details to include</h2><ul className="check-list"><li>Site or property location</li><li>The decision or project you are planning</li><li>Useful plans, documents or deadlines</li><li>Your preferred way to be contacted</li></ul><p>Please mention available documents in your description and a secure sharing method can be agreed.</p></aside><EnquiryForm formType="request-a-plan" /></div></section></main>; }
