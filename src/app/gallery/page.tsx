import type { Metadata } from "next";
import Photo from "@/components/ui/Photo";
import Loop from "@/components/ui/Loop";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfter from "@/components/sections/BeforeAfter";
import CTABanner from "@/components/sections/CTABanner";
import { GALLERY, WORK, BEFORE_AFTER, SEO, GALLERY_CLIPS } from "@/lib/constants";
import { pageMeta } from "@/lib/seo";
import FoamEdge from "@/components/fx/FoamEdge";

export const metadata: Metadata = pageMeta({
  title: SEO.gallery.title,
  description: SEO.gallery.description,
  path: "/gallery",
});

/**
 * The full gallery. Black studio for the intro and the real before/after pairs,
 * then every recent-work photo on white. Frames follow each photo's orientation.
 */
export default function GalleryPage() {
  return (
    <>
      {/* intro. Nav is fixed and transparent at the top, so the first section clears it. */}
      <section className="on-black section pt-[calc(var(--nav-h)+40px)]!" aria-labelledby="gallery-title">
        <div className="container">
          <SectionHeading as="h1" title={<span id="gallery-title">{GALLERY.heading}</span>} lede={GALLERY.intro} />
        </div>
      </section>

      {/* before and after pairs. Same colour as the intro, no border, top padding removed so the rhythm holds. */}
      <section className="on-black section pt-0!" aria-labelledby="pairs-title">
        <div className="container">
          <h2 id="pairs-title" className="t-h3">
            Before and after
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {BEFORE_AFTER.map((pair) => (
              <li key={pair.id} className={pair.aspect === "landscape" ? "col-span-2" : undefined}>
                <BeforeAfter pair={pair} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FoamEdge />

      {/* recent work */}
      <section className="on-white section" aria-labelledby="recent-title">
        <div className="container">
          <h2 id="recent-title" className="t-display t-h2">
            Recent work
          </h2>
          {/* CSS columns keep every photo at its natural aspect with no ragged rows */}
          <ul className="mt-12 columns-2 gap-3 lg:mt-16 lg:columns-3 lg:gap-4">
            {GALLERY_CLIPS.map((c) => (
              <li key={c.video} className="mb-3 break-inside-avoid lg:mb-4">
                <Loop src={c.video} poster={c.poster} alt={c.alt} width={c.w} height={c.h} />
                <p className="t-caption muted mt-2">{c.caption}</p>
              </li>
            ))}
            {WORK.map((p) => (
              <li key={p.src} className="mb-3 break-inside-avoid lg:mb-4">
                <Photo src={p.src} alt={p.alt} width={p.w} height={p.h} />
                <p className="t-caption muted mt-2">{p.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner heading="See your vehicle finished like this." />
    </>
  );
}
