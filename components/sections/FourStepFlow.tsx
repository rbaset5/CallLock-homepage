import {
  IconInbox,
  IconMessage2,
  IconPhoto,
  IconPhoneCall,
} from '@tabler/icons-react'
import { Reveal } from '@/components/ui/Reveal'
import { FLOW_STEPS } from '@/lib/content'

const icons = [IconPhoneCall, IconMessage2, IconPhoto, IconInbox]

export function FourStepFlow() {
  return (
    <section
      id="flow"
      aria-labelledby="flow-heading"
      className="bg-stone-100 py-20 dark:bg-stone-900 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="flow-heading"
            className="max-w-[16ch] text-3xl font-semibold tracking-tight text-trust md:text-5xl dark:text-stone-50"
          >
            From the call to the shop inbox.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-0 border-t border-stone-300 dark:border-stone-700 md:grid-cols-4 md:border-t-0 md:border-l">
          {FLOW_STEPS.map((step, index) => {
            const Icon = icons[index]
            return (
              <li
                key={step.title}
                className="border-b border-stone-300 py-8 md:border-b-0 md:border-l md:px-6 md:py-0 dark:border-stone-700"
              >
                <Reveal delay={index * 0.05}>
                  <Icon
                    className="h-6 w-6 text-action"
                    stroke={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-trust dark:text-stone-100">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
