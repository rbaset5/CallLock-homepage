'use client'

import React from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export function Pricing() {
  const plans = [
    {
      name: 'Capture',
      price: '$99',
      period: '/ month',
      description: 'The essential toolkit for turning missed calls into qualified leads.',
      features: [
        'We set it up for you in 48 hours',
        'Intelligent Text-Back Engagement',
        'Visual Job Scoping (Photo Uploads)',
        'Automated Lead Sheets',
        'Weekly Performance Report (Email)'
      ],
      cta: 'Start Your Free Pilot',
      popular: false
    },
    {
      name: 'Convert',
      price: '$149',
      period: '/ month',
      description: 'Everything in Capture, plus automated booking and a 24/7 analytics dashboard.',
      features: [
        'We set it up for you in 48 hours',
        'Priority Booking Engine',
        'Google & Outlook Calendar Sync',
        'CRM & FSM Integration (Jobber, etc.)',
        '24/7 Revenue Recovery Dashboard',
        'Advanced Funnel Analytics'
      ],
      cta: 'Start Your Free Pilot',
      popular: true
    }
  ]

  return (
    <Section id="pricing" className="bg-white">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-trust mb-6">
          Pricing
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          All plans include our Concierge Setup at no extra cost. We handle the technical 
          work so you can focus on your business.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`text-center h-full relative ${
                  plan.popular 
                    ? 'border-2 border-action shadow-xl scale-105' 
                    : 'border border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-action text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-trust mb-2">{plan.name}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-trust">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <p className="text-gray-600 mb-8 italic">{plan.description}</p>

                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  size="lg" 
                  className="w-full mb-8"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-action text-lg mt-0.5">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
