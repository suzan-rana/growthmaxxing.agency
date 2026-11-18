import { services } from "@/lib/content";
import { Label, h2, section } from "./ui";
import { Reveal } from "./Motion";

export function Services() {
  return (
    <section id="services" className={`${section} py-24 sm:py-32`}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal><Label>01 / Agents</Label><h2 className={`${h2} mt-5`}>{services.heading}</h2></Reveal>
        <Reveal delay={0.08}><p className="max-w-xl text-lg leading-relaxed text-muted lg:pt-9">{services.intro}</p></Reveal>
      </div>
      <ol className="mt-16 border-t-2 border-ink">
        {services.items.map((s, i) => (
          <li key={s.title} className="group border-b border-line transition-colors hover:bg-paper">
            <Reveal>
              <div className={`grid gap-x-8 gap-y-3 px-1 sm:px-3 ${s.flagship ? "py-12" : "py-8"} md:grid-cols-[4rem_1.1fr_1.2fr_14rem]`}>
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`font-display leading-none ${s.flagship ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
                  {s.title}
                  {s.flagship && <span className="ml-3 align-middle font-mono text-[0.7rem] uppercase tracking-[0.1em] text-accent-ink">{services.flagshipLabel}</span>}
                </h3>
                <p className="max-w-lg leading-relaxed text-muted">{s.outcome}</p>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted md:flex-col md:items-end">
                  {s.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
