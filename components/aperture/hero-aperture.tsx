"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { bladePaths, BLADE_COUNT } from "./aperture";

const CX = 360;
const CY = 160;
const R = 80;
const MAX_HOLE = 48;
const LANES = [-30, 0, 30];
const SPAWN_X = 150;
const BLOCK_X = CX - R - 12; // where particles queue when the iris is shut
const EXIT_X = 584;
const TRACKERS = ["GA4", "Meta Pixel", "Hotjar"];

// Palette for the dark product card (DESIGN.md: surface-dark-elevated layering)
const C = {
  panel: "#22262d",
  panelEdge: "rgba(255,255,255,0.07)",
  label: "#a8acb3",
  lane: "rgba(255,255,255,0.10)",
  dot: "#7c828a",
  dotAllowed: "#3c7dff",
  ring: "rgba(255,255,255,0.16)",
  disc: "#0e1014",
  blade: "#272c34",
  bladeEdge: "rgba(255,255,255,0.22)",
  glow: "#0052ff",
};

type Particle = {
  lane: number;
  x: number;
  speed: number;
  jitter: number;
  stall: number;
  opacity: number;
};

// Deterministic pseudo-random so the SSR markup matches hydration.
const frac = (n: number) => n - Math.floor(n);

function initialParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    lane: i % LANES.length,
    x: SPAWN_X + frac(i * 0.6180339887) * (BLOCK_X - SPAWN_X),
    speed: 70 + frac(i * 0.7548776662) * 60,
    jitter: frac(i * 0.4142135623) * 26,
    stall: 0,
    opacity: 1,
  }));
}

const PARTICLES = initialParticles(18);

export function HeroAperture() {
  const [on, setOn] = useState(false);
  const reduced = useReducedMotion();
  const onRef = useRef(on);

  const svgRef = useRef<SVGSVGElement>(null);
  const bladeRefs = useRef<(SVGPathElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const glowRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    onRef.current = on;
  }, [on]);

  useEffect(() => {
    if (reduced) return;

    const particles = PARTICLES.map((p) => ({ ...p }));
    let h = onRef.current ? 1 : 0; // iris openness 0..1, spring-animated
    let hv = 0;
    let raf = 0;
    let last = 0;
    let running = true;
    let visible = true;

    const frame = (now: number) => {
      if (!running || !visible) return;
      const dt = Math.min((now - (last || now)) / 1000, 0.05);
      last = now;

      // Spring per spec A4: stiffness 120
      const target = onRef.current ? 1 : 0;
      hv += (120 * (target - h) - 18 * hv) * dt;
      h += hv * dt;
      const holePx = Math.max(0, Math.min(1, h)) * MAX_HOLE;

      const paths = bladePaths(Math.max(0, Math.min(1, h)), CX, CY, R, MAX_HOLE);
      for (let i = 0; i < BLADE_COUNT; i++) {
        bladeRefs.current[i]?.setAttribute("d", paths[i]);
      }
      glowRef.current?.setAttribute("r", String(holePx));
      glowRef.current?.setAttribute("opacity", String(0.2 * h));

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const laneOpen = holePx > Math.abs(LANES[p.lane]) + 5;
        const hold = BLOCK_X - p.jitter;

        if (!laneOpen && p.x >= hold) {
          // Queued at the closed iris: fade out, then recycle
          p.stall += dt;
          p.opacity = Math.max(0, 1 - p.stall / 2.2);
          if (p.opacity === 0) {
            p.x = SPAWN_X - frac(i * 0.318) * 60;
            p.stall = 0;
            p.opacity = 1;
          }
        } else {
          p.x += p.speed * dt;
          p.stall = 0;
          p.opacity = Math.min(1, p.opacity + dt * 2);
          if (p.x > EXIT_X + 20) {
            p.x = SPAWN_X - frac(i * 0.318) * 60;
            p.opacity = 0.2;
          }
        }

        const el = dotRefs.current[i];
        if (el) {
          el.setAttribute("cx", p.x.toFixed(1));
          el.setAttribute("opacity", p.opacity.toFixed(2));
          el.setAttribute("fill", p.x > CX ? C.dotAllowed : C.dot);
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
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        start();
      }
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

  // Static fallback state (also the SSR markup): closed iris, queued particles.
  const staticOpen = reduced ? (on ? 1 : 0) : 0;
  const staticPaths = bladePaths(staticOpen, CX, CY, R, MAX_HOLE);

  return (
    <div className="w-full">
      <svg
        ref={svgRef}
        viewBox="0 70 720 180"
        role="img"
        aria-label="Animation: data flowing from a website is blocked at a closed aperture until consent opens it"
        className="w-full h-auto"
      >
        {/* Stylized website, left */}
        <g>
          <rect x="16" y="100" width="120" height="120" rx="14" fill={C.panel} stroke={C.panelEdge} />
          <circle cx="34" cy="118" r="3" fill={C.label} opacity="0.5" />
          <circle cx="46" cy="118" r="3" fill={C.label} opacity="0.5" />
          <rect x="30" y="134" width="92" height="7" rx="3.5" fill="rgba(255,255,255,0.10)" />
          <rect x="30" y="149" width="68" height="7" rx="3.5" fill="rgba(255,255,255,0.10)" />
          <rect x="30" y="172" width="92" height="32" rx="9" fill="rgba(0,0,0,0.35)" />
          <text x="76" y="192" textAnchor="middle" fontSize="10.5" fill={C.label} fontFamily="var(--font-geist-mono)">
            your site
          </text>
        </g>

        {/* Lane guides */}
        {LANES.map((dy) => (
          <line
            key={dy}
            x1={SPAWN_X - 10}
            y1={CY + dy}
            x2={EXIT_X}
            y2={CY + dy}
            stroke={C.lane}
            strokeWidth="1"
            strokeDasharray="2 7"
          />
        ))}

        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <circle
            key={i}
            ref={(el) => {
              dotRefs.current[i] = el;
            }}
            cx={p.x}
            cy={CY + LANES[p.lane]}
            r="2.5"
            fill={C.dot}
          />
        ))}

        {/* The aperture */}
        <circle cx={CX} cy={CY} r={R} fill={C.disc} />
        <circle ref={glowRef} cx={CX} cy={CY} r={staticOpen * MAX_HOLE} fill={C.glow} opacity={0.2 * staticOpen} />
        <circle className="aperture-ring" cx={CX} cy={CY} r={R} fill="none" stroke={C.ring} strokeWidth="2" />
        {staticPaths.map((d, i) => (
          <path
            key={i}
            ref={(el) => {
              bladeRefs.current[i] = el;
            }}
            d={d}
            fill={C.blade}
            stroke={C.bladeEdge}
            strokeWidth="1"
          />
        ))}

        {/* Tracker chips, right */}
        {TRACKERS.map((name, i) => (
          <g key={name}>
            <rect x={EXIT_X} y={CY + LANES[i] - 14} width="120" height="28" rx="14" fill={C.panel} stroke={C.panelEdge} />
            <text
              x={EXIT_X + 60}
              y={CY + LANES[i] + 4}
              textAnchor="middle"
              fontSize="10.5"
              fill={C.label}
              fontFamily="var(--font-geist-mono)"
            >
              {name}
            </text>
          </g>
        ))}
      </svg>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <button
          type="button"
          role="switch"
          aria-checked={on}
          onClick={() => setOn(!on)}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-3 pr-5 text-sm font-medium text-white transition-colors hover:border-white/25"
        >
          <span
            aria-hidden="true"
            className={`relative h-6 w-10 rounded-full transition-colors ${
              on ? "bg-primary" : "bg-white/15"
            }`}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                on ? "left-5" : "left-1"
              }`}
            />
          </span>
          Accept analytics
        </button>
        <p className="font-mono text-xs text-on-dark-soft" aria-live="polite">
          {on ? "consent given — permitted data flows" : "blocked — nothing flows until consent"}
        </p>
      </div>
    </div>
  );
}
