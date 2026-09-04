import Link from "next/link";
import { BRAND, CTA, HERO } from "@/lib/constants";
import { asset } from "@/lib/asset";

/**
 * Home hero. Black studio, the foam-covered GT3 melting into the page,
 * and the one page-load moment on the site: a foam sheet that rinses off.
 */
export default function Hero() {
  return (
    <section className="on-black relative overflow-hidden" aria-labelledby="hero-title">
      {/* photo: full-width band on mobile, right column on lg */}
      <div className="relative h-[62svh] min-h-[380px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[54%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/photos/hero-foam.webp")}
          alt="A Porsche 911 GT3 covered in snow foam under the hexagonal ceiling lights inside the Bubbles Auto Spa studio"
          width={1350}
          height={2400}
          fetchPriority="high"
          decoding="sync"
          className="h-full w-full object-cover object-[52%_50%] hero-mask"
        />
      </div>

      {/* copy */}
      <div className="container relative z-10 flex flex-col justify-end pb-24 pt-8 lg:min-h-[100svh] lg:pb-24 lg:pt-[calc(var(--nav-h)+48px)]">
        <div className="lg:w-[46%] lg:pr-10">
          <h1 id="hero-title" className="t-display t-h1 text-white">
            {HERO.headline}
          </h1>
          <p className="t-lede muted mt-6 measure">{HERO.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn btn-solid btn-lg">
              {CTA.primary}
            </Link>
            <a href={`tel:${BRAND.phoneTel}`} className="btn btn-outline btn-lg">
              Call <span className="t-num">{BRAND.phoneDisplay}</span>
            </a>
          </div>
          <p className="t-small muted mt-8 max-w-md">{HERO.trust}</p>
        </div>
      </div>

      {/* the rinse: a foam sheet that wipes upward once on load */}
      <div className="rinse-sheet" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-[100%] bg-white" />
        <svg
          className="absolute inset-x-0 top-full block h-[18vh] w-full"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          fill="#ffffff"
        >
          <path d="M0 0h1440v62c-72 30-134 56-214 52-84-4-124-52-208-56-88-4-140 46-232 50-96 4-152-50-244-56-92-6-158 44-256 48C190 104 96 70 0 90V0Z" />
        </svg>
        <svg className="absolute inset-x-0 top-full block h-[18vh] w-full" viewBox="0 0 1440 180" fill="#ffffff">
          <circle cx="180" cy="128" r="22" opacity="0.95" />
          <circle cx="232" cy="92" r="10" opacity="0.9" />
          <circle cx="520" cy="122" r="14" opacity="0.9" />
          <circle cx="770" cy="118" r="26" opacity="0.95" />
          <circle cx="830" cy="86" r="9" opacity="0.9" />
          <circle cx="1090" cy="126" r="18" opacity="0.95" />
          <circle cx="1310" cy="98" r="12" opacity="0.9" />
        </svg>
      </div>
    </section>
  );
}
