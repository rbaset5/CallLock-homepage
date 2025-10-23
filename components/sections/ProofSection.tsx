'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export function ProofSection() {
  const demoPhone = process.env.NEXT_PUBLIC_DEMO_PHONE || '(###) ###-####'

  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trust mb-6 leading-tight">
            We Text Back in 5 Seconds. They Book. You Show Up.
          </h2>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <img
            src="/PostHero-missed-call.png"
            alt="CallLock customer screenshot showing missed call to AI response to booked job"
            className="w-full max-w-4xl h-auto rounded-lg"
          />
        </motion.div>

        {/* Subtext */}
        <div className="text-center mb-12 mt-16">
          <div className="space-y-2 text-lg md:text-xl text-gray-600">
            <p>No human intervention. No callbacks needed.</p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="text-center">
          <div className="bg-action/10 border-2 border-action/20 rounded-lg p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-trust mb-4">
              Experience this flow yourself. Call our live demo at
            </p>
            <a 
              href={`tel:${demoPhone.replace(/[^\d]/g, '')}`}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-action hover:text-action/80 transition-colors duration-200"
            >
              {demoPhone}
            </a>
          </div>
        </div>

        {/* Send Me a Missed-Call Text Back CTA Button */}
        <div className="text-center mt-8">
          <button
            className="inline-flex items-center justify-center rounded-md text-lg font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-200"
            style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
          >
            Send To My Phone Instead!
          </button>
        </div>
      </div>
    </Section>
  )
}
