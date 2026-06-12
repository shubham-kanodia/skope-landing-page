import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-consent-requirements",
  title: "Consent under the DPDP Act: notice, purpose, withdrawal",
  metaTitle: "DPDP consent requirements: what valid consent needs",
  description:
    "Valid DPDP consent is free, specific, informed, unconditional, and unambiguous, with notice first and withdrawal as easy as agreeing. The mechanics, in detail.",
  date: "2026-06-12",
  keywords: [
    "dpdp consent requirements",
    "dpdp act consent",
    "purpose wise consent dpdp",
    "dpdp consent notice",
    "consent withdrawal dpdp act",
  ],
  category: "Guide",
  readingMinutes: 7,
  summary:
    "Section 6 packs five tests into one sentence, and most banners fail at least two. What valid consent looks like, what the notice must say, and how withdrawal has to work.",
  related: ["dpdpa-vs-gdpr", "consent-managers-under-dpdp", "dpdp-compliance-checklist"],
  blocks: [
    {
      type: "p",
      text: [
        "Consent is the engine of the ",
        { link: "DPDP Act", href: "/blog/what-is-the-dpdp-act" },
        ". With only a short list of legitimate uses beside it, almost everything a business does with personal data runs on a yes from the person it belongs to. Section 6 defines what that yes must look like, and the definition has teeth.",
      ],
    },
    { type: "quote", text: "Consent shall be free, specific, informed, unconditional and unambiguous with a clear affirmative action.", cite: "Section 6(1), DPDP Act, 2023" },
    {
      type: "p",
      text: "Five tests in one sentence. Here is what each one disqualifies.",
    },
    { type: "h2", text: "The five tests, applied to real banners" },
    {
      type: "table",
      caption: "Section 6(1) versus common banner patterns",
      headers: ["Test", "What it kills"],
      rows: [
        [[{ strong: "Free" }], ["Consent walls that block content until the user agrees to marketing. Nudging with a giant Accept and a grey Decline."]],
        [[{ strong: "Specific" }], ["One checkbox covering analytics, marketing, and \"improving our services\". Each purpose needs its own consent."]],
        [[{ strong: "Informed" }], ["Consent collected before the notice is shown, or against a notice that does not itemize the data."]],
        [[{ strong: "Unconditional" }], ["Bundling: \"By signing up you agree to receive offers.\" Signup and offers are separate questions."]],
        [[{ strong: "Unambiguous, affirmative" }], ["Pre-ticked boxes, implied consent by scrolling, \"continued use constitutes acceptance\"."]],
      ],
    },
    {
      type: "p",
      text: "Consent is also capped at what the stated purpose needs. Section 6(1) limits it to personal data necessary for the specified purpose. Collecting date of birth \"for our records\" on a newsletter form fails even with a tick.",
    },
    { type: "h2", text: "Notice comes first, and it is itemized" },
    {
      type: "p",
      text: "Every consent request rides with or follows a notice under Section 5. Under the 2025 Rules the notice must stand alone, in clear plain language, and state:",
    },
    {
      type: "list",
      items: [
        "An itemized list of the personal data being collected",
        "The specific purpose for each item, and the goods or services it enables",
        "How to withdraw consent, with a link or method as easy as the original yes",
        "How to exercise data rights and reach your grievance contact",
        "How to complain to the Data Protection Board",
      ],
    },
    {
      type: "p",
      text: "And the language requirement: the user can ask for all of it in English or any of the 22 languages in the Eighth Schedule. A notice your Tamil-speaking customer cannot read is, for them, not a notice.",
    },
    { type: "h2", text: "Withdrawal: the mirror-image rule" },
    { type: "quote", text: "The ease of such withdrawal shall be comparable to the ease with which such consent was given.", cite: "Section 6(4), DPDP Act, 2023" },
    {
      type: "p",
      text: "One click in means one click out. If consent was a toggle on a banner, withdrawal cannot be an email to support, a phone call, or a form behind a login. The clean implementation is a preference center linked from your footer where every purpose can be flipped off individually, taking effect immediately.",
    },
    {
      type: "p",
      text: "Withdrawal has consequences on your side too. Processing stops for that purpose, and the data goes unless another legal ground holds it, including copies sitting with your processors. A withdrawal your CRM never hears about is a violation with a paper trail.",
    },
    { type: "h2", text: "Consent without records is a rumor" },
    {
      type: "p",
      text: [
        "The Act puts the burden of proving valid consent on you, not the user. When the Board, or an enterprise customer's auditor, asks about one specific email address, you need the receipt: who agreed, to which purposes, when, against which version of the notice. That is why ",
        { link: "consent records are item 8 on the checklist", href: "/blog/dpdp-compliance-checklist" },
        ", stored where they cannot be quietly edited.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "The versioning trap",
      text: "Consent is only as good as the notice it referenced. Change what you collect or why, and old consents need refreshing against the new notice. Archive every notice version with dates, or your receipts point at nothing.",
    },
    { type: "h2", text: "What a compliant flow looks like" },
    {
      type: "list",
      ordered: true,
      items: [
        "Visitor lands. Trackers stay quiet. The banner shows purposes separately, decline as prominent as accept.",
        "Visitor allows analytics, declines marketing. Only analytics scripts fire.",
        "Each choice is written to a tamper-evident ledger with a timestamp and notice version.",
        "Months later, one click in the preference center withdraws analytics. Scripts stop, the withdrawal is logged, downstream systems are told.",
        "When anyone asks for proof, the export shows the whole story.",
      ],
    },
    {
      type: "p",
      text: [
        "Building this by hand is a quarter of engineering. ",
        { link: "Skope ships it in five steps", href: "/blog/dpdp-compliance-in-5-steps" },
        ", about 30 minutes, with the ledger and the 22 languages included.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Not legal advice",
      text: "This explains Section 6 and the consent provisions of the 2025 Rules in plain language. For edge cases, employee data, minors, or processing on legitimate-use grounds, talk to counsel.",
    },
    {
      type: "faq",
      items: [
        {
          q: "What makes consent valid under the DPDP Act?",
          a: "Section 6 requires it to be free, specific, informed, unconditional, and unambiguous, given by clear affirmative action, limited to data necessary for the stated purpose, preceded by an itemized notice, and as easy to withdraw as it was to give.",
        },
        {
          q: "Are pre-ticked boxes allowed under DPDPA?",
          a: "No. Consent needs a clear affirmative action by the user. Pre-ticked boxes, implied consent by browsing, and bundled agree-to-everything checkboxes all fail Section 6.",
        },
        {
          q: "What is purpose-wise consent?",
          a: "Separate consent for each purpose of processing. Analytics, marketing, and personalization each get their own toggle, and declining one cannot block what the user came for. One blanket \"I agree\" covering everything is invalid.",
        },
        {
          q: "Do I need consent for data I collected before the DPDP Act?",
          a: "Legacy data can generally be retained, but you must give notice as soon as practicable, and the user's right to withdraw applies. Practically, plan a notice-and-refresh pass over old lists well before the 13 May 2027 enforcement date.",
        },
        {
          q: "How long must consent records be kept?",
          a: "The Act sets no fixed number; you need them as long as you process the data and could be asked to prove the consent behind it. Keep them tamper-evident and exportable for the life of the relationship plus your limitation window.",
        },
      ],
    },
    {
      type: "cta",
      heading: "Get consent right the first time",
      text: "Skope's banner passes all five Section 6 tests out of the box: purpose-wise toggles, equal buttons, notice in 22 languages, one-click withdrawal, hash-chained receipts.",
      buttonLabel: "Start free",
      href: "https://app.skope.network/login",
    },
  ],
};
