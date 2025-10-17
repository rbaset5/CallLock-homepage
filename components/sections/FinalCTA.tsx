'use client'

import React from 'react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export function FinalCTA() {
  const demoPhone = process.env.NEXT_PUBLIC_DEMO_PHONE || '(###) ###-####'

  return (
    <Section className="bg-trust text-white">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Recover the jobs you're already earning.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Stop letting your best leads go to your competitors' voicemail. 
            See how much revenue you've been leaving on the table.
          </p>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8">Three Clear Paths:</h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="primary" 
                size="lg" 
                className="text-lg px-8 py-4 bg-action hover:bg-action/90"
              >
                Start Your Free 7-Day Pilot
              </Button>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg font-semibold mb-4">
                Call the Instant Demo:
              </p>
              <a 
                href={`tel:${demoPhone.replace(/[^\d]/g, '')}`}
                className="text-2xl md:text-3xl font-bold text-action hover:text-action/80 transition-colors duration-200"
              >
                {demoPhone}
              </a>
            </div>

            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-trust"
              >
                Book a Live Q&A Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
