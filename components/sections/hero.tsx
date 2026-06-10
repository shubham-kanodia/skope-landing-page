import type { CSSProperties } from "react";
import { HeroAperture } from "@/components/aperture/hero-aperture";
import { InstallSnippet } from "@/components/ui/install-snippet";

const SIGNUP_URL = "https://app.skope.network/signup";

// Spec A4: aperture draws first (500ms), headline rises, install card fades in. ≤1.2s total.
const enter = (delay: number): CSSProperties =>
  ({ "--enter-delay": `${delay}s` }) as CSSProperties;

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-16 text-center sm:pt-24">
      <p className="hero-enter font-mono text-xs tracking-wide text-amber" style={enter(0.5)}>
        DPDP RULES ARE LIVE · FULL ENFORCEMENT 13 MAY 2027
      </p>

      <h1 className="hero-enter mt-6 max-w-4xl text-[clamp(38px,6vw,64px)]" style={enter(0.6)}>
        India&apos;s data law applies to you. <span className="gradient-text">Yes, you.</span>
      </h1>

      <p className="hero-enter mt-6 max-w-[68ch] text-base text-mist" style={enter(0.75)}>
        Skope is the DPDP consent kit for small teams. One script tag. Bilingual banner,
        purpose-wise consent, audit-proof records. Live in 30 minutes — no demo calls, no
        lawyers on retainer.
      </p>

      <div
        className="hero-enter mt-8 flex flex-wrap items-center justify-center gap-4"
        style={enter(0.85)}
      >
        <a
          href={SIGNUP_URL}
          className="rounded-lg bg-lens px-6 py-3 text-sm font-medium text-ink transition-shadow hover:shadow-[0_0_24px_rgba(43,217,199,0.35)]"
        >
          Start free — 5 min setup
        </a>
        <a
          href="#scanner"
          className="rounded-lg border border-hairline px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-lens hover:text-lens"
        >
          Scan my website
        </a>
      </div>

      <div className="mt-14 w-full max-w-3xl">
        <HeroAperture />
      </div>

      <div className="hero-enter mt-10 flex w-full justify-center" style={enter(1.0)}>
        <InstallSnippet />
      </div>

      <p className="hero-enter mt-8 text-xs text-mist" style={enter(1.1)}>
        Built for WordPress · Shopify · custom sites · Made in India 🇮🇳 · Data stored in India
      </p>
    </section>
  );
}
