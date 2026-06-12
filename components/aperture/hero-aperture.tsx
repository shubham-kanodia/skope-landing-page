"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { irisFacePath, irisPolygon } from "./aperture";

/**
 * The hero centerpiece — a machined camera lens. A stream of data funnels down
 * into the iris and is held at the shut lens, until consent powers the lens on
 * and irises it open, letting the stream pour through the lit core and out the
 * other side. It plays itself in a slow loop until the visitor takes the toggle.
 *
 * The iris is one solid metal face with a clean polygon hole punched through it,
 * so the metal always reads solid as it opens. Under prefers-reduced-motion it
 * collapses to a static closed lens with the stream feeding into it.
 */

const W = 480;
const H = 360;
const CX = 240;
const CY = 192;
const R = 108;
const MAX_HOLE = 66;
const RING_LEN = Math.ceil(2 * Math.PI * R);

const BLADES = 10;
const SPIN_MAX = 0.34; // radians the iris sweeps through, fully open

/**
 * The consent lanes: data fans across the top, funnels to a tight bundle at the
 * lens, then disperses below it. Split at the iris so the lower half can be
 * gated by consent. Deterministic so SSR markup matches hydration.
 */
const LANES = Array.from({ length: 7 }, (_, i) => {
  const f = i - 3; // -3 … 3
  const xTop = CX + f * 34;
  const xMid = CX + f * 7;
  const xBot = CX + f * 22;
  return {
    above: `M ${xTop} -12 C ${xTop} 116, ${xMid} 150, ${xMid} ${CY}`,
    below: `M ${xMid} ${CY} C ${xMid} 250, ${xBot} 326, ${xBot} 372`,
    dur: `${(1.25 + Math.abs(f) * 0.14).toFixed(2)}s`,
    delay: `${(i * 0.13).toFixed(2)}s`,
  };
});

const laneStyle = (l: (typeof LANES)[number]): CSSProperties =>
  ({ "--dur": l.dur, animationDelay: l.delay }) as CSSProperties;

export function HeroAperture() {
  const [on, setOn] = useState(false);
  const reduced = useReducedMotion();
  const onRef = useRef(on);
  const userTook = useRef(false); // user interacted → stop the scripted loop

  const svgRef = useRef<SVGSVGElement>(null);
  const faceRef = useRef<SVGPathElement>(null);
  const clipRef = useRef<SVGPathElement>(null);
  const holeRef = useRef<SVGPathElement>(null); // lit polygon edge
  const bevelRef = useRef<SVGPathElement>(null); // machined hole highlight
  const glowRef = useRef<SVGCircleElement>(null);
  const belowRef = useRef<SVGGElement>(null); // the through-flow, gated by consent
  const poolRef = useRef<SVGCircleElement>(null); // data backed up at the shut lens

  useEffect(() => {
    onRef.current = on;
  }, [on]);

  // Scripted loop: hold closed (stream backs up) → open (pour through) → close → … ,
  // until the visitor takes over with the toggle.
  useEffect(() => {
    if (reduced) return;
    let t = 0;
    const step = (next: boolean, delay: number) => {
      t = window.setTimeout(() => {
        if (userTook.current) return;
        setOn(next);
        step(!next, next ? 4200 : 2600);
      }, delay);
    };
    step(true, 2000);
    return () => window.clearTimeout(t);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;

    let h = 0; // iris openness 0..1, spring-animated
    let hv = 0;
    let glow = 0; // bloom, lags the iris for a "powered on" beat
    let glowV = 0;
    let raf = 0;
    let last = 0;
    let running = true;
    let visible = true;

    const frame = (now: number) => {
      if (!running || !visible) return;
      const dt = Math.min((now - (last || now)) / 1000, 0.05);
      last = now;

      // Iris spring: weighty open with a touch of overshoot, calmer close.
      const target = onRef.current ? 1 : 0;
      const damp = target < h ? 27 : 19;
      hv += (140 * (target - h) - damp * hv) * dt;
      h += hv * dt;
      const hc = Math.max(0, Math.min(1, h));

      // Glow lags and blooms a beat after the iris moves.
      glowV += (60 * (hc - glow) - 11 * glowV) * dt;
      glow += glowV * dt;
      const gc = Math.max(0, glow);

      const spin = hc * SPIN_MAX;
      const faceD = irisFacePath(hc, CX, CY, R, MAX_HOLE, BLADES, spin);
      faceRef.current?.setAttribute("d", faceD);
      clipRef.current?.setAttribute("d", faceD);
      const holeD = irisPolygon(hc, CX, CY, MAX_HOLE, BLADES, spin);
      const holeEl = holeRef.current;
      if (holeEl) {
        holeEl.setAttribute("d", holeD);
        holeEl.setAttribute("opacity", (hc * 0.95).toFixed(3));
      }
      const bevelEl = bevelRef.current;
      if (bevelEl) {
        bevelEl.setAttribute("d", holeD);
        bevelEl.setAttribute("opacity", (hc * 0.4).toFixed(3));
      }
      glowRef.current?.setAttribute("r", (gc * MAX_HOLE * 1.7).toFixed(1));
      glowRef.current?.setAttribute("opacity", Math.min(1, gc).toFixed(3));
      // The through-flow fades in with the opening; the backed-up pool fades out.
      belowRef.current?.setAttribute("opacity", hc.toFixed(3));
      poolRef.current?.setAttribute("opacity", ((1 - hc) * 0.5).toFixed(3));

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

  // Static fallback (and SSR markup): lens matches the toggle, stream feeds in.
  const staticOpen = reduced && on ? 1 : 0;
  const staticFace = irisFacePath(staticOpen, CX, CY, R, MAX_HOLE, BLADES);
  const staticHole = irisPolygon(staticOpen, CX, CY, MAX_HOLE, BLADES);

  const handleToggle = () => {
    userTook.current = true;
    setOn((v) => !v);
  };

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/[0.06] bg-elevated">
      {/* Dot matrix + consent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(120,160,255,0.13)_1px,transparent_1.4px)] [background-size:28px_28px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-primary blur-[120px] transition-opacity duration-700"
        style={{ opacity: on ? 0.34 : 0.08 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-primary blur-[120px] transition-opacity duration-700"
        style={{ opacity: on ? 0.2 : 0.05 }}
      />

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Animation: a stream of data is held at a closed lens until consent opens it and lets the data flow through"
        className="relative block h-auto w-full px-2 pt-6"
      >
        <defs>
          {/* Top-lit brushed metal for the iris face */}
          <linearGradient id="leaf-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a4350" />
            <stop offset="46%" stopColor="#262d37" />
            <stop offset="100%" stopColor="#14171c" />
          </linearGradient>
          {/* The lens barrel ring */}
          <linearGradient id="barrel-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a525f" />
            <stop offset="50%" stopColor="#23272e" />
            <stop offset="100%" stopColor="#0e1014" />
          </linearGradient>
          {/* Deep pupil behind the iris */}
          <radialGradient id="pupil">
            <stop offset="0%" stopColor="#05070b" />
            <stop offset="78%" stopColor="#05070b" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#05070b" stopOpacity="0" />
          </radialGradient>
          {/* The lit core, revealed through the open iris */}
          <radialGradient id="iris-core">
            <stop offset="0%" stopColor="#dbe7ff" stopOpacity="0.95" />
            <stop offset="24%" stopColor="#5a96ff" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#0052ff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0052ff" stopOpacity="0" />
          </radialGradient>
          {/* Backed-up data glow at the shut lens */}
          <radialGradient id="pool-glow">
            <stop offset="0%" stopColor="#9cc0ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9cc0ff" stopOpacity="0" />
          </radialGradient>
          {/* Clip the machined texture to the iris face only */}
          <clipPath id="iris-face-clip">
            <path ref={clipRef} d={staticFace} clipRule="evenodd" />
          </clipPath>
        </defs>

        {/* Data streaming down into the lens (behind the metal) */}
        <g fill="none" strokeLinecap="round">
          {LANES.map((l, i) => (
            <path key={`ah${i}`} d={l.above} stroke="#6f9cff" strokeWidth="4" opacity="0.1" />
          ))}
          {LANES.map((l, i) => (
            <path
              key={`ac${i}`}
              className="stream-flow"
              style={laneStyle(l)}
              d={l.above}
              stroke="#a6bbdd"
              strokeWidth="1.7"
              strokeDasharray="9 15"
            />
          ))}
        </g>

        {/* Lens housing — seats the iris in a dark metal barrel */}
        <circle cx={CX} cy={CY} r={R + 13} fill="#0d0f13" />
        <circle cx={CX} cy={CY} r={R + 9} fill="none" stroke="url(#barrel-metal)" strokeWidth="5" />
        <circle cx={CX} cy={CY} r={R + 12} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        {/* Pupil + lit core, behind the iris */}
        <circle cx={CX} cy={CY} r={MAX_HOLE} fill="url(#pupil)" />
        <circle
          ref={glowRef}
          cx={CX}
          cy={CY}
          r={staticOpen * MAX_HOLE * 1.7}
          fill="url(#iris-core)"
          opacity={staticOpen}
        />

        {/* Inner bezel edge, draws in on load */}
        <circle
          className="aperture-ring"
          style={{ ["--ring-len" as string]: RING_LEN }}
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="2"
        />

        {/* The solid iris face with its polygon hole */}
        <path ref={faceRef} d={staticFace} fillRule="evenodd" fill="url(#leaf-metal)" />

        {/* Machined concentric grooves — turned-metal lens texture */}
        <g clipPath="url(#iris-face-clip)" fill="none">
          <circle cx={CX} cy={CY} r="91" stroke="rgba(0,0,0,0.30)" strokeWidth="1.5" />
          <circle cx={CX} cy={CY} r="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx={CX} cy={CY} r="73" stroke="rgba(0,0,0,0.28)" strokeWidth="1.5" />
          <circle cx={CX} cy={CY} r="72" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          {/* Top sheen across the face */}
          <circle cx={CX} cy={CY - 4} r={R - 6} stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
        </g>

        {/* Data backed up against the shut lens */}
        <circle ref={poolRef} cx={CX} cy={CY - R + 6} r="34" fill="url(#pool-glow)" opacity={(1 - staticOpen) * 0.5} />

        {/* Machined highlight + lit "powered on" edge around the hole */}
        <path
          ref={bevelRef}
          d={staticHole}
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1"
          strokeLinejoin="round"
          opacity={staticOpen * 0.4}
        />
        <path
          ref={holeRef}
          d={staticHole}
          fill="none"
          stroke="#5a96ff"
          strokeWidth="1.75"
          strokeLinejoin="round"
          opacity={staticOpen * 0.95}
        />

        {/* The consented through-flow, pouring out below the open lens */}
        <g ref={belowRef} fill="none" strokeLinecap="round" opacity={staticOpen}>
          {LANES.map((l, i) => (
            <path key={`bh${i}`} d={l.below} stroke="#5a96ff" strokeWidth="4" opacity="0.16" />
          ))}
          {LANES.map((l, i) => (
            <path
              key={`bc${i}`}
              className="stream-flow"
              style={laneStyle(l)}
              d={l.below}
              stroke="#bcd6ff"
              strokeWidth="1.9"
              strokeDasharray="9 15"
            />
          ))}
        </g>
      </svg>

      {/* One control, one idea */}
      <div className="relative flex items-center justify-between gap-3 border-t border-white/[0.06] px-6 py-5">
        <span className="relative block h-4 flex-1 font-mono text-[12px]" aria-live="polite">
          <span
            className="absolute inset-0 text-on-dark-soft transition-opacity duration-300"
            style={{ opacity: on ? 0 : 1 }}
          >
            blocked · nothing flows until consent
          </span>
          <span
            className="absolute inset-0 text-on-dark-soft transition-opacity duration-300"
            style={{ opacity: on ? 1 : 0 }}
          >
            consent given · data flows, receipt logged
          </span>
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          aria-label="Give consent"
          onClick={handleToggle}
          className={`shrink-0 rounded-full transition-colors duration-300 ${on ? "bg-primary" : "bg-white/15"}`}
        >
          <span className="flex h-7 w-12 items-center">
            <span
              className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
                on ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
