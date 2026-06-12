import { Reveal } from "@/components/ui/reveal";

const BEATS = [
  {
    title: "The law is in force.",
    body: "The DPDP Rules were notified in Nov 2025. Enforcement has already begun.",
  },
  {
    title: "Penalties go to ₹250 crores.",
    body: "Written for big tech. Applies to your business too.",
  },
  {
    title: "The big-vendor route doesn't fit you.",
    body: "Demo calls, six-figure quotes, GDPR tools wearing a kurta. You need a kit, not a consulting engagement.",
  },
];

export function Problem() {
  return (
    <section data-section="problem" className="mx-auto max-w-[1200px] px-6 py-24">
      <Reveal>
        <h2 className="max-w-3xl text-[clamp(32px,4vw,52px)]">
          Collecting even a name and email makes you a Data Fiduciary.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 sm:grid-cols-3">
        {BEATS.map((beat, i) => (
          <Reveal key={beat.title} index={i}>
            <div className="border-t border-hairline pt-6">
              <h3 className="text-lg font-semibold text-ink">{beat.title}</h3>
              <p className="mt-3 max-w-[60ch] text-[15px]">{beat.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
