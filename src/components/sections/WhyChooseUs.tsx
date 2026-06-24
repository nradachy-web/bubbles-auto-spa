"use client";

import { MapPin, BadgeCheck, Sparkles, Ship, ShieldCheck } from "lucide-react";
import { WHY_US } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import BeadField from "@/components/fx/BeadField";

const ICONS = { MapPin, BadgeCheck, Sparkles, Ship, ShieldCheck } as const;

export default function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden bg-ink grain">
      <BeadField />
      <div className="container-site relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* left: heading + framed beading photo */}
          <div className="lg:col-span-5">
            <SectionHeading align="left" onDark overline="Why us" title={WHY_US.heading} />
            <Reveal delay={0.1} className="mt-8">
              <PhotoFrame
                src="/gallery/g04.jpg"
                alt="Water beading on a freshly ceramic-coated finish, detailed by Bubbles Auto Spa"
                ratio="aspect-[5/4]"
                tone="full"
              />
            </Reveal>
          </div>

          {/* right: fact tiles */}
          <div className="lg:col-span-7">
            <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.07}>
              {WHY_US.reasons.map((reason) => {
                const Icon = ICONS[reason.icon as keyof typeof ICONS] ?? BadgeCheck;
                return (
                  <Reveal key={reason.title}>
                    <div className="glass-dark card-hover card-hover-dark h-full rounded-2xl p-6">
                      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky/12 text-sky">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <h3 className="font-display text-[1.12rem] leading-snug text-white">{reason.title}</h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#b7c8da]">{reason.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
