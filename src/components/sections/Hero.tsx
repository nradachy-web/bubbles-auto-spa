"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, ArrowDown } from "lucide-react";
import { BRAND, HERO, CTA, CERTIFICATIONS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import PhotoFrame from "@/components/ui/PhotoFrame";
import FoamLine from "@/components/fx/FoamLine";
import BeadCanvas from "@/components/fx/BeadCanvas";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -72]);

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  });

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-foam grain">
      {/* soft aqua-to-foam wash */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 70% at 78% 8%, rgba(207,227,242,0.7) 0%, rgba(244,248,251,0) 60%), linear-gradient(180deg, rgba(207,227,242,0.35) 0%, rgba(244,248,251,0) 38%)",
        }}
      />
      {/* faint drifting light bloom */}
      <div
        aria-hidden
        className="orb drift"
        style={{ width: 540, height: 540, top: -170, right: -120, opacity: 0.55 }}
      />

      <div className="container-wide relative z-10 pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------------- Type ---------------- */}
          <div className="lg:col-span-5">
            <motion.p {...rise(0.05)} className="overline mb-5">
              {HERO.eyebrow}
            </motion.p>

            <h1 className="font-display font-light leading-[1.02] tracking-[-0.02em] text-ink text-[clamp(2.6rem,6vw,4.6rem)]">
              <motion.span {...rise(0.12)} className="block">
                {HERO.headline.lead}
                <span className="display-italic shimmer-text">{HERO.headline.italic}</span>
                {HERO.headline.rest}
              </motion.span>
            </h1>

            <motion.p {...rise(0.24)} className="mt-7 max-w-xl text-[1.075rem] leading-relaxed text-slate">
              {HERO.sub}
            </motion.p>

            <motion.div {...rise(0.34)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" size="lg">
                {CTA.hero}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Link
                href="/gallery"
                className="focus-ring link-underline inline-flex items-center gap-2 self-start px-1 py-2 font-medium text-ink sm:self-auto"
              >
                {CTA.heroSecondary}
                <ArrowRight className="h-4 w-4 text-blue" aria-hidden />
              </Link>
            </motion.div>

            <motion.div {...rise(0.46)} className="mt-9 flex flex-wrap items-center gap-2.5">
              {CERTIFICATIONS.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-1.5 rounded-pill border border-[var(--glass-light-border)] bg-paper/70 px-3 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                  <span className="text-xs font-semibold tracking-wide text-ink">{c.name} Certified</span>
                </span>
              ))}
              <span className="text-xs text-chrome">Cars, trucks, RVs and boats</span>
            </motion.div>
          </div>

          {/* ---------------- Photo + bead cursor ---------------- */}
          <motion.div style={{ y: reduce ? 0 : photoY }} className="lg:col-span-7">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
            >
              <div className="relative">
                <PhotoFrame
                  src="/images/hero.jpg"
                  alt="A Porsche 911 GT3 covered in foam during a hand wash at the Bubbles Auto Spa studio in St. Clair Shores, MI"
                  ratio="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4]"
                  tone="full"
                  priority
                  sheen={false}
                  caustics
                  autoSheen
                  className="shadow-[0_40px_90px_-50px_rgba(10,27,46,0.7)]"
                />
                <BeadCanvas className="pointer-events-none absolute inset-0 h-full w-full rounded-2xl" />

                {/* drifting bubbles around the frame */}
                <span aria-hidden className="bead float-bubble absolute -left-3 top-10 h-4 w-4" style={{ animationDelay: "-1s" }} />
                <span aria-hidden className="bead float-bubble absolute -right-2 top-1/3 h-6 w-6" style={{ animationDelay: "-4s" }} />
                <span aria-hidden className="bead float-bubble absolute right-10 -top-3 h-3 w-3" style={{ animationDelay: "-6.5s" }} />

                {/* floating shop-or-mobile tag */}
                <div className="floatY absolute -bottom-5 left-5 sm:left-7">
                  <div className="glass-strong flex items-center gap-3 rounded-pill px-4 py-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-blue/10 text-blue">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="leading-tight">
                      <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-chrome">
                        Shop or mobile
                      </span>
                      <a href={`tel:${BRAND.phoneTel}`} className="text-sm font-semibold text-ink tnum">
                        {BRAND.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="pointer-events-none relative z-10 mx-auto hidden w-fit pb-2 lg:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce text-chrome" aria-hidden />
      </motion.div>

      {/* the water level settles along the bottom */}
      <div className="relative z-10">
        <FoamLine className="mx-auto max-w-6xl" />
      </div>
    </section>
  );
}
