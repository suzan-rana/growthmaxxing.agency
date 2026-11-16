import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  // TODO: replace with email/CRM delivery (Resend, HubSpot, etc.)
  console.log("[contact] new lead:", parsed.data);
  return NextResponse.json({ ok: true });
}
