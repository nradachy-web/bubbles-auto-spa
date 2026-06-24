"use client";

import { Phone, MapPin, Clock, AtSign, ShieldCheck } from "lucide-react";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import QuoteForm from "@/components/forms/QuoteForm";
import BeadField from "@/components/fx/BeadField";
import { BRAND, QUOTE } from "@/lib/constants";

const CONTACT_ITEMS = [
  { icon: Phone, label: "Call or text", value: BRAND.phoneDisplay, href: `tel:${BRAND.phoneTel}` },
  { icon: MapPin, label: "Shop", value: BRAND.address.full, href: BRAND.address.mapUrl, external: true },
  { icon: Clock, label: "Hours", value: BRAND.hours, href: "" },
  { icon: AtSign, label: "Instagram", value: BRAND.social.instagramHandle, href: BRAND.social.instagram, external: true },
];

export default function QuoteSection() {
  return (
    <section id="quote" className="section relative overflow-hidden bg-ink grain">
      <BeadField />
      <div className="container-site relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
          {/* left: invitation + contact */}
          <div>
            <Reveal>
              <p className="overline text-sky">Free, no-pressure quote</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display font-light leading-[1.06] tracking-[-0.015em] text-white text-[clamp(1.9rem,4vw,3rem)] text-balance">
                {QUOTE.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[#b7c8da]">{QUOTE.intro}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-dark mt-7 flex max-w-xl items-start gap-3 rounded-2xl px-5 py-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky" aria-hidden />
                <p className="text-[0.95rem] leading-relaxed text-[#cfe0f0]">{QUOTE.reassurance}</p>
              </div>
            </Reveal>

            <RevealGroup className="mt-8 space-y-1" stagger={0.06}>
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const hasLink = item.href.length > 0;
                const inner = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--glass-dark-border)] bg-white/[0.04]">
                      <Icon className="h-[18px] w-[18px] text-sky" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-[#8ea3b8]">
                        {item.label}
                      </span>
                      <span className="block text-[0.975rem] leading-snug text-white">{item.value}</span>
                    </span>
                  </>
                );
                return (
                  <Reveal as="div" key={item.label}>
                    {hasLink ? (
                      <a
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="focus-ring group flex items-center gap-4 rounded-xl py-2"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl py-2">{inner}</div>
                    )}
                  </Reveal>
                );
              })}
            </RevealGroup>
          </div>

          {/* right: the form */}
          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
