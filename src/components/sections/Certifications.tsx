"use client";

import { CERTIFICATIONS, STATS } from "@/lib/constants";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";

/**
 * Trust strip under the hero: gold certification chips (the only warm note on the
 * page) and a quiet row of verifiable facts. No reviews, stars, or invented numbers.
 */
export default function Certifications() {
  return (
    <section className="relative bg-foam" aria-label="Certifications and facts">
      <div className="container-site py-12 sm:py-14">
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          {CERTIFICATIONS.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-2 rounded-pill border border-[var(--glass-light-border)] bg-paper px-4 py-2"
              style={{ boxShadow: "inset 2px 0 0 var(--color-gold)" }}
            >
              <span className="font-display text-[1.05rem] leading-none text-ink">{c.name}</span>
              <span className="text-[0.7rem] uppercase tracking-[0.14em] text-gold">Certified</span>
            </span>
          ))}
        </Reveal>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="hairline-grad" />
          <RevealGroup className="grid grid-cols-2 gap-y-8 pt-10 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                className={
                  "flex flex-col items-center px-3 text-center" +
                  (i !== 0 ? " md:border-l md:border-[var(--hairline-col)]" : "")
                }
              >
                <span className="font-display text-[1.5rem] leading-tight text-ink sm:text-[1.7rem]">
                  {s.value}
                </span>
                <span className="mt-2 max-w-[18ch] text-[0.8rem] leading-snug text-chrome">
                  {s.label}
                </span>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
