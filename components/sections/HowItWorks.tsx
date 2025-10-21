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
      title: 'Instantly Engage the Lead in 5 seconds!',
      description: 'A missed call triggers a branded text from your number, starting a professional intake process that stops the customer from calling your competitor.'
    }
  ]

  return (
    <Section id="how-it-works" className="bg-white">
      <div className="text-center max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-trust mb-12">
          We Text Your Missed Callers Back In 5 Seconds.<br />
          Then Book Them Into Your Calendar.
        </h2>

        <div className="space-y-16 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-5 gap-8 lg:gap-10 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-4 lg:pl-8' : 'lg:pr-8'}`}>
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
              <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:col-start-1 lg:pr-2' : 'lg:pl-2'}`}>
                <img
                  src="/how-it-works-1.png"
                  alt="SMS conversation showing instant text engagement with ABC Plumbing"
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl lg:max-w-none lg:w-full lg:ml-auto lg:mr-0"
                />
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
