import { Check, Quote } from "lucide-react";
import { proof, site, testimonials } from "@/lib/content";
import { Button, IconCircle, card, h2, section } from "./ui";
import { Reveal } from "./Motion";

export function Proof() {
  return (
    <section id="proof" className="bg-orange-tint/50 py-24 sm:py-32">
      <div className={section}>
        <Reveal><h2 className={`${h2} max-w-3xl`}>{proof.heading}</h2></Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-[1.5rem] bg-surface p-8 shadow-warm sm:p-12">
              <div aria-hidden className="absolute -right-20 -top-20 size-72 rounded-full bg-orange-glow/40 blur-3xl" />
              <div className="relative">
                <p className="inline-block rounded-full bg-orange px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-ink">{proof.founding.chip}</p>
                <h3 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-[0.005em] sm:text-5xl">{proof.founding.title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-muted">{proof.founding.body}</p>
                <ul className="mt-7 space-y-3">
                  {proof.founding.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-lg font-medium">
                      <span className="flex size-7 items-center justify-center rounded-full bg-success text-white"><Check aria-hidden strokeWidth={2.5} className="size-4" /></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Button href={site.calendarUrl} className="mt-9">{proof.founding.cta}</Button>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-orange-tint p-8 sm:p-12">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-orange-ink">{proof.commitmentsLabel}</h3>
              <ul className="mt-10 grid flex-1 grid-cols-2 content-around gap-x-6 gap-y-12">
                {proof.commitments.map((c) => (
                  <li key={c.big}>
                    <p className="font-display text-4xl font-bold tracking-[0.005em] sm:text-5xl">{c.big}</p>
                    <p className="mt-2 text-base leading-snug text-ink/70">{c.small}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {testimonials.length > 0 && (
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={t.name + t.company} className={`${card} p-7`}>
                <IconCircle icon={Quote} />
                <blockquote className="mt-4 text-lg leading-relaxed">“{t.quote}”</blockquote>
                <p className="mt-4 font-bold">{t.name}</p>
                <p className="text-sm text-muted">{t.role}, {t.company}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
