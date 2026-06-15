/**
 * The aperture iris, Skope's brand motif (see BRAND.md).
 *
 * The iris is a regular N-gon hole of inradius `open * maxHole`, punched out of
 * a solid disk so the metal always reads solid as it opens. open = 0 → shut.
 */

export const BLADE_COUNT = 8;

/**
 * The aperture hole as a regular N-gon of inradius `open * maxHole`, rotated by
 * `spin`. Returns an SVG subpath ("M … Z"), or "" when effectively shut. This is
 * the clean opening the iris reveals, no thin slivers, no star.
 */
export function irisPolygon(
  open: number,
  cx: number,
  cy: number,
  maxHole: number,
  n: number = BLADE_COUNT,
  spin: number = 0,
): string {
  const h = Math.max(0, Math.min(1, open)) * maxHole;
  if (h <= 0.5) return "";
  const vr = h / Math.cos(Math.PI / n); // circumradius for a polygon of inradius h
  let d = "";
  for (let i = 0; i < n; i++) {
    const a = spin + Math.PI / n + (i * 2 * Math.PI) / n;
    const x = cx + vr * Math.cos(a);
    const y = cy + vr * Math.sin(a);
    d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return `${d} Z`;
}

/**
 * The iris face: a solid disk of radius `R` with the polygon hole punched out
 * (evenodd fill). One opaque shape, so the metal always reads solid as it opens.
 */
export function irisFacePath(
  open: number,
  cx: number,
  cy: number,
  R: number,
  maxHole: number,
  n: number = BLADE_COUNT,
  spin: number = 0,
): string {
  const outer =
    `M ${(cx - R).toFixed(2)} ${cy.toFixed(2)} ` +
    `A ${R} ${R} 0 1 0 ${(cx + R).toFixed(2)} ${cy.toFixed(2)} ` +
    `A ${R} ${R} 0 1 0 ${(cx - R).toFixed(2)} ${cy.toFixed(2)} Z`;
  const hole = irisPolygon(open, cx, cy, maxHole, n, spin);
  return hole ? `${outer} ${hole}` : outer;
}

const TONES = {
  dark: { ring: "rgba(255,255,255,0.16)", face: "#1c2027", edge: "#3c7dff" },
  light: { ring: "#dee1e6", face: "#eef0f3", edge: "#0052ff" },
};

/** Static aperture mark, logo, dividers, favicon source. */
export function ApertureMark({
  open = 0.55,
  size = 24,
  tone = "dark",
  className,
}: {
  open?: number;
  size?: number;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const face = irisFacePath(open, 50, 50, 46, 30, 8);
  const hole = irisPolygon(open, 50, 50, 30, 8);
  const c = TONES[tone];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
    >
      <circle cx="50" cy="50" r="46" fill="none" stroke={c.ring} strokeWidth="3" />
      <path d={face} fillRule="evenodd" fill={c.face} />
      {hole && <path d={hole} fill="none" stroke={c.edge} strokeWidth="2.5" strokeLinejoin="round" />}
    </svg>
  );
}
