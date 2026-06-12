import type { Post } from "../types";

export const post: Post = {
  slug: "does-dpdp-apply-to-small-businesses",
  title: "Does the DPDP Act apply to small businesses? Yes. Here's what that means.",
  metaTitle: "Does the DPDP Act apply to small businesses in India?",
  description:
    "The DPDP Act has no small-business exemption for consent and notice. What applies to your startup or store, the narrow startup carve-out, and what to do first.",
  date: "2026-06-12",
  keywords: [
    "dpdp act small business",
    "dpdp compliance for startups",
    "does dpdp apply to my business",
    "dpdp act msme exemption",
    "dpdp act startup exemption",
  ],
  category: "Explainer",
  readingMinutes: 6,
  summary:
    "No revenue floor, no headcount floor. If you collect a name and an email from anyone in India, you are a Data Fiduciary. The carve-outs are narrower than founders hope.",
  related: ["what-is-the-dpdp-act", "dpdp-compliance-checklist", "dpdp-act-penalties-and-fines"],
  blocks: [
    {
      type: "p",
      text: [
        "Short answer: yes. The ",
        { link: "DPDP Act", href: "/blog/what-is-the-dpdp-act" },
        " applies to anyone processing digital personal data in India, and it does not check your revenue first. Collecting even a name and an email makes you a Data Fiduciary, with a Data Fiduciary's obligations.",
      ],
    },
    {
      type: "p",
      text: "The longer answer involves one narrow carve-out that founders routinely overread. Here is where the line actually sits.",
    },
    { type: "h2", text: "Why there is no small-business pass" },
    {
      type: "p",
      text: "GDPR-era laws often scale duties with size. DPDPA mostly does not. The drafters put the scaling elsewhere: heavier obligations stack onto Significant Data Fiduciaries at the top, while the core duties, consent, notice, security, breach reporting, and data rights, apply to every fiduciary from the first record.",
    },
    {
      type: "p",
      text: "If you run a Shopify store, a SaaS waitlist, a coaching newsletter, or a clinic booking page, you are in scope today. The only true exemptions are personal and domestic use, and data you process for purely journalistic or research purposes under conditions the Rules set.",
    },
    { type: "h2", text: "The startup carve-out, read carefully" },
    {
      type: "p",
      text: "Section 17(3) lets the Central Government notify certain classes of Data Fiduciaries, including startups, as exempt from a few provisions: the notice requirement, some accuracy and erasure duties, and the right to access. Three things founders miss:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        [
          { strong: "It is not automatic." },
          " You are exempt only if the government notifies your class. No notification, no exemption. Being DPIIT-registered does not by itself change your DPDP duties.",
        ],
        [
          { strong: "Consent is not on the exemptable list." },
          " Section 6 applies regardless. You still need valid, purpose-wise, withdrawable consent before processing.",
        ],
        [
          { strong: "Security and breach duties stay." },
          " The ₹250 crore safeguard obligation and the 72-hour breach notification apply to exempted startups too.",
        ],
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Plan for the default",
      text: "Build as if no exemption applies. If a notification later covers you, you have done slightly more than required. If you assumed one and it never came, you are non-compliant with records to prove it.",
    },
    { type: "h2", text: "What a small team actually owes" },
    {
      type: "table",
      caption: "DPDP obligations by company size",
      headers: ["Obligation", "2-person startup", "Significant Data Fiduciary"],
      rows: [
        [["Purpose-wise consent"], ["Yes"], ["Yes"]],
        [["Itemized notice, 22 languages"], ["Yes"], ["Yes"]],
        [["Easy withdrawal"], ["Yes"], ["Yes"]],
        [["Security safeguards"], ["Yes"], ["Yes"]],
        [["Breach notification, 72 hours"], ["Yes"], ["Yes"]],
        [["Data rights handling"], ["Yes"], ["Yes"]],
        [["Data Protection Officer in India"], ["No"], ["Yes"]],
        [["Annual audit and impact assessment"], ["No"], ["Yes"]],
      ],
    },
    {
      type: "p",
      text: "The first six rows are the whole story for most small businesses. Nothing in them requires a legal team. All of them require actually doing the work.",
    },
    { type: "h2", text: "\"The Board will not come after companies like us\"" },
    {
      type: "p",
      text: [
        "Maybe not first. But enforcement is complaint-driven: any customer can file with the Data Protection Board, and an annoyed ex-customer with a screenshot of your consent-free signup form is a complete complaint. Penalties for the everyday breaches run ",
        { link: "up to ₹50 crore", href: "/blog/dpdp-act-penalties-and-fines" },
        ", with proportionality, not immunity, for small companies.",
      ],
    },
    {
      type: "p",
      text: "The nearer-term forcing function is commercial. Enterprise procurement now ships DPDP questionnaires, and \"no consent records\" ends deals before legal review starts. Your compliance deadline is your next big customer's security review, not the Board's first raid.",
    },
    { type: "h2", text: "The proportionate response" },
    {
      type: "p",
      text: [
        "The good news: at small-team scale this is a contained problem. One data inventory, one banner, one notice, one records ledger. ",
        { link: "The 12-point checklist", href: "/blog/dpdp-compliance-checklist" },
        " is the map, and the technical items take about 30 minutes with a consent kit. The deadline for the core obligations is 13 May 2027; the records you keep between now and then are the asset.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Not legal advice",
      text: "This covers the typical small business. If you handle health or financial data, lend money, or build for children, your obligations are heavier. Talk to counsel.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Is there a turnover threshold below which DPDP does not apply?",
          a: "No. The Act applies to processing of digital personal data regardless of company size or revenue. Obligations scale up for Significant Data Fiduciaries, but the core duties bind everyone.",
        },
        {
          q: "Are startups exempt from the DPDP Act?",
          a: "Only if the government specifically notifies a class of startups under Section 17(3), and even then only from a few provisions like notice and access. Consent, security, and breach notification obligations are not exemptable. No such blanket notification covers typical startups today.",
        },
        {
          q: "Does DPDP apply to a small Shopify or WooCommerce store?",
          a: "Yes. A checkout collects names, addresses, phone numbers, and payment details, all personal data. The store decides why it is collected, which makes it a Data Fiduciary with full consent, notice, and security duties.",
        },
        {
          q: "Do freelancers and solo founders need DPDP compliance?",
          a: "If you collect personal data from clients or visitors in the course of business, yes. Purely personal or domestic use is exempt; a client list and a newsletter are neither.",
        },
      ],
    },
    {
      type: "cta",
      heading: "Small team, same law, easy fix",
      text: "Skope was built for exactly this: one script tag, purpose-wise consent, notice in 22 languages, records kept. Free plan covers one site and 5,000 consents a month.",
      buttonLabel: "Start free",
      href: "https://app.skope.network/login",
    },
  ],
};
