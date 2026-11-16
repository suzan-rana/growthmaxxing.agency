import { CalendarCheck, Zap } from "lucide-react";
import { hero, site } from "@/lib/content";
import { Button, Chip } from "./ui";

function Mark({ children, soft = false }: { children: string; soft?: boolean }) {
  return <span className={`mark ${soft ? "mark-soft" : ""}`}><span className={soft ? "" : "text-white"}>{children}</span></span>;
}

function Mock() {
  const m = hero.mock;
  return (
    <figure aria-label={hero.mockLabel} className="relative mx-auto w-full max-w-[26rem]">
      <div className="rounded-[2rem] border border-line bg-surface p-5 shadow-[0_30px_80px_rgba(242,106,27,0.18),0_4px_12px_rgba(27,20,16,0.05)]">
        <div className="flex items-center gap-3 pb-4">
          <span className="flex size-10 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white">J</span>
          <div>
            <p className="font-display text-base font-bold leading-none">Jordan</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted"><span className="size-1.5 rounded-full bg-success" />{m.source}</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-cream px-4 py-3 text-[0.95rem] leading-snug">
            {m.lead}
            <p className="mt-1 text-xs text-muted">{m.leadTime}</p>
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-orange px-4 py-3 text-[0.95rem] font-medium leading-snug text-white">
            {m.reply}
            <p className="mt-1 flex items-center gap-1 text-xs text-white/90"><Zap aria-hidden strokeWidth={1.75} className="size-3" />{m.replyTime}</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-orange-tint p-3.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white text-orange-ink"><CalendarCheck aria-hidden strokeWidth={1.75} className="size-5" /></span>
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
    <section id="top" className="relative overflow-hidden pb-14 pt-32 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-32 size-[44rem] rounded-full bg-orange-glow/45 blur-[120px]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <Chip>{hero.chip}</Chip>
          <h1 className="mt-7 font-display text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.035em] min-[420px]:text-[3rem] sm:text-[4.25rem] lg:text-[4.75rem]">
            More <Mark>leads.</Mark><br />
            Faster <Mark soft>replies.</Mark><br />
            Less busywork.
          </h1>
          <p className="mt-7 max-w-xl text-xl leading-relaxed text-muted">{hero.body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={site.calendarUrl}>{hero.primary}</Button>
            <Button href="#process" variant="secondary" arrow={false}>{hero.secondary}</Button>
          </div>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted">{hero.note}</p>
        </div>
        <Mock />
      </div>

      <div className="relative mt-20 overflow-hidden" aria-label="Services">
        <ul className="flex w-max animate-marquee items-center pr-8">
          {strip.map((s, i) => (
            <li key={i} aria-hidden={i >= hero.strip.length} className="flex items-center gap-8 whitespace-nowrap pr-8 font-display text-2xl font-bold text-ink/80">
              {s}<span aria-hidden className="size-2 rounded-full bg-orange" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
