'use client'

import React from 'react'
import { Section } from '@/components/ui/Section'
import { Placeholder } from '@/components/ui/Placeholder'
import { motion } from 'framer-motion'

export function ROI() {
  return (
    <Section className="bg-bg">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-trust mb-12">
          The ROI Math (Why This Is a No-Brainer)
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Math Breakdown */}
            <div>
              <p className="text-lg font-semibold text-trust mb-8">
                Let's be conservative:
              </p>

              <div className="space-y-6 text-left">
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-action">•</span>
                  <span className="text-gray-600">
                    You miss <span className="font-bold text-trust">5 calls a week</span> while on jobs or after hours.
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-action">•</span>
                  <span className="text-gray-600">
                    <span className="font-bold text-trust">30%</span> complete the intake form → ~<span className="font-bold text-trust">6 qualified leads</span> a month.
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-action">•</span>
                  <span className="text-gray-600">
                    You close just <span className="font-bold text-trust">2 of those</span> at a <span className="font-bold text-trust">$500</span> average job value.
                  </span>
                </div>
                
                <div className="border-t-2 border-action/20 pt-6 mt-8">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-action">= $1,000/mo</span>
                    <p className="text-xl text-trust font-semibold mt-2">in recovered revenue.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - ROI Infographic */}
            <div className="hidden lg:block">
              <Placeholder
                aspectRatio="1:1"
                text="ROI Infographic Card"
                variant="default"
              />
            </div>
          </div>

          {/* Mobile ROI Infographic */}
          <div className="lg:hidden mt-8">
            <Placeholder
              aspectRatio="1:1"
              text="ROI Infographic Card"
              variant="default"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-action/10 to-trust/10 rounded-xl p-6 border-2 border-action/20"
          >
            <p className="text-xl md:text-2xl font-bold text-trust">
              One saved job a month doesn't just pay for CallLock—it can fund it for the entire year.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}