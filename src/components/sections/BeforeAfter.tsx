"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

interface Props {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

/**
 * Before / After meniscus slider. The divider itself is the water motif: a thin
 * blue line with a glass grip and a couple of beading bubbles riding it.
 * Pointer drag and keyboard arrows, full color (real transformation, never graded).
 */
export default function BeforeAfter({
  before,
  after,
  beforeAlt = "Before detailing",
  afterAlt = "After detailing",
  className,
}: Props) {
  const [pos, setPos] = useState(52);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
  };

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl ring-1 ring-[var(--glass-light-border)]",
        "shadow-[0_24px_60px_-36px_rgba(10,27,46,0.6)]",
        className
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* AFTER underneath (revealed on the right) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(after)}
        alt={afterAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* BEFORE clipped to the left of the divider */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(before)}
        alt={beforeAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* labels */}
      <span
        className="pointer-events-none absolute left-3 top-3 rounded-pill bg-ink/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-opacity"
        style={{ opacity: pos > 14 ? 1 : 0 }}
      >
        Before
      </span>
      <span
        className="pointer-events-none absolute right-3 top-3 rounded-pill bg-blue/85 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-opacity"
        style={{ opacity: pos < 86 ? 1 : 0 }}
      >
        After
      </span>

      {/* divider + handle */}
      <div
        className="absolute inset-y-0 z-10 w-px bg-white/80"
        style={{ left: `${pos}%`, boxShadow: "0 0 12px rgba(95,168,230,0.7)" }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKey}
          className="focus-ring absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border border-white/70 bg-white/85 backdrop-blur-md"
          style={{ boxShadow: "0 6px 20px -6px rgba(10,27,46,0.6)" }}
        >
          <span className="flex items-center gap-0.5 text-blue">
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden>
              <path d="M5.5 1 1 6l4.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden>
              <path d="M1.5 1 6 6l-4.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="bead absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2" />
          <span className="bead absolute -bottom-1 left-1/3 h-1.5 w-1.5" />
        </button>
      </div>
    </div>
  );
}
