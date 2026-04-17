import Link from "next/link";
import { Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Technical SEO", href: "/services#seo" },
    { label: "Google Ads (SEA)", href: "/services#sea" },
    { label: "Meta Ads", href: "/services#meta" },
    { label: "GA4 & Analytics", href: "/services#analytics" },
    { label: "Google Tag Manager", href: "/services#gtm" },
    { label: "Tracking & CAPI", href: "/services#capi" },
  ],
  "Case Studies": [
    { label: "E-commerce SEA", href: "/case-studies/fashion-ecommerce-google-ads" },
    { label: "SaaS Meta CAPI", href: "/case-studies/saas-meta-capi" },
    { label: "Local SEO", href: "/case-studies/local-seo-ranking" },
    { label: "GA4 Implementation", href: "/case-studies/beauty-ga4-data-layer" },
    { label: "GTM Audit", href: "/case-studies/hospitality-gtm-audit" },
    { label: "Full-Funnel Tracking", href: "/case-studies/tech-startup-full-funnel" },
  ],
  Resources: [
    { label: "About May", href: "/#about" },
    { label: "My Process", href: "/#process" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
    { label: "Book a Call", href: "#" },
  ],
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter / X" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-serif text-3xl text-primary hover:opacity-80 transition-opacity"
              aria-label="May Missaoui — home"
            >
              May.
            </Link>
            <p className="font-jakarta text-sm text-white/50 mt-3 leading-relaxed max-w-xs">
              Data-Driven Marketing Expert specializing in SEO, Google Ads, Meta Ads, GA4, GTM & CAPI. Helping brands grow with precision and measurable results.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-jakarta text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-jakarta text-sm text-white/60 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-jakarta text-xs text-white/30">
            © {new Date().getFullYear()} May Missaoui. All rights reserved. Made with data &amp; passion.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-200 group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
