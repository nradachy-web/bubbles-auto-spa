"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Foam wipe: a soft suds band that washes left to right across a section
 * boundary as it scrolls into view. A richer cousin of the Foam Line, used at
 * the major light-section transitions to carry the water motif through the page.
 */
const FOAM = [
  { l: "7%", s: 6, t: "44%" },
  { l: "13%", s: 11, t: "22%" },
  { l: "18%", s: 5, t: "54%" },
  { l: "29%", s: 8, t: "30%" },
  { l: "36%", s: 5, t: "50%" },
  { l: "51%", s: 12, t: "20%" },
  { l: "57%", s: 6, t: "46%" },
  { l: "69%", s: 7, t: "34%" },
  { l: "80%", s: 13, t: "18%" },
  { l: "87%", s: 6, t: "48%" },
  { l: "94%", s: 5, t: "40%" },
];

export default function FoamWipe({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const wipe = {
    initial: reduce ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 100% 0 0)" },
    whileInView: { clipPath: "inset(0 0% 0 0)" },
    viewport: { once: true, margin: "-6% 0px" },
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className={cn("relative h-14 w-full overflow-hidden", className)} aria-hidden>
      {/* foam wash gradient that wipes in */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(207,227,242,0) 0%, rgba(214,236,255,0.6) 58%, rgba(255,255,255,0) 100%)",
        }}
        {...wipe}
      />

      {/* meniscus line */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 56" preserveAspectRatio="none" fill="none">
        <motion.path
          d="M0 38 C 150 28, 300 44, 520 36 S 920 28, 1200 38"
          stroke="var(--color-chrome)"
          strokeWidth={1.25}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ opacity: 0.5 }}
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-6% 0px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      {/* foam bubbles pop in along the crest */}
      {FOAM.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ left: b.l, top: b.t, width: b.s, height: b.s }}
          initial={reduce ? { opacity: 0.85, scale: 1 } : { opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 0.85, scale: 1 }}
          viewport={{ once: true, margin: "-6% 0px" }}
          transition={{ duration: 0.5, delay: reduce ? 0 : parseInt(b.l) * 0.006, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="bob absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, rgba(214,236,255,0.95), rgba(95,168,230,0.5) 45%, rgba(95,168,230,0) 75%)",
              boxShadow: "0 0 0 1px rgba(95,168,230,0.16)",
              animationDelay: `${i * 0.4}s`,
            }}
          />
        </motion.span>
      ))}
    </div>
  );
}
