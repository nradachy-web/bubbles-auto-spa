"use client";

import { Car, Truck, Bike, Caravan, Ship } from "lucide-react";
import { VEHICLE_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS = { Car, Truck, Bike, Caravan, Ship } as const;

export default function VehicleTypePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6">
      {VEHICLE_TYPES.map((t) => {
        const Icon = ICONS[t.icon as keyof typeof ICONS] ?? Car;
        const sel = value === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            aria-pressed={sel}
            className={cn(
              "focus-ring flex flex-col items-center gap-2 rounded-xl border p-3 transition-all duration-200",
              sel
                ? "border-blue bg-blue/[0.08] text-blue"
                : "border-[var(--glass-light-border)] bg-paper text-slate hover:border-blue/50 hover:text-ink"
            )}
          >
            <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
            <span className="text-xs font-medium">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
