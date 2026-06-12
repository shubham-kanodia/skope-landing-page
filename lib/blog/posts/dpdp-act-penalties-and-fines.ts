import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-act-penalties-and-fines",
  title: "DPDP Act penalties: every fine in the Schedule, explained",
  metaTitle: "DPDP Act penalties: maximum fine for non-compliance",
  description:
    "The maximum fine for DPDP non-compliance is ₹250 crore per breach. Here is the full penalty schedule, how the Board decides amounts, and how fines stack.",
  date: "2026-06-12",
  keywords: [
    "maximum fine for dpdpa non compliance",
    "dpdpa non compliance fine",
    "dpdp act penalties",
    "dpdp act fines",
    "dpdp penalty schedule",
    "250 crore penalty dpdp",
  ],
  category: "Penalties",
  readingMinutes: 7,
  summary:
    "₹250 crore is the headline, but the Schedule has seven rows and the Board can stack them. What each fine attaches to, and what actually protects you.",
  related: ["dpdp-compliance-timeline", "dpdp-compliance-checklist", "does-dpdp-apply-to-small-businesses"],
  blocks: [
    {
      type: "p",
      text: [
        "The maximum fine for DPDP non-compliance is ",
        { strong: "₹250 crore" },
        " for a single breach. Not annual revenue percentage, not a cap across violations. Per breach. And the Data Protection Board can find more than one breach in the same incident.",
      ],
    },
    {
      type: "p",
      text: "The amounts live in the Schedule to the Digital Personal Data Protection Act, 2023. Seven rows. Here is each one, what it attaches to, and what the Board weighs before writing a number.",
    },
    { type: "h2", text: "The full penalty schedule" },
    {
      type: "table",
      caption: "Schedule to the DPDP Act, 2023",
      headers: ["Breach", "Section", "Maximum penalty"],
      rows: [
        [
          ["Failure to take reasonable security safeguards to prevent a personal data breach"],
          ["8(5)"],
          [{ strong: "₹250 crore" }],
        ],
        [
          ["Failure to notify the Board and affected users of a breach"],
          ["8(6)"],
          ["₹200 crore"],
        ],
        [
          ["Breach of obligations around children's data"],
          ["9"],
          ["₹200 crore"],
        ],
        [
          ["Breach of Significant Data Fiduciary obligations"],
          ["10"],
          ["₹150 crore"],
        ],
        [
          ["Breach of duties by a Data Principal"],
          ["15"],
          ["₹10,000"],
        ],
        [
          ["Breach of a voluntary undertaking accepted by the Board"],
          ["32"],
          ["Up to the amount for the underlying breach"],
        ],
        [
          ["Breach of any other provision of the Act or Rules"],
          ["General"],
          ["₹50 crore"],
        ],
      ],
    },
    {
      type: "p",
      text: [
        "Read the last row again. Consent taken wrong, notice missing, withdrawal buried, data rights ignored: each falls under \"any other provision\" at up to ",
        { strong: "₹50 crore" },
        ". The everyday compliance failures are the ones most small teams are exposed to.",
      ],
    },
    { type: "h2", text: "Fines stack" },
    {
      type: "p",
      text: "One incident can produce several breaches. Picture a leaked customer database: weak safeguards (Section 8(5), up to ₹250 crore), no notification to the Board within 72 hours (Section 8(6), up to ₹200 crore), and the investigation then finds consent was never properly taken (general provision, up to ₹50 crore). Three findings, three penalties, one bad week.",
    },
    { type: "h2", text: "How the Board decides the amount" },
    {
      type: "p",
      text: "Section 33 of the Act tells the Board what to weigh:",
    },
    {
      type: "list",
      items: [
        "The nature, gravity, and duration of the breach",
        "The type and sensitivity of the personal data affected",
        "Whether the breach repeats",
        "Whether you gained from it or dodged a loss",
        "How you responded: mitigation, speed, cooperation",
        "Proportionality, and the likely impact of the penalty on you",
      ],
    },
    {
      type: "p",
      text: "Two of those are entirely in your control before anything goes wrong: how fast you respond, and what your records show. A team that produces timestamped consent receipts and a clean notification trail argues for the bottom of the range. A team with no records argues from memory.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "The proof problem",
      text: "When the Board asks how you obtained consent for a given user, a screenshot of your banner is not evidence. A tamper-evident record of who agreed, to what, when, against which notice version, is.",
    },
    { type: "h2", text: "Will the Board really fine a small company ₹250 crore?" },
    {
      type: "p",
      text: [
        "Probably not the maximum, because Section 33 requires proportionality. But \"less than ₹250 crore\" is cold comfort when even a few lakh stings, and the law has ",
        { link: "no small-business exemption", href: "/blog/does-dpdp-apply-to-small-businesses" },
        " for consent and notice. The realistic small-team risk is a customer complaint to the Board, an inquiry letter, and no records to answer it with.",
      ],
    },
    {
      type: "p",
      text: "There is also a quieter penalty nobody schedules: enterprise customers now send DPDP questionnaires before signing. No consent records, no deal.",
    },
    { type: "h2", text: "When fines become real" },
    {
      type: "p",
      text: [
        "The Data Protection Board exists now; the Rules establishing it took effect on 14 November 2025. The obligations most websites can breach, consent, notice, and data rights, become enforceable on ",
        { strong: "13 May 2027" },
        ". The full sequence is in our ",
        { link: "DPDP compliance timeline", href: "/blog/dpdp-compliance-timeline" },
        ". Consent records only count from the day you start keeping them, which is the argument for starting early.",
      ],
    },
    { type: "h2", text: "The cheap insurance" },
    {
      type: "p",
      text: [
        "Every fine in the Schedule traces back to items on a short list: safeguards, notification readiness, lawful consent, working data rights. That is ",
        { link: "the 12-point checklist", href: "/blog/dpdp-compliance-checklist" },
        ", and the technical half of it takes about 30 minutes with the right tooling. Against a schedule that tops out at ₹250 crore, ₹999 a month is not a hard sum.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Not legal advice",
      text: "Penalty exposure depends on your specific data practices. If you have had a breach or expect an inquiry, talk to counsel now, not after the Board writes.",
    },
    {
      type: "faq",
      items: [
        {
          q: "What is the maximum fine for DPDPA non-compliance?",
          a: "₹250 crore per breach, the Schedule's top line, for failing to take reasonable security safeguards to prevent a personal data breach under Section 8(5). Other breaches carry maximums of ₹200 crore, ₹150 crore, and ₹50 crore.",
        },
        {
          q: "What is the fine for not having a consent banner?",
          a: "Collecting personal data without valid consent falls under the general provision: up to ₹50 crore per breach. The Board sets the actual amount using the Section 33 factors, including gravity, duration, and your response.",
        },
        {
          q: "Can DPDP fines apply to small businesses and startups?",
          a: "Yes. The Schedule does not distinguish by company size. Proportionality is one factor the Board weighs, but there is no exemption from liability for being small.",
        },
        {
          q: "Who imposes DPDP penalties?",
          a: "The Data Protection Board of India. It inquires into complaints and breaches, hears both sides, and imposes monetary penalties under Section 33. Appeals go to the Telecom Disputes Settlement and Appellate Tribunal.",
        },
        {
          q: "Is there a penalty for individuals misusing the law?",
          a: "Yes. A Data Principal who breaches their duties under Section 15, for example by filing a false complaint, faces a penalty of up to ₹10,000.",
        },
      ],
    },
    {
      type: "cta",
      heading: "Find your exposure before the Board does",
      text: "The free Skope scanner checks your site against the obligations behind these fines: consent, notice, trackers, withdrawal. 60 seconds, no signup.",
      buttonLabel: "Scan my website",
      href: "https://app.skope.network/compliance-checker",
    },
  ],
};
