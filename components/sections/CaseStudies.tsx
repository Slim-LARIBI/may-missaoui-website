"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

const previewStudies = caseStudies.slice(0, 3);

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative py-24 md:py-32 bg-surface overflow-hidden"
      aria-labelledby="case-studies-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(255,45,120,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(201,24,74,0.06) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block font-jakarta text-xs font-semibold text-accent bg-white/80 rounded-full px-4 py-1.5 mb-5 uppercase tracking-wider"
          >
            Proven Results
          </motion.span>
          <motion.h2
            id="case-studies-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-dark mb-4"
          >
            Results That Speak
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-jakarta text-base text-neutral max-w-xl mx-auto"
          >
            Real campaigns. Real numbers. Every case study reflects the measurable impact
            of data-driven marketing done right.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <CaseStudyCard study={study} variant="preview" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-primary border-2 border-primary rounded-full px-8 py-3.5 hover:bg-primary hover:text-white transition-all duration-300"
          >
            See All Case Studies →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
