import Link from "next/link";
import { BRAND } from "@/lib/constants";

/** Mobile-only bottom dock: call or quote, always in thumb reach. */
export default function StickyCallBar() {
  return (
    <div
      className="on-black fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t hairline px-3 pt-2 lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <a href={`tel:${BRAND.phoneTel}`} className="btn btn-outline w-full">
        Call <span className="t-num">{BRAND.phoneDisplay}</span>
      </a>
      <Link href="/contact" className="btn btn-solid w-full">
        Get a quote
      </Link>
    </div>
  );
}
