import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteSection from "@/components/sections/QuoteSection";
import CTABanner from "@/components/sections/CTABanner";
import { SEO } from "@/lib/constants";
import { pageMeta } from "@/lib/seo";
import FoamEdge from "@/components/fx/FoamEdge";

export const metadata: Metadata = pageMeta({
  title: SEO.contact.title,
  description: SEO.contact.description,
  path: "/contact",
});

// Page copy that lives only here. Move to constants.ts (CONTACT_PAGE) if it is reused.
const CONTACT_PAGE = {
  heading: "Get a custom quote",
  lede: "Tell us about the vehicle and what you want done. We reply with a price and a time.",
} as const;

/** Contact. Black intro, then the quote form with the shop facts beside it. */
export default function ContactPage() {
  return (
    <>
      {/* intro. Nav is fixed and transparent at the top, so the first section clears it. */}
      <section className="on-black section pt-[calc(var(--nav-h)+40px)]!" aria-labelledby="contact-title">
        <div className="container">
          <SectionHeading as="h1" title={<span id="contact-title">{CONTACT_PAGE.heading}</span>} lede={CONTACT_PAGE.lede} />
        </div>
      </section>

      <FoamEdge />
      <QuoteSection />

      <CTABanner />
    </>
  );
}
