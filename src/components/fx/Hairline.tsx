import { cn } from "@/lib/utils";

/** Quiet chrome divider rule. For the signature wavy divider use <FoamLine /> instead. */
export default function Hairline({ className }: { className?: string }) {
  return <div className={cn("hairline-grad", className)} aria-hidden />;
}
