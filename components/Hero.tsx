import { CalendarCheck, Zap } from "lucide-react";
import { hero, process, site } from "@/lib/content";
import { Button, Chip } from "./ui";

function Mark({ children, soft = false }: { children: string; soft?: boolean }) {
  return <span className={`mark ${soft ? "mark-soft" : ""}`}><span className={soft ? "" : "text-white"}>{children}</span></span>;
}

function Mock() {
  const m = hero.mock;
  return (
    <figure aria-label={hero.mockLabel} className="relative mx-auto w-full max-w-[26rem]">
      <div className="rounded-[1.5rem] border border-line bg-surface p-5 shadow-[0_30px_80px_rgba(242,106,27,0.18),0_4px_12px_rgba(27,20,16,0.05)]">
        <div className="flex items-center gap-3 pb-4">
          <span className="flex size-10 items-center justify-center rounded-full bg-deep font-display text-sm font-bold text-white">J</span>
          <div>
            <p className="font-display text-base font-bold leading-none">Jordan</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted"><span className="size-1.5 rounded-full bg-success" />{m.source}</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="max-w-[85%] rounded-[1.5rem] rounded-bl-md bg-cream px-4 py-3 text-[0.95rem] leading-snug">
            {m.lead}
            <p className="mt-1 text-xs text-muted">{m.leadTime}</p>
          </div>
          <div className="ml-auto max-w-[85%] rounded-[1.5rem] rounded-br-md bg-orange px-4 py-3 text-[0.95rem] font-medium leading-snug text-white">
            {m.reply}
            <p className="mt-1 flex items-center gap-1 text-xs text-white/90"><Zap aria-hidden strokeWidth={1.75} className="size-3" />{m.replyTime}</p>
          </div>
          <div className="flex items-center gap-3 rounded-[1.5rem] bg-orange-tint p-3.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-orange text-white"><CalendarCheck aria-hidden strokeWidth={1.75} className="size-5" /></span>
            <div>
              <p className="font-display text-base font-bold leading-none">{m.confirm}</p>
              <p className="mt-1 text-xs text-ink/70">{m.confirmNote}</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-muted">{hero.mockLabel}</figcaption>
    </figure>
  );
}

export function Hero() {
  const strip = [...hero.strip, ...hero.strip];
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 size-[52rem] -translate-x-1/2 rounded-full bg-orange-glow/35 blur-[140px]" />
      <div className="relative mx-auto w-full max-w-6xl px-5 text-center sm:px-8">
        <Chip>{hero.chip}</Chip>
        <h1 className="mx-auto mt-8 font-display text-[4.2rem] font-bold leading-[0.88] tracking-[0.005em] min-[420px]:text-[5.2rem] sm:text-[8rem] lg:text-[11.5rem]">
          More <Mark>leads.</Mark><br />
          Faster <Mark soft>replies.</Mark><br />
          Less busywork.
        </h1>
        <p className="mx-auto mt-9 max-w-xl text-xl leading-relaxed text-muted">{hero.body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href={site.calendarUrl}>{hero.primary}</Button>
          <Button href="#process" variant="secondary" arrow={false}>{hero.secondary}</Button>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-line py-5" aria-label="Services">
        <ul className="flex w-max animate-marquee items-center pr-8">
          {strip.map((s, i) => (
            <li key={i} aria-hidden={i >= hero.strip.length} className="flex items-center gap-8 whitespace-nowrap pr-8 font-mono text-lg uppercase tracking-[0.14em] text-ink/80">
              {s}<span aria-hidden className="size-2 rounded-full bg-orange" />
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto mt-20 grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <ol className="divide-y divide-line border-y border-line">
          {process.steps.map((st, i) => (
            <li key={st.title}>
              <a href="#process" className="group flex items-baseline gap-6 py-7 transition hover:pl-3">
                <span className="font-mono text-sm tracking-[0.1em] text-orange-ink">0{i + 1}</span>
                <span className="font-display text-3xl font-bold leading-tight tracking-[0.005em] sm:text-4xl">{st.title}</span>
              </a>
            </li>
          ))}
        </ol>
        <Mock />
      </div>
    </section>
  );
}
