"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faq } from "@/lib/content";
import { h2, section } from "./ui";
import { Reveal } from "./Motion";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className={`${section} py-24 sm:py-32`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <Reveal><h2 className={h2}>{faq.heading}</h2></Reveal>
        <Reveal delay={0.08}>
          <ul className="space-y-3">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className={`overflow-hidden rounded-[1.75rem] transition-colors duration-300 ${isOpen ? "bg-surface shadow-warm" : "bg-orange-tint/60"}`}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-xl font-bold tracking-tight sm:p-6 sm:text-2xl"
                    >
                      {item.q}
                      <span className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-orange-ink transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <ChevronDown aria-hidden strokeWidth={1.75} className="size-5" />
                      </span>
                    </button>
                  </h3>
                  <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} inert={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-lg leading-relaxed text-muted sm:px-6">{item.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
