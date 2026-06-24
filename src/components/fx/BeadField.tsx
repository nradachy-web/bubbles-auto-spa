import { cn } from "@/lib/utils";

/**
 * Ambient deep-water backdrop for the dark beats: two very soft blue orbs and a
 * sparse scatter of beading dots. Decoration only, drifts slowly via CSS.
 */
const DOTS = [
  { left: "12%", top: "30%", size: 5 },
  { left: "26%", top: "68%", size: 8 },
  { left: "78%", top: "22%", size: 6 },
  { left: "88%", top: "60%", size: 10 },
  { left: "54%", top: "78%", size: 5 },
];

export default function BeadField({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <span className="orb drift" style={{ width: 460, height: 460, top: -140, left: -120 }} />
      <span
        className="orb drift"
        style={{ width: 380, height: 380, bottom: -150, right: -110, animationDelay: "-8s" }}
      />
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="bead drift"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            animationDelay: `${-i * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
