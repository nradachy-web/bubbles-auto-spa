import { cn } from "@/lib/utils";

/**
 * FoamEdge: the line where a black studio section meets the white daylight
 * section below it. A shallow white foam edge (the same wave as the hero rinse)
 * sits on the boundary and reaches up into the black. Zero height in the flow,
 * so section spacing is unchanged. Decorative, hidden from assistive tech.
 *
 * Place it between the two sections in the page, never inside a white section
 * that follows another white one.
 *
 * The wave layer stretches to the box (viewBox 1440x180, scaleY flipped). The
 * bubble layer uses a viewBox with the same proportions as the rendered box at
 * desktop width (1440x76), so the circles stay round instead of squashing.
 *
 * The box hangs 1px below the boundary so the white fill also covers the top
 * hairline of a following section that carries border-t (quote form, FAQ);
 * otherwise that line shows through directly under the foam.
 */
export default function FoamEdge({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("on-white pointer-events-none relative z-10 h-0", className)}>
      <div className="absolute inset-x-0 -bottom-px h-[calc(clamp(22px,5.3vw,76px)_+_1px)]">
        <svg
          className="absolute inset-0 block h-full w-full"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          fill="#ffffff"
          style={{ transform: "scaleY(-1)" }}
        >
          <path d="M0 0h1440v62c-72 30-134 56-214 52-84-4-124-52-208-56-88-4-140 46-232 50-96 4-152-50-244-56-92-6-158 44-256 48C190 104 96 70 0 90V0Z" />
        </svg>
        <svg className="absolute inset-0 block h-full w-full" viewBox="0 0 1440 76" preserveAspectRatio="none" fill="#ffffff">
          <circle cx="182" cy="22" r="9" opacity="0.95" />
          <circle cx="238" cy="9" r="4" opacity="0.9" />
          <circle cx="518" cy="18" r="6" opacity="0.9" />
          <circle cx="772" cy="20" r="11" opacity="0.95" />
          <circle cx="836" cy="7" r="3.5" opacity="0.9" />
          <circle cx="1092" cy="19" r="8" opacity="0.95" />
          <circle cx="1312" cy="10" r="5" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}
