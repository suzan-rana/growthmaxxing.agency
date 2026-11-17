"use client";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold tracking-[0.005em]">
      <span aria-hidden className="flex size-8 items-center justify-center rounded-xl bg-orange text-base font-black text-white">G</span>
      <span className={light ? "text-white" : "text-ink"}>{site.name}</span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    document.body.style.overflow = open ? "hidden" : "";
    return () => window.removeEventListener("keydown", esc);
  }, [open]);
  const [left, right] = [nav.links.slice(0, 2), nav.links.slice(2)];
  const link = "px-4 py-2 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-white/80 transition hover:text-white";

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-6">
        <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-deep/75 px-3 py-2 pl-5 backdrop-blur-xl">
          <ul className="hidden items-center md:flex">
            {left.map((l) => <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>)}
          </ul>
          <Logo light />
          <ul className="hidden items-center md:flex">
            {right.map((l) => <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>)}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#contact" aria-label={nav.cta} className="flex size-10 items-center justify-center rounded-full bg-orange text-white transition hover:bg-orange-hover max-sm:hidden">
              <ArrowRight aria-hidden strokeWidth={1.75} className="size-5" />
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => setOpen((o) => !o)}
              className="rounded-full bg-white/15 px-4 py-2.5 text-xs font-medium uppercase leading-none tracking-[0.12em] text-white md:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>
      <div
        id="menu"
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-deep px-6 transition-[clip-path] duration-700 ease-[cubic-bezier(.76,0,.24,1)] md:hidden ${open ? "[clip-path:inset(0)]" : "[clip-path:inset(0_0_100%_0)]"}`}
      >
        <ul>
          {[...nav.links, { label: nav.cta, href: "#contact" }].map((l, i) => (
            <li key={l.href + l.label} className="border-b border-white/15">
              <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-5 py-4 text-[#e3ffc4] hover:text-orange">
                <span className="text-sm text-orange">0{i + 1}</span>
                <span className="font-display text-6xl font-bold">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs uppercase tracking-[0.14em] text-white/50">{site.email}</p>
      </div>
    </>
  );
}
