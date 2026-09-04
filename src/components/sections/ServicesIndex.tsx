"use client";

import { useState } from "react";
import Link from "next/link";
import Photo from "@/components/ui/Photo";
import { asset } from "@/lib/asset";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES, SERVICES_INDEX, WORK } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Alt text and dimensions come from the photo library entry, so nothing is invented here. */
function photoMeta(src: string, fallbackAlt: string) {
  const p = WORK.find((w) => w.src === src);
  return { w: p?.w ?? 1600, h: p?.h ?? 1200, alt: p?.alt ?? fallbackAlt };
}

/**
 * The services index. Rows on the left, one sticky photo on the right that swaps
 * with the row you hover or focus. Below lg each row carries its own photo,
 * above the text on phones and beside it from sm.
 */
export default function ServicesIndex() {
  const [active, setActive] = useState(0);

  return (
    <section className="on-white section border-t hairline" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading title={<span id="services-title">{SERVICES_INDEX.heading}</span>} lede={SERVICES_INDEX.lede} />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <ol className="ledger lg:col-span-7">
            {SERVICES.map((s, i) => {
              const meta = photoMeta(s.image, s.name);
              const isActive = i === active;
              return (
                <li key={s.id} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} className="py-7 lg:py-8">
                  <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start lg:grid-cols-1">
                    {/* per-row photo below lg: first on phones, left column from sm */}
                    <Photo
                      src={s.image}
                      alt={meta.alt}
                      width={meta.w}
                      height={meta.h}
                      className="aspect-[16/10] w-full sm:w-52 lg:hidden"
                    />
                    <div>
                      <h3 className="t-h3 flex items-baseline gap-4">
                        <span aria-hidden="true" className={cn("t-num text-[0.9rem] transition-colors", isActive ? "text-blue" : "text-steel")}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Link href={s.href} className={cn("transition-colors", isActive ? "text-ink" : "text-ink lg:text-steel")}>
                          {s.name}
                        </Link>
                      </h3>
                      <p className="t-body muted mt-3 max-w-[34rem] pl-[2.4rem]">{s.oneLine}</p>
                      <Link href={s.href} className="btn btn-text mt-3 ml-[2.4rem]">
                        See {s.name.charAt(0).toLowerCase() + s.name.slice(1)}
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* sticky photo column. 4:3 to match the library (four of five are landscape). */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-[calc(var(--nav-h)+24px)]">
              <div className="photo relative aspect-[4/3]">
                {SERVICES.map((s, i) => {
                  const meta = photoMeta(s.image, s.name);
                  return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={s.id}
                      src={asset(s.image)}
                      alt={i === active ? meta.alt : ""}
                      width={meta.w}
                      height={meta.h}
                      loading={i === 0 ? "eager" : "lazy"}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
                        i === active ? "opacity-100" : "opacity-0"
                      )}
                      aria-hidden={i !== active}
                    />
                  );
                })}
              </div>
              <p className="t-caption muted mt-3">{SERVICES[active].name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
