import SectionHeading from "@/components/ui/SectionHeading";
import QuoteForm from "@/components/forms/QuoteForm";
import { BRAND, QUOTE } from "@/lib/constants";

/** One hairline row in the facts list. Label above, value below. */
function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-4">
      <dt className="t-small muted">{label}</dt>
      <dd className="t-body mt-1">{children}</dd>
    </div>
  );
}

/** The quote form. Daylight section: the ask and the facts at left, the four steps at right. */
export default function QuoteSection() {
  return (
    <section id="quote" className="on-white section border-t hairline" aria-labelledby="quote-title">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading title={<span id="quote-title">{QUOTE.heading}</span>} lede={QUOTE.intro} />

          <dl className="ledger mt-10">
            <Fact label="Call or text">
              <a href={`tel:${BRAND.phoneTel}`} className="link t-num">
                {BRAND.phoneDisplay}
              </a>
            </Fact>
            <Fact label="Shop">
              <a href={BRAND.address.mapUrl} target="_blank" rel="noopener noreferrer" className="link">
                {BRAND.address.full}
              </a>
            </Fact>
            <Fact label="Hours">{BRAND.hours}</Fact>
            <Fact label="Instagram">
              <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="link">
                {BRAND.social.instagramHandle}
              </a>
            </Fact>
          </dl>

          <p className="t-small muted mt-6 measure">{QUOTE.reassurance}</p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
