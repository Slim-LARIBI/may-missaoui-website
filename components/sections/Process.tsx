"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Decorative left blob */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(circle, #FFE4EC 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block font-jakarta text-xs font-semibold text-accent bg-surface rounded-full px-4 py-1.5 mb-5 uppercase tracking-wider"
          >
            My Process
          </motion.span>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-dark mb-4"
          >
            How I Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-jakarta text-base text-neutral max-w-xl mx-auto"
          >
            A structured, repeatable methodology that eliminates guesswork and delivers
            consistent, measurable results.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div
            className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number circle */}
                <div
                  className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center mb-6 shadow-pink-sm group-hover:shadow-pink-md transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #FF2D78, #C9184A)",
                  }}
                >
                  <span className="text-3xl leading-none mb-1" role="img" aria-label={step.title}>
                    {step.icon}
                  </span>
                  <span className="font-jakarta text-[10px] font-bold text-white/70 tracking-wider">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-dark mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="font-jakarta text-sm text-neutral leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center bg-surface rounded-3xl px-8 py-10 max-w-3xl mx-auto"
        >
          <p className="font-serif text-2xl md:text-3xl text-dark mb-4">
            Every engagement starts with a{" "}
            <span className="italic text-primary">free 30-minute discovery call.</span>
          </p>
          <p className="font-jakarta text-sm text-neutral mb-6">
            No pressure. No pitch. Just an honest conversation about your goals and whether I am
            the right fit to help you reach them.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 font-jakarta text-sm font-semibold bg-primary text-white rounded-full px-7 py-3.5 hover:bg-accent hover:shadow-pink-sm transition-all duration-300"
          >
            Book a free call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
