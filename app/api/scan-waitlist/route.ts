import { NextResponse } from "next/server";
import { saveLead } from "@/lib/leads";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DOMAIN_RE = /^(?!-)[a-z0-9-]{1,63}(?<!-)(\.[a-z0-9-]{1,63})+$/i;

function normalizeDomain(input: string): string | null {
  let d = input.trim().toLowerCase();
  d = d.replace(/^https?:\/\//, "").replace(/\/.*$/, "").replace(/^www\./, "");
  if (!DOMAIN_RE.test(d) || d.length > 253) return null;
  return d;
}

export async function POST(request: Request) {
  let body: { email?: string; domain?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase() ?? "";
  const domain = normalizeDomain(body.domain ?? "");

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "That email doesn't look right. Check it and try again." },
      { status: 400 },
    );
  }
  if (!domain) {
    return NextResponse.json(
      { error: "That domain doesn't look right. Try something like yourstore.in." },
      { status: 400 },
    );
  }

  try {
    await saveLead({ email, domain });
  } catch (err) {
    console.error("[scan-waitlist] failed to save lead", err);
    return NextResponse.json(
      { error: "Something broke on our side. Try again in a minute." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, domain });
}
