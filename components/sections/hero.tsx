import type { CSSProperties } from "react";
import { HeroCarousel } from "@/components/hero-carousel";

const SIGNUP_URL = "https://app.skope.network/login";

// Spec A4: carousel fades in with the headline, install card after. ≤1.2s total.
const enter = (delay: number): CSSProperties =>
  ({ "--enter-delay": `${delay}s` }) as CSSProperties;

export function Hero() {
  return (
    <section data-section="hero" className="bg-surface-dark">
      {/* Fill the viewport below the 64px nav so the fold never shows the next band */}
      <div className="mx-auto flex min-h-[calc(100svh-64px)] w-full max-w-[1200px] flex-col justify-center px-6 py-16">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="min-w-0">
            <p
              className="hero-enter inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-on-dark-soft"
              style={enter(0.5)}
            >
              <span aria-hidden="true" className="text-[13px] leading-none">
                🇮🇳
              </span>
              Made in India
            </p>

            <h1
              className="hero-enter mt-7 text-[clamp(38px,4.6vw,60px)] leading-[1.04] tracking-[-0.03em] text-white"
              style={enter(0.6)}
            >
              India&apos;s data law can cost more than you make.{" "}
              <span className="text-primary-on-dark">We&apos;ve got your back.</span>
            </h1>

            <p
              className="hero-enter mt-6 max-w-[48ch] text-[17px] leading-relaxed text-on-dark-soft"
              style={enter(0.75)}
            >
              Penalties run to ₹250 crores, with no exemption for small teams. Skope&apos;s AI-driven process
              makes you compliant in 30 minutes or less: a consent banner in every Indian language, purpose-wise
              consent, and audit-proof records, every line yours to customise. No demo calls, no
              lawyers on retainer.
            </p>

            <div className="hero-enter mt-8 flex flex-wrap items-center gap-3" style={enter(0.85)}>
              <a
                href={SIGNUP_URL}
                data-track="cta_click"
                data-track-cta="hero_start_free"
                className="inline-flex h-12 items-center rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Start free
              </a>
              <a
                href="https://app.skope.network/compliance-checker"
                data-track="cta_click"
                data-track-cta="hero_scan_website"
                className="inline-flex h-12 items-center rounded-full border border-white/25 px-7 text-[15px] font-semibold text-white transition-colors hover:border-white/60"
              >
                Scan my website
              </a>
            </div>
          </div>

          <div className="hero-enter w-full min-w-0" style={enter(0.7)}>
            <div className="mx-auto w-full max-w-[560px] lg:mr-0">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
