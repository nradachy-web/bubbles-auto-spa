"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ as FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <section className="section relative bg-foam">
      <div className="container-site">
        <SectionHeading overline="Good to know" title="Questions, answered" />

        <div className="mx-auto mt-12 max-w-3xl">
          <ul className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `${baseId}-panel-${i}`;
              const btnId = `${baseId}-btn-${i}`;
              return (
                <Reveal as="li" key={item.q} delay={i * 0.03}>
                  <div
                    className={cn(
                      "glass overflow-hidden rounded-2xl transition-colors duration-300",
                      isOpen && "ring-1 ring-[var(--glass-light-border-hover)]"
                    )}
                  >
                    <h3 className="m-0">
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="focus-ring flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                      >
                        <span
                          className={cn(
                            "font-display text-[1.0625rem] leading-snug transition-colors duration-300",
                            isOpen ? "text-blue" : "text-ink"
                          )}
                        >
                          {item.q}
                        </span>
                        <motion.span
                          aria-hidden
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 26 }}
                          className={cn(
                            "grid size-8 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                            isOpen ? "border-blue text-blue" : "border-[var(--hairline-col)] text-chrome"
                          )}
                        >
                          <Plus className="size-4" strokeWidth={2} />
                        </motion.span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={
                            reduce
                              ? { duration: 0 }
                              : {
                                  height: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
                                  opacity: { duration: 0.24, ease: "easeOut" },
                                }
                          }
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="hairline mb-4" />
                            <p className="text-[0.975rem] leading-relaxed text-slate">{item.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
