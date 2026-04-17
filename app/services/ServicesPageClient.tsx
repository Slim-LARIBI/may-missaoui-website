"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/lib/data";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedBlob from "@/components/ui/AnimatedBlob";

export default function ServicesPageClient({ services }: { services: Service[] }) {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FFF0F3 0%, #FFE4EC 100%)" }}
        aria-labelledby="services-hero-heading"
      >
        <AnimatedBlob color="#FF2D78" size={500} animationClass="animate-blob-1" opacity={0.12} className="-top-20 -right-20" />
        <AnimatedBlob color="#FF8FAB" size={400} animationClass="animate-blob-2" opacity={0.1} className="bottom-0 -left-10" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-jakarta text-xs font-semibold text-accent bg-white/80 rounded-full px-4 py-1.5 mb-6 uppercase tracking-wider"
          >
            Services
          </motion.span>
          <motion.h1
            id="services-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif text-5xl md:text-6xl text-dark mb-6 leading-tight"
          >
            Everything you need to{" "}
            <span className="italic gradient-text">grow with data</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-jakarta text-base md:text-lg text-neutral max-w-2xl mx-auto mb-8"
          >
            From technical SEO to server-side tracking, every service I offer is designed to
            give you a competitive edge backed by real, measurable performance data.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-jakarta text-sm font-semibold bg-primary text-white rounded-full px-8 py-4 hover:bg-accent hover:shadow-pink-sm transition-all duration-300"
            >
              Start a Project →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Full service cards ── */}
      <section className="py-24 bg-white" aria-label="Service details">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
              >
                <ServiceCard service={service} variant="light" showFull />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="py-24 bg-dark text-white text-center"
        aria-label="Call to action"
      >
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl mb-5"
          >
            Not sure which service you need?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-jakarta text-base text-white/60 mb-8 max-w-xl mx-auto"
          >
            Let&apos;s talk. I start every engagement with a free discovery call to
            understand your business and recommend exactly what will move the needle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-jakarta text-sm font-semibold bg-primary text-white rounded-full px-8 py-4 hover:bg-accent hover:shadow-pink-sm transition-all duration-300"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              See my results →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
