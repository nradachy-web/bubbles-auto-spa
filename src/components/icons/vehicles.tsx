import type { ComponentType, SVGProps } from "react";

/**
 * Vehicle line icons for the quote form. Side profiles on a 64x32 canvas,
 * strokes only, inherit the text colour. Every wheeled vehicle shares the
 * same wheel size (r=4 at y=25) and the same ground line so the set sits
 * level in a row. The boat floats over a waterline instead.
 */

export type VehicleIconKey = "car" | "suv" | "truck" | "motorcycle" | "rv" | "boat";
export type VehicleIconProps = SVGProps<SVGSVGElement>;

function Frame({ children, ...props }: VehicleIconProps) {
  return (
    <svg
      viewBox="0 0 64 32"
      width={64}
      height={32}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function Ground() {
  return <path d="M3 30H61" />;
}

function Wheel({ cx }: { cx: number }) {
  return <circle cx={cx} cy={25} r={4} />;
}

/** Three-box sedan. Low roof, long hood, trunk. */
export function CarIcon(props: VehicleIconProps) {
  return (
    <Frame {...props}>
      <path d="M6 24V20.5C6 18.6 7.2 17.6 9.2 17.3L19 16L26 10H38L46 16L55 17.3C57.3 17.6 58.5 18.6 58.5 20.5V24H52.5A5.5 5.5 0 0 0 41.5 24H22.5A5.5 5.5 0 0 0 11.5 24Z" />
      <path d="M19 16H46" />
      <Wheel cx={17} />
      <Wheel cx={47} />
      <Ground />
    </Frame>
  );
}

/** Tall, upright rear, long greenhouse, short hood. */
export function SuvIcon(props: VehicleIconProps) {
  return (
    <Frame {...props}>
      <path d="M6 24V9C6 7 7 6 9 6H37L45 13L55 14.2C57.3 14.5 58.5 15.6 58.5 17.5V24H52.5A5.5 5.5 0 0 0 41.5 24H22.5A5.5 5.5 0 0 0 11.5 24Z" />
      <path d="M6 13H45" />
      <Wheel cx={17} />
      <Wheel cx={47} />
      <Ground />
    </Frame>
  );
}

/** Pickup. Open bed at the back, cab forward, longer wheelbase. */
export function TruckIcon(props: VehicleIconProps) {
  return (
    <Frame {...props}>
      <path d="M6 24V13H30V7.5C30 6.7 30.7 6 31.5 6H41L48 13H55C57.3 13 58.5 14 58.5 16V24H54.5A5.5 5.5 0 0 0 43.5 24H20.5A5.5 5.5 0 0 0 9.5 24Z" />
      <path d="M30 13H48" />
      <Wheel cx={15} />
      <Wheel cx={49} />
      <Ground />
    </Frame>
  );
}

/**
 * Shorter wheelbase than the cars (a bike is shorter than a car). Seat and tank
 * line over a closed tank-and-engine body, swingarm and rear strut to the back
 * wheel, raked fork and bars at the front.
 */
export function MotorcycleIcon(props: VehicleIconProps) {
  return (
    <Frame {...props}>
      <path d="M13 14H25L29 10.5H35L38 12.5" />
      <path d="M25 14L30 21H34L38 12.5" />
      <path d="M30 21L22.8 23.6" />
      <path d="M15 14L17.6 21.2" />
      <path d="M38 12.5L43 21.5" />
      <path d="M38 12.5L39.5 8.5M36 8.5H43" />
      <Wheel cx={19} />
      <Wheel cx={45} />
      <Ground />
    </Frame>
  );
}

/** Motorhome. Boxy body with a side window, cab-over ledge, raked windshield. */
export function RvIcon(props: VehicleIconProps) {
  return (
    <Frame {...props}>
      <path d="M6 24V7C6 5.9 6.9 5 8 5H42C43.1 5 44 5.9 44 7V10H47L51 16H56.5C57.6 16 58.5 16.9 58.5 18V24H53.5A5.5 5.5 0 0 0 42.5 24H21.5A5.5 5.5 0 0 0 10.5 24Z" />
      <rect x="12" y="9" width="14" height="7" rx="1" />
      <Wheel cx={16} />
      <Wheel cx={48} />
      <Ground />
    </Frame>
  );
}

/** Hull with a flat deck and a rising bow, small console, waterline below. */
export function BoatIcon(props: VehicleIconProps) {
  return (
    <Frame {...props}>
      <path d="M7 13V22.5C7 24.4 8.6 26 10.5 26H34C45 26 54 20 58 13Z" />
      <path d="M27 13V9H34L38 13" />
      <path d="M2 29.5Q7 27.5 12 29.5T22 29.5T32 29.5T42 29.5T52 29.5T62 29.5" />
    </Frame>
  );
}

export const VEHICLE_ICONS: Record<VehicleIconKey, ComponentType<VehicleIconProps>> = {
  car: CarIcon,
  suv: SuvIcon,
  truck: TruckIcon,
  motorcycle: MotorcycleIcon,
  rv: RvIcon,
  boat: BoatIcon,
};
