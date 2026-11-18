import { Check } from "lucide-react";
import { proof, site, testimonials } from "@/lib/content";
import { Button, Label, h2, section } from "./ui";
import { Reveal } from "./Motion";

export function Proof() {
  return (
    <section id="proof" className="border-y border-line bg-paper py-24 sm:py-32">
      <div className={section}>
        <Reveal><Label>02 / Proof</Label><h2 className={`${h2} mt-5 max-w-4xl`}>{proof.heading}</h2></Reveal>
        <div className="mt-16 grid gap-16 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <article className="bg-ink p-8 text-paper sm:p-12">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-accent">{proof.founding.chip}</p>
              <h3 className="mt-6 font-display text-5xl leading-none sm:text-6xl">{proof.founding.title}</h3>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/70">{proof.founding.body}</p>
              <ul className="mt-8 space-y-3">
                {proof.founding.points.map((p) => (
                  <li key={p} className="flex items-center gap-3"><Check aria-hidden strokeWidth={2} className="size-4 text-accent" />{p}</li>
                ))}
              </ul>
              <Button href={site.calendarUrl} variant="secondary" className="mt-10 border-paper text-paper hover:bg-paper hover:!text-ink">{proof.founding.cta}</Button>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <Label>{proof.commitmentsLabel}</Label>
            <dl className="mt-4 border-t-2 border-ink">
              {proof.commitments.map((c) => (
                <div key={c.big} className="grid grid-cols-[9rem_1fr] items-baseline gap-4 border-b border-line py-6">
                  <dt className="font-display text-4xl leading-none sm:text-5xl">{c.big}</dt>
                  <dd className="text-muted">{c.small}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        {testimonials.length > 0 && (
          <ul className="mt-16 grid gap-10 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={t.name + t.company} className="border-t-2 border-ink pt-5">
                <blockquote className="font-display text-3xl leading-tight">“{t.quote}”</blockquote>
                <p className="mt-4 font-medium">{t.name}</p>
                <p className="text-sm text-muted">{t.role}, {t.company}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
