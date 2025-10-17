'use client'

import React from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Placeholder } from '@/components/ui/Placeholder'
import { motion } from 'framer-motion'

export function HowItWorks() {
  const demoPhone = process.env.NEXT_PUBLIC_DEMO_PHONE || '(###) ###-####'

  const steps = [
    {
      number: '1',
      title: 'Instantly Engage the Lead (≤30s)',
      description: 'A missed call triggers a branded text from your number, starting a professional intake process that stops the customer from calling your competitor.'
    },
    {
      number: '2', 
      title: 'Qualify with Proof',
      description: 'Our mobile intake gathers what message-taking can\'t: photos of the problem, service address, and urgency. You get a complete lead sheet, not just a name and number.'
    },
    {
      number: '3',
      title: 'Secure the Opportunity', 
      description: 'For qualified leads, offer a booking window synced to your calendar—or get an instant alert to call them back immediately. The result is a qualified opportunity, ready to close.'
    }
  ]

  return (
    <Section id="how-it-works" className="bg-white">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-trust mb-12">
          How CallLock Recovers Your Revenue
        </h2>

        <div className="space-y-16 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Card className="text-center lg:text-left h-full">
                  <div className="w-16 h-16 bg-action text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0 mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-trust mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>

              {/* Mockup */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {index === 0 && (
                  <Placeholder
                    aspectRatio="9:16"
                    text="Mockup: Initial Text-Back"
                    variant="phone"
                  />
                )}
                {index === 1 && (
                  <Placeholder
                    aspectRatio="9:16"
                    text="Mockup: Photo Upload"
                    variant="phone"
                  />
                )}
                {index === 2 && (
                  <Placeholder
                    aspectRatio="4:3"
                    text="Mockup: Weekly Report Email"
                    variant="desktop"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-action/10 to-trust/10 rounded-2xl p-8 border-2 border-action/20"
        >
          <p className="text-lg md:text-xl text-trust font-semibold">
            Experience this flow yourself. Call our live demo at{' '}
            <a 
              href={`tel:${demoPhone.replace(/[^\d]/g, '')}`}
              className="text-action hover:text-action/80 transition-colors duration-200"
            >
              {demoPhone}
            </a>
            .
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
