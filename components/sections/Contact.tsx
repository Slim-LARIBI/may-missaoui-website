"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, MapPin, CalendarDays, CheckCircle2 } from "lucide-react";

const budgetOptions = [
  "< €1,000 / month",
  "€1,000 – €3,000 / month",
  "€3,000 – €7,000 / month",
  "€7,000+ / month",
  "Project-based",
  "Not sure yet",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@maymissaoui.com", href: "mailto:hello@maymissaoui.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/maymissaoui", href: "https://linkedin.com" },
  { icon: MapPin, label: "Location", value: "Paris, France · Remote worldwide", href: null },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full font-jakarta text-sm text-dark bg-white rounded-xl px-4 py-3.5 border border-surface focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all duration-200 placeholder:text-neutral/40";

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF0F3 0%, #FFE4EC 100%)" }}
      aria-labelledby="contact-heading"
    >
      {/* Blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,45,120,0.12) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,24,74,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block font-jakarta text-xs font-semibold text-accent bg-white/70 rounded-full px-4 py-1.5 mb-6 uppercase tracking-wider"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl text-dark mb-4 leading-tight"
            >
              Ready to grow?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-jakarta text-base text-neutral leading-relaxed mb-10"
            >
              Whether you have a specific project in mind or simply want to explore whether we are
              a good fit — I would love to hear from you. Drop me a message or book a free
              30-minute call directly.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4 mb-10"
            >
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-card flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-jakarta text-xs text-neutral/60 uppercase tracking-wider mb-0.5">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="font-jakarta text-sm font-medium text-dark hover:text-primary transition-colors"
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-jakarta text-sm font-medium text-dark">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Book a call CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2.5 font-jakarta text-sm font-semibold bg-dark text-white rounded-full px-7 py-3.5 hover:bg-accent transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Book a free 30-minute discovery call"
              >
                <CalendarDays className="w-4 h-4" aria-hidden="true" />
                Book a free 30-min call
              </a>
            </motion.div>
          </div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-card"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-dark mb-3">
                    Message received!
                  </h3>
                  <p className="font-jakarta text-sm text-neutral max-w-sm">
                    Thank you for reaching out. I review every message personally and will get
                    back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-jakarta text-xs font-semibold text-dark uppercase tracking-wider mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Sophie Laurent"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-jakarta text-xs font-semibold text-dark uppercase tracking-wider mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="sophie@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block font-jakarta text-xs font-semibold text-dark uppercase tracking-wider mb-2"
                    >
                      Company / Brand
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Maison Élégance"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block font-jakarta text-xs font-semibold text-dark uppercase tracking-wider mb-2"
                    >
                      Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a budget range</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-jakarta text-xs font-semibold text-dark uppercase tracking-wider mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, your current challenges, and what success looks like for you..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full font-jakarta text-sm font-semibold bg-primary text-white rounded-xl py-4 hover:bg-accent hover:shadow-pink-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </button>

                  <p className="font-jakarta text-xs text-neutral/50 text-center">
                    I respond to every inquiry within 24 hours.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
