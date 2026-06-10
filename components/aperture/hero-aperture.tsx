"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { bladePaths, BLADE_COUNT } from "./aperture";

/**
 * The hero product card: paste one tag (chrome bar), personal data falls
 * toward the aperture, and each granted purpose opens the iris by a third —
 * purpose-wise consent, literally. Receipts tick at the bottom.
 */

const W = 560;
const H = 470;
const CX = 280;
const CY = 272;
const R = 108;
const MAX_HOLE = 66;
const QUEUE_Y = CY - R - 8; // where blocked particles pile up
const FADE_Y = 420;
const RESET_Y = 456;
const RING_LEN = Math.ceil(2 * Math.PI * R);

const SNIPPET = `<script src="https://cdn.skope.network/skope.js" data-site="sk_live_xxxx" defer></script>`;

type Purpose = "analytics" | "marketing" | "support";
const PURPOSES: { key: Purpose; label: string }[] = [
  { key: "analytics", label: "Analytics" },
  { key: "marketing", label: "Marketing" },
  { key: "support", label: "Support" },
];

const CHIPS: { label: string; x: number; purpose: Purpose }[] = [
  { label: "name", x: 76, purpose: "support" },
  { label: "email", x: 178, purpose: "marketing" },
  { label: "device", x: 280, purpose: "analytics" },
  { label: "location", x: 382, purpose: "marketing" },
  { label: "cookies", x: 484, purpose: "analytics" },
];

const C = {
  panel: "#22262d",
  panelEdge: "rgba(255,255,255,0.07)",
  label: "#a8acb3",
  dot: "#7c828a",
  dotAllowed: "#3c7dff",
  ring: "rgba(255,255,255,0.16)",
  disc: "#0e1014",
  bladeEdge: "rgba(255,255,255,0.16)",
  glow: "#0052ff",
};

// Stepped blade tones — overlapping leaves read as a machined shutter spiral
const BLADE_FILLS = ["#1f242b", "#22272f", "#252a33", "#282e37", "#2b313b", "#2e343f", "#313743"];

type Particle = {
  chip: number;
  x: number;
  y: number;
  speed: number;
  jitter: number;
  stall: number;
  opacity: number;
};

// Deterministic pseudo-random so the SSR markup matches hydration.
const frac = (n: number) => n - Math.floor(n);

function initialParticles(perChip: number): Particle[] {
  const out: Particle[] = [];
  CHIPS.forEach((chip, ci) => {
    for (let k = 0; k < perChip; k++) {
      const i = ci * perChip + k;
      out.push({
        chip: ci,
        x: chip.x + (frac(i * 0.6180339887) - 0.5) * 26,
        y: 58 + frac(i * 0.7548776662) * (QUEUE_Y - 70),
        speed: 55 + frac(i * 0.4142135623) * 45,
        jitter: frac(i * 0.3247179572) * 10,
        stall: 0,
        opacity: 1,
      });
    }
  });
  return out;
}

const PARTICLES = initialParticles(3);

export function HeroAperture() {
  const [granted, setGranted] = useState<Record<Purpose, boolean>>({
    analytics: false,
    marketing: false,
    support: false,
  });
  const [ticker, setTicker] = useState("awaiting consent — all data held at the aperture");
  const [tickerKey, setTickerKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();

  const grantedRef = useRef(granted);
  const svgRef = useRef<SVGSVGElement>(null);
  const bladeRefs = useRef<(SVGPathElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const glowRef = useRef<SVGCircleElement>(null);

  const grantedCount = PURPOSES.filter((p) => granted[p.key]).length;

  useEffect(() => {
    grantedRef.current = granted;
  }, [granted]);

  const toggle = (p: Purpose) => {
    const next = !granted[p];
    setGranted({ ...granted, [p]: next });
    const id = ((0x8a31 + (tickerKey + 1) * 0x9e1) % 0xffff).toString(16).padStart(4, "0");
    const time = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(new Date());
    setTicker(`receipt #${id} · ${p} ${next ? "granted" : "withdrawn"} · ${time} IST · hash-chained`);
    setTickerKey((k) => k + 1);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  useEffect(() => {
    if (reduced) return;

    const particles = PARTICLES.map((p) => ({ ...p }));
    let h = 0; // iris openness 0..1, spring-animated
    let hv = 0;
    let raf = 0;
    let last = 0;
    let running = true;
    let visible = true;

    const frame = (now: number) => {
      if (!running || !visible) return;
      const dt = Math.min((now - (last || now)) / 1000, 0.05);
      last = now;

      const g = grantedRef.current;
      const target = PURPOSES.filter((p) => g[p.key]).length / PURPOSES.length;

      // Spring per spec A4: stiffness 120
      hv += (120 * (target - h) - 18 * hv) * dt;
      h += hv * dt;
      const hc = Math.max(0, Math.min(1, h));

      const paths = bladePaths(hc, CX, CY, R, MAX_HOLE);
      for (let i = 0; i < BLADE_COUNT; i++) {
        bladeRefs.current[i]?.setAttribute("d", paths[i]);
      }
      glowRef.current?.setAttribute("r", String(hc * MAX_HOLE));
      glowRef.current?.setAttribute("opacity", String(0.35 * hc));

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const allowed = g[CHIPS[p.chip].purpose];

        if (!allowed && p.y >= QUEUE_Y - p.jitter) {
          // Held at the shut blades: fade out, then recycle at the chip
          p.y = QUEUE_Y - p.jitter;
          p.stall += dt;
          p.opacity = Math.max(0, 1 - p.stall / 2.2);
          if (p.opacity === 0) {
            p.y = 50 + frac(i * 0.318) * 20;
            p.x = CHIPS[p.chip].x + (frac(i * 0.917) - 0.5) * 26;
            p.stall = 0;
            p.opacity = 1;
          }
        } else {
          p.y += p.speed * dt;
          // funnel toward the center as it approaches the iris
          if (p.y < CY) p.x += (CX - p.x) * Math.min(1, 1.8 * dt);
          p.stall = 0;
          const fade = p.y > FADE_Y ? Math.max(0, 1 - (p.y - FADE_Y) / (RESET_Y - FADE_Y)) : 1;
          p.opacity = Math.min(Math.min(1, p.opacity + dt * 2), fade);
          if (p.y > RESET_Y) {
            p.y = 50 + frac(i * 0.318) * 20;
            p.x = CHIPS[p.chip].x + (frac(i * 0.917) - 0.5) * 26;
            p.opacity = 0.25;
          }
        }

        const el = dotRefs.current[i];
        if (el) {
          el.setAttribute("cx", p.x.toFixed(1));
          el.setAttribute("cy", p.y.toFixed(1));
          el.setAttribute("opacity", p.opacity.toFixed(2));
          el.setAttribute("fill", p.y > CY ? C.dotAllowed : C.dot);
        }
      }
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      last = 0;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    };

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else start();
    };
    document.addEventListener("visibilitychange", onVis);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else cancelAnimationFrame(raf);
    });
    if (svgRef.current) io.observe(svgRef.current);

    start();
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, [reduced]);

  // Static fallback (and SSR markup): iris at the granted fraction, queued dots.
  const staticOpen = reduced ? grantedCount / PURPOSES.length : 0;
  const staticPaths = bladePaths(staticOpen, CX, CY, R, MAX_HOLE);

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/[0.06] bg-elevated">
      {/* Dot matrix + consent glow — depth grows as purposes open */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(120,160,255,0.16)_1px,transparent_1.4px)] [background-size:26px_26px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-primary blur-[110px] transition-opacity duration-700"
        style={{ opacity: 0.08 + grantedCount * 0.09 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-primary blur-[110px] transition-opacity duration-700"
        style={{ opacity: 0.05 + grantedCount * 0.06 }}
      />

      {/* Chrome bar: the one script tag, installed */}
      <div className="relative flex items-center gap-3 border-b border-white/[0.06] px-5 py-3.5">
        <span aria-hidden="true" className="flex shrink-0 gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </span>
        <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-[11px] text-on-dark-soft [scrollbar-width:none]">
          <span className="text-muted">&lt;script src=</span>
          &quot;cdn.skope.network/skope.js&quot;
          <span className="text-muted"> data-site=&quot;sk_live_xxxx&quot; defer&gt;</span>
        </code>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] text-on-dark-soft transition-colors hover:border-white/40 hover:text-white"
          aria-label="Copy install snippet"
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>

      {/* The aperture scene */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Animation: personal data — name, email, device, location, cookies — falls toward an aperture that only opens for the purposes a visitor has consented to"
        className="relative block h-auto w-full"
      >
        {/* Data chips */}
        {CHIPS.map((chip) => (
          <g key={chip.label}>
            <rect x={chip.x - 44} y={18} width="88" height="28" rx="14" fill={C.panel} stroke={C.panelEdge} />
            <text x={chip.x} y={36} textAnchor="middle" fontSize="11" fill={C.label} fontFamily="var(--font-geist-mono)">
              {chip.label}
            </text>
          </g>
        ))}

        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <circle
            key={i}
            ref={(el) => {
              dotRefs.current[i] = el;
            }}
            cx={p.x}
            cy={p.y}
            r="2.5"
            fill={C.dot}
          />
        ))}

        {/* The aperture */}
        <circle cx={CX} cy={CY} r={R} fill={C.disc} />
        <circle ref={glowRef} cx={CX} cy={CY} r={staticOpen * MAX_HOLE} fill={C.glow} opacity={0.35 * staticOpen} />
        <circle
          className="aperture-ring"
          style={{ ["--ring-len" as string]: RING_LEN }}
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke={C.ring}
          strokeWidth="2"
        />
        {staticPaths.map((d, i) => (
          <path
            key={i}
            ref={(el) => {
              bladeRefs.current[i] = el;
            }}
            d={d}
            fill={BLADE_FILLS[i % BLADE_FILLS.length]}
            stroke={C.bladeEdge}
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Receipt ticker */}
      <div className="relative border-t border-white/[0.06] px-5 py-3" aria-live="polite">
        <p key={tickerKey} className="digit-roll truncate font-mono text-[11px] text-on-dark-soft">
          {ticker}
        </p>
      </div>

      {/* Purpose switches — consent is per purpose, not all-or-nothing */}
      <div className="relative flex flex-wrap items-center gap-2 px-5 pb-5 pt-1">
        {PURPOSES.map((p) => (
          <button
            key={p.key}
            type="button"
            role="switch"
            aria-checked={granted[p.key]}
            onClick={() => toggle(p.key)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              granted[p.key]
                ? "bg-primary text-white"
                : "border border-white/10 bg-white/[0.04] text-on-dark-soft hover:border-white/25"
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${granted[p.key] ? "bg-white" : "bg-white/30"}`}
            />
            {p.label}
          </button>
        ))}
        <span className="ml-auto font-mono text-[11px] text-muted">
          {grantedCount}/{PURPOSES.length} purposes
        </span>
      </div>
    </div>
  );
}
