"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";

/** Mobile-only sticky conversion dock: Call + Quote always thumb-reachable. */
export default function StickyCallBar() {
  return (
    <div
      className="glass-strong fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-[var(--glass-light-border)] px-3 pt-2 lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={`tel:${BRAND.phoneTel}`}
        className="flex items-center justify-center gap-2 rounded-pill border border-[var(--glass-light-border)] py-3 text-sm font-semibold text-ink"
      >
        <Phone className="h-4 w-4 text-blue" /> Call Us
      </a>
      <Link
        href="/contact"
        className="liquid flex items-center justify-center rounded-pill bg-blue py-3 text-sm font-semibold text-white"
      >
        <span className="relative z-[1]">Get a Quote</span>
      </Link>
    </div>
  );
}
