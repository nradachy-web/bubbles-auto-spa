"use client";

import { VEHICLE_TYPES } from "@/lib/constants";
import { VEHICLE_ICONS, type VehicleIconKey } from "@/components/icons/vehicles";
import { cn } from "@/lib/utils";

interface Props {
  value: string;
  onChange: (id: string) => void;
}

/** Six choice tiles, one per vehicle type. Line icon above a short label. */
export default function VehicleTypePicker({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6" role="group" aria-label="Vehicle type">
      {VEHICLE_TYPES.map((t) => {
        const Icon = VEHICLE_ICONS[t.id as VehicleIconKey] ?? VEHICLE_ICONS.car;
        const selected = value === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            aria-pressed={selected}
            className={cn("tile flex-col items-center justify-center", selected ? "text-blue" : "text-ink")}
          >
            <Icon className="h-7 w-14" />
            <span className="t-small">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
