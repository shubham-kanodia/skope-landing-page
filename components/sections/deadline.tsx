import { Countdown } from "@/components/ui/countdown";
import { Reveal } from "@/components/ui/reveal";

export function Deadline() {
  return (
    <section className="border-y border-hairline bg-slate/40">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-[clamp(28px,4vw,44px)]">The clock is real.</h2>
        </Reveal>
        <Reveal index={1}>
          <div className="mt-12">
            <Countdown />
          </div>
        </Reveal>
        <Reveal index={2}>
          <p className="mx-auto mt-10 max-w-[68ch] text-sm text-mist">
            Soft enforcement is ending. Companies are already getting notices. Early movers make
            compliance a trust badge — laggards make it an emergency.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
