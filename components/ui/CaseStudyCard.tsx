"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data";

interface CaseStudyCardProps {
  study: CaseStudy;
  variant?: "preview" | "full";
}

const tagColors: Record<string, string> = {
  SEO: "bg-emerald-50 text-emerald-700 border-emerald-200",
  SEA: "bg-blue-50 text-blue-700 border-blue-200",
  Meta: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Analytics: "bg-violet-50 text-violet-700 border-violet-200",
  GTM: "bg-orange-50 text-orange-700 border-orange-200",
  CAPI: "bg-pink-50 text-pink-700 border-pink-200",
};

export default function CaseStudyCard({ study, variant = "preview" }: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-default hover:shadow-card-hover transition-all duration-300"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary to-accent" />

      <div className="p-7">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="font-jakarta text-xs font-medium text-neutral bg-surface rounded-full px-3 py-1">
            {study.industry}
          </span>
          <span className="font-jakarta text-xs font-medium text-neutral/70 rounded-full px-3 py-1">
            {study.clientType}
          </span>
        </div>

        <h3 className="font-serif text-xl text-dark mb-4 leading-snug group-hover:text-accent transition-colors">
          {study.title}
        </h3>

        {/* Challenge → Result */}
        <div className="space-y-3 mb-5">
          <div>
            <span className="font-jakarta text-xs font-semibold text-neutral uppercase tracking-wider">
              Challenge
            </span>
            <p className="font-jakarta text-sm text-neutral/80 mt-1 leading-relaxed line-clamp-2">
              {study.challenge}
            </p>
          </div>
          <div>
            <span className="font-jakarta text-xs font-semibold text-neutral uppercase tracking-wider">
              Result
            </span>
            <p className="font-jakarta text-sm font-semibold text-dark mt-1">
              {study.result.split(".")[0]}.
            </p>
          </div>
        </div>

        {/* Big metric */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 mb-5">
          <div className="font-serif text-2xl text-primary leading-none">
            {study.resultMetric}
          </div>
          <div className="font-jakarta text-xs text-neutral mt-1">{study.duration}</div>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className={`font-jakarta text-xs font-medium rounded-full px-2.5 py-0.5 border ${
                tagColors[tag] ?? "bg-gray-50 text-gray-600 border-gray-200"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {variant === "preview" && (
          <Link
            href={`/case-studies/${study.slug}`}
            className="inline-flex items-center gap-1.5 font-jakarta text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
          >
            Read case study
            <span>→</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
