"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Button } from "./ui";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
      <span aria-hidden className="flex size-8 items-center justify-center rounded-xl bg-orange text-base font-black text-white">G</span>
      <span className={light ? "text-white" : "text-ink"}>{site.name}</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 pl-4 transition-all sm:pl-5 duration-300 ${
          scrolled || open ? "border-line bg-cream/80 shadow-warm backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <Logo />
        <ul className="hidden items-center gap-1 md:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-muted transition hover:bg-orange-tint hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button href="#contact" arrow={false} className="!px-4 !py-2.5 whitespace-nowrap max-sm:!text-base">{nav.cta}</Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="flex size-11 items-center justify-center rounded-full bg-orange-tint text-ink md:hidden"
          >
            {open ? <X aria-hidden strokeWidth={1.75} /> : <Menu aria-hidden strokeWidth={1.75} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-cream/95 p-3 shadow-warm backdrop-blur-xl md:hidden">
          <ul>
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3.5 font-display text-xl font-bold hover:bg-orange-tint">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
