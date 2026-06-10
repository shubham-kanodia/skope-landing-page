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
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-lg border border-hairline bg-slate px-3 py-2 sm:px-5 sm:py-4">
        <span
          // Re-keying remounts the span so the roll animation replays per tick
          key={text}
          className="digit-roll inline-block font-mono text-2xl tabular-nums text-amber sm:text-4xl"
        >
          {text}
        </span>
      </div>
      <span className="font-mono text-xs text-mist">{label}</span>
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
    <div className="flex flex-col items-center gap-6">
      <div
        className="flex items-start gap-3 sm:gap-5"
        role="timer"
        aria-label={`${t.days} days until full DPDP enforcement on 13 May 2027`}
      >
        <Digit value={t.days} label="days" />
        <Digit value={t.hours} label="hours" />
        <Digit value={t.minutes} label="min" />
        <Digit value={t.seconds} label="sec" />
      </div>
      <p className="font-mono text-xs text-mist">
        FULL ENFORCEMENT · 13 MAY 2027{" "}
        <span className="text-amber">· CONSENT MANAGER FRAMEWORK IN {cmDays} DAYS (13 NOV 2026)</span>
      </p>
    </div>
  );
}
