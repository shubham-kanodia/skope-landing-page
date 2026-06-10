import { Countdown } from "@/components/ui/countdown";
import { Reveal } from "@/components/ui/reveal";

export function Deadline() {
  return (
    <section className="bg-surface-dark">
      <div className="mx-auto max-w-[1200px] px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-[clamp(32px,4vw,52px)] text-white">The clock is real.</h2>
        </Reveal>
        <Reveal index={1}>
          <div className="mt-14">
            <Countdown />
          </div>
        </Reveal>
        <Reveal index={2}>
          <p className="mx-auto mt-12 max-w-[58ch] text-[15px] text-on-dark-soft">
            Soft enforcement is ending. Companies are already getting notices. Early movers make
            compliance a trust badge — laggards make it an emergency.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
