import Link from "next/link";
import Photo from "@/components/ui/Photo";
import { MARINE_BAND } from "@/lib/constants";

/** Full-width daylight band for the lake-town story. */
export default function MarineBand() {
  return (
    <section className="on-white" aria-labelledby="marine-title">
      <div className="grid lg:grid-cols-2">
        <Photo
          src={MARINE_BAND.photo}
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
