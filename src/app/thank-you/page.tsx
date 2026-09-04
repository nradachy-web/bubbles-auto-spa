import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, QUOTE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You | Bubbles Auto Spa",
  description: "Your free quote request was received.",
  robots: { index: false, follow: false },
};

/** After the quote form sends. One black section, the confirmation, two ways onward. */
export default function ThankYouPage() {
  return (
    <section className="on-black section min-h-[70svh] pt-[calc(var(--nav-h)+40px)]!" aria-labelledby="thanks-title">
      <div className="container">
        <h1 id="thanks-title" className="t-display t-h1">
          Got it.
        </h1>
        <p className="t-lede muted mt-6 measure">{QUOTE.success}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/" className="btn btn-outline btn-lg">
            Back to home
          </Link>
          <a href={`tel:${BRAND.phoneTel}`} className="btn btn-solid btn-lg">
            Call <span className="t-num">{BRAND.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
