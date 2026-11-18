import { BarChart3, Clapperboard, Handshake, MessageSquareText, PhoneCall, UserSearch, Workflow, type LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// All site copy lives here. Replace the PLACEHOLDER values before launch.
// ---------------------------------------------------------------------------

export const site = {
  name: "growthmaxxing",
  url: "https://growthmaxxing.agency",
  title: "Growthmaxxing | AI agency building agents for sales, hiring and ops",
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
  cta: "Get free audit",
};

export const hero = {
  chip: "Founding offer: 3 spots, fixed-price sprint",
  headline: ["AI agents that answer your leads, screen your hires and chase your invoices."],
  body: "Our AI agents reply to every enquiry in seconds, book the call, and follow up until they buy. Built in your own tools in 4 weeks, at a fixed price, with a written results review at the end.",
  primary: "Get my free lead-leak audit",
  secondary: "See the agents",
  note: "For businesses that already have demand and are losing it to slow replies, thin follow-up, or tired ads.",
  strip: ["HubSpot", "Slack", "WhatsApp", "Gmail", "Google Calendar", "Stripe", "Notion", "Twilio", "Zapier", "n8n", "Airtable", "Xero"],
  stripLabel: "Plugs into the tools you already use",
  console: [
    { agent: "lead-agent", text: "Replied to Jordan in 9s, call booked Thu 2:30", t: "21:41" },
    { agent: "voice-agent", text: "Missed call answered, quote request qualified", t: "21:58" },
    { agent: "recruit-agent", text: "Screened 14 applicants, 3 interviews scheduled", t: "06:02" },
    { agent: "admin-agent", text: "Invoice #1042 sent, 2 overdue reminders queued", t: "07:15" },
    { agent: "sales-agent", text: "Sent 40 personalised emails, 3 replies, 1 meeting booked", t: "08:30" },
    { agent: "ads-agent", text: "Rotated 4 hooks, paused 1 underperformer", t: "08:45" },
    { agent: "report-agent", text: "Weekly read drafted, ready for your approval", t: "09:00" },
  ],
  mockLabel: "Illustrative log, not a real client",
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
  slug: string;
  outcome: string;
  tags: string[];
  icon: LucideIcon;
  flagship?: boolean;
};

export const services = {
  heading: "A team of AI agents, built around your business.",
  intro: "Not a chatbot bolted onto a website. Agents that take real actions in your CRM, inbox, calendar and phone lines. Start with the one that fixes your biggest leak, then add more.",
  flagshipLabel: "Flagship",
  items: [
    {
      title: "Lead capture and follow-up",
      slug: "lead-agent",
      outcome:
        "Every enquiry gets a reply in seconds and a follow-up until it books or says no. Forms, WhatsApp, SMS and email sequences, all synced to your CRM.",
      tags: ["CRM sync", "Nurture", "No lead left behind"],
      icon: MessageSquareText,
      flagship: true,
    },
    {
      title: "AI voice receptionist",
      slug: "voice-agent",
      outcome: "Answers calls, qualifies the caller, and books the job.",
      tags: ["24/7", "Missed-call text-back", "Booking"],
      icon: PhoneCall,
    },
    {
      title: "AI sales agent",
      slug: "sales-agent",
      outcome: "Finds and researches prospects, sends personalised outreach, handles replies and books qualified meetings into your calendar.",
      tags: ["Outbound", "Qualification", "Meeting booking"],
      icon: Handshake,
    },
    {
      title: "AI ad creative",
      slug: "ads-agent",
      outcome: "UGC-style video and static ads for Meta and TikTok, tested every week.",
      tags: ["Hooks", "Variations", "Testing"],
      icon: Clapperboard,
    },
    {
      title: "Reporting and tracking",
      slug: "report-agent",
      outcome: "Clean tracking, and a weekly written update with your real numbers.",
      tags: ["Pixel/CAPI", "UTMs", "Weekly read"],
      icon: BarChart3,
    },
    {
      title: "Recruitment agent",
      slug: "recruit-agent",
      outcome: "Posts roles, screens applicants, books interviews and keeps candidates warm, so hiring stops eating your week.",
      tags: ["Screening", "Scheduling", "Candidate follow-up"],
      icon: UserSearch,
    },
    {
      title: "Admin agents",
      slug: "admin-agent",
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
  text: "Everyone has access to the same models. The edge is who wires them into your business, tunes them on your data, and keeps them honest.",
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
  heading: "Get your free lead-leak audit.",
  body: "Tell us where leads are slipping. In 30 minutes you get a ranked list of your biggest leaks and what each is likely costing you. Use it with us or without us.",
  cta: "Book a 30-minute call",
  emailLabel: "Or email",
  privacy: "We use your details only to reply to this request. No newsletters, no sharing.",
  success: { title: "Message received.", body: "Thanks. You will hear back within one working day with next steps." },
  error: "Something went wrong. Please try again, or email us directly.",
};

export const cta = {
  heading: "Find out what slow replies are costing you.",
  body: "Free 30-minute audit. No deck, no pressure, and an honest answer on whether we can help.",
  button: "Get my free audit",
};

export const footer = {
  tagline: "AI growth systems that find customers, answer them fast, and follow up until they buy.",
  columns: [
    { title: "Services", links: [{ label: "Lead capture", href: "#services" }, { label: "AI receptionist", href: "#services" }, { label: "AI sales agent", href: "#services" }, { label: "AI ad creative", href: "#services" }, { label: "Recruitment", href: "#services" }, { label: "Admin agents", href: "#services" }, { label: "Reporting", href: "#services" }] },
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

export const leak = {
  label: "The cost of slow replies",
  heading: "What are unanswered leads costing you each month?",
  note: "Rough estimate from your own numbers, not a promise. The audit replaces these guesses with your real ones.",
  cta: "Plug the leak: get the free audit",
};
