import Link from "next/link";
import Suds from "@/components/fx/Suds";
import { BRAND, CTA, FINAL_CTA } from "@/lib/constants";

interface Props {
  heading?: string;
  sub?: string;
}

/** Final call. The phone number is the biggest thing on the screen. A few suds drift past it. */
export default function CTABanner({ heading = FINAL_CTA.heading, sub = FINAL_CTA.sub }: Props) {
  return (
    <section className="on-black section relative overflow-hidden border-t hairline" aria-labelledby="cta-title">
      <Suds density={1.3} max={12} />
      <div className="container relative z-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-7">
          <h2 id="cta-title" className="t-display t-h2">
            {heading}
          </h2>
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="t-display t-num mt-6 block text-[clamp(2.2rem,7vw,5.5rem)] leading-none text-white hover:text-bubble"
          >
            {BRAND.phoneDisplay}
          </a>
        </div>
        <div className="lg:col-span-5">
          <p className="t-body muted measure">{sub}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-solid btn-lg">
              {CTA.primary}
            </Link>
            <a href={`sms:${BRAND.phoneTel}`} className="btn btn-outline btn-lg">
              Text us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
