"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { PricingTab } from "@/components/ui/pricing-tab"

interface PricingSectionProps {
  title: string
  subtitle: string
  frequencies: string[]
  tiers: PricingTier[]
}

export function PricingSection({
  title,
  subtitle,
  frequencies,
  tiers,
}: PricingSectionProps) {
  const [frequency, setFrequency] = React.useState(frequencies[0])

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-trust mb-6 leading-tight"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 flex justify-center"
      >
        <PricingTab
          frequencies={frequencies}
          frequency={frequency}
          onFrequencyChange={setFrequency}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-x-8"
      >
        {tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            paymentFrequency={frequency}
          />
        ))}
      </motion.div>
    </div>
  )
}