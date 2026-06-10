"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/reveal";

type Status = "idle" | "submitting" | "done" | "error";

export function Scanner() {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [scannedDomain, setScannedDomain] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/scan-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain, email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
        setStatus("error");
        return;
      }
      setScannedDomain(data.domain);
      setStatus("done");
    } catch {
      setError("We couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="scanner" className="border-t border-hairline">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-[clamp(28px,4vw,44px)]">
            Is your site DPDP-ready? Find out in 60 seconds.
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mx-auto mt-5 max-w-[68ch] text-sm text-mist">
            We scan your site for trackers, pre-consent cookies, notice coverage, and language
            support — then email you the full readiness report.
          </p>
        </Reveal>

        <Reveal index={2}>
          {status === "done" ? (
            <div className="mx-auto mt-10 max-w-xl rounded-xl border border-lens/40 bg-slate p-8 text-left">
              <p className="font-mono text-xs text-lens">REPORT QUEUED</p>
              <h3 className="mt-3 text-lg font-semibold text-paper">Your report is on its way.</h3>
              <p className="mt-2 text-sm text-mist">
                We&apos;ll scan <span className="font-mono text-paper">{scannedDomain}</span> and
                email the full DPDP readiness report to you.
              </p>
              <a
                href="https://app.skope.network/signup"
                className="mt-6 inline-block rounded-lg bg-lens px-5 py-2.5 text-sm font-medium text-ink transition-shadow hover:shadow-[0_0_20px_rgba(43,217,199,0.35)]"
              >
                Fix it in 30 minutes → Start free
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-10 flex max-w-xl flex-col gap-3">
              <label className="sr-only" htmlFor="scan-domain">
                Your website domain
              </label>
              <input
                id="scan-domain"
                type="text"
                required
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="yourstore.in"
                autoComplete="url"
                className="rounded-lg border border-hairline bg-slate px-4 py-3 font-mono text-sm text-paper placeholder:text-mist/50"
              />
              <label className="sr-only" htmlFor="scan-email">
                Your email
              </label>
              <input
                id="scan-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.in"
                autoComplete="email"
                className="rounded-lg border border-hairline bg-slate px-4 py-3 font-mono text-sm text-paper placeholder:text-mist/50"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-lg bg-lens px-6 py-3 text-sm font-medium text-ink transition-shadow hover:shadow-[0_0_24px_rgba(43,217,199,0.35)] disabled:opacity-60"
              >
                {status === "submitting" ? "Queuing your scan…" : "Scan my website"}
              </button>
              {error && (
                <p role="alert" className="text-sm text-amber">
                  {error}
                </p>
              )}
              <p className="text-xs text-mist">
                One scan per site. We email the report — nothing else, no spam.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
