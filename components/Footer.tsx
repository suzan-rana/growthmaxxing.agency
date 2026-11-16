import { footer } from "@/lib/content";
import { Logo } from "./Navbar";
import { section } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className={`${section} grid gap-10 py-14 lg:grid-cols-[1.3fr_2fr]`}>
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-muted">{footer.tagline}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {footer.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="rounded-full bg-orange-tint px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-ink transition hover:bg-orange hover:text-white">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footer.columns.map((c) => (
            <div key={c.title}>
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-orange-ink">{c.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.href} className="break-words text-sm text-muted transition hover:text-ink">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className={`${section} flex flex-wrap items-center justify-between gap-3 pb-8 text-sm text-muted`}>
        <p>{footer.copyright}</p>
        <ul className="flex gap-5">
          {footer.legal.map((l) => <li key={l.label}><a href={l.href} className="hover:text-ink">{l.label}</a></li>)}
        </ul>
      </div>
    </footer>
  );
}
