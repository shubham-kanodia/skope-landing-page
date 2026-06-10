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

> Token source of truth: `DESIGN.md` (repo parent) — a quiet, institutional, white-canvas system with one blue. The summary below is what you need day-to-day.

### The motif: the aperture

Skope = scope, a lens. Consent is an aperture: **nothing flows until it opens.** The iris mark is the logo, the favicon, the hero animation, and the scanner score gauge. One signature interactive moment (the hero card); everywhere else it stays quiet and static.

### Palette

| Token | Hex | Use |
|---|---|---|
| `--canvas` | `#ffffff` | the default page floor |
| `--ink` | `#0a0b0d` | display headings, emphasis text |
| `--body` | `#5b616e` | running text |
| `--muted` / `--muted-soft` | `#7c828a` / `#a8acb3` | captions, secondary |
| `--hairline` / `--hairline-soft` | `#dee1e6` / `#eef0f3` | 1px dividers, card outlines |
| `--surface-soft` / `--surface-strong` | `#f7f7f7` / `#eef0f3` | alternating bands, secondary buttons |
| `--surface-dark` / elevated | `#0a0b0d` / `#16181c` | full-bleed dark heroes, featured tier, CTA bands |
| `--primary` | `#0052ff` | **the only accent.** CTAs, inline links, "allowed" flow |

One blue, used scarcely — a couple of moments per band. On dark surfaces use the luminance-adjusted `--primary-on-dark` `#3c7dff`. No gradients, no second accent. Depth comes from card-on-card layering, never decorative shadows.

### Typography

- **One family: Inter.** Display = weight **400** with negative tracking (-0.025em to -0.03em) — never bold a headline; calm is the brand. Body 400, titles/buttons 600.
- **Mono: Geist Mono** — code, the install one-liner, consent receipts, countdown digits, eyebrow labels, every number. Receipts render as terminal-style cards.
- **Scale:** 13 / 14 / 15 / 16 (body) / 18 / 32 / 52 (section heads) / 72–80 (hero, clamps to 40 on mobile).

### Geometry

Pills for everything interactive (`rounded-full` CTAs, badges, toggles), 24px radius (`rounded-3xl`) for cards, full circles for icon plates. Sharp corners don't exist. Sections breathe at 96px; the page rotates white → soft-gray → dark bands.

### Motion

Motion explains; it never decorates.

- One orchestrated sequence per page (the hero), ≤1.2s.
- Scroll reveals: opacity + 8px translate, 350ms, 60ms stagger. Nothing else.
- `prefers-reduced-motion`: everything collapses to static states with captions.
- No parallax. No scroll-jacking. Animations pause when the tab is hidden.

### Dark patterns: none

"Accept all," "Reject non-essential," and "Manage choices" get equal visual weight — in our product and in our own banners. This is ethics and the brand at once.
