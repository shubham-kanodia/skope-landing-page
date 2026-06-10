import { Reveal } from "@/components/ui/reveal";

const FEATURES = [
  {
    title: "India-aware banner",
    body: "Shows only to visitors in India. Your global users stay untouched.",
  },
  {
    title: "22 languages",
    body: "Notices in English plus Eighth-Schedule languages. Hindi to Malayalam.",
  },
  {
    title: "Purpose-wise consent",
    body: "DPDP isn't a cookie law. Capture consent per purpose, on every form.",
  },
  {
    title: "Tamper-evident ledger",
    body: "Hash-chained consent receipts. Proof, not promises.",
  },
  {
    title: "Withdrawal that actually works",
    body: "One-click preference center. Withdrawing is as easy as agreeing — because that's the law.",
  },
  {
    title: "Tracker autoblock",
    body: "GA, Meta Pixel, Hotjar held until consent. Google Consent Mode v2 built in.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} index={i} className="bg-ink">
            <div className="h-full bg-slate/40 p-8">
              <h3 className="text-base font-semibold text-paper">{f.title}</h3>
              <p className="mt-3 max-w-[68ch] text-sm text-mist">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
