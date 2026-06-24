"use client";

const WORDS = [
  "Exterior Detailing",
  "Interior Detailing",
  "Paint Correction",
  "Ceramic Coating",
  "Marine & RV",
  "Shop or Mobile",
  "Certified Nasiol · 3M · 3D",
];

function Bubble() {
  return (
    <span className="mx-6 inline-flex h-2.5 w-2.5 shrink-0 self-center rounded-full" aria-hidden
      style={{ background: "radial-gradient(circle at 35% 30%, rgba(214,236,255,0.95), rgba(95,168,230,0.6) 50%, rgba(95,168,230,0) 78%)" }} />
  );
}

function Sequence() {
  return (
    <span className="inline-flex items-center">
      {WORDS.map((w) => (
        <span key={w} className="inline-flex items-center">
          <span className="font-display text-[1.35rem] italic text-foam/90 sm:text-[1.6rem]">{w}</span>
          <Bubble />
        </span>
      ))}
    </span>
  );
}

/** Deep-water marquee ribbon: the menu drifts past like foam on a current. */
export default function ServicesMarquee() {
  return (
    <div className="marquee-host relative overflow-hidden bg-ink py-5" aria-label="Services offered">
      {/* edge fades */}
      <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{ background: "linear-gradient(90deg, var(--color-ink), transparent)" }} />
      <span aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{ background: "linear-gradient(270deg, var(--color-ink), transparent)" }} />
      <div className="marquee-track">
        <Sequence />
        <Sequence />
      </div>
    </div>
  );
}
