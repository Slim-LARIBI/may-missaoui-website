"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const iconMap: Record<string, string> = {
  seo: "🔍",
  sea: "🎯",
  meta: "📱",
  analytics: "📊",
  gtm: "🏷️",
  capi: "⚡",
};

const accentColors: Record<string, { bg: string; border: string; text: string }> = {
  seo:       { bg: "rgba(255,45,120,0.12)",  border: "rgba(255,45,120,0.3)",  text: "#FF2D78" },
  sea:       { bg: "rgba(201,24,74,0.12)",   border: "rgba(201,24,74,0.3)",   text: "#C9184A" },
  meta:      { bg: "rgba(255,143,171,0.15)", border: "rgba(255,143,171,0.4)", text: "#FF8FAB" },
  analytics: { bg: "rgba(255,45,120,0.10)",  border: "rgba(255,45,120,0.25)", text: "#FF2D78" },
  gtm:       { bg: "rgba(201,24,74,0.10)",   border: "rgba(201,24,74,0.25)",  text: "#C9184A" },
  capi:      { bg: "rgba(255,45,120,0.08)",  border: "rgba(255,45,120,0.2)",  text: "#FF2D78" },
};

export default function Expertise() {
  const featured = services.slice(0, 2);
  const secondary = services.slice(2, 4);
  const tertiary = services.slice(4, 6);

  return (
    <section
      id="expertise"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "#0D0508" }}
      aria-labelledby="expertise-heading"
    >
      {/* BG dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,45,120,0.06) 1px, transparent 0)", backgroundSize: "48px 48px" }} aria-hidden="true" />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(255,45,120,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 font-jakarta text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-5" style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.25)", color: "#FF2D78" }}>
              What I Do
            </motion.span>
            <motion.h2 id="expertise-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="font-serif text-white" style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
              My Core Expertise
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="font-jakarta text-sm max-w-xs md:text-right leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Every service is built on clean data. No vanity metrics — only results that move business forward.
          </motion.p>
        </div>

        {/* GRID LAYOUT — asymétrique */}
        <div className="flex flex-col gap-4">

          {/* ROW 1 — 2 featured cards large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((service, i) => {
              const accent = accentColors[service.id];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-3xl p-8 overflow-hidden cursor-default"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at 30% 50%, ${accent.bg}, transparent 60%)` }} />

                  {/* Top bar accent */}
                  <div className="absolute top-0 left-8 right-8 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent.text}, transparent)`, opacity: 0.4 }} />

                  <div className="relative z-10 flex flex-col gap-5 h-full">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl" aria-hidden="true">{service.icon}</span>
                      <span className="font-jakarta text-xs font-bold rounded-full px-3 py-1" style={{ background: accent.bg, border: `1px solid ${accent.border}`, color: accent.text }}>
                        {service.resultMetric}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-white mb-3">{service.title}</h3>
                      <p className="font-jakarta text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{service.shortDescription}</p>
                    </div>
                    <div className="mt-auto pt-5 border-t flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                      <div className="flex flex-wrap gap-2">
                        {service.includes.slice(0, 2).map((inc, j) => (
                          <span key={j} className="font-jakarta text-[10px] rounded-full px-2.5 py-1" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            {inc.split(":")[0].replace(/\(.*\)/, "").trim().slice(0, 28)}
                          </span>
                        ))}
                      </div>
                      <Link href="/services" className="flex items-center gap-1 font-jakarta text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: accent.text }}>
                        Details <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ROW 2 — 2 medium + 1 large */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {secondary.map((service, i) => {
              const accent = accentColors[service.id];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-3xl p-7 overflow-hidden cursor-default"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 80%, ${accent.bg}, transparent 65%)` }} />
                  <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent.text}, transparent)`, opacity: 0.35 }} />
                  <div className="relative z-10 flex flex-col gap-4">
                    <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                    <h3 className="font-serif text-xl text-white">{service.title}</h3>
                    <p className="font-jakarta text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{service.shortDescription}</p>
                    <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                      <span className="font-jakarta text-xs font-bold rounded-full px-3 py-1" style={{ background: accent.bg, border: `1px solid ${accent.border}`, color: accent.text }}>
                        {service.resultMetric}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Colonne 3 — CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative rounded-3xl p-7 overflow-hidden flex flex-col justify-between"
              style={{ background: "linear-gradient(135deg, rgba(255,45,120,0.15) 0%, rgba(201,24,74,0.08) 100%)", border: "1px solid rgba(255,45,120,0.2)" }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,45,120,0.1) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              <div className="relative z-10">
                <p className="font-serif text-white text-xl mb-3 leading-tight">Ready to scale with clean data?</p>
                <p className="font-jakarta text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Every project starts with a free 30-min audit call.</p>
              </div>
              <Link href="/#contact" className="relative z-10 mt-6 inline-flex items-center justify-center gap-2 font-jakarta font-semibold text-sm text-white rounded-full px-6 py-3 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #FF2D78, #C9184A)", boxShadow: "0 8px 24px rgba(255,45,120,0.35)" }}>
                Book Free Audit <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>

          {/* ROW 3 — 2 remaining + stat banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tertiary.map((service, i) => {
              const accent = accentColors[service.id];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-3xl p-7 overflow-hidden cursor-default"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 80%, ${accent.bg}, transparent 65%)` }} />
                  <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent.text}, transparent)`, opacity: 0.35 }} />
                  <div className="relative z-10 flex flex-col gap-4">
                    <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                    <h3 className="font-serif text-xl text-white">{service.title}</h3>
                    <p className="font-jakarta text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{service.shortDescription}</p>
                    <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                      <span className="font-jakarta text-xs font-bold rounded-full px-3 py-1" style={{ background: accent.bg, border: `1px solid ${accent.border}`, color: accent.text }}>
                        {service.resultMetric}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Stat banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="rounded-3xl p-7 flex flex-col justify-center gap-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { value: "50+", label: "Brands scaled" },
                { value: "×3.8", label: "Average ROAS" },
                { value: "8yrs", label: "Experience" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="font-jakarta text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>{stat.label}</span>
                  <span className="font-serif text-2xl" style={{ color: "#FF2D78" }}>{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}