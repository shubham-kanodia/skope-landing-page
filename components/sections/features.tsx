import { Reveal } from "@/components/ui/reveal";

const FEATURES = [
  {
    title: "India-aware banner",
    body: "Shows only to visitors in India. Your global users stay untouched.",
  },
  {
    title: "Yours, down to the pixel",
    body: "Colours, copy, banner layout, purposes: every line is editable. It looks like your brand, not a vendor's widget.",
  },
  {
    title: "Every Indian language",
    body: "Notices in English and the Eighth-Schedule languages, on every plan. Regional language is the law, not an upsell.",
  },
  {
    title: "Purpose-wise consent",
    body: "DPDP isn't a cookie law. Capture consent per purpose, on every form.",
  },
  {
    title: "Tracker autoblock",
    body: "GA, Meta Pixel, Hotjar held until consent. Google Consent Mode v2 built in.",
  },
  {
    title: "Declare data from a screenshot",
    body: "DPDP wants your notice to itemize the data you collect. Drop in a screenshot of any form and Skope lists the fields for you. Read once, never stored.",
  },
  {
    title: "A privacy notice, written for you",
    body: "Generate a DPDP notice from your own site in one click: the data you collect, purposes, trackers, contacts. Edit every line; we host the page.",
  },
  {
    title: "Preference center + data rights",
    body: "Visitors withdraw consent or file access, correction, erasure, and grievance requests. You get a queue with a due-date clock.",
  },
  {
    title: "Tamper-evident ledger, in India",
    body: "Hash-chained consent receipts, encrypted and stored in Mumbai. Proof, not promises.",
  },
  {
    title: "The export you hand a regulator",
    body: "One click: your receipts, every notice version, and a chain-verification report in a single ZIP.",
  },
  {
    title: "Free compliance checker",
    body: "Scan any site for DPDP gaps in 60 seconds, yours or a competitor's.",
  },
];

export function Features() {
  return (
    <section data-section="features" className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} index={i}>
            <div className="h-full rounded-3xl border border-hairline p-8">
              <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2.5 text-[15px]">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
