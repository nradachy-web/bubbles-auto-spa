"use client";

import { Sparkles } from "lucide-react";
import { GALLERY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PhotoFrame from "@/components/ui/PhotoFrame";
import BeforeAfter from "@/components/sections/BeforeAfter";

export default function GalleryShowcase({
  limit,
  withCta = false,
  heading,
  intro,
}: {
  limit?: number;
  withCta?: boolean;
  heading?: React.ReactNode;
  intro?: string;
}) {
  const items = typeof limit === "number" ? GALLERY.items.slice(0, limit) : GALLERY.items;

  return (
    <section
      className="section relative"
      style={{ background: "linear-gradient(180deg, var(--color-mist) 0%, var(--color-foam) 40%)" }}
    >
      <div className="container-wide relative">
        <SectionHeading
          overline="The work"
          title={heading ?? GALLERY.heading}
          sub={intro ?? GALLERY.intro}
        />

        {/* before / after centerpiece */}
        <Reveal delay={0.05} className="mx-auto mt-12 max-w-3xl">
          <BeforeAfter
            before={GALLERY.beforeAfter.before}
            after={GALLERY.beforeAfter.after}
            beforeAlt={`${GALLERY.beforeAfter.label}, before`}
            afterAlt={`${GALLERY.beforeAfter.label}, after`}
          />
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-chrome">
            <Sparkles className="h-4 w-4 text-sky" aria-hidden />
            {GALLERY.beforeAfter.caption} Drag to compare.
          </p>
        </Reveal>

        {/* stills grid */}
        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {items.map((item, i) => (
            <Reveal key={item.image} className={cn(i % 5 === 0 && "lg:row-span-2")}>
              <figure className="group h-full">
                <PhotoFrame
                  src={item.image}
                  alt={`${item.title}. ${item.caption}`}
                  ratio={i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}
                  className="h-full"
                  imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
                <figcaption className="mt-3 px-1">
                  <span className="block font-display text-[1.05rem] leading-tight text-ink">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-chrome">{item.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </RevealGroup>

        {withCta && (
          <div className="mt-12 flex justify-center">
            <Button href="/gallery" variant="outline" size="md">
              See the full gallery
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
