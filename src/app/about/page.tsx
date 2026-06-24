import type { Metadata } from "next";
import { CarFront, Armchair, Layers, Anchor, MapPin, Phone } from "lucide-react";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Button from "@/components/ui/Button";
import FoamLine from "@/components/fx/FoamLine";
import CTABanner from "@/components/sections/CTABanner";
import { ABOUT, BRAND, CERTIFICATIONS, SEO, CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.about.title,
  description: SEO.about.description,
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: "/about", title: SEO.about.title, description: SEO.about.description },
  twitter: { title: SEO.about.title, description: SEO.about.description },
};

const ICONS = { CarFront, Armchair, Layers, Anchor } as const;

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-foam pt-32">
      {/* hero */}
      <section className="relative grain">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(110% 60% at 80% 0%, rgba(207,227,242,0.6) 0%, rgba(244,248,251,0) 60%)" }}
        />
        <div className="container-site relative z-10 pb-12">
          <Reveal className="max-w-3xl">
            <span className="overline overline-blue">About the shop</span>
            <h1 className="mt-4 font-display font-light leading-[1.05] tracking-[-0.02em] text-ink text-[clamp(2.3rem,5vw,3.8rem)]">
              {ABOUT.heading}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate">{ABOUT.subheading}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2.5">
            {CERTIFICATIONS.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-2 rounded-pill border border-[var(--glass-light-border)] bg-paper px-4 py-2"
                style={{ boxShadow: "inset 2px 0 0 var(--color-gold)" }}
              >
                <span className="font-display text-[1rem] text-ink">{c.name}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.14em] text-gold">Certified</span>
              </span>
            ))}
          </Reveal>
        </div>
        <div className="container-site relative z-10"><FoamLine /></div>
      </section>

      {/* story */}
      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionHeading align="left" overline="Our story" title="A real shop, plus a rig that comes to you" />
          </Reveal>
          <div className="max-w-2xl space-y-6">
            {ABOUT.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-[1.05rem] leading-relaxed text-slate">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* pillars */}
      <section className="section bg-foam">
        <div className="container-site">
          <SectionHeading overline="What we do" title="Five treatments, one standard" sub="No shortcuts and no upsell games. Just careful work that holds up, on every kind of vehicle." />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {ABOUT.pillars.map((pillar) => {
              const Icon = ICONS[pillar.icon as keyof typeof ICONS] ?? CarFront;
              return (
                <Reveal key={pillar.title}>
                  <GlassCard className="h-full p-7">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue">
                      <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-[1.2rem] text-ink">{pillar.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate">{pillar.body}</p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* service area */}
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <span className="overline overline-blue">Where we work</span>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] leading-tight text-ink">
              Based in St. Clair Shores, serving {BRAND.county}
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-slate">
              A real shop at {BRAND.address.full}, plus a mobile rig that reaches driveways, marinas,
              and storage lots across the county.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" size="md">{CTA.primary}</Button>
              <Button href={`tel:${BRAND.phoneTel}`} variant="outline" size="md" external>
                <Phone className="h-4 w-4" />
                {BRAND.phoneDisplay}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="p-7 sm:p-8">
              <div className="flex items-center gap-2 text-blue">
                <MapPin className="h-5 w-5" aria-hidden />
                <span className="overline overline-blue">Service area</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {BRAND.serviceArea.map((city) => (
                  <li key={city} className="rounded-pill border border-[var(--glass-light-border)] bg-foam px-4 py-2 text-sm text-ink">
                    {city}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-chrome">Not on the list? Ask anyway. {BRAND.hours}</p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
