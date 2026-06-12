import type { Post } from "../types";

export const post: Post = {
  slug: "what-is-the-dpdp-act",
  title: "What is the DPDP Act? India's data law, explained",
  metaTitle: "What is the DPDP Act? Meaning, scope and rules (2026)",
  description:
    "The DPDP Act is India's data protection law. Here is what it means, who it applies to, what it asks of you, and the fines if you ignore it. In plain English.",
  date: "2026-06-12",
  keywords: [
    "dpdp act",
    "dpdpa compliance meaning",
    "what is dpdp act",
    "digital personal data protection act 2023",
    "dpdp act explained",
    "dpdpa compliance",
  ],
  category: "Explainer",
  readingMinutes: 7,
  summary:
    "India's first real data protection law, in plain English. Who it covers, what it asks, and why a two-person startup is on the hook the same as a bank.",
  related: ["dpdp-compliance-checklist", "dpdp-compliance-timeline", "dpdp-act-penalties-and-fines"],
  blocks: [
    {
      type: "p",
      text: "The Digital Personal Data Protection Act, 2023 is India's first comprehensive data protection law. Parliament passed it in August 2023. The DPDP Rules, 2025, the operating manual that makes the Act enforceable, were notified on 14 November 2025. The clock is now running.",
    },
    {
      type: "p",
      text: [
        "If you collect a name, an email, or a phone number from anyone in India, this law applies to you. There is no revenue floor. No headcount floor. A two-person Shopify store and a bank carry the same core obligations. Penalties go up to ",
        { strong: "₹250 crore" },
        " per breach.",
      ],
    },
    { type: "h2", text: "The short version" },
    {
      type: "p",
      text: "The Act says this: before you collect personal data from someone, tell them exactly what you are taking and why, get their clear permission for each purpose, protect the data, and let them change their mind as easily as they said yes. Keep proof of all of it.",
    },
    {
      type: "p",
      text: "That last part matters. When the Data Protection Board asks how you got consent for a specific email address, \"we had a banner\" is not an answer. A timestamped record is.",
    },
    { type: "h2", text: "The vocabulary, decoded" },
    {
      type: "p",
      text: "The Act has its own names for everyone involved. Four terms cover most of it.",
    },
    {
      type: "table",
      headers: ["Term", "Meaning"],
      rows: [
        [["Data Principal"], ["The person the data is about. Your customer, your visitor, your user."]],
        [["Data Fiduciary"], ["Whoever decides why and how data is processed. That is you, the moment you collect a lead."]],
        [["Data Processor"], ["Someone processing data on your behalf. Your CRM, your email tool, your analytics."]],
        [["Data Protection Board"], ["The regulator. It hears complaints, investigates breaches, and writes the fines."]],
      ],
    },
    {
      type: "p",
      text: [
        "There is also the ",
        { strong: "Significant Data Fiduciary" },
        ", a label the government can apply to companies handling large volumes of sensitive data. They get extra homework: a data protection officer in India, annual audits, and impact assessments. Most small teams will not be notified as one. The base obligations still apply to everyone.",
      ],
    },
    { type: "h2", text: "What counts as personal data" },
    {
      type: "p",
      text: "Any data about an identifiable person, in digital form. Names, emails, phone numbers, addresses, payment details, device identifiers, support tickets with a customer's name in them. The Act does not have a special category for \"sensitive\" data the way GDPR does. It is one bucket, and almost everything you collect is in it.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Scope check",
      text: "The Act covers digital personal data processed in India, plus processing abroad if it relates to offering goods or services to people in India. Selling to Indian customers from a Delaware entity does not get you out.",
    },
    { type: "h2", text: "The seven things the law asks of you" },
    {
      type: "list",
      ordered: true,
      items: [
        [
          { strong: "Consent, per purpose." },
          " Permission must be free, specific, informed, and unambiguous. One pre-ticked \"I agree to everything\" box fails on all four counts. Marketing and analytics need separate yeses.",
        ],
        [
          { strong: "Notice, before collection." },
          " An itemized notice: what data, what purpose, how to complain. The Data Principal can ask for it in English or any of the 22 languages in the Eighth Schedule.",
        ],
        [
          { strong: "Easy withdrawal." },
          " Withdrawing consent must be as easy as giving it. One click in, one click out. Section 6(4) says so explicitly.",
        ],
        [
          { strong: "Security safeguards." },
          " Reasonable measures to prevent a breach. This carries the biggest fine in the Schedule: up to ₹250 crore.",
        ],
        [
          { strong: "Breach reporting." },
          " Under the 2025 Rules, you notify affected users without delay and file details with the Board within 72 hours.",
        ],
        [
          { strong: "Data rights handling." },
          " People can ask what you hold, get it corrected, get it erased, and nominate someone to act for them. You need a working channel for each.",
        ],
        [
          { strong: "Erasure when done." },
          " When consent is withdrawn or the purpose is served, the data goes. Yours and your processors' copies.",
        ],
      ],
    },
    { type: "h2", text: "What happens if you ignore it" },
    {
      type: "p",
      text: [
        "The Schedule to the Act lists the fines. Security failures top out at ₹250 crore. Missing a breach notification: ₹200 crore. Mishandling children's data: ₹200 crore. Everything else: up to ₹50 crore per breach, and the Board can stack them. The full breakdown is in our ",
        { link: "guide to DPDP penalties", href: "/blog/dpdp-act-penalties-and-fines" },
        ".",
      ],
    },
    { type: "h2", text: "When it kicks in" },
    {
      type: "p",
      text: [
        "The Rules set a phased schedule. The Data Protection Board provisions took effect on 14 November 2025. Consent Manager registration opens on 14 November 2026. The obligations that touch your website, consent, notice, and data rights, become enforceable on ",
        { strong: "13 May 2027" },
        ". That sounds far away. It is one product cycle. The dates are mapped in our ",
        { link: "DPDP compliance timeline", href: "/blog/dpdp-compliance-timeline" },
        ".",
      ],
    },
    { type: "h2", text: "What to do this week" },
    {
      type: "p",
      text: [
        "You do not need a war room. You need an inventory of what you collect, a consent banner that records purpose-wise permission, a privacy notice that matches reality, and a place to receive data rights requests. Our ",
        { link: "DPDP compliance checklist", href: "/blog/dpdp-compliance-checklist" },
        " walks through each item. Most small sites can close the list in a day.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Not legal advice",
      text: "This is a plain-language guide, not legal advice. If you handle health or financial data at scale, or move data across borders, talk to counsel.",
    },
    {
      type: "faq",
      items: [
        {
          q: "What does DPDP stand for?",
          a: "Digital Personal Data Protection. The full name is the Digital Personal Data Protection Act, 2023, usually shortened to DPDP Act or DPDPA.",
        },
        {
          q: "What does DPDPA compliance mean?",
          a: "It means meeting the Act's obligations: purpose-wise consent before collecting personal data, an itemized privacy notice available in Indian languages, easy consent withdrawal, security safeguards, breach reporting, and working channels for access, correction, and erasure requests, with records to prove all of it.",
        },
        {
          q: "Is the DPDP Act in force in 2026?",
          a: "Partly. The Act became law in August 2023 and the DPDP Rules were notified on 14 November 2025. Board and administrative provisions are live now. Consent, notice, and data rights obligations become enforceable on 13 May 2027.",
        },
        {
          q: "Does the DPDP Act apply to small businesses?",
          a: "Yes. There is no general small-business exemption. The government can notify specific startups as exempt from a few provisions, but that requires a notification, and consent obligations still apply.",
        },
        {
          q: "Is DPDP the same as GDPR?",
          a: "No. DPDP covers all personal data, not just cookies, requires notices accessible in 22 Indian languages, and skips GDPR concepts like legitimate interest for marketing. A GDPR cookie banner does not make you DPDP compliant.",
        },
      ],
    },
    {
      type: "cta",
      heading: "See where you stand in 60 seconds",
      text: "Run the free Skope compliance checker on your site. It flags what the DPDP Act expects and what you are missing. No signup, no sales call.",
      buttonLabel: "Scan my website",
      href: "https://app.skope.network/compliance-checker",
    },
  ],
};
