import { InstallSnippet } from "@/components/ui/install-snippet";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="bg-surface-dark">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-[clamp(32px,4vw,44px)] text-white">
            Thirty minutes from now, this is handled.
          </h2>
        </Reveal>
        <Reveal index={1} className="w-full max-w-xl">
          <div className="mt-10 flex w-full flex-col items-center gap-7">
            <a
              href="https://app.skope.network/signup"
              className="inline-flex h-14 items-center rounded-full bg-primary px-9 text-base font-semibold text-white transition-colors hover:bg-primary-active"
            >
              Start free
            </a>
            <InstallSnippet />
            <p className="text-[13px] text-muted">No card required. No sales call. Ever.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
