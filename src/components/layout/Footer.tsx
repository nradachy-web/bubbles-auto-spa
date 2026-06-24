import Link from "next/link";
import { Phone, MapPin, Clock, AtSign } from "lucide-react";
import { BRAND, NAV_LINKS, CITIES } from "@/lib/constants";
import { asset } from "@/lib/asset";
import FoamLine from "@/components/fx/FoamLine";

const SERVICE_LINKS = NAV_LINKS.filter((l) => l.href !== "/gallery" && l.href !== "/about");

function FacebookGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3l.5-3.5H14V3.8c0-1 .3-1.7 1.8-1.7H17V-.0h-2.6C11.7 0 10 1.6 10 4.6V5.5H7V9h3v11h4V9z" transform="translate(0,2)" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-28 pt-16 md:pb-12">
      <div className="container-site relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="lg:max-w-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/logo.png")}
              alt={BRAND.legalName}
              className="mb-4 h-20 w-auto rounded-xl"
            />
            <p className="text-sm leading-relaxed text-[#9fb3c7]">{BRAND.tagline}.</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--glass-dark-border)] text-[#9fb3c7] transition-colors hover:border-sky hover:text-sky"
              >
                <AtSign className="h-4 w-4" />
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--glass-dark-border)] text-[#9fb3c7] transition-colors hover:border-sky hover:text-sky"
              >
                <FacebookGlyph />
              </a>
              <a
                href={BRAND.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--glass-dark-border)] px-3 py-2 text-xs font-medium text-[#9fb3c7] transition-colors hover:border-sky hover:text-sky"
              >
                Reviews on Google
              </a>
            </div>
          </div>

          {/* services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9fb3c7] transition-colors hover:text-sky">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* areas we serve */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Areas We Serve</h4>
            <p className="mb-3 text-sm text-[#9fb3c7]">
              Based in {BRAND.address.city}, serving {BRAND.county}.
            </p>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/auto-detailing/${c.slug}`}
                  className="rounded-pill border border-[var(--glass-dark-border)] px-3 py-1 text-xs text-[#9fb3c7] transition-colors hover:border-sky hover:text-sky"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${BRAND.phoneTel}`} className="flex items-center gap-2.5 text-[#9fb3c7] transition-colors hover:text-sky">
                  <Phone className="h-4 w-4 text-sky" /> <span className="tnum">{BRAND.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={BRAND.address.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-[#9fb3c7] transition-colors hover:text-sky">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" /> {BRAND.address.full}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#9fb3c7]">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky" /> {BRAND.hours}
              </li>
              <li>
                <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[#9fb3c7] transition-colors hover:text-sky">
                  <AtSign className="h-4 w-4 text-sky" /> {BRAND.social.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <FoamLine />
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-xs text-[#7e93a8] sm:flex-row sm:text-left">
          <p>© {BRAND.legalName}. All rights reserved. {BRAND.address.city}, Michigan.</p>
          <p>
            Website by{" "}
            <a
              href="https://modernapexstrategies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky transition-colors hover:text-white"
            >
              Modern Apex Strategies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
