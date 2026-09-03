import { Reveal } from '@/components/ui/Reveal'

export function MissedCallProblem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="bg-stone-100 py-20 dark:bg-stone-900 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="problem-heading"
            className="max-w-[20ch] text-3xl font-semibold tracking-tight text-trust md:text-5xl dark:text-stone-50"
          >
            Missed storm calls do not wait in voicemail.
          </h2>
          <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-stone-600 dark:text-stone-400">
            After hail, the homeowner calls until a shop answers. If you are on
            a roof, that job goes to the next truck. CallLock holds the intake
            so the shop still gets an evidence packet.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
