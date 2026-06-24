import type { Metadata } from "next";
import { CheckCircle, Phone, ArrowRight, AtSign } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import FoamLine from "@/components/fx/FoamLine";
import { BRAND, QUOTE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You | Bubbles Auto Spa",
  description: "Your free quote request was received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden bg-foam grain pt-32 pb-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(100% 60% at 50% 0%, rgba(207,227,242,0.7) 0%, rgba(244,248,251,0) 60%)" }}
      />
      <div className="container-site relative z-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal>
            <span className="grid h-24 w-24 place-items-center rounded-full bg-paper shadow-[0_18px_40px_-20px_rgba(26,115,209,0.5)] ring-1 ring-[var(--glass-light-border)]">
              <CheckCircle className="h-12 w-12 text-blue" strokeWidth={1.5} aria-hidden />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="overline overline-blue mt-8">Request received</p>
          </Reveal>
          <Reveal delay={0.14}>
            <h1 className="mt-4 font-display font-light text-ink text-[clamp(2.2rem,5vw,3.4rem)]">
              You are all set
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">{QUOTE.success}</p>
          </Reveal>
          <Reveal delay={0.28} className="w-full max-w-md">
            <div className="my-9"><FoamLine /></div>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/" variant="primary" size="lg">
                Back to Home
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={`tel:${BRAND.phoneTel}`} variant="outline" size="lg" external>
                <Phone className="h-4 w-4" aria-hidden />
                {BRAND.phoneDisplay}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.42}>
            <a
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-10 inline-flex items-center gap-2 rounded-pill px-3 py-2 text-sm text-chrome transition-colors hover:text-blue"
            >
              <AtSign className="h-4 w-4" aria-hidden />
              Follow us {BRAND.social.instagramHandle}
            </a>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
