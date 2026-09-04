import type { Metadata } from "next";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import SpecSheet from "@/components/sections/SpecSheet";
import CTABanner from "@/components/sections/CTABanner";
import { ABOUT, SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.about.title,
  description: SEO.about.description,
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: "/about", title: SEO.about.title, description: SEO.about.description },
  twitter: { title: SEO.about.title, description: SEO.about.description },
};

/**
 * About. Black intro, the story on white in the editorial split, a full-width
 * studio photo, the spec sheet, then the four things we do as hairline rows.
 */
export default function AboutPage() {
  return (
    <>
      {/* intro. Nav is fixed and transparent at the top, so the first section clears it. */}
      <section className="on-black section pt-[calc(var(--nav-h)+40px)]!" aria-labelledby="about-title">
        <div className="container">
          <SectionHeading as="h1" title={<span id="about-title">{ABOUT.heading}</span>} lede={ABOUT.subheading} />
        </div>
      </section>

      {/* story */}
      <section className="on-white section" aria-labelledby="story-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading title={<span id="story-title">Our story</span>} />
          </div>
          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            {ABOUT.body.map((paragraph) => (
              <p key={paragraph} className="t-body muted measure">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* the studio, full width. Portrait source, so the desktop band is aimed at the roofline and hood. */}
      <div className="on-black">
        <Photo
          src="/photos/shop-gt3.webp"
          width={1125}
          height={2000}
          className="aspect-[4/3] lg:aspect-[21/9] rounded-none!"
          imgClassName="lg:object-[50%_42%]"
          alt="Porsche 911 GT3 under the hexagonal lights in the Bubbles Auto Spa studio in St. Clair Shores"
        />
      </div>

      <SpecSheet heading="The facts" />

      {/* what we do */}
      <section className="on-white section" aria-labelledby="pillars-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading title={<span id="pillars-title">What we do</span>} />
          </div>
          <ul className="ledger lg:col-span-7 lg:col-start-6">
            {ABOUT.pillars.map((pillar) => (
              <li key={pillar.title} className="py-6 lg:py-7">
                <h3 className="t-h3">{pillar.title}</h3>
                <p className="t-body muted mt-2 measure">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
