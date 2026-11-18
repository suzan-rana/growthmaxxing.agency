import { loop, process as p } from "@/lib/content";
import { Label, h2, section } from "./ui";
import { Reveal } from "./Motion";

const n = (i: number) => String(i + 1).padStart(2, "0");

export function Process() {
  return (
    <section id="process" className={`${section} pb-24 sm:pb-32`}>
      <Reveal><Label>03 / Process</Label><h2 className={`${h2} mt-5 max-w-4xl`}>{p.heading}</h2></Reveal>
      <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {p.steps.map((s, i) => (
          <li key={s.title} className="border-t-2 border-ink pt-5">
            <Reveal delay={0.06 * i}>
              <span className="font-mono text-sm text-accent-ink">{n(i)}</span>
              <h3 className="mt-8 font-display text-3xl leading-tight sm:text-4xl">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <div id="loop" className="mt-32 grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal><h2 className={`${h2} lg:sticky lg:top-28`}>{loop.heading}</h2></Reveal>
        <ol className="border-t-2 border-ink">
          {loop.steps.map((s, i) => (
            <li key={s.title} className="grid gap-x-8 gap-y-2 border-b border-line py-7 sm:grid-cols-[9rem_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">{n(i)} · {s.when}</p>
              <div>
                <h3 className="font-display text-3xl">{s.title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
