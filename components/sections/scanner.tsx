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

  const inputClass =
    "h-12 w-full rounded-xl border border-hairline bg-canvas px-4 text-[15px] text-ink placeholder:text-muted-soft focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <section id="scanner" className="bg-surface-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-[clamp(32px,4vw,52px)]">
              Is your site DPDP-ready? Find out in 60 seconds.
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mx-auto mt-5 max-w-[58ch] text-[15px]">
              We scan your site for trackers, pre-consent cookies, notice coverage, and language
              support — then email you the full readiness report.
            </p>
          </Reveal>
        </div>

        <Reveal index={2}>
          {status === "done" ? (
            <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-canvas p-8 text-left">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-primary">
                Report queued
              </p>
              <h3 className="mt-3 text-lg font-semibold text-ink">Your report is on its way.</h3>
              <p className="mt-2 text-[15px]">
                We&apos;ll scan <span className="font-mono text-sm text-ink">{scannedDomain}</span>{" "}
                and email the full DPDP readiness report to you.
              </p>
              <a
                href="https://app.skope.network/signup"
                className="mt-7 inline-flex h-12 items-center rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Fix it in 30 minutes — start free
              </a>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="mx-auto mt-12 flex max-w-xl flex-col gap-3 rounded-3xl bg-canvas p-8"
            >
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
                className={inputClass}
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
                className={inputClass}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-colors hover:bg-primary-active disabled:bg-[#a8b8cc]"
              >
                {status === "submitting" ? "Queuing your scan…" : "Scan my website"}
              </button>
              {error && (
                <p role="alert" className="text-sm text-[#cf202f]">
                  {error}
                </p>
              )}
              <p className="text-[13px] text-body">
                One scan per site. We email the report — nothing else, no spam.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
