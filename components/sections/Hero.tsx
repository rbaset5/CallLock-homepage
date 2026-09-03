'use client'

import { CallTranscript } from '@/components/ui/CallTranscript'
import { PhoneCta } from '@/components/ui/PhoneCta'
import { HERO_HEADLINE } from '@/lib/content'
import { revealTransition } from '@/lib/motion'
import { motion, useReducedMotion } from 'framer-motion'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="min-h-[100dvh] bg-stone-50 pt-8 dark:bg-stone-950 lg:pt-10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-20">
        <motion.div
          className="lg:col-span-5"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition}
        >
          <h1
            id="hero-heading"
            className="max-w-[18ch] text-4xl font-semibold tracking-tight text-trust md:text-5xl lg:text-6xl lg:leading-[1.08] dark:text-stone-50"
          >
            {HERO_HEADLINE}
          </h1>
          <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-stone-600 dark:text-stone-400">
            Storm-roof intake that builds an evidence packet while you are
            already on a roof.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <PhoneCta />
            <a
              href="#packet"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-stone-300 bg-white px-4 text-sm font-semibold text-trust transition-transform hover:bg-stone-100 active:scale-[0.98] dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
            >
              See the packet
            </a>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: reduce ? 0 : 0.08 }}
        >
          <CallTranscript />
        </motion.div>
      </div>
    </section>
  )
}
