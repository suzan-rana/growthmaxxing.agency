import { statement } from "@/lib/content";
import { Reveal } from "./Motion";
import { Label, section } from "./ui";

export function Statement() {
  return (
    <section aria-label="Our view" className={`${section} py-28 sm:py-40`}>
      <Reveal>
        <Label>Our view</Label>
        <p className="mt-8 max-w-5xl font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">{statement.text}</p>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.1em] text-muted">{statement.sign}</p>
      </Reveal>
    </section>
  );
}
