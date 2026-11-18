import { footer } from "@/lib/content";
import { Logo } from "./Navbar";
import { Label, section } from "./ui";

export function Footer() {
  return (
    <footer>
      <div className={`${section} grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr]`}>
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-muted">{footer.tagline}</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {footer.socials.map((s) => <li key={s.label}><a href={s.href} className="underline underline-offset-4 hover:text-accent-ink">{s.label}</a></li>)}
          </ul>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footer.columns.map((c) => (
            <div key={c.title}>
              <Label>{c.title}</Label>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => <li key={l.label}><a href={l.href} className="break-words text-sm hover:text-accent-ink">{l.label}</a></li>)}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className={`${section} flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 text-sm text-muted`}>
        <p>{footer.copyright}</p>
        <ul className="flex gap-5">{footer.legal.map((l) => <li key={l.label}><a href={l.href} className="hover:text-ink">{l.label}</a></li>)}</ul>
      </div>
    </footer>
  );
}
