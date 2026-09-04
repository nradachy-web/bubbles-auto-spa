import { Fragment } from "react";
import Link from "next/link";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import TwoWays from "@/components/sections/TwoWays";
import ServicesIndex from "@/components/sections/ServicesIndex";
import Work from "@/components/sections/Work";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { BRAND, CTA, CITIES, type City } from "@/lib/constants";

// Local copy for the nearby section. Candidate for constants.ts as NEARBY_SECTION.
const NEARBY = {
  heading: "Also serving nearby",
  lede: `Drop off at the shop in St. Clair Shores, or we come to you across ${BRAND.county}.`,
  allLead: "Every city we serve: ",
} as const;

// Hero photo for every city page. Candidate for constants.ts as CITY_HERO.
const CITY_HERO = {
  photo: "/photos/trailer.webp",
  alt: "The Bubbles Auto Spa mobile detailing trailer, lettered with the phone number",
  w: 1600,
  h: 1203,
} as const;

/**
 * Local SEO city page. Black hero with the mobile rig and the city's own intro,
 * then the finished home sections, a ledger of nearby cities, the work mosaic,
 * the questions, and the final call.
 */
export default function CityTemplate({ city }: { city: City }) {
  const nearby = city.nearby
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is City => c !== undefined);

  return (
    <div>
      {/* hero */}
      <section className="on-black section pt-[calc(var(--nav-h)+40px)]!" aria-labelledby="city-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <h1 id="city-title" className="t-display t-h1 text-white">
              Auto detailing in {city.name}
            </h1>
            {city.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "t-lede muted mt-6 measure" : "t-body muted mt-4 measure"}>
                {p}
              </p>
            ))}
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
              src={CITY_HERO.photo}
              alt={CITY_HERO.alt}
              width={CITY_HERO.w}
              height={CITY_HERO.h}
              className="aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </section>

      <TwoWays />
      <ServicesIndex />

      {/* nearby cities */}
      <section className="on-white section border-t hairline" aria-labelledby="nearby-title">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading title={<span id="nearby-title">{NEARBY.heading}</span>} lede={NEARBY.lede} />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="ledger">
              {nearby.map((c) => (
                <li key={c.slug} className="py-5 lg:py-6">
                  <h3 className="t-h3">
                    <Link href={`/auto-detailing/${c.slug}`} className="transition-colors hover:text-blue">
                      {c.name}
                    </Link>
                  </h3>
                  <p className="t-body muted mt-2 measure">{c.blurb}</p>
                </li>
              ))}
            </ul>
            <p className="t-small muted mt-8 measure-wide">
              {NEARBY.allLead}
              {CITIES.map((c, i) => (
                <Fragment key={c.slug}>
                  {i > 0 && ", "}
                  <Link
                    href={`/auto-detailing/${c.slug}`}
                    className="link"
                    aria-current={c.slug === city.slug ? "page" : undefined}
                  >
                    {c.name}
                  </Link>
                </Fragment>
              ))}
              .
            </p>
          </div>
        </div>
      </section>

      <Work limit={8} withPairs={false} />
      <FAQ />
      <CTABanner
        heading={`Ready to detail your vehicle in ${city.name}?`}
        sub={`Call or text ${BRAND.phoneDisplay}, or send a quote request. Drop off in St. Clair Shores, or we come to you in ${city.name}.`}
      />
    </div>
  );
}
