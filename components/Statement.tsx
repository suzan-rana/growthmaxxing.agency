import { statement } from "@/lib/content";
import { Reveal } from "./Motion";
import { section } from "./ui";

export function Statement() {
  return (
    <section aria-label="Our view" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,106,27,0.35),transparent_65%)]" />
      <div className={`${section} relative`}>
        <Reveal>
          <p className="max-w-4xl font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl">{statement.text}</p>
          <p className="mt-8 font-mono text-sm uppercase tracking-[0.14em] text-orange">{statement.sign}</p>
        </Reveal>
      </div>
    </section>
  );
}
