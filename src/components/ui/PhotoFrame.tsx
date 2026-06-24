"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

/**
 * Wet-glass PhotoFrame. Makes ~70 real phone photos read as one graded set:
 * rounded frosted frame, faint cool grade, inner vignette, top sheen, optional
 * hover light-sheen, living-water caustics, periodic shine, and a cinematic
 * left-to-right clip-wipe reveal on scroll. tone="full" keeps before/after true.
 */
export default function PhotoFrame({
  src,
  alt,
  className,
  imgClassName,
  ratio = "aspect-[4/3]",
  tone = "tint",
  vignette = true,
  priority = false,
  fill = false,
  sheen = true,
  caustics = false,
  autoSheen = false,
  reveal = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  tone?: "tint" | "full";
  vignette?: boolean;
  priority?: boolean;
  fill?: boolean;
  sheen?: boolean;
  caustics?: boolean;
  autoSheen?: boolean;
  reveal?: boolean;
}) {
  const reduce = useReducedMotion();
  const animate = reveal && !reduce;

  return (
    <motion.div
      className={cn(
        "group/frame relative overflow-hidden rounded-2xl bg-mist/40",
        "ring-1 ring-[var(--glass-light-border)]",
        "shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_24px_48px_-32px_rgba(10,27,46,0.5)]",
        className
      )}
      initial={animate ? { clipPath: "inset(0 100% 0 0)" } : false}
      whileInView={animate ? { clipPath: "inset(0 0% 0 0)" } : undefined}
      viewport={animate ? { once: true, margin: "-10% 0px" } : undefined}
      transition={animate ? { duration: 0.95, ease: [0.22, 1, 0.36, 1] } : undefined}
    >
      <div className={cn("relative w-full", fill ? "h-full" : ratio)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(src)}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover", imgClassName)}
          style={tone === "tint" ? { filter: "saturate(1.05) contrast(1.02)" } : undefined}
        />

        {tone === "tint" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(95,168,230,0.05) 0%, rgba(14,44,74,0.06) 100%)",
              mixBlendMode: "multiply",
            }}
          />
        )}

        {vignette && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(125% 85% at 50% 0%, transparent 52%, rgba(10,27,46,0.22) 100%)" }}
          />
        )}

        {/* living-water light caustics */}
        {caustics && <span aria-hidden className="caustics pointer-events-none absolute inset-0" />}

        {/* periodic wax-shine sweep */}
        {autoSheen && <span aria-hidden className="sheen-auto" />}

        {/* moving hover light-sheen */}
        {sheen && <span aria-hidden className="sheen" />}

        {/* top edge sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent)" }}
        />
      </div>
    </motion.div>
  );
}
