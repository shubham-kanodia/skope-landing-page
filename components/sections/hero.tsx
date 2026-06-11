import type { CSSProperties } from "react";
import { HeroAperture } from "@/components/aperture/hero-aperture";

const SIGNUP_URL = "https://app.skope.network/signup";

// Spec A4: aperture draws first (500ms), headline rises, install card fades in. ≤1.2s total.
const enter = (delay: number): CSSProperties =>
  ({ "--enter-delay": `${delay}s` }) as CSSProperties;

export function Hero() {
  return (
    <section className="bg-surface-dark">
      {/* Fill the viewport below the 64px nav so the fold never shows the next band */}
      <div className="mx-auto flex min-h-[calc(100svh-64px)] w-full max-w-[1200px] flex-col justify-center px-6 py-16">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <p
              className="hero-enter inline-flex rounded-full bg-white/[0.08] px-4 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-on-dark-soft sm:whitespace-nowrap"
              style={enter(0.5)}
            >
              DPDP rules are live · full enforcement 13 May 2027
            </p>

            <h1
              className="hero-enter mt-7 text-[clamp(38px,4.6vw,60px)] leading-[1.04] tracking-[-0.03em] text-white"
              style={enter(0.6)}
            >
              India&apos;s data law applies to you.{" "}
              <span className="text-primary-on-dark">Yes, you.</span>
            </h1>

            <p
              className="hero-enter mt-6 max-w-[46ch] text-[17px] leading-relaxed text-on-dark-soft"
              style={enter(0.75)}
            >
              Skope is the DPDP consent kit for small teams. One script tag. Bilingual banner,
              purpose-wise consent, audit-proof records. Live in 30 minutes — no demo calls, no
              lawyers on retainer.
            </p>

            <div className="hero-enter mt-9 flex flex-wrap items-center gap-3" style={enter(0.85)}>
              <a
                href={SIGNUP_URL}
                className="inline-flex h-14 items-center rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Start free
              </a>
              <a
                href="#scanner"
                className="inline-flex h-14 items-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-colors hover:border-white/60"
              >
                Scan my website
              </a>
            </div>

            <p className="hero-enter mt-8 text-[13px] text-muted" style={enter(1.0)}>
              Built for WordPress · Shopify · custom sites · Made in India · Data stored in India
            </p>
          </div>

          <div className="hero-enter w-full min-w-0" style={enter(0.7)}>
            <div className="mx-auto w-full max-w-[560px] lg:mr-0">
              <HeroAperture />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
