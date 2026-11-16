import { loop, process as p } from "@/lib/content";
import { h2, section } from "./ui";
import { Reveal } from "./Motion";

const tone = ["bg-surface border border-line shadow-warm", "bg-orange-tint", "bg-surface border border-line shadow-warm"];

export function Process() {
  return (
    <section id="process" className={`${section} py-24 sm:py-32`}>
      <Reveal><h2 className={`${h2} max-w-3xl`}>{p.heading}</h2></Reveal>
      <div className="relative mt-14">
        <ol className="relative grid gap-5 md:grid-cols-3 md:gap-12">
          {p.steps.map((s, i) => (
            <li key={s.title} className={`relative ${i < 2 ? "md:after:absolute md:after:-right-12 md:after:top-14 md:after:w-12 md:after:border-t-[3px] md:after:border-dotted md:after:border-orange" : ""}`}>
              <Reveal delay={0.1 * i} className="h-full">
                <div className={`h-full rounded-[2rem] p-8 ${tone[i]}`}>
                  <span aria-hidden className="flex size-12 items-center justify-center rounded-full bg-orange font-display text-xl font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-ink/75">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <div id="loop" className="mt-28 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal><h2 className={`${h2} lg:sticky lg:top-28`}>{loop.heading}</h2></Reveal>
        <ol className="relative space-y-10 border-l-[3px] border-dotted border-orange/70 pl-9">
          {loop.steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span aria-hidden className="absolute -left-[2.9rem] top-1.5 size-5 rounded-full border-4 border-cream bg-orange ring-2 ring-orange" />
              <Reveal delay={0.05 * i}>
                <p className="inline-block rounded-full bg-orange-tint px-3.5 py-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-orange-ink">{s.when}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-1.5 max-w-lg text-lg leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
