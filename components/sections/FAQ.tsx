'use client'

import React from 'react'
import { Section } from '@/components/ui/Section'
import { Accordion } from '@/components/ui/Accordion'

export function FAQ() {
  const faqItems = [
    {
      question: 'What exactly is the "Instant Demo"?',
      answer: 'It\'s a live, interactive experience. Call the demo phone number, and it will simulate a missed call. You\'ll then receive our intelligent text-back on your phone and can go through the intake process—including sending a photo—to see exactly what your customers would experience.'
    },
    {
      question: 'How much work is it to get this set up?',
      answer: 'Almost none. Every subscription includes our Concierge Setup. Our US-based onboarding team will work with you to connect your calendar, customize your message templates, and get your entire system running within 48 hours.'
    },
    {
      question: 'Does this replace my receptionist?',
      answer: 'No. It supports your team by ensuring no contact goes cold and handing them a qualified lead sheet. It\'s the perfect partner for a live person or an answering service.'
    },
    {
      question: 'What about the Weekly Performance Report?',
      answer: 'Every Monday morning, you\'ll receive a simple email summary of the leads you captured, the jobs you won, and the total revenue you recovered that week. No login required to see your ROI.'
    },
    {
      question: 'Will this feel impersonal to my customers?',
      answer: 'Not at all. The messages are conversational and designed to efficiently gather information before handing off to a human. Customers appreciate the fast, professional response. Try the instant demo to see for yourself!'
    }
  ]

  return (
    <Section id="faq" className="bg-bg">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-trust mb-12">
          FAQ (Straight Answers)
        </h2>
        
        <Accordion items={faqItems} />
      </div>
    </Section>
  )
}
