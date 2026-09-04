import SectionHeading from "@/components/ui/SectionHeading";
import { FAQ as FAQ_ITEMS } from "@/lib/constants";

interface Props {
  items?: readonly { q: string; a: string }[];
  heading?: string;
  lede?: string;
}

/** Native details/summary accordion. Rows on hairlines, plus icon rotates when open. */
export default function FAQ({ items = FAQ_ITEMS, heading = "Questions people ask before booking", lede }: Props) {
  return (
    <section className="on-white section border-t hairline" aria-labelledby="faq-title">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading title={<span id="faq-title">{heading}</span>} lede={lede} />
        </div>
        <div className="ledger lg:col-span-7 lg:col-start-6">
          {items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex items-start justify-between gap-6 py-5 lg:py-6">
                <span className="t-h3 text-[1.1rem] sm:text-[1.2rem]">{item.q}</span>
                <span aria-hidden className="acc-icon mt-1 grid h-6 w-6 flex-none place-items-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="t-body muted measure pb-6">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
