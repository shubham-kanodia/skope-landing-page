import type { Post } from "../types";

export const post: Post = {
  slug: "dpdpa-vs-gdpr",
  title: "DPDPA vs GDPR: why your cookie banner is not enough",
  metaTitle: "DPDPA vs GDPR: 7 differences that break cookie banners",
  description:
    "DPDPA is not India's GDPR. No legitimate interest, consent on all data not just cookies, 22 languages, under-18 children. Seven differences that matter.",
  date: "2026-06-12",
  keywords: [
    "dpdpa vs gdpr",
    "dpdp act vs gdpr",
    "difference between dpdpa and gdpr",
    "gdpr cookie banner india",
    "dpdp gdpr comparison",
  ],
  category: "Comparison",
  readingMinutes: 7,
  summary:
    "Calling DPDPA \"India's GDPR\" is how teams end up non-compliant with a banner already on their site. Seven differences, and what each one breaks.",
  related: ["dpdp-consent-requirements", "what-is-the-dpdp-act", "dpdp-compliance-tools-compared"],
  blocks: [
    {
      type: "p",
      text: [
        "\"We already have a GDPR banner\" is the most common reason Indian teams give for ignoring the ",
        { link: "DPDP Act", href: "/blog/what-is-the-dpdp-act" },
        ". It is also the most expensive one. The laws share a vocabulary, consent, notice, data rights, and then diverge exactly where your implementation lives.",
      ],
    },
    {
      type: "p",
      text: "GDPR tools wearing a kurta do not pass. Here are the seven differences that decide whether your current setup survives, and what each one breaks.",
    },
    { type: "h2", text: "1. DPDPA has no legitimate interest" },
    {
      type: "p",
      text: "GDPR gives you six lawful bases, and half of adtech runs on \"legitimate interest\". DPDPA gives you two: consent, and a short list of legitimate uses in Section 7, things like voluntary disclosure, medical emergencies, and state functions. Marketing is not on that list.",
    },
    {
      type: "p",
      text: [
        { strong: "What breaks:" },
        " every flow where your GDPR setup quietly processes data without asking. Under DPDPA, if it is not a Section 7 use, you ask. Analytics, marketing, personalization: each needs its own yes.",
      ],
    },
    { type: "h2", text: "2. Consent covers all collection, not just cookies" },
    {
      type: "p",
      text: "In practice, GDPR compliance for most sites collapsed into cookie management. DPDPA does not care whether data arrives via cookie or keyboard. A signup form collecting a name and phone number needs notice and purpose-wise consent, same as a tracking pixel.",
    },
    {
      type: "p",
      text: [
        { strong: "What breaks:" },
        " every form on your site. A cookie banner that ignores your checkout, lead forms, and newsletter boxes covers a fraction of your actual collection.",
      ],
    },
    { type: "h2", text: "3. Twenty-two languages, by law" },
    {
      type: "p",
      text: "GDPR gestures at clear language. DPDPA names names: the Data Principal can ask for your notice in English or any of the 22 languages in the Eighth Schedule of the Constitution. Hindi, Tamil, Bengali, Marathi, Telugu, and seventeen more.",
    },
    {
      type: "p",
      text: [
        { strong: "What breaks:" },
        " your English-only notice and banner. Twenty-two translations, kept in sync across every notice version, is not a copy-paste job.",
      ],
    },
    { type: "h2", text: "4. A child is anyone under 18" },
    {
      type: "p",
      text: "GDPR sets the child threshold at 16, and lets member states lower it to 13. DPDPA says 18, full stop. Processing a child's data needs verifiable parental consent, and tracking or behavioural advertising directed at children is banned outright.",
    },
    {
      type: "p",
      text: [
        { strong: "What breaks:" },
        " any product with teenage users running on GDPR-style age assumptions. The fine for getting children's data wrong is up to ₹200 crore.",
      ],
    },
    { type: "h2", text: "5. Fixed fines, not revenue percentages" },
    {
      type: "p",
      text: [
        "GDPR fines scale with global turnover: up to 4 percent. DPDPA writes absolute numbers in a Schedule: ₹250 crore for safeguard failures, ₹200 crore for missed breach notifications, ₹50 crore for the everyday breaches. The ",
        { link: "full penalty table is here", href: "/blog/dpdp-act-penalties-and-fines" },
        ". For a small company, the DPDPA numbers are not smaller. They are just less polite.",
      ],
    },
    { type: "h2", text: "6. Breach notification has no risk threshold" },
    {
      type: "p",
      text: "GDPR lets you skip notifying when a breach is unlikely to risk anyone's rights. DPDPA does not offer that judgment call: every personal data breach gets reported, affected users without delay, the Board with details within 72 hours under the 2025 Rules.",
    },
    {
      type: "p",
      text: [
        { strong: "What breaks:" },
        " incident playbooks with a \"materiality assessment\" step before notification. Under DPDPA the assessment is one question: was personal data breached?",
      ],
    },
    { type: "h2", text: "7. Consent Managers exist only in India" },
    {
      type: "p",
      text: [
        "DPDPA invents a registered intermediary, the Consent Manager, letting people manage consent across services from one dashboard. GDPR has nothing like it. Registration opens 14 November 2026, and tools you buy today should be ready to integrate. ",
        { link: "Here is how that system works", href: "/blog/consent-managers-under-dpdp" },
        ".",
      ],
    },
    { type: "h2", text: "Side by side" },
    {
      type: "table",
      caption: "DPDPA vs GDPR, the load-bearing differences",
      headers: ["", "GDPR", "DPDPA"],
      rows: [
        [["Lawful bases"], ["Six, incl. legitimate interest"], ["Consent plus narrow Section 7 uses"]],
        [["Scope of consent UX"], ["Cookies in practice"], ["All personal data collection"]],
        [["Languages"], ["\"Clear and plain\""], ["English plus 22 Eighth Schedule languages"]],
        [["Child threshold"], ["16, can drop to 13"], ["18, verifiable parental consent"]],
        [["Max fine"], ["4% of global turnover"], ["₹250 crore per breach, can stack"]],
        [["Breach reporting"], ["Risk-based, 72 hours"], ["All breaches, users without delay, Board in 72 hours"]],
        [["Consent Managers"], ["Do not exist"], ["Registered intermediaries from Nov 2026"]],
      ],
    },
    { type: "h2", text: "What to do with your existing GDPR setup" },
    {
      type: "p",
      text: [
        "Keep it for your EU traffic. For visitors in India, you need consent that covers forms, notices in 22 languages, and records the Board will accept. That is a different machine, and ",
        { link: "the tools comparison", href: "/blog/dpdp-compliance-tools-compared" },
        " covers your options for getting one. The wrong move is assuming the banner you have does a job it was never built for.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Not legal advice",
      text: "This compares the laws as written: DPDPA with the 2025 Rules, GDPR as applied. If you operate in both jurisdictions at scale, get counsel to map your specific flows.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Is the DPDP Act the same as GDPR?",
          a: "No. DPDPA drops legitimate interest, applies consent to all personal data collection rather than cookies, requires notices accessible in 22 Indian languages, treats everyone under 18 as a child, and uses fixed fines up to ₹250 crore instead of revenue percentages.",
        },
        {
          q: "If I am GDPR compliant, am I DPDP compliant?",
          a: "No. GDPR compliance is a head start on principles, but DPDPA's specifics, purpose-wise consent on forms, Indian-language notices, no-threshold breach reporting, and under-18 children's rules, all need separate implementation.",
        },
        {
          q: "Which is stricter, DPDPA or GDPR?",
          a: "Each is stricter somewhere. GDPR regulates more processing activities and grants more rights, like portability. DPDPA is stricter on consent as the default basis, language access, the child age threshold, and universal breach notification.",
        },
        {
          q: "Can one banner handle both GDPR and DPDPA?",
          a: "One vendor can; one configuration cannot. The clean pattern is geo-targeting: your DPDP banner with purpose-wise consent and Indian languages for visitors in India, your GDPR setup elsewhere. Skope shows only to Indian visitors by default for exactly this reason.",
        },
      ],
    },
    {
      type: "cta",
      heading: "Find out what your GDPR banner misses",
      text: "Run the free Skope scanner. It checks your site against DPDPA specifically: forms, languages, trackers, withdrawal. 60 seconds, no signup.",
      buttonLabel: "Scan my website",
      href: "https://app.skope.network/compliance-checker",
    },
  ],
};
