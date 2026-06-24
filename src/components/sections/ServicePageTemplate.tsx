import { Check, Phone, CarFront, Armchair, Sparkles, ShieldCheck, Ship } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FoamLine from "@/components/fx/FoamLine";
import BeadField from "@/components/fx/BeadField";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICE_DETAILS, BRAND, CTA } from "@/lib/constants";

const ICONS = { CarFront, Armchair, Sparkles, ShieldCheck, Ship } as const;

export default function ServicePageTemplate({ id }: { id: string }) {
  const detail = SERVICE_DETAILS[id];
  if (!detail) return null;

  const Icon = ICONS[detail.icon as keyof typeof ICONS] ?? Sparkles;
  const parts = detail.name.trim().split(" ");
  const accent = parts.length > 1 ? parts.pop()! : null;
  const lead = parts.join(" ");

  return (
    <article className="bg-foam">
      {/* 1) HERO */}
      <section className="relative overflow-hidden bg-foam grain pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(110% 70% at 80% 6%, rgba(207,227,242,0.65) 0%, rgba(244,248,251,0) 58%)",
          }}
        />
        <div className="container-wide relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-pill border border-[var(--glass-light-border)] bg-paper/70 px-3.5 py-1.5">
                  <Icon className="h-4 w-4 text-blue" strokeWidth={1.75} aria-hidden />
                  <span className="overline overline-blue">{detail.name}</span>
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 font-display font-light leading-[1.04] tracking-[-0.02em] text-ink text-[clamp(2.3rem,5.2vw,4rem)] text-balance">
                  {accent ? (
                    <>
                      {lead} <span className="display-italic text-blue">{accent}</span>
                    </>
                  ) : (
                    detail.name
                  )}
                </h1>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-xl text-[1.075rem] leading-relaxed text-slate">
                  {detail.heroSubtitle}
                </p>
              </Reveal>
              <Reveal delay={0.22}>
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
                src={detail.image}
                alt={`${detail.name} by ${BRAND.legalName} in St. Clair Shores, MI`}
                ratio="aspect-[4/3]"
                tone="full"
                priority
                reveal
                autoSheen
                className="shadow-[0_40px_90px_-50px_rgba(10,27,46,0.65)]"
              />
            </Reveal>
          </div>
        </div>
        <div className="container-wide relative z-10 mt-12">
          <FoamLine />
        </div>
      </section>

      {/* 2) OVERVIEW */}
      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              align="left"
              overline="Overview"
              title={
                <>
                  Done right, <span className="display-italic text-blue">the first time</span>
                </>
              }
            />
          </div>
          <div className="lg:col-span-8">
            <RevealGroup className="space-y-6">
              {detail.longDescription.map((para, i) => (
                <Reveal key={i}>
                  <p className="max-w-prose text-[1.05rem] leading-relaxed text-slate">{para}</p>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* 3) BENEFITS */}
      <section className="section relative bg-foam">
        <div className="container-site">
          <SectionHeading
            overline="The difference"
            title="What you actually get"
            sub="Real work with certified products, not a quick wet shine that fades by the weekend."
          />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2" stagger={0.06}>
            {detail.benefits.map((b, i) => (
              <Reveal key={i}>
                <GlassCard className="h-full p-5 sm:p-6" topEdge={false}>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full bg-blue/10 text-blue">
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <p className="text-[1.0125rem] leading-relaxed text-ink">{b}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="container-wide"><FoamLine /></div>

      {/* 4) PROCESS */}
      <section className="section">
        <div className="container-site">
          <SectionHeading overline="Step by step" title="Our process" sub="A clean, careful path from your first quote to a finish you will be proud of." />
          <RevealGroup className="mx-auto mt-14 max-w-3xl" stagger={0.07}>
            <ol className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-6 left-[23px] top-6 w-[2px] rounded-full"
                style={{ background: "linear-gradient(to bottom, transparent, var(--color-sky), transparent)" }}
              />
              {detail.process.map((step, i) => (
                <Reveal as="li" key={i} className="relative flex gap-6 pb-10 last:pb-0">
                  <span className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border border-[var(--glass-light-border)] bg-paper shadow-[0_8px_20px_-12px_rgba(10,27,46,0.5)]">
                    <span className="font-display text-[1.05rem] text-blue tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-[1.2rem] text-ink">{step.title}</h3>
                    <p className="mt-2 max-w-prose text-[1.0125rem] leading-relaxed text-slate">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </RevealGroup>
        </div>
      </section>

      {/* 5) TIERS (optional) */}
      {detail.tiers && detail.tiers.length > 0 && (
        <section className="section relative bg-foam">
          <div className="container-site">
            <SectionHeading
              overline="Choose your level"
              title="Options"
              sub="Not sure which fits? We will recommend the right call on your free quote, never the bigger ticket for its own sake."
            />
            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {detail.tiers.map((tier, i) => (
                <Reveal key={i}>
                  <GlassCard className="flex h-full flex-col p-6 sm:p-7">
                    <span className="overline overline-blue mb-4 inline-block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-[1.2rem] text-ink">{tier.name}</h3>
                    {tier.price && (
                      <p className="mt-2 font-display text-2xl text-blue">{tier.price}</p>
                    )}
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-slate">{tier.body}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 6) WHY US (deep-water beat) */}
      <section className="section relative overflow-hidden bg-ink grain">
        <BeadField />
        <div className="container-site relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              onDark
              overline="The standard"
              title={
                <>
                  Why <span className="display-italic text-sky">Bubbles</span>
                </>
              }
              sub="Certified products, honest recommendations, and the same care whether you drop off or we come to you."
            />
          </div>
          <div className="lg:col-span-7">
            <RevealGroup className="space-y-3" stagger={0.06}>
              {detail.whyUs.map((reason, i) => (
                <Reveal key={i}>
                  <div className="glass-dark flex items-start gap-4 rounded-2xl p-4 sm:p-5">
                    <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-sky/15 text-sky">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <p className="text-[1.0125rem] leading-relaxed text-[#dbe7f2]">{reason}</p>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* 7) FAQs */}
      <section className="section">
        <div className="container-site">
          <SectionHeading overline="Good to know" title="Questions" sub="Straight answers, no pressure. Still wondering something? Call and ask." />
          <RevealGroup className="mx-auto mt-12 max-w-3xl space-y-3" stagger={0.05}>
            {detail.faqs.map((faq, i) => (
              <Reveal key={i}>
                <details className="glass group rounded-2xl open:ring-1 open:ring-[var(--glass-light-border-hover)]">
                  <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                    <span className="font-display text-[1.0625rem] text-ink transition-colors group-open:text-blue">
                      {faq.q}
                    </span>
                    <span aria-hidden className="grid h-7 w-7 flex-none place-items-center rounded-full border border-[var(--hairline-col)] text-blue transition-transform duration-300 group-open:rotate-45">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="hairline mb-4" />
                    <p className="max-w-prose text-[1.0125rem] leading-relaxed text-slate">{faq.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABanner />
    </article>
  );
}
