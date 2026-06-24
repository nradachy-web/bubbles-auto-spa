"use client";

import { Building2, Home, MapPin, Phone, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";

/** Shop or at your door, told as a two-panel split. Blue is the only accent. */
export default function MobileVsShop() {
  return (
    <section className="section relative bg-foam">
      <div className="container-wide">
        <div className="grid overflow-hidden rounded-[28px] ring-1 ring-[var(--glass-light-border)] shadow-[0_30px_70px_-44px_rgba(10,27,46,0.6)] lg:grid-cols-2">
          {/* At our shop (light) */}
          <Reveal className="bg-paper p-8 sm:p-10 lg:p-12">
            <span className="inline-flex items-center gap-2 text-blue">
              <Building2 className="h-5 w-5" aria-hidden />
              <span className="overline overline-blue">At our shop</span>
            </span>
            <h3 className="mt-4 font-display text-[1.7rem] leading-tight text-ink sm:text-[2rem]">
              Drop it off in St. Clair Shores
            </h3>
            <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-slate">
              Bring your vehicle to the shop on Little Mack and pick it up detailed, corrected, and
              protected. Best for paint correction and ceramic coating, where we control lighting and
              conditions.
            </p>
            <a
              href={BRAND.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-5 inline-flex items-start gap-2 text-sm text-ink"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden />
              {BRAND.address.full}
            </a>
            <div className="mt-7">
              <PhotoFrame
                src="/images/shop-car.jpg"
                alt="A finished, glossy sedan after a full detail at Bubbles Auto Spa"
                ratio="aspect-[16/10]"
              />
            </div>
          </Reveal>

          {/* At your door (deep water) */}
          <Reveal delay={0.08} className="relative overflow-hidden bg-ink p-8 sm:p-10 lg:p-12">
            <span
              aria-hidden
              className="orb"
              style={{ width: 320, height: 320, top: -100, right: -80 }}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 text-sky">
                <Home className="h-5 w-5" aria-hidden />
                <span className="overline text-sky">At your door</span>
              </span>
              <h3 className="mt-4 font-display text-[1.7rem] leading-tight text-white sm:text-[2rem]">
                Or we come to you
              </h3>
              <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-[#b7c8da]">
                Stay home and let us pull up with the gear, water, and certified products. Mobile
                detailing across {BRAND.county}, from your driveway to the marina or storage lot.
              </p>
              <a
                href={`tel:${BRAND.phoneTel}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4 text-sky" aria-hidden />
                {BRAND.phoneDisplay}
                <ArrowRight className="h-4 w-4 text-sky" aria-hidden />
              </a>
              <div className="mt-7">
                <PhotoFrame
                  src="/images/mobile-rig.jpg"
                  alt="The Bubbles Auto Spa mobile detailing rig that comes to your location"
                  ratio="aspect-[16/10]"
                  tone="full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
