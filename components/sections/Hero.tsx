'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Placeholder } from '@/components/ui/Placeholder'
import { CallLockProcessFlow } from '@/components/ui/CallLockProcessFlow'

export function Hero() {
  const demoPhone = process.env.NEXT_PUBLIC_DEMO_PHONE || '(###) ###-####'

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg to-white pt-20">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-trust mb-6 leading-none">
              Stop Losing Prospects to Missed Calls
            </h1>

            {/* Sub-headline */}
            <div className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
              <p>Our intelligent text-back system engages 
              every missed call in 30 seconds, captures the job details (with photos), and gives 
              you a chance to win the revenue your competitors are scooping up.</p>
            </div>

            {/* Instant Demo CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-lg font-semibold text-trust mb-4">
                See it live on your own phone right now.
              </p>
              <a 
                href={`tel:${demoPhone.replace(/[^\d]/g, '')}`}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-action hover:text-action/80 transition-colors duration-200"
              >
                Call Our Instant Demo: {demoPhone}
              </a>
            </motion.div>

            {/* Main CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button variant="primary" size="lg" className="text-lg px-8 py-4">
                Start Your Free 7-Day Pilot
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Book a Live Q&A Demo
              </Button>
            </motion.div>

            {/* Value Promise Bar */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto lg:mx-0 mt-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-trust">
                <div className="flex items-center gap-2">
                  <span className="text-action text-xl">✓</span>
                  <span className="font-semibold">Concierge Setup Included</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-border"></div>
                <div className="flex items-center gap-2">
                  <span className="text-action text-xl">✓</span>
                  <span className="font-semibold">Month-to-Month</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-border"></div>
                <div className="flex items-center gap-2">
                  <span className="text-action text-xl">✓</span>
                  <span className="font-semibold">Cancel Anytime</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Process Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <CallLockProcessFlow />
            </div>
          </motion.div>
        </div>

        {/* Mobile Process Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:hidden mt-12"
        >
          <div className="relative">
            <CallLockProcessFlow />
          </div>
        </motion.div>
      </div>
    </section>
  )
}