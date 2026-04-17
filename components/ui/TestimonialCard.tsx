"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/data";

const avatarGradients = [
  "from-pink-400 to-rose-600",
  "from-violet-400 to-purple-600",
  "from-rose-400 to-pink-600",
];

export default function TestimonialCard({
  testimonial,
  index = 0,
}: {
  testimonial: Testimonial;
  index?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-surface flex flex-col"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-primary text-base" aria-hidden="true">
            ★
          </span>
        ))}
        <span className="sr-only">{testimonial.rating} out of 5 stars</span>
      </div>

      {/* Quote */}
      <blockquote className="font-jakarta text-sm text-neutral leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-surface">
        <div
          className={`w-11 h-11 rounded-full bg-gradient-to-br ${
            avatarGradients[index % avatarGradients.length]
          } flex items-center justify-center flex-shrink-0`}
          aria-hidden="true"
        >
          <span className="font-jakarta text-sm font-bold text-white">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <div className="font-jakarta text-sm font-semibold text-dark">
            {testimonial.name}
          </div>
          <div className="font-jakarta text-xs text-neutral">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
