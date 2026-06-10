import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  {
    title: "Paste the tag.",
    body: "Add one line to your site — or install our WordPress plugin / Shopify app. Skope finds your trackers automatically.",
  },
  {
    title: "Pick your purposes & languages.",
    body: "Choose what you collect and why, in plain words. We render the notice in English + your customers' language.",
  },
  {
    title: "We keep the receipts.",
    body: "Every consent, withdrawal, and request — timestamped, tamper-evident, export-ready. When anyone asks for proof, it's one click.",
  },
];

export function HowItWorks() {
  return (
    <section id="product" className="border-t border-hairline bg-slate/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-[clamp(28px,4vw,44px)]">Compliant by lunch.</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} index={i}>
              <div>
                <span className="font-mono text-sm text-lens">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-paper">{step.title}</h3>
                <p className="mt-3 max-w-[68ch] text-sm text-mist">{step.body}</p>
                {/* Placeholder frame — replace with real product screenshots at M-LP4 */}
                <div
                  className="mt-6 flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-hairline bg-ink"
                  aria-hidden="true"
                >
                  <span className="font-mono text-xs text-mist/60">product screenshot</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
