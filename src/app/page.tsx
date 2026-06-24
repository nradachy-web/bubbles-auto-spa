import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import Certifications from "@/components/sections/Certifications";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessTrack from "@/components/sections/ProcessTrack";
import GalleryShowcase from "@/components/sections/GalleryShowcase";
import MobileVsShop from "@/components/sections/MobileVsShop";
import QuoteSection from "@/components/sections/QuoteSection";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import FoamWipe from "@/components/fx/FoamWipe";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero />
      <Certifications />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessTrack />
      <FoamWipe className="container-wide" />
      <GalleryShowcase limit={6} withCta />
      <FoamWipe className="container-wide" />
      <MobileVsShop />
      <QuoteSection />
      <FAQ />
      <CTABanner />
    </>
  );
}
