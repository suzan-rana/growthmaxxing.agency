import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const btn =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[1.1667rem] font-bold leading-none transition duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0";

export function Button({
  href, children, variant = "primary", className = "", arrow = true,
}: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "white"; className?: string; arrow?: boolean }) {
  const styles = {
    primary: "bg-orange text-white hover:bg-orange-hover hover:shadow-[0_10px_30px_rgba(242,106,27,0.4)]",
    secondary: "border border-line bg-surface text-ink hover:shadow-[0_10px_30px_rgba(242,106,27,0.18)]",
    white: "bg-white text-black hover:shadow-[0_10px_30px_rgba(27,20,16,0.25)]",
  }[variant];
  const external = href.startsWith("http");
  return (
    <a href={href} className={`${btn} ${styles} ${className}`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
      {arrow && <ArrowRight aria-hidden strokeWidth={1.75} className="size-5 transition-transform group-hover:translate-x-0.5" />}
    </a>
  );
}

export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-orange-tint px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-orange-ink ${className}`}>
      {children}
    </span>
  );
}

export function IconCircle({ icon: Icon, className = "" }: { icon: LucideIcon; className?: string }) {
  return (
    <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-orange-tint text-orange-ink ${className}`}>
      <Icon aria-hidden strokeWidth={1.75} className="size-6" />
    </span>
  );
}

export function Mark({ children }: { children: ReactNode }) {
  return <span className="mark">{children}</span>;
}

export const card = "rounded-card border border-line bg-surface shadow-warm";
export const section = "mx-auto w-full max-w-6xl px-5 sm:px-8";
export const h2 = "font-display text-5xl font-bold leading-[0.95] tracking-[0.005em] sm:text-7xl";
