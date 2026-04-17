"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const certifications = [
  { label: "Google Partner", icon: "G" },
  { label: "Meta Business Partner", icon: "M" },
  { label: "GTM Certified", icon: "T" },
  { label: "GA4 Certified", icon: "4" },
];

const stats = [
  { value: "50+", label: "Brands Scaled" },
  { value: "x3.8", label: "Avg. ROAS" },
  { value: "8yrs", label: "Deep Expertise" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "#FFF0F3" }} aria-label="Hero section">

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute" style={{ width: 800, height: 800, borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%", background: "radial-gradient(circle, #FF2D78 0%, #FF8FAB 50%, transparent 75%)", opacity: 0.18, top: "-200px", left: "-250px", animation: "blob1 12s ease-in-out infinite" }} />
        <div className="absolute" style={{ width: 650, height: 650, borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%", background: "radial-gradient(circle, #C9184A 0%, #FF2D78 40%, transparent 70%)", opacity: 0.14, top: "10%", right: "-180px", animation: "blob2 15s ease-in-out infinite" }} />
        <div className="absolute" style={{ width: 500, height: 500, borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%", background: "radial-gradient(circle, #FF8FAB 0%, #FFB3C6 50%, transparent 75%)", opacity: 0.2, bottom: "-100px", left: "35%", animation: "blob3 10s ease-in-out infinite" }} />
      </div>

      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="absolute top-24 right-6 md:right-12 lg:right-20 z-10">
        <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,45,120,0.2)", boxShadow: "0 4px 24px rgba(255,45,120,0.12)" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e", animation: "pulse-dot 2s ease-in-out infinite" }} />
          <span className="font-jakarta text-xs font-semibold" style={{ color: "#1A0A10" }}>Available for new projects</span>
        </div>
      </motion.div>

      <motion.div style={{ y: yText, opacity }} className="relative z-10 mx-auto max-w-5xl px-5 md:px-8 pt-28 pb-24 text-center">

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-10" style={{ background: "rgba(255,45,120,0.08)", border: "1px solid rgba(255,45,120,0.2)" }}>
          <Sparkles size={13} style={{ color: "#FF2D78" }} />
          <span className="font-jakarta text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9184A" }}>Performance Marketing · Data & Strategy</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-serif" style={{ fontSize: "clamp(3.8rem, 9vw, 8rem)", lineHeight: 0.92, color: "#1A0A10", letterSpacing: "-0.02em", marginBottom: "0.15em" }}>
          May Missaoui
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-serif italic" style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)", lineHeight: 1.1, background: "linear-gradient(135deg, #FF2D78 0%, #C9184A 60%, #FF2D78 100%)", backgroundSize: "200% 200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "2rem", animation: "gradient-shift 4s ease infinite" }}>
          Data-Driven Marketing Expert
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }} className="font-jakarta text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4" style={{ color: "#6D3A4A" }}>
          Your brand deserves more than vanity metrics.{" "}
          <span className="font-semibold" style={{ color: "#1A0A10" }}>I build data systems that generate real revenue</span>{" "}
          — from first click to last conversion.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.5 }} className="font-jakarta text-sm mb-12" style={{ color: "#FF2D78", letterSpacing: "0.05em" }}>
          SEO · SEA · Meta Ads · GA4 · GTM · CAPI
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="/#contact" className="group inline-flex items-center gap-3 font-jakarta font-semibold text-sm text-white rounded-full px-8 py-4 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #FF2D78, #C9184A)", boxShadow: "0 8px 32px rgba(255,45,120,0.35)" }}>
            Work With Me
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="/#case-studies" className="inline-flex items-center gap-3 font-jakarta font-semibold text-sm rounded-full px-8 py-4 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)", border: "1.5px solid rgba(255,45,120,0.4)", color: "#C9184A" }}>
            View My Work
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3 rounded-2xl px-5 py-3" style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,45,120,0.12)" }}>
              <span className="font-serif" style={{ fontSize: "1.4rem", color: "#FF2D78", lineHeight: 1 }}>{s.value}</span>
              <span className="font-jakarta text-xs font-medium" style={{ color: "#6D3A4A" }}>{s.label}</span>
              {i < stats.length - 1 && <span className="hidden sm:block w-px h-6" style={{ background: "rgba(255,45,120,0.15)" }} />}
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25, duration: 0.6 }} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="font-jakarta text-xs font-medium" style={{ color: "#6D3A4A", opacity: 0.5 }}>Certified by</span>
          {certifications.map((c) => (
            <div key={c.label} className="flex items-center gap-1.5 font-jakarta text-xs font-semibold" style={{ color: "#6D3A4A" }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "rgba(255,45,120,0.12)", color: "#FF2D78" }}>{c.icon}</span>
              {c.label}
            </div>
          ))}
        </motion.div>

      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="font-jakarta uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "rgba(109,58,74,0.4)" }}>Scroll</span>
        <div className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5" style={{ border: "1.5px solid rgba(255,45,120,0.3)" }}>
          <div className="w-1 h-2 rounded-full" style={{ background: "#FF2D78", animation: "scroll-dot 1.8s ease-in-out infinite" }} />
        </div>
      </motion.div>

      <style>{`
        @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1) rotate(0deg)} 33%{transform:translate(40px,-50px) scale(1.08) rotate(5deg)} 66%{transform:translate(-30px,30px) scale(0.95) rotate(-3deg)} }
        @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1) rotate(0deg)} 33%{transform:translate(-50px,40px) scale(1.05) rotate(-6deg)} 66%{transform:translate(30px,-20px) scale(0.97) rotate(4deg)} }
        @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,-40px) scale(1.1)} }
        @keyframes gradient-shift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes pulse-dot { 0%,100%{box-shadow:0 0 0 3px rgba(34,197,94,0.25)} 50%{box-shadow:0 0 0 6px rgba(34,197,94,0.1)} }
        @keyframes scroll-dot { 0%{transform:translateY(0);opacity:1} 80%{transform:translateY(10px);opacity:0} 81%{transform:translateY(0);opacity:0} 100%{transform:translateY(0);opacity:1} }
      `}</style>

    </section>
  );
}