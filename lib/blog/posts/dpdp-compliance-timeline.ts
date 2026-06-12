import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-compliance-timeline",
  title: "DPDP compliance timeline: every date that matters",
  metaTitle: "DPDP compliance timeline 2025 to 2027: key deadlines",
  description:
    "DPDP Rules notified 14 Nov 2025, Consent Managers register from 14 Nov 2026, full compliance due 13 May 2027. The complete DPDPA timeline, date by date.",
  date: "2026-06-12",
  keywords: [
    "dpdpa compliance timelines",
    "dpdp compliance deadline",
    "dpdp rules 2025 timeline",
    "dpdp act enforcement date",
    "dpdp compliance dates 2027",
  ],
  category: "Timeline",
  readingMinutes: 6,
  summary:
    "Three dates run the show: 14 November 2025, 14 November 2026, and 13 May 2027. What switched on at each, and how to pace the work backwards from the last one.",
  related: ["dpdp-act-penalties-and-fines", "dpdp-compliance-checklist", "consent-managers-under-dpdp"],
  blocks: [
    {
      type: "p",
      text: [
        "India's data protection regime arrives on a published schedule. The DPDP Rules, 2025 set a phased rollout, and the phase that touches your website ends on ",
        { strong: "13 May 2027" },
        ". Here is every date, what switched on, and what it means for a small team.",
      ],
    },
    { type: "h2", text: "The timeline at a glance" },
    {
      type: "table",
      caption: "DPDP Act and Rules, key dates",
      headers: ["Date", "What happened or happens"],
      rows: [
        [["11 Aug 2023"], ["DPDP Act, 2023 receives presidential assent. The law exists, but waits for rules."]],
        [["3 Jan 2025"], ["Draft DPDP Rules published for public consultation."]],
        [[{ strong: "14 Nov 2025" }], ["Final DPDP Rules notified. Data Protection Board provisions take effect immediately."]],
        [[{ strong: "14 Nov 2026" }], ["Consent Manager registration opens, twelve months after notification."]],
        [[{ strong: "13 May 2027" }], ["Eighteen-month mark. Consent, notice, data rights, breach reporting, and the rest of the substantive obligations become enforceable."]],
      ],
    },
    { type: "h2", text: "Phase 1: live since 14 November 2025" },
    {
      type: "p",
      text: "The administrative skeleton. The Data Protection Board of India is constituted and operational: chairperson, members, digital-first proceedings. The regulator that will hear complaints and write penalties is no longer hypothetical. It is staffed and waiting for the obligations it enforces to mature.",
    },
    { type: "h2", text: "Phase 2: 14 November 2026, Consent Managers register" },
    {
      type: "p",
      text: [
        "Consent Managers are registered intermediaries that let users give, manage, and withdraw consent across many services from one place. Registration opens on 14 November 2026; until then, nobody can lawfully claim to be one. What they are and how they will plug into your stack is covered in our ",
        { link: "Consent Managers explainer", href: "/blog/consent-managers-under-dpdp" },
        ".",
      ],
    },
    {
      type: "p",
      text: "For most businesses this phase changes nothing directly. Your own consent collection is your job regardless. But tools you pick now should be ready to integrate with registered Consent Managers when they appear.",
    },
    { type: "h2", text: "Phase 3: 13 May 2027, everything else" },
    {
      type: "p",
      text: "The date that matters for your website. From 13 May 2027 the core obligations are enforceable:",
    },
    {
      type: "list",
      items: [
        "Purpose-wise consent before processing personal data",
        "Itemized notice, available in English and the 22 Eighth Schedule languages",
        "Withdrawal as easy as consent",
        "Breach notification: affected users without delay, the Board within 72 hours",
        "Data rights: access, correction, erasure, nomination, grievance redressal",
        "Erasure when consent is withdrawn or the purpose is served",
      ],
    },
    {
      type: "p",
      text: [
        "From that morning, every gap on ",
        { link: "the compliance checklist", href: "/blog/dpdp-compliance-checklist" },
        " is a live liability with ",
        { link: "the penalty schedule", href: "/blog/dpdp-act-penalties-and-fines" },
        " behind it. Up to ₹250 crore for safeguard failures, up to ₹50 crore for the everyday breaches like consent taken wrong.",
      ],
    },
    { type: "h2", text: "Why \"May 2027\" actually means \"this quarter\"" },
    {
      type: "p",
      text: "Three reasons the comfortable reading of the deadline is wrong.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        [
          { strong: "Records only count from the day they start." },
          " Consent collected in 2026 with proper receipts is evidence. A banner that went live the week before the deadline protects nothing that happened earlier.",
        ],
        [
          { strong: "Enterprise customers will not wait for the Board." },
          " DPDP questionnaires are already standard in procurement. Your compliance date is whenever your next big customer asks, not May 2027.",
        ],
        [
          { strong: "Refreshing old consent is slow." },
          " Data collected before the Act still needs valid notice, and re-permissioning a list takes months of sends and decays your reachable base. Earlier start, smaller loss.",
        ],
      ],
    },
    { type: "h2", text: "A sane schedule for a small team" },
    {
      type: "table",
      caption: "Working backwards from 13 May 2027",
      headers: ["When", "What to finish"],
      rows: [
        [["This month"], ["Data inventory, purpose mapping, processor list. A few hours of honest work."]],
        [["This quarter"], ["Banner live, notice published, trackers autoblocked, records accumulating. About 30 minutes with a consent kit."]],
        [["Q4 2026"], ["Data rights channel tested end to end. Breach playbook drilled once. Watch Consent Manager registrations open."]],
        [["Q1 2027"], ["Refresh consent for legacy lists. Counsel review if you handle anything sensitive."]],
        [["13 May 2027"], ["Nothing. It is already handled."]],
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Not legal advice",
      text: "Dates reflect the DPDP Rules, 2025 as notified on 14 November 2025. The government can amend timelines by notification; we keep this page updated when it does.",
    },
    {
      type: "faq",
      items: [
        {
          q: "What is the deadline for DPDP compliance?",
          a: "13 May 2027. The DPDP Rules, 2025 gave an eighteen-month runway from their notification on 14 November 2025 for the substantive obligations: consent, notice, data rights, and breach reporting.",
        },
        {
          q: "Is the DPDP Act already in force in 2026?",
          a: "Partly. The Data Protection Board provisions have been live since 14 November 2025. The obligations that affect websites and apps become enforceable on 13 May 2027, and Consent Manager registration opens on 14 November 2026.",
        },
        {
          q: "When were the DPDP Rules notified?",
          a: "14 November 2025. Draft rules were published for consultation on 3 January 2025, and the final rules followed ten months later with the phased implementation schedule.",
        },
        {
          q: "Should I wait until 2027 to get compliant?",
          a: "No. Consent records only protect you from the day they begin, enterprise customers already ask for DPDP compliance in procurement, and refreshing consent on old lists takes months. Waiting saves nothing and costs evidence.",
        },
      ],
    },
    {
      type: "cta",
      heading: "Beat the deadline by a year, not a weekend",
      text: "Skope puts the banner, notice, autoblock, and consent ledger live in about 30 minutes. Sign up by 12 July 2026 and Growth is free for six months.",
      buttonLabel: "Start free",
      href: "https://app.skope.network/login",
    },
  ],
};
