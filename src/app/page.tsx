import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import TwoWays from "@/components/sections/TwoWays";
import ServicesIndex from "@/components/sections/ServicesIndex";
import Work from "@/components/sections/Work";
import MarineBand from "@/components/sections/MarineBand";
import Process from "@/components/sections/Process";
import SpecSheet from "@/components/sections/SpecSheet";
import QuoteSection from "@/components/sections/QuoteSection";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

import { SEO, FAQ as FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.home.title,
  description: SEO.home.description,
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <TwoWays />
      <ServicesIndex />
      <Work />
      <MarineBand />
      <Process />
      <SpecSheet />
      <QuoteSection />
      <FAQ />
      <CTABanner />
    </>
  );
}
