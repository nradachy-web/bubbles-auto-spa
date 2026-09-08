import Link from "next/link";
import { BRAND, NAV_LINKS, CITIES } from "@/lib/constants";
import { asset } from "@/lib/asset";

const SERVICE_LINKS = NAV_LINKS.filter((l) => l.href !== "/gallery" && l.href !== "/about");

export default function Footer() {
  return (
    <footer className="on-black border-t hairline pb-28 pt-16 lg:pb-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/photos/logo-192.webp")}
              alt={BRAND.legalName}
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              className="h-24 w-24"
            />
            <p className="t-body muted mt-5 max-w-xs">
              A certified detailing shop in St. Clair Shores, and a mobile rig that covers Macomb County.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="link t-small">
                Instagram
              </a>
              <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" className="link t-small">
                Facebook
              </a>
              <a href={BRAND.reviewUrl} target="_blank" rel="noopener noreferrer" className="link t-small">
                Reviews on Google
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="t-small text-white">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="t-body muted hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/gallery" className="t-body muted hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="t-body muted hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="t-small text-white">Where we work</h2>
            <p className="t-body muted mt-4">Based in St. Clair Shores, serving {BRAND.county} and the Woodward corridor.</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/auto-detailing/${c.slug}`} className="t-small muted hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="t-small text-white">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${BRAND.phoneTel}`} className="t-num text-[1.35rem] text-white hover:text-bubble">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={BRAND.address.mapUrl} target="_blank" rel="noopener noreferrer" className="t-body muted hover:text-white">
                  {BRAND.address.street}
                  <br />
                  {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
                </a>
              </li>
              <li className="t-body muted">{BRAND.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-caption muted">
            © {BRAND.legalName}. All rights reserved. {BRAND.address.city}, Michigan.
          </p>
          <p className="t-caption muted">
            Website &amp; marketing by{" "}
            <a href="https://modernapexstrategies.com" target="_blank" rel="noopener noreferrer" className="link">
              Modern Apex Strategies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
