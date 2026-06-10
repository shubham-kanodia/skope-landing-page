import { Reveal } from "@/components/ui/reveal";

const SIGNUP_URL = "https://app.skope.network/signup";

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    tagline: "For trying it properly.",
    features: ["1 domain", "1,000 consents/mo", "English + 1 language", "Skope badge"],
    popular: false,
  },
  {
    name: "Starter",
    price: "₹999",
    tagline: "Everything a single site needs.",
    features: ["1 domain", "25k consents/mo", "All languages", "Remove badge", "Form receipts", "Email support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹2,999",
    tagline: "For teams getting serious.",
    features: [
      "3 domains",
      "150k consents/mo",
      "Preference center theming",
      "Consent analytics",
      "API access",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "₹4,999",
    tagline: "For multi-site operators.",
    features: ["10 domains", "500k consents/mo", "Webhooks", "Audit exports", "Agency sub-accounts (coming soon)"],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="text-[clamp(28px,4vw,44px)]">Pricing that fits a small team.</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} index={i}>
            <div
              className={`flex h-full flex-col rounded-xl border p-6 ${
                plan.popular ? "border-lens bg-slate" : "border-hairline bg-slate/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-paper">{plan.name}</h3>
                {plan.popular && (
                  <span className="rounded-full bg-lens/15 px-2.5 py-0.5 font-mono text-xs text-lens">
                    most popular
                  </span>
                )}
              </div>
              <p className="mt-4 font-mono text-xl text-paper">
                {plan.price}
                <span className="text-sm text-mist">/mo</span>
              </p>
              <p className="mt-1 text-xs text-mist">{plan.tagline}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mist">
                    <span className="mt-0.5 text-lens" aria-hidden="true">
                      ·
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={SIGNUP_URL}
                className={`mt-8 rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-lens text-ink hover:shadow-[0_0_20px_rgba(43,217,199,0.35)]"
                    : "border border-hairline text-paper hover:border-lens hover:text-lens"
                }`}
              >
                Start free
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-mist">Prices exclude GST. Annual = 2 months free.</p>
    </section>
  );
}
