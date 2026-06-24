import type { Metadata } from "next";
import QuoteSection from "@/components/sections/QuoteSection";
import Reveal from "@/components/ui/Reveal";
import FoamLine from "@/components/fx/FoamLine";
import { BRAND, SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.contact.title,
  description: SEO.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: { title: SEO.contact.title, description: SEO.contact.description, url: "/contact" },
  twitter: { title: SEO.contact.title, description: SEO.contact.description },
};

export default function ContactPage() {
  return (
    <main className="bg-foam">
      {/* light header so the nav reads cleanly at the top */}
      <section className="relative grain pt-32 pb-10">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(110% 60% at 80% 0%, rgba(207,227,242,0.6) 0%, rgba(244,248,251,0) 60%)" }}
        />
        <div className="container-site relative z-10 max-w-3xl">
          <Reveal>
            <span className="overline overline-blue">Book your detail</span>
            <h1 className="mt-4 font-display font-light leading-[1.05] tracking-[-0.02em] text-ink text-[clamp(2.2rem,4.6vw,3.4rem)]">
              Get a free, custom quote
            </h1>
            <p className="mt-5 text-[1.075rem] leading-relaxed text-slate">
              Tell us about your vehicle and what it needs. We will follow up from {BRAND.phoneDisplay} to
              confirm pricing and a time, at our St. Clair Shores shop or mobile to your door.
            </p>
          </Reveal>
        </div>
        <div className="container-site relative z-10 mt-8"><FoamLine /></div>
      </section>

      <QuoteSection />
    </main>
  );
}
