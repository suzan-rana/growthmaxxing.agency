import { loop, process as p } from "@/lib/content";
import { h2, section } from "./ui";
import { Reveal } from "./Motion";

const n = (i: number) => String(i + 1).padStart(2, "0");

export function Process() {
  return (
    <section id="process" className={`${section} py-24 sm:py-36`}>
      <Reveal><h2 className={`${h2} max-w-3xl`}>{p.heading}</h2></Reveal>
      <ol className="mt-16 border-t border-line">
        {p.steps.map((s, i) => (
          <li key={s.title} className="border-b border-line">
            <Reveal delay={0.06 * i}>
              <div className="grid gap-4 py-10 md:grid-cols-[9rem_1.2fr_1fr] md:gap-10">
                <span className="font-display text-6xl font-bold leading-none tracking-[0.005em] text-orange sm:text-7xl">{n(i)}</span>
                <h3 className="font-display text-3xl font-bold leading-tight tracking-[0.005em] sm:text-5xl">{s.title}</h3>
                <p className="text-lg leading-relaxed text-muted md:pt-2">{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div id="loop" className="mt-32 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal><h2 className={`${h2} lg:sticky lg:top-28`}>{loop.heading}</h2></Reveal>
        <ol className="border-t border-line">
          {loop.steps.map((s, i) => (
            <li key={s.title} className="border-b border-line">
              <Reveal delay={0.04 * i}>
                <div className="grid gap-2 py-7 sm:grid-cols-[3.5rem_1fr]">
                  <span className="font-mono text-sm tracking-[0.1em] text-orange-ink">{n(i)}</span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{s.when}</p>
                    <h3 className="mt-1 font-display text-3xl font-bold tracking-[0.005em]">{s.title}</h3>
                    <p className="mt-2 max-w-lg text-lg leading-relaxed text-muted">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
