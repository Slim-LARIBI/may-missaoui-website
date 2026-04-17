import type { Metadata } from "next";
import { caseStudies } from "@/lib/data";
import CaseStudiesPageClient from "./CaseStudiesPageClient";

export const metadata: Metadata = {
  title: "Case Studies — May Missaoui",
  description:
    "Real results from data-driven digital marketing campaigns. SEO, Google Ads, Meta Ads, GA4, GTM and CAPI case studies with measurable outcomes.",
  openGraph: {
    title: "Case Studies — May Missaoui",
    description:
      "Real campaigns, real numbers. Explore case studies covering SEO, SEA, Meta Ads, GA4, GTM and server-side tracking.",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient studies={caseStudies} />;
}
