import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maymissaoui.com"),
  title: "May Missaoui — Data-Driven Marketing Expert",
  description:
    "I help brands grow with precision. SEO, Google Ads, Meta Ads, GA4, Google Tag Manager, and Conversions API specialist. Measurable results, data-driven strategy.",
  keywords: [
    "digital marketing expert",
    "SEO specialist",
    "Google Ads",
    "Meta Ads",
    "GA4",
    "Google Tag Manager",
    "performance marketing",
    "CAPI",
    "data-driven marketing",
    "May Missaoui",
  ],
  authors: [{ name: "May Missaoui" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maymissaoui.com",
    siteName: "May Missaoui",
    title: "May Missaoui — Data-Driven Marketing Expert",
    description:
      "SEO · SEA · Meta Ads · GA4 · GTM · CAPI. I help brands grow with precision and measurable results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "May Missaoui — Data-Driven Marketing Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "May Missaoui — Data-Driven Marketing Expert",
    description: "SEO · SEA · Meta Ads · GA4 · GTM · CAPI. Measurable results, data-driven strategy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSerif.variable}`}>
      <body className="font-jakarta antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
