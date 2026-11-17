import { cta, site } from "@/lib/content";
import { Button, section } from "./ui";
import { Reveal } from "./Motion";

export function CtaBand() {
  return (
    <section aria-label="Book a call" className={`${section} pb-20`}>
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.5rem] bg-orange px-6 py-16 text-center text-white shadow-[0_24px_60px_rgba(242,106,27,0.35)] sm:px-12 sm:py-20">
          <div aria-hidden className="absolute -left-16 -top-16 size-64 rounded-full bg-white/15 blur-2xl" />
          <div aria-hidden className="absolute -bottom-20 -right-10 size-72 rounded-full bg-orange-glow/50 blur-3xl" />
          <h2 className="relative font-display text-4xl font-bold tracking-[0.005em] sm:text-6xl">{cta.heading}</h2>
          <p className="relative mx-auto mt-4 max-w-md text-[1.1667rem] font-bold">{cta.body}</p>
          <Button href={site.calendarUrl} variant="white" className="relative mt-8">{cta.button}</Button>
        </div>
      </Reveal>
    </section>
  );
}
