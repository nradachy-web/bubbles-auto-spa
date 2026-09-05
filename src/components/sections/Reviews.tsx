import SectionHeading from "@/components/ui/SectionHeading";
import { REVIEWS } from "@/lib/reviews";

/**
 * Real Google reviews. The rating and count are pulled from the listing by
 * scripts/fetch-reviews.mjs, the quotes are verbatim, and every quote says it
 * came from Google. Hairline rows, no stars, no cards: the words carry it.
 */
export default function Reviews({ limit = 4 }: { limit?: number }) {
  const items = REVIEWS.items.slice(0, limit);
  return (
    <section className="on-white section border-t hairline" aria-labelledby="reviews-title">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading title={<span id="reviews-title">{REVIEWS.heading}</span>} />
          <p className="t-display t-num mt-8 text-[clamp(3.2rem,7vw,5.5rem)] leading-none text-ink">
            {REVIEWS.rating.toFixed(1)}
          </p>
          <p className="t-body muted mt-3">
            on Google, from {REVIEWS.count} reviews
          </p>
          <a href={REVIEWS.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-6">
            Read all reviews on Google
          </a>
          <p className="t-caption muted mt-4">Rating and count as of {REVIEWS.asOf}.</p>
        </div>
        <ul className="ledger lg:col-span-7 lg:col-start-6">
          {items.map((r) => (
            <li key={r.name + r.when} className="py-6 lg:py-7">
              <blockquote className="t-body measure-wide">{r.text}</blockquote>
              <p className="t-small muted mt-3">
                {r.name}, Google review, {r.when}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
