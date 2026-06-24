"use client";

import { CarFront, Armchair, Sparkles, ShieldCheck, Ship, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Tilt from "@/components/ui/Tilt";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";

const ICONS = { CarFront, Armchair, Sparkles, ShieldCheck, Ship } as const;

export default function ServicesPreview() {
  return (
    <section id="services" className="section relative bg-foam">
      <div className="container-site relative">
        <SectionHeading
          overline="The menu"
          title={
            <>
              Five treatments, <span className="display-italic text-blue">one</span> standard
            </>
          }
          sub="Pick a single service or build the full treatment. Every job is hand-done with certified products and quoted per vehicle, at our shop or in your driveway."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Sparkles;
            const featured = service.featured === true;
            return (
              <Reveal key={service.id} className={cn(featured && "sm:col-span-2 lg:col-span-1")}>
                <Tilt className="h-full">
                  <Link
                    href={service.href}
                    className={cn(
                      "group/card glass card-hover focus-ring relative flex h-full flex-col overflow-hidden rounded-2xl",
                      featured && "ring-1 ring-[var(--glass-light-border-hover)]"
                    )}
                  >
                    <div className="relative">
                      <PhotoFrame
                        src={service.image}
                        alt={`${service.name} by Bubbles Auto Spa in St. Clair Shores, MI`}
                        ratio="aspect-[16/10]"
                        className="rounded-none ring-0 shadow-none"
                      />
                      <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-paper/90 text-blue shadow-sm backdrop-blur transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:scale-110">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      {featured && (
                        <span className="absolute right-4 top-4 rounded-pill bg-blue px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white">
                          Most requested
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-[1.3rem] leading-tight text-ink">{service.name}</h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{service.oneLine}</p>

                      <ul className="mt-4 space-y-2">
                        {service.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-[0.85rem] leading-snug text-chrome">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky" strokeWidth={2.5} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex items-center justify-between border-t border-[var(--hairline-col)] pt-4">
                        <span className="text-[0.78rem] uppercase tracking-[0.1em] text-chrome">{service.priceFraming}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue transition-transform group-hover/card:translate-x-0.5">
                          View
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
