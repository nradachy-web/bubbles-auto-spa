import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
  topEdge?: boolean;
}

/** Frosted glass surface. Light by default (foam half), dark for deep-water beats. */
export default function GlassCard({
  children,
  className,
  hover = true,
  dark = false,
  topEdge = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        dark ? "glass-dark" : "glass",
        hover && (dark ? "card-hover card-hover-dark" : "card-hover"),
        className
      )}
    >
      {topEdge && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background: dark
              ? "linear-gradient(90deg, transparent, rgba(95,168,230,0.45), transparent)"
              : "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)",
          }}
        />
      )}
      {children}
    </div>
  );
}
