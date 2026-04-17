"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
  variant?: "dark" | "light";
  showFull?: boolean;
}

export default function ServiceCard({
  service,
  variant = "dark",
  showFull = false,
}: ServiceCardProps) {
  if (variant === "dark") {
    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="dark-card rounded-2xl p-7 flex flex-col gap-4 cursor-default transition-all duration-300 group"
      >
        <div className="text-3xl" role="img" aria-label={service.title}>
          {service.icon}
        </div>
        <h3 className="font-serif text-xl text-white leading-snug">
          {service.title}
        </h3>
        <p className="font-jakarta text-sm text-white/60 leading-relaxed">
          {service.shortDescription}
        </p>
        <div className="mt-auto pt-4 border-t border-white/10">
          <span className="inline-block font-jakarta text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
            {service.resultMetric}
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-surface group"
    >
      <div className="text-4xl mb-5" role="img" aria-label={service.title}>
        {service.icon}
      </div>
      <h3 className="font-serif text-2xl text-dark mb-3">{service.title}</h3>
      <p className="font-jakarta text-sm text-neutral leading-relaxed mb-6">
        {service.description}
      </p>

      {showFull && (
        <>
          <div className="mb-6">
            <h4 className="font-jakarta text-xs font-semibold text-dark uppercase tracking-wider mb-3">
              What&apos;s included
            </h4>
            <ul className="space-y-2">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-jakarta text-sm text-neutral">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-surface rounded-xl">
            <div className="font-jakarta text-xs text-neutral mb-1 uppercase tracking-wider">
              Typical Result
            </div>
            <div className="font-serif text-lg text-accent">
              {service.typicalResult}
            </div>
          </div>
        </>
      )}

      {!showFull && (
        <div className="flex items-center justify-between">
          <span className="inline-block font-jakarta text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
            {service.resultMetric}
          </span>
          <Link
            href="/services"
            className="font-jakarta text-sm font-medium text-neutral hover:text-primary transition-colors"
          >
            Learn more →
          </Link>
        </div>
      )}
    </motion.div>
  );
}
