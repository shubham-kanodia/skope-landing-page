import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-compliance-checklist",
  title: "The DPDP compliance checklist for small teams (2026)",
  metaTitle: "DPDP compliance checklist 2026: 12 items, one pass",
  description:
    "A 12-point DPDPA compliance checklist you can finish before the 13 May 2027 deadline. Consent, notice, records, data rights. Printable, save it as a PDF.",
  date: "2026-06-12",
  keywords: [
    "dpdpa compliance checklist",
    "dpdp compliance checklist",
    "dpdpa compliance checklist pdf",
    "dpdp act checklist",
    "dpdp compliance requirements",
  ],
  category: "Checklist",
  readingMinutes: 8,
  summary:
    "Twelve items between you and DPDP compliance. Work through them in order, tick them off, keep the proof. Print the page or save it as a PDF for your team.",
  related: ["dpdp-compliance-in-5-steps", "dpdp-consent-requirements", "dpdp-compliance-timeline"],
  blocks: [
    {
      type: "p",
      text: [
        "DPDP compliance is not a research project. It is a finite list. The Act and the 2025 Rules ask for specific, checkable things, and for a typical small site there are twelve of them. Work top to bottom. Hard deadline: ",
        { strong: "13 May 2027" },
        ", when consent, notice, and data rights obligations become enforceable.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Want this as a PDF?",
      text: "Print this page and choose \"Save as PDF\". It renders clean. Pin it in your team channel and assign names to items.",
    },
    { type: "h2", text: "Part 1: know what you collect" },
    { type: "h3", text: "1. Map every point where personal data enters" },
    {
      type: "p",
      text: "Signup forms, checkout, newsletter boxes, contact forms, chat widgets, lead magnets, analytics scripts, ad pixels. Write each one down with the fields it collects. Most teams find collection points they forgot they had. An old webinar form is still a collection point.",
    },
    { type: "h3", text: "2. Assign a purpose to every field" },
    {
      type: "p",
      text: "Why do you collect the phone number? Delivery updates is a purpose. \"Might be useful\" is not. Under the Act you can only process data for the purpose the person agreed to, so every field needs one, written in words a customer would understand.",
    },
    { type: "h3", text: "3. List your processors" },
    {
      type: "p",
      text: "Your CRM, email tool, payment gateway, analytics, cloud host. Data you collect flows to them, and you stay responsible for it. Know where each field goes and check you can delete it there when someone withdraws consent.",
    },
    { type: "h2", text: "Part 2: fix the front door" },
    { type: "h3", text: "4. Put up a purpose-wise consent banner" },
    {
      type: "p",
      text: [
        "Not a cookie banner. A consent banner that lists each purpose separately, with separate toggles, and equal-weight accept and reject buttons. Pre-ticked boxes and bundled consent fail Section 6. The details live in our guide to ",
        { link: "consent under the DPDP Act", href: "/blog/dpdp-consent-requirements" },
        ".",
      ],
    },
    { type: "h3", text: "5. Publish an itemized privacy notice" },
    {
      type: "p",
      text: "The notice must itemize the personal data you collect, state each purpose, and explain how to complain to you and to the Data Protection Board. It must be available in English or any of the 22 Eighth Schedule languages the user prefers. If your notice was copied from a US template in 2019, replace it.",
    },
    { type: "h3", text: "6. Block trackers until consent lands" },
    {
      type: "p",
      text: "Google Analytics, Meta Pixel, Hotjar and friends must not fire before the visitor agrees to that purpose. Loading them first and asking later is collection without consent. Autoblocking plus Google Consent Mode v2 handles this without breaking your reporting.",
    },
    { type: "h3", text: "7. Make withdrawal one click" },
    {
      type: "p",
      text: "Section 6(4): withdrawing consent must be as easy as giving it. That means a preference center reachable from your site, not an email to support that gets answered on Thursdays.",
    },
    { type: "h2", text: "Part 3: keep the receipts" },
    { type: "h3", text: "8. Record every consent event" },
    {
      type: "p",
      text: "Who agreed, to which purposes, when, against which version of your notice. Store it where it cannot be quietly edited. When the Board asks, you export and hand it over. No records means no defence, whatever your banner looked like.",
    },
    { type: "h3", text: "9. Version your notices" },
    {
      type: "p",
      text: "When you change what you collect or why, the notice changes, and consents taken against the old version need refreshing. Keep every version with dates. This is the item teams most often miss.",
    },
    { type: "h2", text: "Part 4: handle people" },
    { type: "h3", text: "10. Open a data rights channel" },
    {
      type: "p",
      text: "People can ask what you hold, correct it, erase it, and nominate someone to act for them. You need an address where these requests land and a process that actually executes them, including in your processors' systems.",
    },
    { type: "h3", text: "11. Name a grievance contact" },
    {
      type: "p",
      text: "The notice must say who handles complaints and how. A monitored inbox with a response target is enough for a small team. An unmonitored one is a finding waiting to happen.",
    },
    { type: "h3", text: "12. Write the breach playbook" },
    {
      type: "p",
      text: "Under the 2025 Rules you notify affected users without delay and file with the Board within 72 hours of becoming aware. Decide now who drafts the notice, who files, and where your consent and processing records live, because 72 hours disappears fast.",
    },
    { type: "h2", text: "The checklist, in one table" },
    {
      type: "table",
      caption: "DPDP compliance checklist, 2026",
      headers: ["#", "Item", "Proof it is done"],
      rows: [
        [["1"], ["Data inventory"], ["A list of every form, field, and script"]],
        [["2"], ["Purpose per field"], ["Written purpose statements"]],
        [["3"], ["Processor list"], ["Vendors mapped to data fields"]],
        [["4"], ["Purpose-wise banner"], ["Separate toggles, equal buttons, live on site"]],
        [["5"], ["Itemized notice"], ["Published, language switcher works"]],
        [["6"], ["Tracker autoblock"], ["No tracker fires pre-consent"]],
        [["7"], ["One-click withdrawal"], ["Preference center linked in footer"]],
        [["8"], ["Consent records"], ["Tamper-evident log, exportable"]],
        [["9"], ["Notice versioning"], ["Dated versions archived"]],
        [["10"], ["Data rights channel"], ["Requests land and get executed"]],
        [["11"], ["Grievance contact"], ["Named in notice, inbox monitored"]],
        [["12"], ["Breach playbook"], ["Owners named, 72-hour drill done"]],
      ],
    },
    {
      type: "p",
      text: [
        "Items 4 through 9 are the heavy ones, and they are exactly what tooling automates. ",
        { link: "Skope closes them in five steps", href: "/blog/dpdp-compliance-in-5-steps" },
        ", about 30 minutes for a typical site.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Not legal advice",
      text: "This checklist covers a typical small website or app. If you process children's data, health data, or large volumes, get counsel to review your setup.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Is there an official DPDP compliance checklist PDF?",
          a: "The government has not published an official checklist. The obligations come from the DPDP Act, 2023 and the DPDP Rules, 2025. This 12-point list maps to those obligations, and you can print this page to PDF for your team.",
        },
        {
          q: "How long does DPDP compliance take for a small website?",
          a: "The inventory and purpose mapping take a few hours of honest work. The technical items, banner, notice, autoblock, records, and withdrawal, take about 30 minutes with a consent kit like Skope, or weeks if you build them yourself.",
        },
        {
          q: "Do I need a Data Protection Officer?",
          a: "Only Significant Data Fiduciaries, notified by the government, must appoint a DPO based in India. A typical small business does not, but you still need a named grievance contact in your privacy notice.",
        },
        {
          q: "What is the deadline to complete this checklist?",
          a: "Consent, notice, and data rights obligations under the DPDP Rules become enforceable on 13 May 2027. Consent records take time to accumulate, so the earlier your banner is live, the stronger your position.",
        },
      ],
    },
    {
      type: "cta",
      heading: "Check your site against this list, automatically",
      text: "The free Skope scanner reads your site and scores it against the DPDP checklist: banner, notice, trackers, withdrawal. Results in 60 seconds.",
      buttonLabel: "Run the free scan",
      href: "https://app.skope.network/compliance-checker",
    },
  ],
};
