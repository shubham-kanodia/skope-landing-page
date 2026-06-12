import { Reveal } from "@/components/ui/reveal";

const SIGNUP_URL = "https://app.skope.network/login";

export function Founding() {
  return (
    <section data-section="founding_offer" className="bg-surface-dark">
      <div className="mx-auto max-w-[1200px] px-6 py-24 text-center">
        <Reveal>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-primary-on-dark">
            Launch offer
          </p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="mx-auto mt-5 max-w-[22ch] text-[clamp(32px,4vw,52px)] text-white">
            Sign up by 12 July, get six months free.
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mx-auto mt-6 max-w-[52ch] text-[15px] text-on-dark-soft">
            We&apos;re building Skope with our earliest users. Sign up before 12 July 2026 and
            you&apos;re on the full Growth plan, free for six months. No card. We just want your
            feedback.
          </p>
        </Reveal>
        <Reveal index={3}>
          <a
            href={SIGNUP_URL}
            data-track="cta_click"
            data-track-cta="founding_claim_offer"
            className="mt-10 inline-flex h-14 items-center rounded-full bg-primary px-9 text-base font-semibold text-white transition-colors hover:bg-primary-active"
          >
            Claim six months free
          </a>
        </Reveal>
      </div>
    </section>
  );
}
