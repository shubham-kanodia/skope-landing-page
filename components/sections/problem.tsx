import { Reveal } from "@/components/ui/reveal";

const BEATS = [
  {
    title: "The law is in force.",
    body: "The DPDP Rules were notified in Nov 2025. Enforcement has already begun.",
  },
  {
    title: "Penalties go to ₹250 crore.",
    body: "Written for big tech. Applies to your Shopify store.",
  },
  {
    title: "The big-vendor route doesn't fit you.",
    body: "Demo calls, six-figure quotes, GDPR tools wearing a kurta. You need a kit, not a consulting engagement.",
  },
];

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="max-w-3xl text-[clamp(28px,4vw,44px)]">
          Collecting even a name and email makes you a Data Fiduciary.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {BEATS.map((beat, i) => (
          <Reveal key={beat.title} index={i}>
            <div className="border-t border-hairline pt-6">
              <h3 className="text-lg font-semibold text-paper">{beat.title}</h3>
              <p className="mt-3 max-w-[68ch] text-sm text-mist">{beat.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
