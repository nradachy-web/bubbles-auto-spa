import Link from "next/link";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { TWO_WAYS, BRAND } from "@/lib/constants";

/** Shop vs mobile. Studio photo (portrait) beside the daylight rig photo (landscape). */
export default function TwoWays() {
  const { shop, mobile } = TWO_WAYS;
  return (
    <section className="on-white section" aria-labelledby="two-ways-title">
      <div className="container">
        <SectionHeading title={<span id="two-ways-title">{TWO_WAYS.heading}</span>} lede={TWO_WAYS.lede} />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* shop */}
          <div className="lg:col-span-5">
            <Photo src={shop.photo} alt={shop.alt} width={shop.w} height={shop.h} className="aspect-[4/5]" />
            <h3 className="t-h3 mt-6">{shop.title}</h3>
            <p className="t-body muted mt-3 measure">{shop.body}</p>
            <a href={BRAND.address.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-text mt-4">
              Get directions to {BRAND.address.street}
            </a>
          </div>

          {/* mobile */}
          <div className="lg:col-span-7 lg:pt-24">
            <Photo src={mobile.photo} alt={mobile.alt} width={mobile.w} height={mobile.h} className="aspect-[4/3]" />
            <h3 className="t-h3 mt-6">{mobile.title}</h3>
            <p className="t-body muted mt-3 measure">{mobile.body}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {BRAND.serviceArea.map((c) => (
                <li key={c} className="t-small muted">
                  {c}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-text mt-4">
              Book a mobile detail
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
