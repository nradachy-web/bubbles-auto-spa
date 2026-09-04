"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { BRAND, QUOTE, SERVICE_OPTIONS, SERVICE_MODES, VEHICLE_TYPES, WEB3FORMS_KEY } from "@/lib/constants";
import VehicleTypePicker from "./VehicleTypePicker";

const STEPS = ["Vehicle", "Services", "Contact", "Review"] as const;
const LAST = STEPS.length - 1;

type Contact = { name: string; phone: string; email: string; notes: string };
type ContactKey = keyof Contact;

// Contact inputs in visual order. Their ids are `quote-${key}`; used to move
// focus to the first invalid field when the contact step fails validation.
const CONTACT_FIELD_ORDER: ContactKey[] = ["name", "phone", "email"];

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

/**
 * Four steps: vehicle, services, contact, review. Plain white panel on a
 * hairline. Steps switch in place, no animation. Sends through Web3Forms and
 * routes to /thank-you only when the API confirms delivery. Without a real
 * key it shows the error with the phone fallback instead of a fake success,
 * so a lead is never silently dropped.
 */
export default function QuoteForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [vehicleType, setVehicleType] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [mode, setMode] = useState<string>("shop");
  const [contact, setContact] = useState<Contact>({ name: "", phone: "", email: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const clearError = (key: string) =>
    setErrors((e) => {
      if (!e[key]) return e;
      const rest = { ...e };
      delete rest[key];
      return rest;
    });

  const pickVehicle = (id: string) => {
    setVehicleType(id);
    clearError("vehicle");
  };

  const toggleService = (id: string) => {
    setServices((p) => (p.includes(id) ? p.filter((s) => s !== id) : [...p, id]));
    clearError("services");
  };

  const setField = (key: ContactKey, value: string) => {
    setContact((c) => ({ ...c, [key]: value }));
    clearError(key);
  };

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};
    if (step === 0 && !vehicleType) e.vehicle = "Pick your vehicle type so we can size the job.";
    if (step === 1 && services.length === 0) e.services = "Pick at least one service.";
    if (step === 2) {
      if (!contact.name.trim()) e.name = "Your name helps us reach you.";
      if (!contact.phone.trim()) e.phone = "A phone number is required.";
      if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) e.email = "That email looks off.";
    }
    setErrors(e);
    return e;
  };

  const next = () => {
    const e = validate();
    if (Object.keys(e).length === 0) {
      setStep((s) => Math.min(s + 1, LAST));
      return;
    }
    // Move focus to the first invalid contact field so its label and error are
    // read out. Vehicle and services errors are announced by their role="alert".
    const firstInvalid = CONTACT_FIELD_ORDER.find((k) => e[k]);
    if (firstInvalid) document.getElementById(`quote-${firstInvalid}`)?.focus();
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const goTo = (i: number) => {
    if (i < step) setStep(i);
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

    const hasKey = Boolean(WEB3FORMS_KEY) && !WEB3FORMS_KEY.startsWith("REPLACE");

    // Without a real key nothing can deliver the lead. Show the error with the
    // phone fallback instead of routing to a thank-you page nobody will act on.
    if (!hasKey) {
      console.warn("[QuoteForm] WEB3FORMS_KEY not set. Lead not delivered:", message);
      setSubmitError(QUOTE.error);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Detailing Quote: ${contact.name} (${vehicleLabel || "vehicle"})`,
          from_name: "Bubbles Auto Spa Website",
          name: contact.name,
          phone: contact.phone,
          // Only send a reply-to when the customer gave one. Never fabricate it.
          ...(contact.email ? { email: contact.email } : {}),
          vehicle: vehicleStr,
          services: serviceLabels.join(", "),
          preference: modeLabel,
          message,
        }),
      });
      // Web3Forms can answer 200 with success:false, so the body decides,
      // not just the status code.
      const data: { success?: unknown } | null = await res.json().catch(() => null);
      if (!res.ok || !data || data.success !== true) throw new Error("send failed");
      router.push("/thank-you");
    } catch {
      setSubmitError(QUOTE.error);
      setSubmitting(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    if (step < LAST) next();
    else void submit();
  };

  const reviewRows = [
    { label: "Vehicle", value: vehicleStr || vehicleLabel },
    { label: "Services", value: serviceLabels.join(", ") },
    { label: "Shop or mobile", value: modeLabel },
    { label: "Name", value: contact.name },
    { label: "Phone", value: contact.phone },
    { label: "Email", value: contact.email },
    { label: "Notes", value: contact.notes },
  ].filter((r) => r.value);

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-panel border hairline bg-white p-6 sm:p-8">
      {/* step indicator */}
      <ol className="flex items-center justify-between gap-3" aria-label="Quote steps">
        {STEPS.map((label, i) => {
          const current = i === step;
          const done = i < step;
          return (
            <li key={label} className="t-small">
              {done ? (
                <button type="button" onClick={() => goTo(i)} className="text-steel transition-colors hover:text-ink">
                  {label}
                </button>
              ) : (
                <span aria-current={current ? "step" : undefined} className={current ? "text-ink" : "text-steel"}>
                  {label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <div className="mt-3 h-0.5 bg-concrete" aria-hidden>
        <div className="h-full bg-blue transition-[width] duration-300" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
      </div>
      <p className="sr-only" aria-live="polite">
        Step {step + 1} of {STEPS.length}: {STEPS[step]}
      </p>

      {/* step body */}
      <div className="mt-8 min-h-[300px]">
        {step === 0 && (
          <div className="space-y-6">
            <div>
              <h3 className="t-h3">{QUOTE.steps.vehicle.header}</h3>
              <p className="t-body muted mt-2">{QUOTE.steps.vehicle.helper}</p>
            </div>
            <VehicleTypePicker value={vehicleType} onChange={pickVehicle} />
            {errors.vehicle && (
              <p className="error-text t-caption" role="alert">
                {errors.vehicle}
              </p>
            )}
            <div>
              <label htmlFor="quote-vehicle-info" className="t-small mb-2 block">
                Year, make, and model <span className="muted">(optional)</span>
              </label>
              <input
                id="quote-vehicle-info"
                name="vehicle"
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
              <h3 className="t-h3">{QUOTE.steps.services.header}</h3>
              <p className="t-body muted mt-2">{QUOTE.steps.services.helper}</p>
            </div>
            <div role="group" aria-label="Services">
              <div className="grid gap-2.5 sm:grid-cols-2">
                {SERVICE_OPTIONS.map((o) => {
                  const selected = services.includes(o.id);
                  return (
                    <button key={o.id} type="button" onClick={() => toggleService(o.id)} aria-pressed={selected} className="tile">
                      <span
                        aria-hidden
                        className={cn(
                          "grid h-[18px] w-[18px] flex-none place-items-center rounded-[3px] border",
                          selected ? "border-blue bg-blue text-white" : "border-ink/50"
                        )}
                      >
                        {selected && (
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6.2 4.8 9 10 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span className="t-small">{o.label}</span>
                    </button>
                  );
                })}
              </div>
              {errors.services && (
                <p className="error-text t-caption mt-3" role="alert">
                  {errors.services}
                </p>
              )}
            </div>
            <div>
              <p id="quote-mode-label" className="t-small mb-2">
                Where would you like it done?
              </p>
              <div className="grid grid-cols-2 gap-2.5" role="group" aria-labelledby="quote-mode-label">
                {SERVICE_MODES.map((m) => (
                  <button key={m.id} type="button" onClick={() => setMode(m.id)} aria-pressed={mode === m.id} className="tile">
                    <span className="t-small">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="t-h3">{QUOTE.steps.contact.header}</h3>
              <p className="t-body muted mt-2">{QUOTE.steps.contact.helper}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="quote-name" className="t-small mb-2 block">
                  Name
                </label>
                <input
                  id="quote-name"
                  name="name"
                  autoComplete="name"
                  className={cn("field", errors.name && "field-error")}
                  value={contact.name}
                  onChange={(e) => setField("name", e.target.value)}
                  placeholder="Your name"
                  aria-required="true"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "quote-name-error" : undefined}
                />
                {errors.name && (
                  <p id="quote-name-error" className="error-text t-caption mt-1.5" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="quote-phone" className="t-small mb-2 block">
                  Phone
                </label>
                <input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={cn("field", errors.phone && "field-error")}
                  value={contact.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  placeholder="Best number to reach you"
                  aria-required="true"
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="quote-phone-error" className="error-text t-caption mt-1.5" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="quote-email" className="t-small mb-2 block">
                Email <span className="muted">(optional)</span>
              </label>
              <input
                id="quote-email"
                name="email"
                type="email"
                autoComplete="email"
                className={cn("field", errors.email && "field-error")}
                value={contact.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="you@email.com"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "quote-email-error" : undefined}
              />
              {errors.email && (
                <p id="quote-email-error" className="error-text t-caption mt-1.5" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="quote-notes" className="t-small mb-2 block">
                Anything we should know? <span className="muted">(optional)</span>
              </label>
              <textarea
                id="quote-notes"
                name="notes"
                className="field"
                rows={3}
                value={contact.notes}
                onChange={(e) => setField("notes", e.target.value)}
                placeholder="Condition, timeline, specific concerns, where the boat or RV is stored, anything helpful."
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="t-h3">{QUOTE.steps.review.header}</h3>
              <p className="t-body muted mt-2">{QUOTE.steps.review.helper}</p>
            </div>
            <dl className="ledger">
              {reviewRows.map((r) => (
                <div key={r.label} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="t-small muted">{r.label}</dt>
                  <dd className="t-body break-words">{r.value}</dd>
                </div>
              ))}
            </dl>
            <div>
              <p className="t-small">
                After you send this, we will reach out from <span className="t-num">{BRAND.phoneDisplay}</span> to confirm your quote and
                a time. Keep an eye out for that number.
              </p>
              <p className="t-caption muted mt-3">{QUOTE.trustMicro}</p>
            </div>
          </div>
        )}
      </div>

      {submitError && (
        <p className="error-text t-small mt-6" role="alert">
          {submitError}{" "}
          <a href={`tel:${BRAND.phoneTel}`} className="underline underline-offset-[3px]">
            Call <span className="t-num">{BRAND.phoneDisplay}</span>
          </a>
        </p>
      )}

      {/* actions */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" onClick={back} className="btn btn-outline">
            Back
          </button>
        ) : (
          <a href={`tel:${BRAND.phoneTel}`} className="btn btn-text">
            Call <span className="t-num">{BRAND.phoneDisplay}</span>
          </a>
        )}

        {step < LAST ? (
          <button type="submit" className="btn btn-solid">
            Continue
          </button>
        ) : (
          <button type="submit" disabled={submitting} className="btn btn-solid">
            {submitting ? (
              <>
                {/* the one circle on the site: a 16px border spinner */}
                <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Sending
              </>
            ) : (
              QUOTE.submit
            )}
          </button>
        )}
      </div>
    </form>
  );
}
