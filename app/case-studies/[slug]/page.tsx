import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} — May Missaoui`,
    description: study.challenge,
    openGraph: {
      title: `${study.title} — May Missaoui`,
      description: study.result,
    },
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();
  return <CaseStudyDetailClient study={study} />;
}
