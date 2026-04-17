"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, CheckCircle2 } from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";

const stats = [
  { prefix: "", value: 50, suffix: "+", label: "Clients Served" },
  { prefix: "+", value: 300, suffix: "%", label: "Avg. ROAS" },
  { prefix: "", value: 8, suffix: "+", label: "Years Experience" },
];

const badges = [
  "SEO Technique",
  "Google Ads",
  "Meta CAPI",
  "GA4 Setup",
  "GTM Expert",
  "Data Strategy",
];

const proofs = [
  "Trusted by 50+ brands across Europe & MENA",
  "Google & Meta certified partner",
  "Built tracking stacks from scratch for Fortune 500",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#FFFFFF" }} aria-labelledby="about-heading">

      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, #FFE4EC 0%, transparent 65%)", opacity: 0.7, transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, #FFF0F3 0%, transparent 65%)", opacity: 0.8, transform: "translate(-30%, 30%)" }} />
        {/* Vertical accent line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(255,45,120,0.08), transparent)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — Visual */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative">

            <div className="relative mx-auto" style={{ maxWidth: 420 }}>

              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(135deg, #FF2D78, #FF8FAB, #FFE4EC)", padding: 3, borderRadius: 28, transform: "rotate(-2deg) scale(1.02)", opacity: 0.4 }}>
                <div className="w-full h-full rounded-3xl" style={{ background: "#fff" }} />
              </div>

              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5", background: "linear-gradient(160deg, #FFE4EC 0%, #FF8FAB 40%, #FF2D78 75%, #C9184A 100%)" }}>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                {/* Center initials */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-white/20 select-none" style={{ fontSize: "12rem", lineHeight: 1, letterSpacing: "-0.05em" }} aria-hidden="true">MM</span>
                </div>

                {/* Bottom name bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, rgba(26,10,16,0.7), transparent)" }}>
                  <p className="font-serif text-white text-2xl">May Missaoui</p>
                  <p className="font-jakarta text-white/60 text-sm mt-1">Digital Marketing Expert</p>
                </div>

                {/* Skill badges floating on image */}
                <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2">
                  {badges.map((b, i) => (
                    <motion.span key={b} initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }} className="font-jakarta text-[10px] font-semibold rounded-full px-3 py-1" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>
                      {b}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Floating card — years */}
              <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }} className="absolute -bottom-6 -right-6 rounded-2xl px-5 py-4" style={{ background: "#1A0A10", boxShadow: "0 20px 40px rgba(26,10,16,0.3)" }}>
                <div className="font-serif leading-none mb-1" style={{ fontSize: "2rem", color: "#FF2D78" }}>8+</div>
                <div className="font-jakarta text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Years of expertise</div>
              </motion.div>

              {/* Floating card — clients */}
              <motion.div initial={{ opacity: 0, scale: 0.8, y: -20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.65, duration: 0.5 }} className="absolute -top-6 -left-6 rounded-2xl px-5 py-4" style={{ background: "#fff", border: "1px solid rgba(255,45,120,0.15)", boxShadow: "0 12px 32px rgba(255,45,120,0.12)" }}>
                <div className="font-serif leading-none mb-1" style={{ fontSize: "2rem", color: "#FF2D78" }}>50+</div>
                <div className="font-jakarta text-xs" style={{ color: "#6D3A4A" }}>Brands scaled</div>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <div className="flex flex-col gap-6">

            {/* Tag */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 font-jakarta text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5" style={{ background: "rgba(255,45,120,0.08)", color: "#C9184A", border: "1px solid rgba(255,45,120,0.2)" }}>
                About Me
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 id="about-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="font-serif" style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", lineHeight: 1.1, color: "#1A0A10" }}>
              The expert behind
              <br />
              <span className="italic" style={{ background: "linear-gradient(135deg, #FF2D78, #C9184A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>the data</span>
            </motion.h2>

            {/* Story */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-col gap-4">
              <p className="font-jakarta text-base leading-relaxed" style={{ color: "#6D3A4A" }}>
                Most agencies show you pretty dashboards. I show you <span className="font-semibold" style={{ color: "#1A0A10" }}>what's actually moving the needle</span> — and fix what isn't.
              </p>
              <p className="font-jakarta text-base leading-relaxed" style={{ color: "#6D3A4A" }}>
                With 8+ years building measurement stacks, running paid campaigns and auditing data pipelines, I've learned one thing: <span className="font-semibold" style={{ color: "#1A0A10" }}>clean data is the foundation of every euro well spent.</span>
              </p>
            </motion.div>

            {/* Trust proof */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-col gap-3">
              {proofs.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#FF2D78" }} />
                  <span className="font-jakarta text-sm" style={{ color: "#6D3A4A" }}>{p}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} className="grid grid-cols-3 gap-4 rounded-2xl p-5" style={{ background: "linear-gradient(135deg, #FFF0F3, #FFE4EC)", border: "1px solid rgba(255,45,120,0.12)" }}>
              {stats.map((stat) => (
                <StatCounter key={stat.label} prefix={stat.prefix} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 font-jakarta font-semibold text-sm text-white rounded-full px-6 py-3 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #FF2D78, #C9184A)", boxShadow: "0 6px 24px rgba(255,45,120,0.3)" }}>
                Work With Me
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 font-jakarta font-semibold text-sm rounded-full px-6 py-3 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "rgba(255,45,120,0.06)", border: "1px solid rgba(255,45,120,0.2)", color: "#C9184A" }}>
                <Download size={15} />
                Download CV
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}