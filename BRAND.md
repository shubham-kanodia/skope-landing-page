# Skope brand guideline

Skope is the DPDP consent kit for small Indian teams. The entire brand is one idea: **this law is handleable.**

Everything below applies to all copy and UI — landing page, app, docs, emails, error messages.

---

## Voice: punchy, direct, to the point

**The one rule: every sentence earns its place.** If a line can be cut without losing meaning, cut it.

1. **Short sentences. Plain verbs.**
   "Paste the tag." — not "Simply integrate our lightweight snippet."

2. **Talk to one person.**
   Founder-to-founder, second person. "Your Shopify store," never "businesses like yours."

3. **Sentence case everywhere.**
   Headlines, buttons, labels, nav. No Title Case. No ALL CAPS — except mono eyebrow labels, which are terminal-styled (`DPDP RULES ARE LIVE`).

4. **Specifics beat adjectives.**
   "₹250 crore penalties." "30 minutes." "<30KB." Numbers do the persuading. Never "powerful," "seamless," "robust," "enterprise-grade."

5. **The fear is real; we are calm.**
   State the law's teeth flatly, then show the fix. The threat gets one beat, the solution gets the rest. "We've made this easy" — never scary-vendor.

6. **India-specific, not localized-generic.**
   Name the law, the dates, the rupee amounts, the languages. "GDPR tools wearing a kurta" is on-brand. Generic compliance-speak is not.

7. **No corporate filler.**
   Banned words: leverage, empower, solution, seamlessly, best-in-class, cutting-edge, world-class, journey, "we're excited to."
   Banned punctuation: exclamation marks. Urgency comes from the countdown clock, not from "!".

8. **Honesty is a feature.**
   Equal-weight consent buttons. "No card required. No sales call. Ever." If something isn't built yet, say so plainly. Never fake a result, a stat, or a testimonial.

### Do / don't

| ✅ Write this | ❌ Not this |
|---|---|
| We keep the receipts. | Comprehensive audit-trail management. |
| Compliant by lunch. | Accelerate your compliance journey. |
| Penalties go to ₹250 crore. | Significant regulatory exposure. |
| Withdrawing is as easy as agreeing — because that's the law. | Industry-leading preference management. |
| One script tag. Live in 30 minutes. | A powerful, easy-to-integrate platform. |

### UI copy rules

- Plain verbs, user's vocabulary: "Your consent records," not "Receipt ledger entries."
- Errors say what happened and what to do next: "We couldn't reach your site. Check the URL and try again."
- Empty states invite the next action, in one line.

---

## Visual identity

### The motif: the aperture

Skope = scope, a lens. Consent is an aperture: **nothing flows until it opens.** The iris mark is the logo, the favicon, the hero animation, section dividers, and the scanner score gauge. One signature interactive moment (the hero); everywhere else it stays quiet and static.

### Palette

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0B0F1C` | page background |
| `--slate` | `#151C2E` | raised surfaces, cards |
| `--hairline` | `#232B40` | borders, 1px rules |
| `--paper` | `#F2F5FA` | primary text on dark |
| `--mist` | `#95A1B8` | secondary text |
| `--lens` | `#2BD9C7` | consent teal — CTAs, "allowed" states |
| `--signal` | `#6E5BFF` | violet — links, focus rings, gradient partner |
| `--amber` | `#FFB454` | deadlines and warnings only |

Gradient `linear-gradient(120deg, var(--lens), var(--signal))` — used sparingly: hero headline underline, primary CTA hover, aperture glow. Amber never decorates; it only marks deadlines.

### Typography

- **Display:** Archivo (variable), SemiExpanded, 600–700, leading 1.05. H1/H2 only.
- **Body/UI:** Instrument Sans 400/500, leading 1.6, max line length 68ch.
- **Mono:** IBM Plex Mono — code, the install one-liner, consent receipts, countdown digits, eyebrow labels. The mono face is part of the brand: receipts render as terminal-style cards.
- **Scale:** 13 / 15 / 17 (body) / 22 / 32 / 44 / 64 (desktop H1, clamps to 38 on mobile).

### Motion

Motion explains; it never decorates.

- One orchestrated sequence per page (the hero), ≤1.2s.
- Scroll reveals: opacity + 8px translate, 350ms, 60ms stagger. Nothing else.
- `prefers-reduced-motion`: everything collapses to static states with captions.
- No parallax. No scroll-jacking. Animations pause when the tab is hidden.

### Dark patterns: none

"Accept all," "Reject non-essential," and "Manage choices" get equal visual weight — in our product and in our own banners. This is ethics and the brand at once.
