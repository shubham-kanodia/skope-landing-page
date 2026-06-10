import { Reveal } from "@/components/ui/reveal";

const SIGNUP_URL = "https://app.skope.network/signup";

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    tagline: "For trying it properly.",
    features: ["1 domain", "1,000 consents/mo", "English + 1 language", "Skope badge"],
    featured: false,
  },
  {
    name: "Starter",
    price: "₹999",
    tagline: "Everything a single site needs.",
    features: ["1 domain", "25k consents/mo", "All languages", "Remove badge", "Form receipts", "Email support"],
    featured: false,
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
    featured: true,
  },
  {
    name: "Scale",
    price: "₹4,999",
    tagline: "For multi-site operators.",
    features: ["10 domains", "500k consents/mo", "Webhooks", "Audit exports", "Agency sub-accounts (coming soon)"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1200px] px-6 py-24">
      <Reveal>
        <h2 className="text-[clamp(32px,4vw,52px)]">Pricing that fits a small team.</h2>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} index={i}>
            <div
              className={`flex h-full flex-col rounded-3xl p-8 ${
                plan.featured
                  ? "bg-surface-dark text-on-dark-soft"
                  : "border border-hairline"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className={`text-lg font-semibold ${plan.featured ? "text-white" : "text-ink"}`}>
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-white">
                    Most popular
                  </span>
                )}
              </div>
              <p className={`mt-5 font-mono text-[28px] font-medium ${plan.featured ? "text-white" : "text-ink"}`}>
                {plan.price}
                <span className={`text-sm ${plan.featured ? "text-on-dark-soft" : "text-body"}`}>/mo</span>
              </p>
              <p className={`mt-1 text-[13px] ${plan.featured ? "text-on-dark-soft" : "text-body"}`}>
                {plan.tagline}
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-primary-on-dark" : "text-primary"}`}
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={SIGNUP_URL}
                className={`mt-9 inline-flex h-11 items-center justify-center rounded-full px-5 text-[15px] font-semibold transition-colors ${
                  plan.featured
                    ? "bg-primary text-white hover:bg-primary-active"
                    : "bg-surface-strong text-ink hover:bg-hairline"
                }`}
              >
                Start free
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center text-[13px] text-body">
        Prices exclude GST. Annual = 2 months free.
      </p>
    </section>
  );
}
