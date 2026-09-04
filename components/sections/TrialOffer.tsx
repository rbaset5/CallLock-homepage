import { Reveal } from '@/components/ui/Reveal'

export function TrialOffer() {
  return (
    <section
      id="trial"
      aria-labelledby="trial-heading"
      className="bg-trust py-20 text-stone-100 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="trial-heading"
            className="text-3xl font-semibold tracking-tight md:text-5xl"
          >
            $0 for 90 days
          </h2>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-stone-200">
            The preview trial is ninety days at no charge. After that, Rashid
            sets the shop price. No public rate card on this page.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
