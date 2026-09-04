import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { pageMeta } from "@/lib/seo";

/** 404. The one centred page on the site. No path, so no canonical and no og:url. */
export const metadata: Metadata = {
  ...pageMeta({
    title: "Page not found | Bubbles Auto Spa",
    description: "That page moved or never existed. The Bubbles Auto Spa home page has everything.",
  }),
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      className="on-black flex min-h-[100svh] items-center pb-16 pt-[calc(var(--nav-h)+40px)]"
      aria-labelledby="not-found-title"
    >
      <div className="container text-center">
        <h1 id="not-found-title" className="t-display text-[clamp(5rem,18vw,12rem)] leading-none">
          404
        </h1>
        <p className="t-lede muted mt-6">This page took a wrong turn.</p>
        <p className="t-body muted mt-3">It moved or never existed. The home page has everything.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-solid btn-lg">
            Back to home
          </Link>
          <a href={`tel:${BRAND.phoneTel}`} className="btn btn-outline btn-lg">
            Call <span className="t-num">{BRAND.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
