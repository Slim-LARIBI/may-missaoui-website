"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@/lib/data";
import { caseStudies } from "@/lib/data";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

const tagColors: Record<string, string> = {
  SEO: "bg-emerald-50 text-emerald-700 border-emerald-200",
  SEA: "bg-blue-50 text-blue-700 border-blue-200",
  Meta: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Analytics: "bg-violet-50 text-violet-700 border-violet-200",
  GTM: "bg-orange-50 text-orange-700 border-orange-200",
  CAPI: "bg-pink-50 text-pink-700 border-pink-200",
};

export default function CaseStudyDetailClient({ study }: { study: CaseStudy }) {
  const related = caseStudies
    .filter((s) => s.slug !== study.slug && s.tags.some((t) => study.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden bg-dark"
        aria-label="Case study hero"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #FF2D78 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-jakarta text-sm text-white/50 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="font-jakarta text-xs text-white/40 bg-white/10 rounded-full px-3 py-1">
              {study.industry}
            </span>
            <span className="font-jakarta text-xs text-white/40 bg-white/10 rounded-full px-3 py-1 flex items-center gap-1.5">
              <Clock className="w-3 h-3" aria-hidden="true" />
              {study.duration}
            </span>
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="font-jakarta text-xs font-medium rounded-full px-3 py-1 border bg-transparent text-white/60 border-white/20"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
          >
            {study.title}
          </motion.h1>

          {/* Big metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-primary to-accent rounded-2xl px-8 py-5"
          >
            <div className="font-serif text-4xl md:text-5xl text-white leading-none">
              {study.resultMetric}
            </div>
            <div className="font-jakarta text-sm text-white/70 mt-1">Primary Result</div>
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-20 bg-white" aria-label="Case study details">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl text-dark mb-4">The Challenge</h2>
                <p className="font-jakarta text-base text-neutral leading-relaxed">
                  {study.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl text-dark mb-4">The Solution</h2>
                <p className="font-jakarta text-base text-neutral leading-relaxed">
                  {study.solution}
                </p>
              </motion.div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl text-dark mb-4">The Result</h2>
                <p className="font-jakarta text-base text-neutral leading-relaxed mb-6">
                  {study.result}
                </p>
                <div className="space-y-3">
                  {study.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 p-4 bg-surface rounded-xl"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="font-jakarta text-sm font-semibold text-dark">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick facts */}
              <div className="bg-surface rounded-2xl p-6 sticky top-24">
                <h3 className="font-jakarta text-xs font-semibold text-dark uppercase tracking-wider mb-5">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-jakarta text-xs text-neutral/60 mb-1">Industry</div>
                    <div className="font-jakarta text-sm font-semibold text-dark">
                      {study.industry}
                    </div>
                  </div>
                  <div>
                    <div className="font-jakarta text-xs text-neutral/60 mb-1">Client Type</div>
                    <div className="font-jakarta text-sm font-semibold text-dark">
                      {study.clientType}
                    </div>
                  </div>
                  <div>
                    <div className="font-jakarta text-xs text-neutral/60 mb-1">Duration</div>
                    <div className="font-jakarta text-sm font-semibold text-dark">
                      {study.duration}
                    </div>
                  </div>
                  <div>
                    <div className="font-jakarta text-xs text-neutral/60 mb-2">Services Used</div>
                    <div className="flex flex-wrap gap-1.5">
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
                  </div>
                  <div className="pt-4 border-t border-primary/10">
                    <div className="font-jakarta text-xs text-neutral/60 mb-1">Key Result</div>
                    <div className="font-serif text-2xl text-primary">{study.resultMetric}</div>
                  </div>
                </div>

                <Link
                  href="/#contact"
                  className="mt-6 w-full flex items-center justify-center font-jakarta text-sm font-semibold bg-primary text-white rounded-xl py-3.5 hover:bg-accent transition-colors"
                >
                  Get similar results →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="py-20 bg-surface" aria-label="Related case studies">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 className="font-serif text-3xl text-dark mb-10 text-center">
              Related Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CaseStudyCard study={s} variant="preview" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
