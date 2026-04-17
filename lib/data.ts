export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  includes: string[];
  typicalResult: string;
  resultMetric: string;
}

export interface CaseStudy {
  slug: string;
  industry: string;
  clientType: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  resultMetric: string;
  tags: string[];
  duration: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const services: Service[] = [
  {
    id: "seo",
    icon: "🔍",
    title: "Technical SEO",
    shortDescription: "Rank higher and earn more organic traffic with precision SEO strategies built on real data.",
    description:
      "I conduct deep technical audits, fix crawlability issues, optimize Core Web Vitals, and build content strategies that drive sustainable organic growth. Every recommendation is backed by data — no guesswork.",
    includes: [
      "Full technical site audit (crawl errors, indexation, site speed)",
      "Core Web Vitals optimization",
      "On-page SEO: titles, meta, structured data",
      "Content gap analysis & keyword strategy",
      "Link building strategy & authority building",
      "Monthly ranking & traffic reporting",
    ],
    typicalResult: "Average 180% increase in organic traffic within 6 months",
    resultMetric: "+180% Organic Traffic",
  },
  {
    id: "sea",
    icon: "🎯",
    title: "Google Ads (SEA)",
    shortDescription: "Maximize every euro of your ad budget with laser-targeted Google Ads campaigns.",
    description:
      "From Search and Shopping to Performance Max, I build and optimize campaigns that convert. My data-driven approach ensures every click has a purpose and every budget is spent on audiences that matter.",
    includes: [
      "Account structure & campaign architecture",
      "Keyword research & negative keyword lists",
      "Ad copy creation & A/B testing",
      "Bidding strategy optimization (Smart Bidding, tROAS, tCPA)",
      "Shopping & Performance Max setup",
      "Conversion tracking & attribution modeling",
    ],
    typicalResult: "Average 300% ROAS improvement after 90-day optimization",
    resultMetric: "+300% ROAS",
  },
  {
    id: "meta",
    icon: "📱",
    title: "Meta Ads",
    shortDescription: "Scale your business on Facebook and Instagram with creative-led, data-backed campaigns.",
    description:
      "I build full-funnel Meta strategies from awareness to conversion — combining compelling creative direction with rigorous audience testing, CAPI implementation, and attribution modeling to maximize your return.",
    includes: [
      "Audience strategy & lookalike building",
      "Creative briefing & ad copy",
      "Full-funnel campaign architecture (ToFu/MoFu/BoFu)",
      "Retargeting sequences & dynamic product ads",
      "Conversions API (CAPI) setup for accurate tracking",
      "Weekly performance analysis & scaling decisions",
    ],
    typicalResult: "Average 68% reduction in cost per lead after CAPI implementation",
    resultMetric: "-68% Cost Per Lead",
  },
  {
    id: "analytics",
    icon: "📊",
    title: "GA4 & Analytics",
    shortDescription: "Unlock the full power of Google Analytics 4 to make decisions with confidence.",
    description:
      "I set up GA4 from scratch or migrate from UA, build custom event schemas, create Looker Studio dashboards, and implement attribution models that give you a truthful picture of your marketing performance.",
    includes: [
      "GA4 property setup & migration from Universal Analytics",
      "Custom event & conversion tracking implementation",
      "Data layer design & documentation",
      "Looker Studio dashboard creation",
      "Attribution modeling & channel analysis",
      "Audience building for remarketing",
    ],
    typicalResult: "Complete marketing visibility setup in 2-week sprint",
    resultMetric: "100% Data Accuracy",
  },
  {
    id: "gtm",
    icon: "🏷️",
    title: "Google Tag Manager",
    shortDescription: "Clean, reliable tracking infrastructure that powers all your analytics and ad platforms.",
    description:
      "I design and implement GTM container architectures that are scalable, documented, and accurate. No more firing tags blindly — I build tracking systems that you can trust and maintain.",
    includes: [
      "GTM container audit & cleanup",
      "Data layer design & implementation guide",
      "GA4 event tracking via GTM",
      "Google Ads & Meta Pixel implementation",
      "Custom JavaScript variables & triggers",
      "QA testing with Tag Assistant & dataLayer inspector",
    ],
    typicalResult: "62% average reduction in wasted ad spend after tracking audit",
    resultMetric: "-62% Wasted Spend",
  },
  {
    id: "capi",
    icon: "⚡",
    title: "Tracking & CAPI",
    shortDescription: "Server-side tracking and Conversions API setup for accurate data in a cookieless world.",
    description:
      "With iOS privacy changes and cookie deprecation, browser-side tracking is no longer enough. I implement server-side tagging via GTM and Meta/Google Conversions API to recover lost signal and improve campaign performance.",
    includes: [
      "Meta Conversions API (CAPI) full implementation",
      "Google Ads Enhanced Conversions setup",
      "Server-side GTM container deployment",
      "Event deduplication between browser & server",
      "First-party data strategy & hashing",
      "Signal quality score optimization",
    ],
    typicalResult: "Average 35% improvement in campaign signal quality post-CAPI",
    resultMetric: "+35% Signal Quality",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "fashion-ecommerce-google-ads",
    industry: "E-commerce",
    clientType: "Fashion Brand",
    title: "245% Revenue Growth for a French Fashion Label",
    challenge:
      "A premium French fashion e-commerce was running Google Ads with a 1.2x ROAS — effectively losing money. Their campaigns had no structure, poor match types, and zero conversion tracking.",
    solution:
      "I rebuilt the entire Google Ads account architecture: separate Shopping, Search, and Performance Max campaigns with proper audience signals. Implemented accurate conversion tracking via GTM and GA4. Introduced Smart Bidding with tROAS after 30 days of clean data.",
    result: "In 3 months, revenue from paid search grew by 245% while ad spend increased by only 40%. ROAS reached 4.8x.",
    resultMetric: "+245% Revenue in 3 months",
    tags: ["SEA", "GTM", "Analytics"],
    duration: "3 months",
    highlights: [
      "ROAS improved from 1.2x to 4.8x",
      "+245% revenue growth",
      "Ad spend efficiency up 175%",
      "Cart abandonment campaigns added 18% incremental revenue",
    ],
  },
  {
    slug: "saas-meta-capi",
    industry: "SaaS",
    clientType: "B2B Tech Startup",
    title: "68% Drop in Cost Per Lead with Meta CAPI",
    challenge:
      "A B2B SaaS company was struggling with Meta Ads after iOS 14 decimated their tracking. Reported conversions were down 60%, campaigns were optimizing on bad data, and CPL had tripled.",
    solution:
      "Full Meta Conversions API implementation with server-side event matching. Deduplication logic to prevent double-counting. Rebuilt audiences using first-party CRM data hashed server-side. Restructured campaigns around high-quality signals.",
    result:
      "Event Match Quality Score improved from 2.1 to 7.8. CPL dropped by 68% within 6 weeks of CAPI going live. Pipeline contribution from Meta increased 3x.",
    resultMetric: "-68% Cost Per Lead",
    tags: ["Meta", "CAPI", "Analytics"],
    duration: "6 weeks",
    highlights: [
      "Event Match Quality: 2.1 → 7.8",
      "Cost per lead reduced by 68%",
      "3x pipeline contribution from Meta",
      "Reporting accuracy restored to 94%",
    ],
  },
  {
    slug: "local-seo-ranking",
    industry: "Local Business",
    clientType: "Multi-location Clinic",
    title: "#1 Rankings for 40 Keywords — Local SEO Domination",
    challenge:
      "A multi-location aesthetic clinic had zero organic visibility. Their website was technically broken, had no local SEO setup, and was losing patients to competitors ranking for their exact services.",
    solution:
      "Complete technical SEO overhaul: fixed 200+ crawl errors, rebuilt site architecture, implemented LocalBusiness structured data for each location, optimized Google Business Profiles, and executed a content strategy targeting high-intent local keywords.",
    result:
      "Within 6 months, the clinic ranked #1 for 40 target keywords. Organic enquiries grew by 320%. Google Business Profile views up 580%.",
    resultMetric: "#1 for 40 keywords",
    tags: ["SEO"],
    duration: "6 months",
    highlights: [
      "#1 rankings for 40 target keywords",
      "+320% organic enquiries",
      "+580% Google Business Profile views",
      "Zero paid traffic dependency",
    ],
  },
  {
    slug: "beauty-ga4-data-layer",
    industry: "E-commerce",
    clientType: "Beauty Brand",
    title: "+180% ROAS After GA4 Data Layer Implementation",
    challenge:
      "A premium beauty brand was flying blind — they had GA4 but no meaningful events, no ecommerce tracking, and their ad platforms were bidding on inaccurate conversion data.",
    solution:
      "Designed and implemented a full GA4 ecommerce data layer covering the complete purchase funnel. Set up Enhanced Conversions for Google Ads and used the clean data to switch to tROAS bidding. Built a Looker Studio executive dashboard.",
    result:
      "With accurate bidding signals, ROAS improved by 180% in 60 days. Marketing team gained full attribution visibility for the first time.",
    resultMetric: "+180% ROAS in 60 days",
    tags: ["Analytics", "GTM", "SEA"],
    duration: "60 days",
    highlights: [
      "+180% ROAS improvement",
      "Full purchase funnel visibility",
      "Bidding accuracy improved 94%",
      "Executive Looker Studio dashboard",
    ],
  },
  {
    slug: "hospitality-gtm-audit",
    industry: "Hospitality",
    clientType: "Hotel Group",
    title: "62% Reduction in Wasted Ad Spend via GTM Audit",
    challenge:
      "A hotel group was spending €30k/month on Google Ads but had severe tracking issues: duplicate conversions, misfiring tags, and audiences built on junk data. Their campaigns were optimizing towards ghost conversions.",
    solution:
      "Full GTM container audit revealed 14 duplicate tags and 3 conflicting conversion actions. Rebuilt the container from scratch with proper QA documentation. Fixed attribution, cleaned up conversion actions, and rebuilt Smart Bidding audiences.",
    result:
      "Wasted ad spend dropped by 62% within the first month. With clean data, campaigns shifted budget to highest-performing channels automatically.",
    resultMetric: "-62% Wasted Ad Spend",
    tags: ["GTM", "SEA", "Analytics"],
    duration: "4 weeks",
    highlights: [
      "14 duplicate tags removed",
      "62% reduction in wasted spend",
      "Booking conversion rate +28%",
      "Full GTM documentation delivered",
    ],
  },
  {
    slug: "tech-startup-full-funnel",
    industry: "Technology",
    clientType: "Tech Startup",
    title: "3x Conversion Rate with Full-Funnel Tracking",
    challenge:
      "A Series A tech startup had traffic but a broken conversion path. Without proper tracking, they could not identify where users dropped off, and their marketing team was making decisions based on last-click attribution only.",
    solution:
      "Implemented GA4 with custom event taxonomy, server-side GTM for reliability, full-funnel attribution modeling, and integrated CRM data for offline conversion imports. Built a real-time dashboard for the growth team.",
    result:
      "With visibility into each funnel stage, the team identified and fixed 3 critical drop-off points. Conversion rate tripled in 90 days without increasing ad spend.",
    resultMetric: "3x Conversion Rate",
    tags: ["Analytics", "GTM", "CAPI"],
    duration: "90 days",
    highlights: [
      "Conversion rate tripled",
      "3 critical drop-offs identified & fixed",
      "Full multi-touch attribution model",
      "Real-time growth dashboard",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Laurent",
    role: "Marketing Director",
    company: "Maison Élégance",
    avatar: "SL",
    rating: 5,
    quote:
      "May transformed our entire digital marketing operation. Before working with her, we were running Google Ads with a 1.4x ROAS and had no idea where our sales were actually coming from. Six months later, our ROAS is 5.2x and we have full attribution visibility. She is the best investment we have made in our marketing stack.",
  },
  {
    id: "2",
    name: "Thomas Bernard",
    role: "CEO",
    company: "TechFlow Solutions",
    avatar: "TB",
    rating: 5,
    quote:
      "After iOS 14, our Meta campaigns fell apart. May implemented the full CAPI setup and rebuilt our audiences using first-party data. Our CPL dropped 68% in 6 weeks. What impressed me most was her ability to explain complex technical concepts to our non-technical board — she is both a strategist and a communicator.",
  },
  {
    id: "3",
    name: "Marie Chen",
    role: "Head of Growth",
    company: "Luxe Beauty Co.",
    avatar: "MC",
    rating: 5,
    quote:
      "May is the rare expert who understands both the technical implementation side AND the business strategy side. She built our entire GA4 measurement framework, set up GTM properly for the first time, and created dashboards that our entire marketing team actually uses daily. Our data quality went from chaos to clarity.",
  },
];

export const processSteps = [
  {
    number: "01",
    icon: "🔭",
    title: "Discovery & Audit",
    description:
      "I start by deeply understanding your business, your current marketing setup, and your goals. A thorough technical audit uncovers hidden issues and missed opportunities.",
  },
  {
    number: "02",
    icon: "🗺️",
    title: "Strategy & Setup",
    description:
      "Based on the audit findings, I build a tailored strategy and implement the technical foundations — tracking, analytics, campaign structures — before spending a single euro.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Launch & Optimize",
    description:
      "Campaigns go live with clean data flowing from day one. I monitor performance daily in the early weeks, iterating quickly based on real signals — not assumptions.",
  },
  {
    number: "04",
    icon: "📈",
    title: "Report & Scale",
    description:
      "You receive clear, executive-level reports showing exactly what is working and why. Once performance is proven, we scale what works and cut what does not.",
  },
];

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Work", href: "/#case-studies" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];
