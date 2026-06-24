"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The Foam Line — the signature motif. A single thin water-meniscus curve with
 * a few soap bubbles resting on it like foam on a waterline. Used once per major
 * section boundary and along the hero bottom. Bubbles are HTML spans so they stay
 * perfectly round regardless of the stretched SVG. Settles in on scroll-into-view.
 */

interface Bubble {
  left: string; // percentage across the width
  size: number; // px
  top: string; // vertical position within the band
}

const BUBBLES: Bubble[] = [
  { left: "14%", size: 7, top: "34%" },
  { left: "27%", size: 11, top: "20%" },
  { left: "32%", size: 6, top: "44%" },
  { left: "61%", size: 9, top: "26%" },
  { left: "74%", size: 6, top: "42%" },
  { left: "86%", size: 12, top: "18%" },
];

export default function FoamLine({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "relative h-9 w-full overflow-visible",
        flip && "-scale-y-100",
        className
      )}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M0 26 C 150 16, 300 32, 520 24 S 920 16, 1200 26"
          stroke="var(--color-chrome)"
          strokeWidth={1.25}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ opacity: 0.55 }}
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      {BUBBLES.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ left: b.left, top: b.top, width: b.size, height: b.size }}
          initial={reduce ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="bob absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, rgba(214,236,255,0.95), rgba(95,168,230,0.55) 45%, rgba(95,168,230,0) 75%)",
              boxShadow: "0 0 0 1px rgba(95,168,230,0.18)",
              animationDelay: `${i * 0.45}s`,
            }}
          />
        </motion.span>
      ))}
    </div>
  );
}
