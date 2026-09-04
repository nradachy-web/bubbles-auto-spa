import Link from "next/link";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfter from "@/components/sections/BeforeAfter";
import { WORK, BEFORE_AFTER, WORK_SECTION } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Mosaic of real photos on black, plus the real before/after pairs.
 * Layout is a fixed pattern so the rhythm is deliberate, not a masonry dump.
 *
 * Below lg: two columns. Tile 0 and tile 7 span both, tiles 1 to 6 pair up, so
 * the grid always closes. Aspect ratios live on the photo frame.
 * From lg: twelve columns with fixed 340px rows. Frames drop their aspect and
 * stretch to fill the cell (the GT3 spans two rows), so no cell has a hole.
 * Captions wrap below lg (phone tiles are narrow) and truncate from lg, where a
 * second caption line would steal height from the fixed-row photo.
 */
const CELL = [
  "col-span-2 lg:col-span-4 lg:row-span-2", // GT3 studio, portrait
  "lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "col-span-2 lg:col-span-4",
];
const FRAME = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[16/9]",
];

export default function Work({ limit = 8, withPairs = true, withCta = true }: { limit?: number; withPairs?: boolean; withCta?: boolean }) {
  const photos = WORK.slice(0, limit);
  const pairs = withPairs ? BEFORE_AFTER.slice(0, 4) : [];

  return (
    <section className="on-black section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading title={<span id="work-title">{WORK_SECTION.heading}</span>} lede={WORK_SECTION.lede} />

        <ul className="mt-12 grid grid-cols-2 gap-3 lg:mt-16 lg:auto-rows-[340px] lg:grid-cols-12 lg:gap-4">
          {photos.map((p, i) => (
            <li key={p.src} className={cn("flex min-h-0 flex-col", CELL[i % CELL.length])}>
              <Photo
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                className={cn("w-full", FRAME[i % FRAME.length], "lg:min-h-0 lg:flex-1 lg:aspect-auto")}
                imgClassName="h-full w-full"
              />
              <p className="t-caption muted mt-2 shrink-0 lg:truncate">{p.caption}</p>
            </li>
          ))}
        </ul>

        {pairs.length > 0 && (
          <div className="mt-16 lg:mt-24">
            <h3 className="t-h3">Before and after</h3>
            <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              {pairs.map((pair) => (
                <li key={pair.id}>
                  <BeforeAfter pair={pair} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {withCta && (
          <div className="mt-12">
            <Link href="/gallery" className="btn btn-outline">
              {WORK_SECTION.cta}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
