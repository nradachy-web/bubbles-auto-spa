import Button from "@/components/ui/Button";
import FoamLine from "@/components/fx/FoamLine";
import { BRAND } from "@/lib/constants";
import { Phone } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-foam grain">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(90% 50% at 50% 0%, rgba(207,227,242,0.7) 0%, rgba(244,248,251,0) 60%)" }}
      />
      <section className="container-site relative z-10 flex min-h-screen flex-col items-center justify-center pt-32 pb-24 text-center">
        <span className="overline overline-blue">Error 404</span>
        <h1 className="mt-6 font-display font-light leading-none text-blue text-[clamp(5rem,18vw,12rem)]">404</h1>
        <div className="mx-auto mt-8 w-40"><FoamLine /></div>
        <p className="mt-8 text-balance text-lg text-ink sm:text-xl">This page took a wrong turn.</p>
        <p className="mt-3 max-w-md text-balance text-slate">
          The page you are looking for moved or never existed. Let us get you back on the road.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/" variant="primary" size="lg">Back to Home</Button>
          <Button href={`tel:${BRAND.phoneTel}`} variant="outline" size="lg" external ariaLabel={`Call ${BRAND.legalName}`}>
            <Phone className="h-4 w-4" />
            {BRAND.phoneDisplay}
          </Button>
        </div>
      </section>
    </main>
  );
}
