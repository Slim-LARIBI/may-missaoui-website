"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 50%, rgba(255,228,236,0.6) 0%, transparent 40%), radial-gradient(circle at 90% 50%, rgba(255,143,171,0.1) 0%, transparent 40%)",
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
            className="inline-block font-jakarta text-xs font-semibold text-accent bg-surface rounded-full px-4 py-1.5 mb-5 uppercase tracking-wider"
          >
            Client Stories
          </motion.span>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-dark mb-4"
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-jakarta text-base text-neutral max-w-md mx-auto"
          >
            The metrics are important. But the relationships are what I am most proud of.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
            >
              <TestimonialCard testimonial={t} index={i} />
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center"
          role="list"
          aria-label="Trust statistics"
        >
          {[
            { value: "50+", label: "Happy Clients" },
            { value: "98%", label: "Retention Rate" },
            { value: "4.9★", label: "Average Rating" },
            { value: "100%", label: "Results Delivered" },
          ].map((item) => (
            <div key={item.label} role="listitem" className="p-4 bg-surface rounded-2xl">
              <div className="font-serif text-2xl text-primary">{item.value}</div>
              <div className="font-jakarta text-xs text-neutral mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
