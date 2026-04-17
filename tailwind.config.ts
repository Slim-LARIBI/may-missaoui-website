import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF2D78",
        secondary: "#FF8FAB",
        background: "#FFF0F3",
        dark: "#1A0A10",
        surface: "#FFE4EC",
        accent: "#C9184A",
        neutral: "#6D3A4A",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #FF2D78, #C9184A)",
        "gradient-soft": "linear-gradient(135deg, #FFF0F3, #FFE4EC)",
        "gradient-hero": "linear-gradient(135deg, #FFF0F3 0%, #FFE4EC 50%, #FFF0F3 100%)",
      },
      boxShadow: {
        "pink-sm": "0 4px 14px 0 rgba(255,45,120,0.25)",
        "pink-md": "0 8px 28px 0 rgba(255,45,120,0.30)",
        "pink-lg": "0 16px 48px 0 rgba(255,45,120,0.35)",
        "card": "0 2px 20px 0 rgba(26,10,16,0.08)",
        "card-hover": "0 8px 40px 0 rgba(26,10,16,0.14)",
      },
      keyframes: {
        blobFloat1: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        blobFloat2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-40px, 60px) scale(1.15)" },
          "66%": { transform: "translate(20px, -30px) scale(0.95)" },
        },
        blobFloat3: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(50px, 30px) scale(0.9)" },
          "66%": { transform: "translate(-30px, -50px) scale(1.1)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.6)" },
        },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "blob-1": "blobFloat1 8s ease-in-out infinite",
        "blob-2": "blobFloat2 10s ease-in-out infinite",
        "blob-3": "blobFloat3 12s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "bounce-arrow": "bounceArrow 1.5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
