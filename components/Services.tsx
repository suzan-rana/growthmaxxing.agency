import { services } from "@/lib/content";
import { IconCircle, h2, section } from "./ui";
import { Reveal } from "./Motion";

const tagList = (tags: string[], cls = "text-muted") => (
  <ul className={`mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.1em] ${cls}`}>
    {tags.map((t) => <li key={t}>{t}</li>)}
  </ul>
);

function Wave() {
  return (
    <div aria-hidden className="flex h-10 items-center gap-1">
      {[0.5, 0.9, 0.6, 1, 0.7, 0.4, 0.8, 0.55, 0.95, 0.5, 0.75, 0.4].map((h, i) => (
        <span key={i} style={{ height: `${h * 100}%`, animation: `wave ${1.2 + (i % 4) * 0.25}s ease-in-out ${i * 0.07}s infinite` }} className="w-1.5 origin-center rounded-full bg-orange motion-reduce:!animate-none" />
      ))}
    </div>
  );
}

function Bars() {
  return (
    <div aria-hidden className="flex h-16 items-end gap-2">
      {[30, 42, 38, 55, 62, 58, 78, 90].map((h, i) => (
        <span key={i} style={{ height: `${h}%` }} className={`w-full rounded-t-lg ${i === 7 ? "bg-orange" : "bg-orange-tint"}`} />
      ))}
    </div>
  );
}

function Tiles() {
  return (
    <div aria-hidden className="flex gap-2">
      {["bg-orange", "bg-orange-glow", "bg-ink"].map((c, i) => (
        <span key={c} className={`h-16 flex-1 rounded-xl ${c} ${i === 1 ? "-rotate-3" : i === 2 ? "rotate-2" : ""}`} />
      ))}
    </div>
  );
}

export function Services() {
  const [flagship, voice, ads, reporting] = services.items;
  const FIcon = flagship.icon;
  return (
    <section id="services" className={`${section} py-24 sm:py-32`}>
      <Reveal>
        <h2 className={`${h2} max-w-3xl`}>{services.heading}</h2>
        <p className="mt-5 max-w-xl text-xl text-muted">{services.intro}</p>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-6">
        <Reveal className="lg:col-span-4 lg:row-span-2">
          <article className="relative flex h-full min-h-[26rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-orange p-8 text-white sm:p-12">
            <div aria-hidden className="absolute -right-24 -top-24 size-96 rounded-full bg-orange-glow/60 blur-3xl" />
            <div className="relative">
              <span className="flex size-16 items-center justify-center rounded-full bg-white text-orange-ink"><FIcon aria-hidden strokeWidth={1.75} className="size-8" /></span>
              <h3 className="mt-8 max-w-md font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">{flagship.title}</h3>
            </div>
            <div className="relative">
              <p className="mt-8 max-w-lg text-xl font-bold leading-snug">{flagship.outcome}</p>
              {tagList(flagship.tags, "text-white")}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-2">
          <article className="h-full rounded-[2rem] border border-line bg-surface p-7 shadow-warm">
            <Wave />
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">{voice.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{voice.outcome}</p>
            {tagList(voice.tags)}
          </article>
        </Reveal>

        <Reveal delay={0.16} className="lg:col-span-2">
          <article className="h-full rounded-[2rem] bg-orange-tint p-7">
            <Tiles />
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">{ads.title}</h3>
            <p className="mt-2 leading-relaxed text-ink/75">{ads.outcome}</p>
            {tagList(ads.tags, "text-orange-ink")}
          </article>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6">
          <article className="grid items-center gap-8 rounded-[2rem] border border-line bg-surface p-7 shadow-warm sm:p-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <IconCircle icon={reporting.icon} />
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">{reporting.title}</h3>
              <p className="mt-2 max-w-lg text-lg leading-relaxed text-muted">{reporting.outcome}</p>
              {tagList(reporting.tags)}
            </div>
            <Bars />
          </article>
        </Reveal>
      </div>
    </section>
  );
}
