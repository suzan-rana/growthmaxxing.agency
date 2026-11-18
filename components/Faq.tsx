"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faq } from "@/lib/content";
import { Label, h2, section } from "./ui";
import { Reveal } from "./Motion";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className={`${section} py-24 sm:py-32`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <Reveal><Label>04 / FAQ</Label><h2 className={`${h2} mt-5`}>{faq.heading}</h2></Reveal>
        <Reveal delay={0.08}>
          <ul className="border-t-2 border-ink">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-line">
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-btn-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left font-display text-2xl sm:text-3xl">
                      {item.q}
                      <Plus aria-hidden strokeWidth={1.5} className={`size-6 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45 text-accent-ink" : ""}`} />
                    </button>
                  </h3>
                  <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} inert={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden"><p className="max-w-2xl pb-7 text-lg leading-relaxed text-muted">{item.a}</p></div>
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
