"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { bladePaths, BLADE_COUNT } from "./aperture";

/**
 * The hero centerpiece, kept simple: a stream of data falls toward the
 * aperture and is held until consent opens it. One toggle, one idea.
 */

const W = 480;
const H = 340;
const CX = 240;
const CY = 186;
const R = 104;
const MAX_HOLE = 62;
const QUEUE_Y = CY - R - 6; // where blocked particles pile up
const SPAWN_TOP = 28;
const FADE_Y = 300;
const RESET_Y = 332;
const RING_LEN = Math.ceil(2 * Math.PI * R);

const C = {
  dot: "#7c828a",
  dotAllowed: "#3c7dff",
  ring: "rgba(255,255,255,0.16)",
  disc: "#0e1014",
  bladeEdge: "rgba(255,255,255,0.16)",
  glow: "#0052ff",
};

// Stepped blade tones — overlapping leaves read as a machined shutter spiral
const BLADE_FILLS = ["#1f242b", "#22272f", "#252a33", "#282e37", "#2b313b", "#2e343f", "#313743"];

type Particle = { x: number; y: number; speed: number; jitter: number; stall: number; opacity: number };

// Deterministic pseudo-random so the SSR markup matches hydration.
const frac = (n: number) => n - Math.floor(n);

function initialParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    x: 70 + frac(i * 0.6180339887) * (W - 140),
    y: SPAWN_TOP + frac(i * 0.7548776662) * (QUEUE_Y - SPAWN_TOP - 10),
    speed: 52 + frac(i * 0.4142135623) * 40,
    jitter: frac(i * 0.3247179572) * 12,
    stall: 0,
    opacity: 1,
  }));
}

const PARTICLES = initialParticles(16);

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

      // Spring per spec A4: stiffness 120
      const target = onRef.current ? 1 : 0;
      hv += (120 * (target - h) - 18 * hv) * dt;
      h += hv * dt;
      const hc = Math.max(0, Math.min(1, h));

      const paths = bladePaths(hc, CX, CY, R, MAX_HOLE);
      for (let i = 0; i < BLADE_COUNT; i++) {
        bladeRefs.current[i]?.setAttribute("d", paths[i]);
      }
      glowRef.current?.setAttribute("r", String(hc * MAX_HOLE));
      glowRef.current?.setAttribute("opacity", String(0.35 * hc));

      const open = hc > 0.06;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!open && p.y >= QUEUE_Y - p.jitter) {
          // Held at the shut blades: fade out, then recycle at the top
          p.y = QUEUE_Y - p.jitter;
          p.stall += dt;
          p.opacity = Math.max(0, 1 - p.stall / 2.2);
          if (p.opacity === 0) {
            p.y = SPAWN_TOP - frac(i * 0.318) * 16;
            p.x = 70 + frac(i * 0.917) * (W - 140);
            p.stall = 0;
            p.opacity = 1;
          }
        } else {
          p.y += p.speed * dt;
          // funnel toward the center as it nears the iris
          if (p.y < CY) p.x += (CX - p.x) * Math.min(1, 1.6 * dt);
          p.stall = 0;
          const fade = p.y > FADE_Y ? Math.max(0, 1 - (p.y - FADE_Y) / (RESET_Y - FADE_Y)) : 1;
          p.opacity = Math.min(Math.min(1, p.opacity + dt * 2), fade);
          if (p.y > RESET_Y) {
            p.y = SPAWN_TOP - frac(i * 0.318) * 16;
            p.x = 70 + frac(i * 0.917) * (W - 140);
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

  // Static fallback (and SSR markup): iris matches the toggle, dots queued.
  const staticOpen = reduced && on ? 1 : 0;
  const staticPaths = bladePaths(staticOpen, CX, CY, R, MAX_HOLE);

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/[0.06] bg-elevated">
      {/* Dot matrix + consent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(120,160,255,0.14)_1px,transparent_1.4px)] [background-size:28px_28px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-primary blur-[120px] transition-opacity duration-700"
        style={{ opacity: on ? 0.3 : 0.08 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-primary blur-[120px] transition-opacity duration-700"
        style={{ opacity: on ? 0.18 : 0.05 }}
      />

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Animation: a stream of data is held at a closed aperture until consent opens it"
        className="relative block h-auto w-full px-2 pt-6"
      >
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

      {/* One control, one idea */}
      <div className="relative flex items-center justify-between gap-3 border-t border-white/[0.06] px-6 py-5">
        <p className="font-mono text-[12px] text-on-dark-soft" aria-live="polite">
          {on ? "consent given — data flows" : "blocked — nothing flows until consent"}
        </p>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          aria-label="Give consent"
          onClick={() => setOn(!on)}
          className={`shrink-0 rounded-full transition-colors ${on ? "bg-primary" : "bg-white/15"}`}
        >
          <span className="flex h-7 w-12 items-center">
            <span
              className={`h-5 w-5 rounded-full bg-white transition-transform duration-200 ${
                on ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
