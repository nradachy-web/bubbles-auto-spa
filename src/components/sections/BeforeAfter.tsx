"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import type { BeforeAfterPair } from "@/lib/constants";

/** One real pair. Two-segment control, crossfade. Default state is After. */
export default function BeforeAfter({ pair, className }: { pair: BeforeAfterPair; className?: string }) {
  const [showAfter, setShowAfter] = useState(true);
  const id = `ba-${pair.id}`;

  return (
    <figure className={cn("flex flex-col", className)}>
      <div className="photo relative aspect-[3/4]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(pair.before)}
          alt={`${pair.alt}, before`}
          width={pair.w}
          height={pair.h}
          loading="lazy"
          className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-300", showAfter && "opacity-0")}
          aria-hidden={showAfter}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(pair.after)}
          alt={`${pair.alt}, after`}
          width={pair.w}
          height={pair.h}
          loading="lazy"
          className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-300", !showAfter && "opacity-0")}
          aria-hidden={!showAfter}
        />
      </div>
      <figcaption className="mt-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <span className="t-small">{pair.title}</span>
        <div className="seg" role="group" aria-label={`${pair.title}: before or after`}>
          <button type="button" aria-pressed={!showAfter} onClick={() => setShowAfter(false)} aria-controls={id}>
            Before
          </button>
          <button type="button" aria-pressed={showAfter} onClick={() => setShowAfter(true)} aria-controls={id}>
            After
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
