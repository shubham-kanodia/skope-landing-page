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
    <section id="product" className="bg-surface-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <Reveal>
          <h2 className="text-[clamp(32px,4vw,52px)]">Compliant by lunch.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} index={i}>
              <div className="flex h-full flex-col rounded-3xl bg-canvas p-8">
                <span className="font-mono text-[13px] font-medium text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2.5 text-[15px]">{step.body}</p>
                {/* Placeholder frame — replace with real product screenshots at M-LP4 */}
                <div
                  className="mt-8 flex aspect-[4/3] items-center justify-center rounded-2xl bg-surface-strong"
                  aria-hidden="true"
                >
                  <span className="font-mono text-xs text-muted-soft">product screenshot</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
