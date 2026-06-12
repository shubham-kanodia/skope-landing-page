import type { Post } from "../types";

export const post: Post = {
  slug: "consent-managers-under-dpdp",
  title: "Consent Managers under the DPDP Rules, explained",
  metaTitle: "What is a Consent Manager under the DPDP Act?",
  description:
    "Consent Managers are registered intermediaries for giving and withdrawing consent across services. Registration opens 14 Nov 2026. What they change for you.",
  date: "2026-06-12",
  keywords: [
    "consent manager dpdp",
    "consent manager registration dpdp rules",
    "dpdp consent manager requirements",
    "what is consent manager india",
  ],
  category: "Explainer",
  readingMinutes: 6,
  summary:
    "India invented a new species of intermediary: one dashboard where a person manages consent across every service they use. Registration opens 14 November 2026. Here is how it will work.",
  related: ["dpdp-consent-requirements", "dpdp-compliance-timeline", "what-is-the-dpdp-act"],
  blocks: [
    {
      type: "p",
      text: [
        "Most of the ",
        { link: "DPDP Act", href: "/blog/what-is-the-dpdp-act" },
        " maps to ideas other privacy laws already had. Consent Managers do not. They are an Indian invention: registered intermediaries through which a person can give, manage, review, and withdraw consent across many services from a single dashboard. GDPR has nothing comparable.",
      ],
    },
    {
      type: "p",
      text: "If the model sounds familiar, it should. India already runs it for financial data: the Account Aggregator framework, where licensed intermediaries move consent for bank data sharing. Consent Managers generalize that pattern to all personal data.",
    },
    { type: "h2", text: "What the law actually says" },
    {
      type: "p",
      text: "Section 6(7) to 6(9) of the Act sketch the role: a Data Principal may give, manage, review, or withdraw consent through a Consent Manager, who is accountable to the Data Principal and acts on their behalf. Every Consent Manager must be registered with the Data Protection Board.",
    },
    {
      type: "p",
      text: "The 2025 Rules fill in the operating conditions. The First Schedule sets registration requirements, including:",
    },
    {
      type: "list",
      items: [
        "An Indian company with a minimum net worth of ₹2 crore",
        "Interoperable platform standards, so consents move across services cleanly",
        "A fiduciary duty to the user: no conflicts of interest with the Data Fiduciaries they connect to",
        "No reading the personal data in transit; the consent flows through, the contents do not",
        "Record-keeping for consents given, denied, and withdrawn, available to the user",
      ],
    },
    { type: "h2", text: "The dates" },
    {
      type: "p",
      text: [
        "Registration opens on ",
        { strong: "14 November 2026" },
        ", twelve months after the Rules were notified. Until then, no company can lawfully present itself as a registered Consent Manager, whatever its marketing says. The substantive consent obligations for businesses land six months later, on 13 May 2027. The full sequence is in ",
        { link: "the DPDP timeline", href: "/blog/dpdp-compliance-timeline" },
        ".",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Vendor check",
      text: "If a tool claims to be a \"registered Consent Manager\" before 14 November 2026, it is not. The register does not exist yet. What a tool can honestly claim today is being built to integrate when registration opens.",
    },
    { type: "h2", text: "What changes for your business" },
    {
      type: "p",
      text: "When the system goes live, a user may show up having granted or withdrawn consent through their Consent Manager rather than your banner. Your obligations as a Data Fiduciary do not shrink, they grow a channel:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "You must honor consents and withdrawals arriving via a registered Consent Manager, same as ones from your own banner.",
        "Your consent records need to capture which channel the consent came through.",
        "Your withdrawal handling has to fire regardless of where the withdrawal happened: scripts stop, processors get told, data gets erased on schedule.",
      ],
    },
    {
      type: "p",
      text: [
        "None of that replaces your own collection. The banner, the ",
        { link: "Section 6 consent mechanics", href: "/blog/dpdp-consent-requirements" },
        ", the notice, the receipts: those stay yours. A Consent Manager is an extra door into the same room, and the room has to be in order first.",
      ],
    },
    { type: "h2", text: "Will small businesses have to integrate?" },
    {
      type: "p",
      text: "The Act does not force every Data Fiduciary to connect to every Consent Manager on day one, and interoperability standards are still being operationalized. Practically: watch the register from November 2026, and pick consent tooling that plans to speak the protocol so integration is a toggle rather than a rebuild. Skope is built to integrate with the framework the day it goes live.",
    },
    { type: "h2", text: "Why this is good news, mostly" },
    {
      type: "p",
      text: "A working Consent Manager ecosystem moves trust from each website's banner to audited intermediaries, which helps small businesses most: you inherit credibility you did not have to build. The cost is operational discipline. Consent state now changes from outside your site, and systems that treat the banner as the single source of truth will drift. Tamper-evident records with channel attribution stop being nice-to-have.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Not legal advice",
      text: "The Consent Manager framework is still being operationalized; registration conditions live in the First Schedule of the DPDP Rules, 2025. If you plan to become a Consent Manager rather than just integrate with one, that is a regulatory project. Get counsel.",
    },
    {
      type: "faq",
      items: [
        {
          q: "What is a Consent Manager under the DPDP Act?",
          a: "A registered intermediary through which a person can give, manage, review, and withdraw consent across multiple services from one platform. Consent Managers are accountable to the user, must register with the Data Protection Board, and cannot read the personal data whose consent they carry.",
        },
        {
          q: "When does Consent Manager registration open?",
          a: "14 November 2026, twelve months after the DPDP Rules, 2025 were notified. No company is a registered Consent Manager before that date.",
        },
        {
          q: "Is Skope a Consent Manager?",
          a: "No, and nobody else is either until the register opens on 14 November 2026. Skope is a consent kit for your own site, banner, notice, records, and is built to integrate with the Consent Manager framework the day it goes live.",
        },
        {
          q: "What are the requirements to become a Consent Manager?",
          a: "Under the First Schedule of the DPDP Rules: an Indian company with at least ₹2 crore net worth, an interoperable platform, no conflicts of interest with Data Fiduciaries, no access to the personal data flowing through, and registration with the Data Protection Board.",
        },
        {
          q: "Do small businesses need to connect to Consent Managers?",
          a: "Not immediately. Your own banner and records remain the foundation. Once registered Consent Managers exist, you must honor consents and withdrawals arriving through them, so pick tooling that will integrate without a rebuild.",
        },
      ],
    },
    {
      type: "cta",
      heading: "Ready for the framework before it exists",
      text: "Get your own consent collection in order now: purpose-wise banner, notice in 22 languages, hash-chained records. Consent Manager integration lands the day registration opens.",
      buttonLabel: "Start free",
      href: "https://app.skope.network/login",
    },
  ],
};
