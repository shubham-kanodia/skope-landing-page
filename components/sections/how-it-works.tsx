import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  {
    title: "Paste the tag.",
    body: "One line in your <head>. Skope finds your trackers and holds them until consent. WordPress and Shopify apps are coming.",
    mock: <InstallMock />,
  },
  {
    title: "Make it yours.",
    body: "Pick your purposes and languages, declare the data you collect, or let Skope read it off a screenshot of your form — and generate a DPDP privacy notice in a click. Edit every line before it goes live.",
    mock: <BannerMock />,
  },
  {
    title: "We keep the receipts.",
    body: "Every consent, withdrawal, and data-rights request, timestamped and hash-chained. When anyone asks for proof, it's one click.",
    mock: <ReceiptMock />,
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
                <span className="font-mono text-[13px] font-medium text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2.5 text-[15px]">{step.body}</p>
                <div className="mt-8">{step.mock}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The one-line install, then proof it's live. */
function InstallMock() {
  return (
    <div className="rounded-2xl border border-hairline bg-canvas p-4">
      <pre className="overflow-hidden font-mono text-[11px] leading-relaxed text-body">
        <span className="text-muted">&lt;script src=&quot;</span>
        <span className="text-ink">cdn.skope.network/skope.js</span>
        <span className="text-muted">&quot;{"\n"}        data-site=&quot;</span>
        <span className="text-primary">sk_live_…</span>
        <span className="text-muted">&quot;&gt;&lt;/script&gt;</span>
      </pre>
      <div className="mt-3 flex items-center gap-2 border-t border-hairline-soft pt-3">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
        <span className="text-[12px] text-body">Banner live · trackers blocked until consent</span>
      </div>
    </div>
  );
}

/** A mini consent banner, equal-weight choices, as we actually ship it. */
function BannerMock() {
  return (
    <div className="rounded-2xl border border-hairline bg-canvas p-4">
      <p className="text-[13px] font-semibold text-ink">Your consent, your control</p>
      <p className="mt-1 text-[11.5px] leading-relaxed text-body">
        We ask before processing data that isn&apos;t strictly necessary.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white">Accept all</span>
        <span className="rounded-full border border-hairline px-3 py-1 text-[11px] font-semibold text-ink">Reject</span>
        <span className="rounded-full px-3 py-1 text-[11px] font-semibold text-primary">Manage</span>
      </div>
    </div>
  );
}

/** A tamper-evident consent receipt, terminal-styled. */
function ReceiptMock() {
  return (
    <div className="rounded-2xl bg-surface-dark p-4 font-mono text-[11px] leading-relaxed">
      <p className="text-on-dark-soft">receipt #a3f9c2</p>
      <p className="mt-1 text-white">grant · necessary, analytics</p>
      <p className="text-on-dark-soft">2026-06-12 14:03 IST · banner · IN</p>
      <p className="mt-1 text-on-dark-soft">
        chain <span className="text-primary-on-dark">9f2e…</span> → <span className="text-primary-on-dark">4a7b…</span>
      </p>
    </div>
  );
}
