import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import FoamLine from "@/components/fx/FoamLine";
import ServicesPreview from "@/components/sections/ServicesPreview";
import MobileVsShop from "@/components/sections/MobileVsShop";
import GalleryShowcase from "@/components/sections/GalleryShowcase";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { BRAND, CTA, CITIES, type City } from "@/lib/constants";

export default function CityTemplate({ city }: { city: City }) {
  const nearby = city.nearby
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter(Boolean) as City[];

  return (
    <main className="bg-foam">
      {/* hero */}
      <section className="relative overflow-hidden bg-foam grain pt-32 pb-14 sm:pt-36 lg:pt-40">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(110% 65% at 80% 4%, rgba(207,227,242,0.65) 0%, rgba(244,248,251,0) 58%)" }}
        />
        <div className="container-wide relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-pill border border-[var(--glass-light-border)] bg-paper/70 px-3.5 py-1.5">
                  <MapPin className="h-4 w-4 text-blue" aria-hidden />
                  <span className="overline overline-blue">{city.name}, MI</span>
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 font-display font-light leading-[1.04] tracking-[-0.02em] text-ink text-[clamp(2.2rem,5vw,3.8rem)] text-balance">
                  Auto detailing in <span className="display-italic text-blue">{city.name}</span>
                </h1>
              </Reveal>
              {city.intro.map((p, i) => (
                <Reveal key={i} delay={0.14 + i * 0.06}>
                  <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-slate">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="/contact" variant="primary" size="lg">
                    {CTA.primary}
                  </Button>
                  <Button href={`tel:${BRAND.phoneTel}`} variant="outline" size="lg" external>
                    <Phone className="h-4 w-4" />
                    {BRAND.phoneDisplay}
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="lg:col-span-6">
              <PhotoFrame
                src="/images/shop.jpg"
                alt={`Bubbles Auto Spa detailing studio serving ${city.name}, MI`}
                ratio="aspect-[4/3]"
                tone="full"
                priority
                autoSheen
                className="shadow-[0_40px_90px_-50px_rgba(10,27,46,0.65)]"
              />
            </Reveal>
          </div>
          <div className="mt-12"><FoamLine /></div>
        </div>
      </section>

      <ServicesPreview />
      <MobileVsShop />

      {/* nearby areas */}
      <section className="section bg-foam">
        <div className="container-site">
          <Reveal>
            <span className="overline overline-blue">Nearby</span>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] leading-tight text-ink">
              Also serving the {BRAND.county} area
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {nearby.map((c) => (
              <Link
                key={c.slug}
                href={`/auto-detailing/${c.slug}`}
                className="glass card-hover focus-ring group flex items-center justify-between rounded-2xl p-5"
              >
                <span>
                  <span className="block font-display text-[1.1rem] text-ink">{c.name}</span>
                  <span className="mt-0.5 block text-sm text-chrome">{c.blurb}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-blue transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/auto-detailing/${c.slug}`}
                className="rounded-pill border border-[var(--glass-light-border)] bg-paper px-4 py-1.5 text-sm text-slate transition-colors hover:border-blue hover:text-blue"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GalleryShowcase limit={6} withCta />
      <FAQ />
      <CTABanner
        heading={`Ready to detail your vehicle in ${city.name}?`}
        sub={`Call ${BRAND.phoneDisplay} or build your quote online. Shop drop-off in St. Clair Shores or mobile service to your door in ${city.name}.`}
      />
    </main>
  );
}
