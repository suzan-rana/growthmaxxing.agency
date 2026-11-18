import { hero, site } from "@/lib/content";
import { Button, Label } from "./ui";

function Ledger() {
  return (
    <figure aria-label={hero.mockLabel} className="mt-20 border-t-2 border-ink">
      <figcaption className="flex items-center justify-between py-3">
        <Label>Agent log · last 24 hours</Label>
        <Label className="flex items-center gap-2"><span className="size-1.5 animate-blink rounded-full bg-success" />{hero.mockLabel}</Label>
      </figcaption>
      <table className="w-full border-collapse text-left font-mono text-[0.8rem] sm:text-sm">
        <caption className="sr-only">Example agent activity</caption>
        <tbody>
          {hero.console.map((r) => (
            <tr key={r.agent + r.t} className="border-t border-line align-baseline">
              <td className="w-16 py-3.5 pr-4 text-muted">{r.t}</td>
              <td className="hidden w-40 py-3.5 pr-4 text-accent-ink sm:table-cell">{r.agent}</td>
              <td className="py-3.5">{r.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export function Hero() {
  return (
    <section id="top" className="pb-24 pt-28 sm:pt-36">
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-10">
        <Label>{hero.chip}</Label>
        <h1 className="mt-6 max-w-[16ch] font-display text-[3.2rem] leading-[0.95] min-[420px]:text-[4rem] sm:max-w-[18ch] sm:text-[6.5rem] lg:text-[8rem]">
          AI agents that <em>answer</em> your leads, <em>screen</em> your hires and <em>chase</em> your invoices.
        </h1>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{hero.body}</p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href={site.calendarUrl}>{hero.primary}</Button>
            <Button href="#services" variant="secondary">{hero.secondary}</Button>
          </div>
        </div>
        <p className="mt-16 text-sm text-muted">
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em]">{hero.stripLabel}: </span>
          {hero.strip.join(", ")}.
        </p>
        <Ledger />
      </div>
    </section>
  );
}
