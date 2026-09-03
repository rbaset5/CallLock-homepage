import { PhoneCta } from '@/components/ui/PhoneCta'
import { Reveal } from '@/components/ui/Reveal'
import { GOOGLE_VOICE_PENDING_LABEL } from '@/lib/content'

export function CallRashid() {
  return (
    <section
      id="call-rashid"
      aria-labelledby="call-rashid-heading"
      className="bg-stone-50 py-20 dark:bg-stone-950 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="call-rashid-heading"
            className="max-w-[16ch] text-3xl font-semibold tracking-tight text-trust md:text-5xl dark:text-stone-50"
          >
            Call Rashid
          </h2>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-stone-600 dark:text-stone-400">
            This preview is for insurance-storm roofing owners and operators.
            The Google Voice number is not assigned yet, so the control does not
            dial.
          </p>
          <p className="mt-4 font-medium text-stone-800 dark:text-stone-200">
            {GOOGLE_VOICE_PENDING_LABEL}
          </p>
          <div className="mt-6">
            <PhoneCta />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
