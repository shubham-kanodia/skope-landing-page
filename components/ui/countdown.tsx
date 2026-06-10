"use client";

import { useSyncExternalStore } from "react";

const FULL_COMPLIANCE = new Date("2027-05-13T00:00:00+05:30").getTime();
const CONSENT_MANAGER = new Date("2026-11-13T00:00:00+05:30").getTime();

function remaining(target: number, now: number) {
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-2xl border border-white/[0.06] bg-elevated px-4 py-3 sm:px-6 sm:py-5">
        <span
          // Re-keying remounts the span so the roll animation replays per tick
          key={text}
          className="digit-roll inline-block font-mono text-3xl font-medium tabular-nums text-white sm:text-5xl"
        >
          {text}
        </span>
      </div>
      <span className="font-mono text-xs text-muted">{label}</span>
    </div>
  );
}

const subscribeTick = (cb: () => void) => {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
};

export function Countdown() {
  // null on the server / first paint so SSR markup matches hydration
  const now = useSyncExternalStore(
    subscribeTick,
    () => Math.floor(Date.now() / 1000) * 1000,
    () => null,
  );

  const t = remaining(FULL_COMPLIANCE, now ?? FULL_COMPLIANCE);
  const cmDays = remaining(CONSENT_MANAGER, now ?? CONSENT_MANAGER).days;

  return (
    <div className="flex flex-col items-center gap-8">
      <div
        className="flex items-start gap-3 sm:gap-4"
        role="timer"
        aria-label={`${t.days} days until full DPDP enforcement on 13 May 2027`}
      >
        <Digit value={t.days} label="days" />
        <Digit value={t.hours} label="hours" />
        <Digit value={t.minutes} label="min" />
        <Digit value={t.seconds} label="sec" />
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        Full enforcement · 13 May 2027{" "}
        <span className="text-on-dark-soft">
          · Consent Manager framework in {cmDays} days (13 Nov 2026)
        </span>
      </p>
    </div>
  );
}
