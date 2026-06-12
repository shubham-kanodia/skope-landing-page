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
              We check your homepage for trackers, pre-consent cookies, a privacy notice, and a
              grievance contact, then score it and email you the fixes.
            </p>
          </Reveal>
          <Reveal index={2}>
            <a
              href="https://app.skope.network/compliance-checker"
              data-track="cta_click"
              data-track-cta="scanner_open_checker"
              className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-primary hover:text-primary-active"
            >
              Prefer it instantly? Open the live checker →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
