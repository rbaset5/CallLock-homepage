import { CallRashid, ShingleField } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative scroll-mt-32 overflow-hidden">
      <ShingleField />

      <div className="relative mx-auto w-full max-w-320 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24 lg:pb-28">
        <h1 className="display max-w-6xl text-(length:--text-mega) text-balance">
          You missed the call. Somebody else got the job.
        </h1>

        <div className="mt-10 grid items-end gap-10 border-t border-rule-strong pt-8 lg:mt-14 lg:grid-cols-[minmax(0,42rem)_minmax(0,20rem)] lg:gap-16 lg:pt-10">
          <p className="max-w-2xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            CopperDesk picks up the calls you can&apos;t get to, gets the
            caller&apos;s name, address, and what they need, and sends it to you
            right away so you can lock in the job. It&apos;s for plumbers,
            electricians, tree crews, restoration shops, and anyone whose phone
            rings while they&apos;re working.
          </p>
          <CallRashid note="This number is live and goes straight to Rashid." />
        </div>
      </div>
    </section>
  );
}
