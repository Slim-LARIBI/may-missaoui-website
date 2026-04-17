import type { Metadata } from "next";
import { services } from "@/lib/data";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services — May Missaoui",
  description:
    "Explore May Missaoui's full suite of data-driven digital marketing services: Technical SEO, Google Ads, Meta Ads, GA4, Google Tag Manager, and Conversions API.",
  openGraph: {
    title: "Services — May Missaoui",
    description:
      "Data-driven digital marketing services: SEO, SEA, Meta Ads, GA4, GTM & CAPI. Measurable results for brands that want to grow.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}
