import Link from "next/link";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICE_DETAILS, SERVICES, WORK, BRAND, CTA } from "@/lib/constants";

// Lede under the tiers heading. Every tiered service says the same thing in its own
// copy (we look first, then recommend). Candidate for constants.ts.
const TIERS_LEDE = "We look at the vehicle first and tell you which level it actually needs.";

/**
 * One template for the five service pages. Black hero with the service photo,
 * then daylight prose sections on the editorial split, a black "why us" beat,
 * the FAQ, the other four services, and the final call.
 */
export default function ServicePageTemplate({ id }: { id: string }) {
  const detail = SERVICE_DETAILS[id];
  if (!detail) return null;

  // Alt text and dimensions come from the photo library entry, so nothing is invented here.
  const photo = WORK.find((p) => p.src === detail.image);
  const photoW = photo?.w ?? 1600;
  const photoH = photo?.h ?? 1200;
  const photoAlt = photo?.alt ?? detail.name;
  const portrait = photoH > photoW;

  const related = SERVICES.filter((s) => s.id !== detail.id);
  const tiers = detail.tiers ?? [];

  return (
    <article>
      {/* 1) hero */}
      <section className="on-black pt-[calc(var(--nav-h)+40px)] pb-16 lg:pb-28" aria-labelledby="service-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <h1 id="service-title" className="t-display t-h1 text-white">
              {detail.name}
            </h1>
            <p className="t-lede muted mt-6 measure">{detail.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn btn-solid btn-lg">
                {CTA.primary}
              </Link>
              <a href={`tel:${BRAND.phoneTel}`} className="btn btn-outline btn-lg">
                Call <span className="t-num">{BRAND.phoneDisplay}</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Photo
              src={detail.image}
              alt={photoAlt}
              width={photoW}
              height={photoH}
              priority
              className={portrait ? "aspect-[4/5]" : "aspect-[4/3]"}
            />
          </div>
        </div>
      </section>

      {/* 2) overview */}
      <section className="on-white section" aria-labelledby="overview-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading title={<span id="overview-title">What this service is</span>} />
          </div>
          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            {detail.longDescription.map((para) => (
              <p key={para} className="t-body muted measure">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3) what is included */}
      <section className="on-white section border-t hairline" aria-labelledby="included-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading title={<span id="included-title">What you get</span>} />
          </div>
          <ul className="ledger lg:col-span-7 lg:col-start-6">
            {detail.benefits.map((b) => (
              <li key={b} className="t-body py-4">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4) process */}
      <section className="on-white section border-t hairline" aria-labelledby="steps-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading title={<span id="steps-title">How it goes</span>} />
          </div>
          <ol className="ledger lg:col-span-7 lg:col-start-6">
            {detail.process.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3.5rem_1fr] gap-4 py-6 sm:grid-cols-[5rem_1fr] lg:py-7">
                <span className="t-display t-num text-[2rem] leading-none text-blue sm:text-[2.6rem]">{i + 1}</span>
                <div>
                  <h3 className="t-h3">{step.title}</h3>
                  <p className="t-body muted mt-2 measure">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5) tiers, only where the service has them */}
      {tiers.length > 0 && (
        <section className="on-concrete section" aria-labelledby="tiers-title">
          <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading title={<span id="tiers-title">How far you want to go</span>} lede={TIERS_LEDE} />
            </div>
            <ul className="ledger lg:col-span-7 lg:col-start-6">
              {tiers.map((tier) => (
                <li key={tier.name} className="py-6 lg:py-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="t-h3">{tier.name}</h3>
                    {tier.price && <span className="t-num text-[1.1rem]">{tier.price}</span>}
                  </div>
                  <p className="t-body muted mt-2 measure">{tier.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 6) why Bubbles */}
      <section className="on-black section border-t hairline" aria-labelledby="why-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading title={<span id="why-title">Why people book us for this</span>} />
          </div>
          <ul className="ledger lg:col-span-7 lg:col-start-6">
            {detail.whyUs.map((reason) => (
              <li key={reason} className="t-body py-4 text-white">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7) questions */}
      <FAQ items={detail.faqs} heading="Questions about this service" />

      {/* 8) the other four services */}
      <section className="on-white section border-t hairline" aria-labelledby="related-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading title={<span id="related-title">Other things we do</span>} />
          </div>
          <ul className="ledger lg:col-span-7 lg:col-start-6">
            {related.map((s) => (
              <li key={s.id} className="py-6 lg:py-7">
                <h3 className="t-h3">
                  <Link href={s.href} className="transition-colors hover:text-blue">
                    {s.name}
                  </Link>
                </h3>
                <p className="t-body muted mt-2 measure">{s.oneLine}</p>
                <Link href={s.href} className="btn btn-text mt-3">
                  See {s.name.charAt(0).toLowerCase() + s.name.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9) final call */}
      <CTABanner />
    </article>
  );
}
