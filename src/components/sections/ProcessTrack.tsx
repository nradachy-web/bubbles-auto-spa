"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PROCESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Rising water-level process track. A sand rail fills blue as you scroll the real
 * detailing sequence. Numbering is honest here because the order genuinely matters.
 */
export default function ProcessTrack() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section relative bg-foam">
      <div className="container-site relative">
        <SectionHeading overline="How it works" title={PROCESS.heading} sub={PROCESS.intro} />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* rail */}
          <div className="absolute bottom-2 left-[22px] top-2 w-[3px] rounded-full bg-sand sm:left-[26px]">
            <motion.div
              className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-sky to-blue"
              style={{ height: reduce ? "100%" : fillHeight }}
            />
          </div>

          <ol className="space-y-10">
            {PROCESS.steps.map((step, i) => (
              <Reveal as="li" key={step.title} className="relative flex gap-6">
                <div className="relative z-10 flex-none">
                  <span className="relative grid h-12 w-12 place-items-center rounded-full border border-[var(--glass-light-border)] bg-paper shadow-[0_8px_20px_-12px_rgba(10,27,46,0.5)] sm:h-14 sm:w-14">
                    <span className="font-display text-[1.1rem] text-blue tnum sm:text-[1.25rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* a couple of beads release at the node */}
                    {!reduce && (
                      <>
                        <motion.span
                          className="bead absolute -right-1 top-1 h-2 w-2"
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: [0, 0.9, 0], y: [8, -28] }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.6, delay: 0.2 }}
                        />
                        <motion.span
                          className="bead absolute -left-1 top-2 h-1.5 w-1.5"
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: [0, 0.8, 0], y: [6, -22] }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.6, delay: 0.5 }}
                        />
                      </>
                    )}
                  </span>
                </div>
                <div className="pt-1.5 pb-1">
                  <h3 className="font-display text-[1.2rem] leading-snug text-ink sm:text-[1.35rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-[1rem] leading-relaxed text-slate">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
