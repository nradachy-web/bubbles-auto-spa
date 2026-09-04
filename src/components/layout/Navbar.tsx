"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, NAV_LINKS, CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} aria-label={`${BRAND.name} home`} className="t-wordmark whitespace-nowrap text-[13px] sm:text-[14px]">
      Bubbles Auto Spa
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when the route changes. Adjusting state during render on a
  // prop change is the React-sanctioned pattern (no setState inside an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;

    const header = headerRef.current;

    // Everything behind the open menu is inert: no clicks, no focus, hidden from AT.
    // The header (wordmark + hamburger + menu) stays live and is the focus trap. Tab
    // order inside it follows the DOM: wordmark, hamburger, menu links, quote button,
    // phone link. Shift+Tab from the wordmark wraps to the phone link and Tab from the
    // phone link wraps to the wordmark. The wordmark stays in the trap on purpose: it is
    // visible while the menu is open and closes it on click. The route announcer is a
    // live region and stays live so navigation is still announced.
    const inerted: Element[] = [];
    for (const child of Array.from(document.body.children)) {
      if (child === header) continue;
      if (child.tagName === "SCRIPT" || child.tagName === "NEXT-ROUTE-ANNOUNCER") continue;
      if (child.hasAttribute("inert")) continue;
      child.setAttribute("inert", "");
      inerted.push(child);
    }

    const focusables = () => {
      if (!header) return [];
      const nodes = header.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      return Array.from(nodes).filter((el) => el.getClientRects().length > 0);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !header) return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const outside = !header.contains(active);
      if (e.shiftKey && (active === first || outside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || outside)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    // If the viewport grows past lg the menu is display:none, so drop the lock and inert.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onDesktop = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    desktop.addEventListener("change", onDesktop);

    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
      for (const el of inerted) el.removeAttribute("inert");
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "on-black fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-black border-b hairline" : "bg-transparent! border-b border-transparent"
      )}
    >
      <div className="container flex h-[var(--nav-h)] items-center justify-between gap-6">
        <Wordmark onClick={() => setOpen(false)} />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "t-small pb-0.5 border-b transition-colors",
                  active ? "border-white text-white" : "border-transparent text-cloud hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <a href={`tel:${BRAND.phoneTel}`} className="t-num hidden text-[15px] text-white hover:text-bubble md:inline">
            {BRAND.phoneDisplay}
          </a>
          <div className="hidden sm:block">
            <Link href="/contact" className="btn btn-solid h-10! px-4! text-[14px]!">
              {CTA.primary}
            </Link>
          </div>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center lg:hidden"
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[2px] w-6 bg-white transition-transform duration-300",
                  open && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-[2px] w-6 bg-white transition-transform duration-300",
                  open && "-translate-y-[6px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="on-black fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-40 overflow-y-auto lg:hidden"
      >
        <div className="container flex min-h-full flex-col justify-between pb-10 pt-6">
          <nav aria-label="Mobile" className="ledger">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="t-display flex items-center justify-between py-4 text-[2rem] text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 grid gap-3">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-solid btn-lg w-full">
              {CTA.primary}
            </Link>
            <a href={`tel:${BRAND.phoneTel}`} className="btn btn-outline btn-lg w-full">
              <span className="t-num">{BRAND.phoneDisplay}</span>
            </a>
            <p className="t-caption muted mt-3">
              {BRAND.address.full}. {BRAND.hours}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
