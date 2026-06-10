import { neon } from "@neondatabase/serverless";

export type Lead = { email: string; domain: string };

let tableReady = false;

/**
 * Scanner waitlist adapter. Persists to Neon Postgres when DATABASE_URL is
 * set; logs server-side otherwise so the form works before infra exists.
 * The M-LP3 scan pipeline (Inngest job + PDF report) replaces the internals
 * of this function — the API surface stays the same.
 */
export async function saveLead({ email, domain }: Lead): Promise<void> {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.log(`[scan-waitlist] lead (not persisted, DATABASE_URL unset): ${email} → ${domain}`);
    return;
  }

  const sql = neon(url);
  if (!tableReady) {
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        email text NOT NULL,
        domain text NOT NULL,
        score int,
        report_json jsonb,
        created_at timestamptz NOT NULL DEFAULT now()
      )`;
    tableReady = true;
  }
  await sql`INSERT INTO leads (email, domain) VALUES (${email}, ${domain})`;
}
