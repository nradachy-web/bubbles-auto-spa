"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { BRAND, NAV_LINKS, CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

function BubbleMark() {
  return (
    <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center" aria-hidden>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="18" r="9" fill="var(--color-blue)" />
        <circle cx="22" cy="13" r="6" fill="var(--color-sky)" />
        <circle cx="9" cy="9" r="3.4" fill="var(--color-sky)" opacity="0.85" />
        <circle cx="9.5" cy="15" r="2.4" fill="#fff" opacity="0.65" />
        <circle cx="21" cy="11.5" r="1.6" fill="#fff" opacity="0.8" />
      </svg>
    </span>
  );
}

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} aria-label={`${BRAND.name} home`} className="group flex items-center gap-2.5">
      <BubbleMark />
      <span className="font-display text-[1.15rem] leading-none tracking-[-0.01em] text-ink">
        Bubbles <span className="text-chrome">Auto Spa</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass-strong border-b border-[var(--hairline-col)]" : "bg-transparent"
        )}
      >
        <div className="container-wide flex h-[68px] items-center justify-between">
          <Wordmark />

          <div className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[0.9rem] font-medium transition-colors duration-200",
                    active ? "text-blue" : "text-slate hover:text-ink"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-blue transition-all duration-300",
                      active ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="hidden items-center gap-2 rounded-pill border border-[var(--glass-light-border)] px-4 py-2 text-sm font-medium text-ink transition-all hover:border-blue hover:text-blue md:inline-flex"
            >
              <Phone className="h-4 w-4 text-blue" />
              <span className="tnum">{BRAND.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="liquid hidden rounded-pill bg-blue px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(26,115,209,0.5)] sm:inline-flex"
            >
              <span className="relative z-[1]">{CTA.primary}</span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center text-ink xl:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm xl:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="glass-strong fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-[var(--hairline-col)] px-5 py-4">
                <Wordmark onClick={() => setOpen(false)} />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center text-chrome hover:text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors",
                          active ? "bg-blue/[0.08] text-blue" : "text-slate hover:bg-mist/50 hover:text-ink"
                        )}
                      >
                        {link.label}
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="space-y-3 border-t border-[var(--hairline-col)] px-5 py-5">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="liquid flex w-full items-center justify-center rounded-pill bg-blue px-5 py-3 text-sm font-semibold text-white"
                >
                  <span className="relative z-[1]">{CTA.primary}</span>
                </Link>
                <a
                  href={`tel:${BRAND.phoneTel}`}
                  className="flex w-full items-center justify-center gap-2 rounded-pill border border-[var(--glass-light-border)] px-5 py-3 text-sm font-medium text-ink"
                >
                  <Phone className="h-4 w-4 text-blue" />
                  {BRAND.phoneDisplay}
                </a>
                <p className="text-center text-xs text-chrome">{BRAND.tagline}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
