import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-compliance-in-5-steps",
  title: "DPDP compliance in 5 steps with Skope",
  metaTitle: "DPDP compliance tool: get compliant in 5 steps | Skope",
  description:
    "How Skope takes a small team from zero to DPDP compliant in about 30 minutes: one script tag, purpose-wise consent, AI-drafted notice, audit-proof records.",
  date: "2026-06-12",
  keywords: [
    "dpdpa compliance tool",
    "dpdp compliance software",
    "dpdp consent management",
    "dpdp compliance steps",
    "how to comply with dpdp act",
  ],
  category: "Guide",
  readingMinutes: 6,
  summary:
    "Zero to compliant in five steps: paste one tag, scan your forms, edit the AI-drafted notice, switch on autoblock, and let the receipts pile up.",
  related: ["dpdp-compliance-checklist", "dpdp-compliance-tools-compared", "does-dpdp-apply-to-small-businesses"],
  blocks: [
    {
      type: "p",
      text: [
        "The DPDP Act asks for specific things: purpose-wise consent, an itemized notice in Indian languages, blocked trackers, one-click withdrawal, and records that survive an audit. The ",
        { link: "full checklist", href: "/blog/dpdp-compliance-checklist" },
        " has twelve items. Skope automates the heavy ones. Here is the whole process, start to finish.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Time budget",
      text: "A typical marketing site or store finishes all five steps in about 30 minutes. No demo call, no onboarding fee, no lawyer on retainer.",
    },
    { type: "h2", text: "Step 1: paste one script tag" },
    {
      type: "p",
      text: [
        "Sign up, add your site, and paste the tag into your <head>. That is the entire install: ",
        { code: "<script src=\"https://cdn.skope.network/skope.js\" data-site=\"your-id\" async></script>" },
        ". It is under 30KB gzipped, loads async, and adds less than 50ms to time-to-interactive. Your Lighthouse score stays where it is.",
      ],
    },
    {
      type: "p",
      text: "By default the banner shows only to visitors in India. Your users in Berlin and Boston browse untouched. You can change that per site.",
    },
    { type: "h2", text: "Step 2: tell Skope what you collect" },
    {
      type: "p",
      text: "Skope reads your site and finds your forms, trackers, and scripts. Have a signup form it cannot reach, behind a login, in an app? Screenshot it. Skope extracts the fields from the image and adds them to your data inventory. Each field gets mapped to a purpose in plain words: delivery updates, payment processing, marketing email.",
    },
    {
      type: "p",
      text: "This inventory is the backbone of everything else. The notice itemizes it, the banner asks consent against it, and the records reference it.",
    },
    { type: "h2", text: "Step 3: edit the privacy notice Skope drafts" },
    {
      type: "p",
      text: "From the inventory, Skope drafts a DPDP privacy notice: the data you collect, each purpose, your grievance contact, and how to complain to the Data Protection Board. You edit every line. Nothing publishes until you approve it. The notice goes live on a hosted page, available in English and the 22 Eighth Schedule languages, and every version is archived with dates.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Honesty clause",
      text: "AI drafts, you decide. Have a lawyer read the final notice before launch if anything about your data is unusual. For most small sites it is a ten-minute review.",
    },
    { type: "h2", text: "Step 4: switch on the banner and autoblock" },
    {
      type: "p",
      text: [
        "Pick your colors and copy, then go live. The banner asks ",
        { link: "purpose-wise consent", href: "/blog/dpdp-consent-requirements" },
        " with separate toggles and equal-weight buttons. No dark patterns, in our product or yours. Autoblock holds Google Analytics, Meta Pixel, Hotjar and the rest until the visitor agrees to that purpose, with Google Consent Mode v2 keeping your ad and analytics reporting intact.",
      ],
    },
    {
      type: "p",
      text: "Withdrawal is built in. A preference center link sits in your footer, and pulling consent takes the same one click that giving it did. Section 6(4) of the Act requires exactly that.",
    },
    { type: "h2", text: "Step 5: let the records accumulate" },
    {
      type: "p",
      text: "From the first visitor, every consent event lands in a hash-chained ledger: who agreed, to which purposes, when, against which notice version. Hash-chaining means any tampering breaks the chain and shows. Records are encrypted and stored in Mumbai.",
    },
    {
      type: "p",
      text: "When a regulator or enterprise customer asks for proof, you export a ZIP: receipts, notice versions, and chain verification. One click. That export is the difference between an awkward week and an attachment.",
    },
    { type: "h2", text: "What this covers, against the law" },
    {
      type: "table",
      caption: "Five steps mapped to DPDP obligations",
      headers: ["Step", "What you did", "Obligation it closes"],
      rows: [
        [["1"], ["Installed the tag"], ["Infrastructure for everything below"]],
        [["2"], ["Built the data inventory"], ["Purpose limitation, Section 4 to 5 groundwork"]],
        [["3"], ["Published the notice"], ["Section 5 notice, itemized, 22 languages"]],
        [["4"], ["Banner plus autoblock"], ["Section 6 consent, easy withdrawal, no pre-consent tracking"]],
        [["5"], ["Consent ledger running"], ["Burden of proof when the Board asks"]],
      ],
    },
    {
      type: "p",
      text: [
        "What it does not cover: your internal security practices, employee data handling, and anything exotic like cross-border transfers to restricted countries. Those stay on your list. For a typical small site, though, the items above are the bulk of ",
        { link: "the checklist", href: "/blog/dpdp-compliance-checklist" },
        ".",
      ],
    },
    { type: "h2", text: "What it costs" },
    {
      type: "p",
      text: "The Free plan covers one site and 5,000 consents a month, with all Indian languages included. Paid plans start at ₹999 a month. Sign up by 12 July 2026 and the Growth plan is free for six months, no card required.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Do I need a developer to set up Skope?",
          a: "Only for pasting one script tag into your site's head. On Shopify, WordPress, or Webflow that is a settings field. Everything else happens in the Skope dashboard.",
        },
        {
          q: "Will the consent banner slow down my site?",
          a: "No. The script is under 30KB gzipped, loads asynchronously, and adds less than 50ms to time-to-interactive.",
        },
        {
          q: "Does Skope work alongside my existing GDPR banner?",
          a: "Skope replaces it for Indian visitors. Running two banners confuses users and splits your consent records. By default Skope shows only to visitors in India, so your GDPR setup can keep serving the EU.",
        },
        {
          q: "Does Skope store my customers' data?",
          a: "Only consent receipts: who agreed to what, when. Encrypted, stored in India, deletable by design. Skope never sees what your customers do on your site.",
        },
        {
          q: "Is Skope a registered Consent Manager?",
          a: "Nobody is yet. The registration framework under the DPDP Rules opens on 14 November 2026. Skope is built to integrate with it the day it goes live.",
        },
      ],
    },
    {
      type: "cta",
      heading: "Thirty minutes from now, this is handled",
      text: "Start free, paste the tag, and walk through the five steps. Sign up by 12 July 2026 and Growth is free for six months. No card, no sales call.",
      buttonLabel: "Start free",
      href: "https://app.skope.network/login",
    },
  ],
};
