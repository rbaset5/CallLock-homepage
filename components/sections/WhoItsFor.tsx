import { IconBan, IconCheck } from '@tabler/icons-react'
import { Reveal } from '@/components/ui/Reveal'

const included = [
  'Insurance-storm roofing owners',
  'Insurance-storm roofing operators',
  'Shops that live on hail and wind calls',
]

const excluded = [
  'HVAC',
  'Retail roofing sales',
  'Water-loss restoration',
  'General contractors',
]

export function WhoItsFor() {
  return (
    <section
      id="who"
      aria-labelledby="who-heading"
      className="bg-stone-50 py-20 dark:bg-stone-950 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="who-heading"
            className="max-w-[18ch] text-3xl font-semibold tracking-tight text-trust md:text-5xl dark:text-stone-50"
          >
            Built for storm-roof shops. Not for everyone.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-trust dark:text-stone-100">
              <IconCheck
                className="h-5 w-5 text-action"
                stroke={1.5}
                aria-hidden="true"
              />
              Who it is for
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-trust dark:text-stone-100">
              <IconBan
                className="h-5 w-5 text-stone-500"
                stroke={1.5}
                aria-hidden="true"
              />
              Who it is not for
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              {excluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
