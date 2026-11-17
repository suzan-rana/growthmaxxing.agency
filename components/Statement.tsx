import { statement } from "@/lib/content";
import { Reveal } from "./Motion";
import { section } from "./ui";

export function Statement() {
  return (
    <section aria-label="Our view" className="relative overflow-hidden bg-deep py-28 text-center text-[#e3ffc4] sm:py-44">
      <div className={`${section} relative`}>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-[#e3ffc4]/70">Our view</p>
          <p className="mx-auto mt-8 max-w-6xl font-display text-5xl font-bold leading-[0.92] sm:text-7xl lg:text-8xl">{statement.text}</p>
          <p className="mt-12 text-xs uppercase tracking-[0.2em] text-orange">{statement.sign}</p>
        </Reveal>
      </div>
    </section>
  );
}
