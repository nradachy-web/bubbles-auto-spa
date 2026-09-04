import Link from "next/link";
import Loop from "@/components/ui/Loop";
import { MARINE_BAND } from "@/lib/constants";

/**
 * Full-width daylight band for the lake-town story. The hull quietly catches the light.
 * The band follows the black Work section, so it keeps white ground at the top (pt) and
 * the FoamEdge above it meets white, not the photo. The photo stays full-bleed left and below.
 */
export default function MarineBand() {
  return (
    <section className="on-white pt-14 lg:pt-20" aria-labelledby="marine-title">
      <div className="grid lg:grid-cols-2">
        <Loop
          src="/video/boat-side.mp4"
          poster={MARINE_BAND.photo}
          alt={MARINE_BAND.alt}
          width={MARINE_BAND.w}
          height={MARINE_BAND.h}
          className="aspect-[4/3] rounded-none! lg:aspect-auto lg:min-h-[560px]"
        />
        <div className="flex items-center px-5 py-14 lg:px-16 lg:py-24">
          <div className="max-w-[34rem]">
            <h2 id="marine-title" className="t-display t-h2">
              {MARINE_BAND.heading}
            </h2>
            <p className="t-body muted mt-6">{MARINE_BAND.body}</p>
            <Link href="/marine-rv-detailing" className="btn btn-outline mt-8">
              {MARINE_BAND.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
