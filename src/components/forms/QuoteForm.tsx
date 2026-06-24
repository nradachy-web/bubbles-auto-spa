"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BRAND,
  QUOTE,
  SERVICE_OPTIONS,
  SERVICE_MODES,
  VEHICLE_TYPES,
  WEB3FORMS_KEY,
} from "@/lib/constants";
import VehicleTypePicker from "./VehicleTypePicker";

const STEPS = ["Vehicle", "Services", "Contact", "Review"] as const;

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 50 : -50, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -50 : 50, opacity: 0 }),
};

function captureUtm(): Record<string, string> | null {
  if (typeof window === "undefined") return null;
  const p = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"].forEach((k) => {
    const v = p.get(k);
    if (v) out[k] = v;
  });
  if (document.referrer) out.referrer = document.referrer;
  return Object.keys(out).length ? out : null;
}

export default function QuoteForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [vehicleType, setVehicleType] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [mode, setMode] = useState<string>("shop");
  const [contact, setContact] = useState({ name: "", phone: "", email: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleService = (id: string) =>
    setServices((p) => (p.includes(id) ? p.filter((s) => s !== id) : [...p, id]));

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 0 && !vehicleType) e.vehicle = "Pick your vehicle type so we can size the job.";
    if (step === 1 && services.length === 0) e.services = "Pick at least one service.";
    if (step === 2) {
      if (!contact.name.trim()) e.name = "Your name helps us reach you.";
      if (!contact.phone.trim()) e.phone = "A phone number is required.";
      if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) e.email = "That email looks off.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validate()) {
      setDir(1);
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
    }
  };
  const back = () => {
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const vehicleLabel = VEHICLE_TYPES.find((v) => v.id === vehicleType)?.label ?? "";
  const vehicleStr = [vehicleLabel, vehicleInfo].filter(Boolean).join(", ");
  const serviceLabels = services.map((id) => SERVICE_OPTIONS.find((o) => o.id === id)?.label ?? id);
  const modeLabel = SERVICE_MODES.find((m) => m.id === mode)?.label ?? "";

  const submit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    const utm = captureUtm();
    const message = [
      `New quote request from ${contact.name}`,
      ``,
      `Vehicle: ${vehicleStr || vehicleLabel}`,
      `Services: ${serviceLabels.join(", ")}`,
      `Preference: ${modeLabel}`,
      ``,
      `Name: ${contact.name}`,
      `Phone: ${contact.phone}`,
      contact.email ? `Email: ${contact.email}` : "",
      contact.notes ? `Notes: ${contact.notes}` : "",
      utm ? `\nSource: ${JSON.stringify(utm)}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const hasKey = WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith("REPLACE");

    try {
      if (hasKey) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New Detailing Quote: ${contact.name} (${vehicleLabel || "vehicle"})`,
            from_name: "Bubbles Auto Spa Website",
            name: contact.name,
            phone: contact.phone,
            email: contact.email || "no-reply@bubblesautospa.org",
            vehicle: vehicleStr,
            services: serviceLabels.join(", "),
            preference: modeLabel,
            message,
          }),
        });
        if (!res.ok) throw new Error("send failed");
      } else if (typeof window !== "undefined") {
        console.warn("[QuoteForm] WEB3FORMS_KEY not set. Lead not delivered:", message);
      }
      router.push("/thank-you");
    } catch {
      setSubmitError(QUOTE.error);
      setSubmitting(false);
    }
  };

  return (
    <div className="glass-strong relative overflow-hidden rounded-3xl p-5 sm:p-8">
      {/* progress */}
      <div className="mb-7">
        <div className="mb-2 flex justify-between">
          {STEPS.map((label, i) => (
            <button
              key={label}
              onClick={() => i < step && (setDir(-1), setStep(i))}
              className={cn(
                "text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors",
                i <= step ? "text-blue" : "text-chrome",
                i < step && "cursor-pointer hover:text-sky"
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="h-1.5 overflow-hidden rounded-pill bg-mist">
          <motion.div
            className="h-full rounded-pill bg-gradient-to-r from-sky to-blue"
            initial={false}
            animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <div className="relative min-h-[340px] overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <div className="space-y-5">
                <div>
                  <h3 className="font-display text-xl text-ink">{QUOTE.steps.vehicle.header}</h3>
                  <p className="mt-1 text-sm text-slate">{QUOTE.steps.vehicle.helper}</p>
                </div>
                <VehicleTypePicker value={vehicleType} onChange={setVehicleType} />
                {errors.vehicle && <p className="text-sm text-[#d6453f]">{errors.vehicle}</p>}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate">
                    Year, make, and model <span className="text-chrome">(optional)</span>
                  </label>
                  <input
                    className="field"
                    value={vehicleInfo}
                    onChange={(e) => setVehicleInfo(e.target.value)}
                    placeholder="e.g. 2021 Jeep Grand Wagoneer, black"
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl text-ink">{QUOTE.steps.services.header}</h3>
                  <p className="mt-1 text-sm text-slate">{QUOTE.steps.services.helper}</p>
                </div>
                {errors.services && <p className="text-sm text-[#d6453f]">{errors.services}</p>}
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {SERVICE_OPTIONS.map((o) => {
                    const sel = services.includes(o.id);
                    return (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => toggleService(o.id)}
                        className={cn(
                          "flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all",
                          sel
                            ? "border-blue bg-blue/[0.08]"
                            : "border-[var(--glass-light-border)] bg-paper hover:border-blue/50"
                        )}
                      >
                        <span
                          className={cn(
                            "grid h-5 w-5 shrink-0 place-items-center rounded-md border",
                            sel ? "border-blue bg-blue" : "border-chrome"
                          )}
                        >
                          {sel && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
                        </span>
                        <span className={cn("text-sm font-medium", sel ? "text-ink" : "text-slate")}>
                          {o.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-slate">Where would you like it done?</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {SERVICE_MODES.map((m) => {
                      const sel = mode === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMode(m.id)}
                          className={cn(
                            "rounded-xl border p-3 text-sm font-medium transition-all",
                            sel
                              ? "border-blue bg-blue text-white"
                              : "border-[var(--glass-light-border)] bg-paper text-slate hover:border-blue/50"
                          )}
                        >
                          {m.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="font-display text-xl text-ink">{QUOTE.steps.contact.header}</h3>
                  <p className="mt-1 text-sm text-slate">{QUOTE.steps.contact.helper}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate">Name *</label>
                    <input
                      className={cn("field", errors.name && "border-[#d6453f]")}
                      value={contact.name}
                      onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-[#d6453f]">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate">Phone *</label>
                    <input
                      className={cn("field", errors.phone && "border-[#d6453f]")}
                      type="tel"
                      value={contact.phone}
                      onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                      placeholder="(586) 555-0123"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-[#d6453f]">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate">
                    Email <span className="text-chrome">(optional)</span>
                  </label>
                  <input
                    className={cn("field", errors.email && "border-[#d6453f]")}
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-[#d6453f]">{errors.email}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate">
                    Anything we should know? <span className="text-chrome">(optional)</span>
                  </label>
                  <textarea
                    className="field resize-none"
                    rows={3}
                    value={contact.notes}
                    onChange={(e) => setContact((c) => ({ ...c, notes: e.target.value }))}
                    placeholder="Condition, timeline, specific concerns, where the boat or RV is stored, anything helpful."
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl text-ink">{QUOTE.steps.review.header}</h3>
                  <p className="mt-1 text-sm text-slate">{QUOTE.steps.review.helper}</p>
                </div>
                <div className="space-y-2.5">
                  <ReviewRow label="Vehicle" value={vehicleStr || vehicleLabel} />
                  <ReviewRow label="Services" value={serviceLabels.join(", ")} />
                  <ReviewRow label="Preference" value={modeLabel} />
                  <ReviewRow label="Name" value={contact.name} />
                  <ReviewRow label="Phone" value={contact.phone} />
                  {contact.email && <ReviewRow label="Email" value={contact.email} />}
                  {contact.notes && <ReviewRow label="Notes" value={contact.notes} />}
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-blue/25 bg-blue/[0.06] px-4 py-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden />
                  <p className="text-sm leading-relaxed text-ink">
                    After you send this,{" "}
                    <span className="font-semibold text-blue">
                      we will reach out from {BRAND.phoneDisplay}
                    </span>{" "}
                    to confirm your quote and a time. Keep an eye out for that number.
                  </p>
                </div>
                <p className="text-xs text-chrome">{QUOTE.trustMicro}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {submitError && (
        <p className="mt-4 rounded-xl border border-[#d6453f]/40 bg-[#d6453f]/10 px-4 py-3 text-sm text-[#b23a35]">
          {submitError}{" "}
          <a href={`tel:${BRAND.phoneTel}`} className="font-semibold underline">
            Call {BRAND.phoneDisplay}
          </a>
        </p>
      )}

      <div className="mt-7 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            onClick={back}
            className="rounded-pill border border-[var(--glass-light-border)] px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
          >
            Back
          </button>
        ) : (
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="inline-flex items-center gap-2 text-sm text-slate transition-colors hover:text-blue"
          >
            <Phone className="h-4 w-4" /> Prefer to call? {BRAND.phoneDisplay}
          </a>
        )}

        {step < STEPS.length - 1 ? (
          <button
            onClick={next}
            className="liquid rounded-pill bg-blue px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(26,115,209,0.5)]"
          >
            <span className="relative z-[1]">Continue</span>
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={submitting}
            className={cn(
              "liquid rounded-pill bg-blue px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(26,115,209,0.5)]",
              submitting && "opacity-60"
            )}
          >
            <span className="relative z-[1] flex items-center gap-2">
              {submitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : (
                QUOTE.submit
              )}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-[var(--hairline-col)] bg-foam/60 px-4 py-3">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-chrome">{label}</span>
      <span className="text-right text-sm text-ink">{value}</span>
    </div>
  );
}
