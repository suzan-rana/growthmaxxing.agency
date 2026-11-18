import { cta, site } from "@/lib/content";
import { Button } from "./ui";
import { Reveal } from "./Motion";

export function CtaBand() {
  return (
    <section aria-label="Book a call" className="bg-accent text-ink">
      <Reveal>
        <div className="mx-auto grid w-full max-w-[84rem] items-end gap-10 px-5 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-3xl font-display text-6xl leading-[0.95] sm:text-8xl">{cta.heading}</h2>
            <p className="mt-6 max-w-md text-lg">{cta.body}</p>
          </div>
          <Button href={site.calendarUrl} variant="inverse">{cta.button}</Button>
        </div>
      </Reveal>
    </section>
  );
}
