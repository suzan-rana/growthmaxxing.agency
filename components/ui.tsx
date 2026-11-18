import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Button({
  href, children, variant = "primary", className = "",
}: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "inverse"; className?: string }) {
  const styles = {
    primary: "bg-ink text-paper hover:bg-accent",
    secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
    inverse: "bg-ink text-paper hover:bg-paper hover:text-ink",
  }[variant];
  const external = href.startsWith("http");
  return (
    <a href={href} className={`group inline-flex items-center gap-3 rounded-sm px-5 py-3.5 text-[0.95rem] font-medium leading-none transition-colors duration-150 ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
      <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted ${className}`}>{children}</p>;
}

export const section = "mx-auto w-full max-w-[84rem] px-5 sm:px-10";
export const h2 = "font-display text-5xl leading-[0.98] sm:text-7xl";
