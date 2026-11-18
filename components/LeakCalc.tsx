"use client";
import { useState } from "react";
import { leak } from "@/lib/content";
import { Button, Label, h2, section } from "./ui";

const field = "mt-1 w-full border-0 border-b border-ink/50 bg-transparent px-0 py-2 font-display text-4xl tabular-nums focus:border-accent focus:outline-none focus:ring-0";

function Num({ id, label, value, set, suffix }: { id: string; label: string; value: number; set: (n: number) => void; suffix?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">{label}</label>
      <div className="flex items-baseline gap-2">
        <input id={id} type="number" inputMode="numeric" min={0} value={value || ""} onChange={(e) => set(Math.max(0, Number(e.target.value)))} className={field} />
        {suffix && <span className="font-display text-3xl text-muted">{suffix}</span>}
      </div>
    </div>
  );
}

export function LeakCalc() {
  const [leads, setLeads] = useState(100);
  const [value, setValue] = useState(1500);
  const [close, setClose] = useState(25);
  const [lost, setLost] = useState(30);
  const monthly = Math.round(leads * (lost / 100) * (close / 100) * value);
  const fmt = (n: number) => n.toLocaleString("en-US");

  return (
    <section id="leak" className="border-y border-line bg-paper py-20 sm:py-28">
      <div className={`${section} grid gap-14 lg:grid-cols-[1fr_1.1fr]`}>
        <div>
          <Label>{leak.label}</Label>
          <h2 className={`${h2} mt-5`}>{leak.heading}</h2>
          <p className="mt-6 max-w-md text-muted">{leak.note}</p>
        </div>
        <div>
          <div className="grid gap-8 border-t-2 border-ink pt-8 sm:grid-cols-2">
            <Num id="leads" label="Enquiries per month" value={leads} set={setLeads} />
            <Num id="value" label="Average sale value ($)" value={value} set={setValue} />
            <Num id="close" label="Close rate when answered" value={close} set={(n) => setClose(Math.min(100, n))} suffix="%" />
            <Num id="lost" label="Leads ignored or slow" value={lost} set={(n) => setLost(Math.min(100, n))} suffix="%" />
          </div>
          <div className="mt-10 bg-ink p-8 text-paper" aria-live="polite">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-paper/60">Estimated revenue walking out the door</p>
            <p className="mt-3 font-display text-6xl leading-none tabular-nums sm:text-7xl">
              <span className="text-accent">${fmt(monthly)}</span><span className="text-3xl text-paper/60"> / month</span>
            </p>
            <p className="mt-3 text-paper/60">${fmt(monthly * 12)} a year</p>
            <Button href="#contact" variant="inverse" className="mt-8 !bg-paper !text-ink hover:!bg-accent">{leak.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
