'use client'
import React from 'react'
import { Section } from '@/components/ui/Section'
import { motion } from 'framer-motion'
import { Features } from '@/components/ui/features-1'

export function DoneForYou() {
  return (
    <Section id="done-for-you" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-trust text-center mb-12 leading-tight"
        >
          Most 'Done-For-You' Services Aren't. Ours Is.
        </motion.h2>

        {/* Body Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[600px] mx-auto text-center space-y-3 mb-16"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Client went live last Thursday.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Onboarding call: 22 minutes.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            First booked job: 6 hours later. While he was under a sink.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            He forwarded a number. We built everything else.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            That's the whole process.
          </p>
        </motion.div>

        {/* Features Component */}
        <Features />
      </div>
    </Section>
  )
}
