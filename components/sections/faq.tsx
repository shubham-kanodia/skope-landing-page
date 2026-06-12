import { AccordionItem } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";

const FAQS = [
  {
    q: "Does DPDP apply to me?",
    a: "If you collect any personal data from people in India, a name, an email, a phone number, yes. The law has no small-business exemption for consent and notice. Some obligations scale with size; these don't.",
  },
  {
    q: "I already have a GDPR cookie banner. Am I covered?",
    a: "No. DPDP needs purpose-wise consent on all personal data collection, not just cookies, plus notices in Indian languages and withdrawal that's as easy as consent. Skope replaces your cookie banner and covers the rest.",
  },
  {
    q: "Do you store my customers' data?",
    a: "Only consent receipts, who agreed to what, when. Encrypted, stored in India, deletable by design. We never see what your customers do on your site.",
  },
  {
    q: "What happens to non-India visitors?",
    a: "Nothing. By default the banner shows only to visitors in India; your global users browse untouched. You can change this per site.",
  },
  {
    q: "Will this slow my site?",
    a: "No. The script is under 30KB gzipped, loads async, and adds less than 50ms to time-to-interactive. Your Lighthouse score stays where it is.",
  },
  {
    q: "Can you write my privacy notice?",
    a: "Yes. Skope drafts a DPDP privacy notice from your site: the data you collect, purposes, trackers, and grievance contact. DPDP wants the notice to itemize personal data, and Skope can read the list straight off a screenshot of your form. You edit every line, then publish it to a page we host. Have your lawyer review it before launch.",
  },
  {
    q: "What's the launch offer?",
    a: "Sign up before 12 July 2026 and you get the full Growth plan free for six months. No card, and nothing to pay before August 2026 anyway. We just want your feedback while we build.",
  },
  {
    q: "Is this legal advice?",
    a: "No. Skope is tooling and templates that encode the rules. Most small sites are covered by the kit; if you handle sensitive data or have cross-border questions, talk to counsel.",
  },
  {
    q: "What's a Consent Manager, and are you one?",
    a: "A registered intermediary under DPDP. The registration framework opens in Nov 2026, so nobody is registered yet. Skope is built to integrate with it the day it goes live.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. One click in settings, no call, no email thread. Your consent records stay exportable for 30 days after.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function Faq() {
  return (
    <section data-section="faq" className="mx-auto max-w-3xl px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Reveal>
        <h2 className="text-[clamp(32px,4vw,52px)]">Questions, answered straight.</h2>
      </Reveal>
      <Reveal index={1}>
        <div className="mt-12 border-t border-hairline">
          {FAQS.map((f) => (
            <AccordionItem key={f.q} question={f.q} answer={f.a} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
