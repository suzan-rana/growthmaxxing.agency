import { BarChart3, Clapperboard, MessageSquareText, PhoneCall, UserSearch, Workflow, type LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// All site copy lives here. Replace the PLACEHOLDER values before launch.
// ---------------------------------------------------------------------------

export const site = {
  name: "growthmaxxing",
  url: "https://growthmaxxing.agency",
  title: "Growthmaxxing | AI agents for sales, hiring and admin",
  description:
    "Growthmaxxing builds AI agents that find customers, answer them instantly, follow up until they buy, recruit your team and run the back office. Done for you, owned by you.",
  email: "hello@growthmaxxing.agency", // PLACEHOLDER: confirm inbox exists
  calendarUrl: "https://cal.com/growthmaxxing/30min", // PLACEHOLDER: replace with real booking link
  year: 2026,
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Proof", href: "#proof" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Book a call",
};

export const hero = {
  chip: "AI agents for sales, hiring and admin",
  headline: ["More leads.", "Faster replies.", "Less busywork."],
  body: "Growthmaxxing builds AI agents that find customers, answer them instantly, follow up until they buy, recruit your team and run the back office. Done for you, owned by you.",
  primary: "Book a free 30-min call",
  secondary: "See how it works",
  note: "For businesses that already have demand and are losing it to slow replies, thin follow-up, or tired ads.",
  strip: [
    "Lead capture",
    "AI voice receptionist",
    "Follow-up automation",
    "Recruitment agent",
    "Admin agents",
    "AI ad creative",
    "Landing pages",
    "Tracking",
    "Weekly reporting",
  ],
  mockLabel: "Illustrative example, not a real client",
  mock: {
    source: "Website enquiry",
    lead: "Hi, can I get a quote for a kitchen refit? Is anyone free this week?",
    leadTime: "9:41 pm",
    reply: "Hi Jordan, yes. I can book a quick call with the team. Does Thursday 2:30 pm work?",
    replyTime: "9:41 pm · 9 seconds later",
    confirm: "Thursday, 2:30 pm",
    confirmNote: "Intro call booked. Reminder set.",
  },
};

export type Service = {
  title: string;
  outcome: string;
  tags: string[];
  icon: LucideIcon;
  flagship?: boolean;
};

export const services = {
  heading: "AI agents for every part of the business.",
  intro: "Sales, hiring and back office. Start with the one that fixes your biggest leak, then add more agents as you grow.",
  flagshipLabel: "Flagship",
  items: [
    {
      title: "Lead capture and follow-up",
      outcome:
        "Every enquiry gets a reply in seconds and a follow-up until it books or says no. Forms, WhatsApp, SMS and email sequences, all synced to your CRM.",
      tags: ["CRM sync", "Nurture", "No lead left behind"],
      icon: MessageSquareText,
      flagship: true,
    },
    {
      title: "AI voice receptionist",
      outcome: "Answers calls, qualifies the caller, and books the job.",
      tags: ["24/7", "Missed-call text-back", "Booking"],
      icon: PhoneCall,
    },
    {
      title: "AI ad creative",
      outcome: "UGC-style video and static ads for Meta and TikTok, tested every week.",
      tags: ["Hooks", "Variations", "Testing"],
      icon: Clapperboard,
    },
    {
      title: "Reporting and tracking",
      outcome: "Clean tracking, and a weekly written update with your real numbers.",
      tags: ["Pixel/CAPI", "UTMs", "Weekly read"],
      icon: BarChart3,
    },
    {
      title: "Recruitment agent",
      outcome: "Posts roles, screens applicants, books interviews and keeps candidates warm, so hiring stops eating your week.",
      tags: ["Screening", "Scheduling", "Candidate follow-up"],
      icon: UserSearch,
    },
    {
      title: "Admin agents",
      outcome: "Back-office jobs done for you: invoicing, data entry, inbox triage, bookings and reports, running in the background.",
      tags: ["Invoicing", "Inbox", "Data entry", "Ops"],
      icon: Workflow,
    },
  ] satisfies Service[],
};

export type Testimonial = { quote: string; name: string; role: string; company: string; demo?: boolean };

/** Add real, approved testimonials. The block renders only when non-empty. */
export const testimonials: Testimonial[] = [];

export const proof = {
  heading: "Proof you can check, not logos we cannot show yet.",
  founding: {
    chip: "Founding client",
    title: "Be one of the first three.",
    body: "The first clients get a fixed, discounted sprint and a written results review at the end. In exchange, you let us write up the case study, with your approval on every word.",
    points: ["Fixed price, agreed in writing", "Written results review at week four", "Case study only with your sign-off"],
    cta: "Claim a founding spot",
  },
  commitmentsLabel: "What we commit to",
  commitments: [
    { big: "4 wks", small: "Fixed-scope first sprint" },
    { big: "1 person", small: "You always talk to the builder" },
    { big: "Weekly", small: "Fixed ship day and written update" },
    { big: "Yours", small: "Accounts, data and automations stay with you" },
  ],
  testimonialsHeading: "What clients say",
  demoLabel: "Demo content",
};

export const statement = {
  text: "Everyone has the same AI tools now. The difference is who sets them up around your business and keeps them honest.",
  sign: `Growthmaxxing · ${site.year}`,
};

export const process = {
  heading: "Start small. See your own numbers first.",
  steps: [
    { title: "A 30-minute call", body: "Free. No deck. You leave with three ideas you can use, whether you hire us or not." },
    { title: "A 4-week sprint on one system", body: "Fixed scope and a fixed fee, in writing. We audit, build, and launch." },
    { title: "You approve, we report", body: "Nothing goes live without your yes. You get a weekly written update. At week four you continue, switch, or stop." },
  ],
};

export const loop = {
  heading: "Inside the sprint, one loop repeated.",
  steps: [
    { title: "Audit and baseline", when: "Week 1", body: "We read your accounts, map where leads come from and where they drop, and record today's numbers." },
    { title: "Find the leaks", when: "Rolling", body: "Slow replies, missed calls, dead follow-ups, ads that stopped working. Ranked by money lost." },
    { title: "Build", when: "Weekly", body: "One fix at a time, built in your own accounts so you can see every step." },
    { title: "Launch", when: "Fixed ship day", body: "Changes go live on the same day each week, only after you approve them." },
    { title: "Read and improve", when: "Weekly + monthly deep read", body: "A written update with real numbers every week. A longer look once a month." },
  ],
};

export const faq = {
  heading: "Questions, answered plainly.",
  items: [
    { q: "Who owns the accounts, data and automations?", a: "You do. We work through revocable partner access, so you can remove us at any time and keep everything we built." },
    { q: "What do you need from me to start?", a: "Access to the accounts we will work in, a walk-through of your current process, and one person who can approve changes." },
    { q: "Do you guarantee results?", a: "No. Anyone who does is guessing. We commit to what we ship and what we report, with numbers you can verify yourself." },
    { q: "Do you only build, or also run it?", a: "Both. You can have us build it and hand it over, or build it and manage it each month." },
    { q: "How fast can we launch?", a: "After the week-one audit, on the next ship day." },
    { q: "How do we communicate?", a: "A shared channel for day-to-day, a written update every week, and a call once a month." },
  ],
};

export const contact = {
  heading: "Request a free growth review.",
  body: "Tell us where you are losing customers. You get either a starting plan or an honest answer that we are not the right fit.",
  cta: "Book a 30-minute call",
  emailLabel: "Or email",
  privacy: "We use your details only to reply to this request. No newsletters, no sharing.",
  success: { title: "Message received.", body: "Thanks. You will hear back within one working day with next steps." },
  error: "Something went wrong. Please try again, or email us directly.",
};

export const cta = {
  heading: "Let's find your biggest leak.",
  body: "Thirty minutes, and an honest answer on whether we can help.",
  button: "Book a 30-min call",
};

export const footer = {
  tagline: "AI growth systems that find customers, answer them fast, and follow up until they buy.",
  columns: [
    { title: "Services", links: [{ label: "Lead capture", href: "#services" }, { label: "AI receptionist", href: "#services" }, { label: "AI ad creative", href: "#services" }, { label: "Recruitment", href: "#services" }, { label: "Admin agents", href: "#services" }, { label: "Reporting", href: "#services" }] },
    { title: "Process", links: [{ label: "How it works", href: "#process" }, { label: "The weekly loop", href: "#loop" }, { label: "Proof", href: "#proof" }] },
    { title: "FAQ", links: [{ label: "Ownership", href: "#faq" }, { label: "Results", href: "#faq" }, { label: "Timing", href: "#faq" }] },
    { title: "Contact", links: [{ label: "Request a review", href: "#contact" }, { label: site.email, href: `mailto:${site.email}` }] },
  ],
  // PLACEHOLDER: replace "#" with real profile URLs
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "X", href: "#" },
  ],
  copyright: `© ${site.year} Growthmaxxing`,
  legal: [
    { label: "Privacy", href: "#" }, // PLACEHOLDER
    { label: "Terms", href: "#" }, // PLACEHOLDER
  ],
};
