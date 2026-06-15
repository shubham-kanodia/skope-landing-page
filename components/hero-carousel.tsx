"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Hero carousel: a browser-framed walkthrough of the basic flow. Replaces the
 * lens animation. Auto-advances, pauses on hover/focus, respects reduced motion,
 * and is keyboard + screen-reader navigable via the dots.
 */
type Slide = { src: string; alt: string; label: string };

const SLIDES: Slide[] = [
  { src: "/hero/01-banner.png", alt: "Skope consent banner on a website", label: "A consent banner on your site, in every Indian language" },
  { src: "/hero/02-manage.png", alt: "Purpose-wise consent choices", label: "Purpose-wise consent, the way DPDP requires" },
  { src: "/hero/04-setup.png", alt: "Install step with a single script tag", label: "One script tag to install, no code" },
  { src: "/hero/05-records.png", alt: "Tamper-evident consent records", label: "Tamper-proof, audit-ready records" },
  { src: "/hero/06-compliance.png", alt: "DPDP compliance hub", label: "Every DPDP duty, in one place" },
];

const INTERVAL = 3800;

export function HeroCarousel() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SLIDES.length;

  useEffect(() => {
    if (reduceMotion || paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), INTERVAL);
    return () => clearInterval(t);
  }, [reduceMotion, paused, n]);

  return (
    <div
      className="w-full"
      role="group"
      aria-roledescription="carousel"
      aria-label="Skope product walkthrough"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Browser-chrome card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/5">
        <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#f6f6f7] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 hidden truncate rounded-md bg-black/[0.04] px-3 py-1 font-mono text-[11px] text-black/45 sm:block">
            app.skope.network
          </span>
        </div>

        <div className="relative aspect-[1280/820] bg-white">
          {SLIDES.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              priority={i === 0}
              className={`object-cover object-top transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i === index ? undefined : true}
            />
          ))}
        </div>
      </div>

      {/* Caption + dots */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <p aria-live="polite" className="text-[15px] leading-snug text-on-dark-soft">
          {SLIDES[index].label}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show: ${s.label}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-primary-on-dark" : "w-2 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
