"use client";

import { Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import FoamLine from "@/components/fx/FoamLine";
import BeadField from "@/components/fx/BeadField";
import { BRAND, FINAL_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  heading?: string;
  sub?: string;
  className?: string;
}

export default function CTABanner({ heading, sub, className }: CTABannerProps) {
  const finalHeading = heading ?? FINAL_CTA.heading;
  const finalSub = sub ?? FINAL_CTA.sub;

  return (
    <section className={cn("section relative bg-foam", className)}>
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-ink px-7 py-16 text-center grain sm:px-12 sm:py-20 lg:py-24">
            <BeadField />
            <div className="relative z-10">
              <p className="overline text-sky">{BRAND.taglineShort}</p>
              <h2 className="mx-auto mt-5 max-w-3xl font-display font-light leading-[1.05] tracking-[-0.015em] text-white text-[clamp(2rem,5vw,3.4rem)] text-balance">
                {finalHeading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[#b7c8da]">
                {finalSub}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  Get a Custom Quote
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button
                  href={`tel:${BRAND.phoneTel}`}
                  variant="outline"
                  size="lg"
                  external
                  onDark
                  ariaLabel={`Call ${BRAND.legalName} at ${BRAND.phoneDisplay}`}
                  className="w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {BRAND.phoneDisplay}
                </Button>
              </div>

              <p className="mt-8 text-sm text-[#8ea3b8]">
                {BRAND.address.full}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-site mt-2">
        <FoamLine />
      </div>
    </section>
  );
}
