"use client";
import { Check, CheckCircle2, Copy, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { budgets, contactSchema, needs } from "@/lib/contact-schema";
import { contact, site } from "@/lib/content";
import { Button, card, h2, section } from "./ui";
import { Reveal } from "./Motion";

type Errors = Partial<Record<string, string>>;
const field = "mt-1.5 w-full rounded-2xl border border-line bg-cream px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-orange";
const label = "block text-sm font-bold";

function CopyEmail() {
  const [done, setDone] = useState(false);
  return (
    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-5 pr-1.5">
      <a href={`mailto:${site.email}`} className="font-medium hover:underline">{site.email}</a>
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(site.email).catch(() => {});
          setDone(true);
          setTimeout(() => setDone(false), 2000);
        }}
        className="flex size-10 items-center justify-center rounded-full bg-orange-tint text-orange-ink transition hover:bg-orange hover:text-white"
        aria-label="Copy email address"
      >
        {done ? <Check aria-hidden strokeWidth={1.75} className="size-5" /> : <Copy aria-hidden strokeWidth={1.75} className="size-5" />}
      </button>
      <span role="status" className="sr-only">{done ? "Email copied" : ""}</span>
    </div>
  );
}

function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const f = parsed.error.flatten().fieldErrors as Record<string, string[]>;
      setErrors(Object.fromEntries(Object.entries(f).map(([k, v]) => [k, v[0]])));
      e.currentTarget.querySelector<HTMLElement>("[aria-invalid=true]")?.focus();
      return;
    }
    setErrors({});
    setState("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className={`${card} flex h-full flex-col items-center justify-center p-10 text-center`}>
        <span className="flex size-16 items-center justify-center rounded-full bg-success/10 text-success"><CheckCircle2 aria-hidden strokeWidth={1.75} className="size-9" /></span>
        <h3 className="mt-5 font-display text-3xl font-extrabold">{contact.success.title}</h3>
        <p className="mt-2 text-muted">{contact.success.body}</p>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p id={`${k}-err`} className="mt-1.5 text-sm font-medium text-[#B42318]">{errors[k]}</p>;
  const a11y = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className={`${card} space-y-4 p-6 sm:p-8`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="name" className={label}>Name</label><input id="name" name="name" autoComplete="name" required className={field} {...a11y("name")} />{err("name")}</div>
        <div><label htmlFor="email" className={label}>Work email</label><input id="email" name="email" type="email" autoComplete="email" required className={field} {...a11y("email")} />{err("email")}</div>
        <div><label htmlFor="company" className={label}>Company</label><input id="company" name="company" autoComplete="organization" required className={field} {...a11y("company")} />{err("company")}</div>
        <div><label htmlFor="website" className={label}>Website <span className="font-normal text-muted">(optional)</span></label><input id="website" name="website" inputMode="url" autoComplete="url" placeholder="yourcompany.com" className={field} {...a11y("website")} />{err("website")}</div>
        <div>
          <label htmlFor="need" className={label}>What do you need?</label>
          <select id="need" name="need" defaultValue="" required className={field} {...a11y("need")}>
            <option value="" disabled>Choose one</option>
            {needs.map((n) => <option key={n}>{n}</option>)}
          </select>{err("need")}
        </div>
        <div>
          <label htmlFor="budget" className={label}>Monthly marketing budget</label>
          <select id="budget" name="budget" defaultValue="" required className={field} {...a11y("budget")}>
            <option value="" disabled>Choose one</option>
            {budgets.map((n) => <option key={n}>{n}</option>)}
          </select>{err("budget")}
        </div>
      </div>
      <div><label htmlFor="message" className={label}>Where are you losing customers?</label><textarea id="message" name="message" rows={4} required className={field} {...a11y("message")} />{err("message")}</div>
      <input name="hp" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      {state === "error" && <p role="alert" className="text-sm font-medium text-[#B42318]">{contact.error}</p>}
      <button type="submit" disabled={state === "loading"} className="group inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-[1.1667rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-orange-hover hover:shadow-[0_10px_30px_rgba(242,106,27,0.4)] disabled:opacity-70 disabled:hover:translate-y-0">
        {state === "loading" ? <><Loader2 aria-hidden className="size-5 animate-spin" /> Sending</> : <>Request my review <Send aria-hidden strokeWidth={1.75} className="size-5" /></>}
      </button>
      <p className="text-sm text-muted">{contact.privacy}</p>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className={`${section} py-24 sm:py-32`}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <h2 className={h2}>{contact.heading}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{contact.body}</p>
          <Button href={site.calendarUrl} className="mt-8">{contact.cta}</Button>
          <p className="mt-8 text-sm text-muted">{contact.emailLabel}</p>
          <CopyEmail />
        </Reveal>
        <Reveal delay={0.1}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
