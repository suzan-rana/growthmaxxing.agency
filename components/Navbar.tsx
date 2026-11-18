"use client";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function Logo() {
  return <a href="#top" className="font-display text-2xl leading-none">growthmaxxing<span className="text-accent">.</span></a>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    document.body.style.overflow = open ? "hidden" : "";
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
        <nav aria-label="Main" className="mx-auto flex h-16 w-full max-w-[84rem] items-center justify-between px-5 sm:px-10">
          <Logo />
          <ul className="hidden items-center gap-8 md:flex">
            {nav.links.map((l) => (
              <li key={l.href}><a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">{l.label}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-sm bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent sm:block">{nav.cta}</a>
            <button type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}
              className="font-mono text-xs uppercase tracking-[0.1em] md:hidden">{open ? "Close" : "Menu"}</button>
          </div>
        </nav>
      </header>
      <div id="menu" inert={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-bg px-6 pt-16 transition-[clip-path] duration-500 ease-[cubic-bezier(.76,0,.24,1)] md:hidden ${open ? "[clip-path:inset(0)]" : "[clip-path:inset(0_0_100%_0)]"}`}>
        <ul>
          {[...nav.links, { label: nav.cta, href: "#contact" }].map((l, i) => (
            <li key={l.href + l.label} className="border-b border-line">
              <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-5 py-4 hover:text-accent-ink">
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                <span className="font-display text-5xl">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-xs text-muted">{site.email}</p>
      </div>
    </>
  );
}
