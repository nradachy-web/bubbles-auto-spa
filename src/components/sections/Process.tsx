import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS } from "@/lib/constants";

/** The real sequence of a detail. Numbered because it is a sequence. */
export default function Process() {
  return (
    <section className="on-white section border-t hairline" aria-labelledby="process-title">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading title={<span id="process-title">{PROCESS.heading}</span>} lede={PROCESS.intro} />
        </div>
        <ol className="ledger lg:col-span-7 lg:col-start-6">
          {PROCESS.steps.map((step, i) => (
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
  );
}
