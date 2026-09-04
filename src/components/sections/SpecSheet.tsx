import SectionHeading from "@/components/ui/SectionHeading";
import { SPEC_SHEET, BRAND } from "@/lib/constants";

/** Facts only, laid out like a window sticker. Hairline rows carry the structure. */
export default function SpecSheet({ heading = SPEC_SHEET.heading }: { heading?: string }) {
  return (
    <section className="on-black section border-t hairline" aria-labelledby="spec-title">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading title={<span id="spec-title">{heading}</span>} />
          <p className="t-body muted mt-5 measure">
            Everything a customer usually asks before they call, in one place. Anything missing, ask us at{" "}
            <a href={`tel:${BRAND.phoneTel}`} className="link t-num">
              {BRAND.phoneDisplay}
            </a>
            .
          </p>
        </div>
        <dl className="ledger lg:col-span-7 lg:col-start-6">
          {SPEC_SHEET.rows.map((r) => (
            <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 lg:py-5">
              <dt className="t-small muted">{r.label}</dt>
              <dd className="t-body text-white">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
