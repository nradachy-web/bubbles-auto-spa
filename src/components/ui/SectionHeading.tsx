"use client";

import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  overline?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  sub,
  align = "center",
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {overline && (
        <Reveal>
          <p className={cn("overline mb-4", onDark ? "text-sky" : "overline-blue")}>{overline}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display font-normal leading-[1.08] tracking-[-0.015em] text-balance",
            "text-[clamp(1.85rem,3.6vw,2.9rem)]",
            onDark ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-[1.0625rem] leading-relaxed",
              onDark ? "text-[#b7c8da]" : "text-slate"
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
