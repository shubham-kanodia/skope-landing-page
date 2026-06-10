import { InstallSnippet } from "@/components/ui/install-snippet";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="border-t border-hairline bg-slate/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-[clamp(28px,4vw,44px)]">Thirty minutes from now, this is handled.</h2>
        </Reveal>
        <Reveal index={1}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href="https://app.skope.network/signup"
              className="rounded-lg bg-lens px-8 py-3.5 text-sm font-medium text-ink transition-shadow hover:shadow-[0_0_24px_rgba(43,217,199,0.35)]"
            >
              Start free
            </a>
            <InstallSnippet />
            <p className="text-xs text-mist">No card required. No sales call. Ever.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
