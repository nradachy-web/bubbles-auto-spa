import { cn } from "@/lib/utils";

interface Props {
  title: React.ReactNode;
  lede?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
  ledeClassName?: string;
}

/** Display heading plus optional lede. Left aligned, no overline. */
export default function SectionHeading({ title, lede, as = "h2", className, ledeClassName }: Props) {
  const Tag = as;
  return (
    <div className={cn("max-w-[52rem]", className)}>
      <Tag className={cn("t-display", as === "h1" ? "t-h1" : "t-h2")}>{title}</Tag>
      {lede && <p className={cn("t-lede muted mt-5 measure-wide", ledeClassName)}>{lede}</p>}
    </div>
  );
}
