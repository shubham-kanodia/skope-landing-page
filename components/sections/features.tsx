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
    <section className="mx-auto max-w-[1200px] px-6 py-24">
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
