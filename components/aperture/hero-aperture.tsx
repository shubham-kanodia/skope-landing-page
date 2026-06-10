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
      glowRef.current?.setAttribute("opacity", String(0.14 * h));

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
          el.setAttribute("fill", p.x > CX ? "var(--lens)" : "var(--mist)");
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
        viewBox="0 0 720 320"
        role="img"
        aria-label="Animation: data flowing from a website is blocked at a closed aperture until consent opens it"
        className="w-full h-auto"
      >
        {/* Stylized website, left */}
        <g>
          <rect x="16" y="100" width="120" height="120" rx="10" fill="var(--slate)" stroke="var(--hairline)" />
          <circle cx="32" cy="116" r="3" fill="var(--mist)" opacity="0.6" />
          <circle cx="44" cy="116" r="3" fill="var(--mist)" opacity="0.6" />
          <rect x="28" y="132" width="96" height="8" rx="4" fill="var(--hairline)" />
          <rect x="28" y="148" width="72" height="8" rx="4" fill="var(--hairline)" />
          <rect x="28" y="170" width="96" height="34" rx="6" fill="var(--ink)" stroke="var(--hairline)" />
          <text x="76" y="191" textAnchor="middle" fontSize="11" fill="var(--mist)" fontFamily="var(--font-mono)">
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
            stroke="var(--hairline)"
            strokeWidth="1"
            strokeDasharray="2 6"
            opacity="0.5"
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
            fill="var(--mist)"
          />
        ))}

        {/* The aperture */}
        <circle cx={CX} cy={CY} r={R} fill="var(--slate)" />
        <circle ref={glowRef} cx={CX} cy={CY} r={staticOpen * MAX_HOLE} fill="var(--lens)" opacity={0.14 * staticOpen} />
        <circle className="aperture-ring" cx={CX} cy={CY} r={R} fill="none" stroke="var(--hairline)" strokeWidth="3" />
        {staticPaths.map((d, i) => (
          <path
            key={i}
            ref={(el) => {
              bladeRefs.current[i] = el;
            }}
            d={d}
            fill="var(--slate)"
            stroke="var(--lens)"
            strokeWidth="1"
            strokeOpacity="0.55"
          />
        ))}

        {/* Tracker chips, right */}
        {TRACKERS.map((name, i) => (
          <g key={name}>
            <rect x={EXIT_X} y={CY + LANES[i] - 13} width="120" height="26" rx="6" fill="var(--slate)" stroke="var(--hairline)" />
            <text
              x={EXIT_X + 60}
              y={CY + LANES[i] + 4}
              textAnchor="middle"
              fontSize="11"
              fill="var(--mist)"
              fontFamily="var(--font-mono)"
            >
              {name}
            </text>
          </g>
        ))}
      </svg>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <button
          type="button"
          role="switch"
          aria-checked={on}
          onClick={() => setOn(!on)}
          className="group inline-flex items-center gap-3 rounded-full border border-hairline bg-slate px-4 py-2 text-sm text-paper transition-colors hover:border-lens/60"
        >
          <span
            aria-hidden="true"
            className={`relative h-5 w-9 rounded-full border transition-colors ${
              on ? "border-lens bg-lens/30" : "border-hairline bg-ink"
            }`}
          >
            <span
              className={`absolute top-0.5 h-3.5 w-3.5 rounded-full transition-all ${
                on ? "left-[18px] bg-lens" : "left-0.5 bg-mist"
              }`}
            />
          </span>
          Accept analytics
        </button>
        <p className="font-mono text-xs text-mist" aria-live="polite">
          {on ? "consent given — permitted data flows" : "blocked — nothing flows until consent"}
        </p>
      </div>
    </div>
  );
}
