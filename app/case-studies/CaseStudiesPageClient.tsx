"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "@/lib/data";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import AnimatedBlob from "@/components/ui/AnimatedBlob";

const ALL = "All";
const FILTER_TAGS = [ALL, "SEO", "SEA", "Meta", "Analytics", "GTM", "CAPI"];

export default function CaseStudiesPageClient({ studies }: { studies: CaseStudy[] }) {
  const [activeTag, setActiveTag] = useState(ALL);

  const filtered =
    activeTag === ALL
      ? studies
      : studies.filter((s) => s.tags.includes(activeTag));

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-20 overflow-hidden bg-dark"
        aria-labelledby="cs-hero-heading"
      >
        <AnimatedBlob color="#FF2D78" size={500} animationClass="animate-blob-1" opacity={0.1} className="-top-20 left-1/3" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-jakarta text-xs font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-6 uppercase tracking-wider"
          >
            Portfolio
          </motion.span>
          <motion.h1
            id="cs-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            Results That{" "}
            <span className="italic gradient-text">Speak for Themselves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-jakarta text-base md:text-lg text-white/50 max-w-2xl mx-auto"
          >
            Every case study is a real engagement with real numbers. No rounding, no cherry-
            picking — just the truth about what data-driven marketing delivers.
          </motion.p>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="py-20 bg-background" aria-label="Case studies list">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-12"
            role="group"
            aria-label="Filter case studies by category"
          >
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
                className={`font-jakarta text-sm font-medium rounded-full px-5 py-2 transition-all duration-200 ${
                  activeTag === tag
                    ? "bg-primary text-white shadow-pink-sm"
                    : "bg-white text-neutral border border-surface hover:border-primary hover:text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((study, i) => (
                <motion.div
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <CaseStudyCard study={study} variant="preview" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-neutral">No case studies found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
