"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  external?: boolean;
  onDark?: boolean;
  ariaLabel?: string;
}

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-pill font-body font-semibold tracking-[0.01em] transition-all duration-300 cursor-pointer focus-ring";

function variantClass(variant: Variant, onDark: boolean): string {
  switch (variant) {
    case "primary":
      return "liquid bg-blue text-white shadow-[0_8px_24px_-8px_rgba(26,115,209,0.5)]";
    case "outline":
      return onDark
        ? "bg-transparent text-white border border-[var(--glass-dark-border-hover)] hover:border-sky hover:text-sky"
        : "bg-transparent text-ink border border-[var(--glass-light-border)] hover:border-blue hover:text-blue";
    case "ghost":
      return onDark
        ? "bg-transparent text-[#cfe0f0] hover:text-white"
        : "bg-transparent text-slate hover:text-blue";
  }
}

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-8 py-4 text-[1rem]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
  external = false,
  onDark = false,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    base,
    variantClass(variant, onDark),
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  const content = <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>;

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <motion.a href={href} aria-label={ariaLabel} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes}>
          {content}
        </motion.a>
      );
    }
    return (
      <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={href} aria-label={ariaLabel} className={classes}>
          {content}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
