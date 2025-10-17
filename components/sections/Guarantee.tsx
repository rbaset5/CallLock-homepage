'use client'

import React from 'react'
import { Section } from '@/components/ui/Section'

export function Guarantee() {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-trust mb-6">
          We believe in this system so strongly, we guarantee it.
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          We know that trust is earned. Instead of showing you someone else's results, 
          we want to prove it with yours. CallLock is built on a simple, undeniable 
          principle: the fastest response wins. We're so confident that our system 
          will capture otherwise lost revenue that we make this promise:
        </p>

        <div className="bg-gradient-to-r from-action/10 to-trust/10 rounded-2xl p-8 border-2 border-action/20">
          <h3 className="text-2xl md:text-3xl font-bold text-trust mb-4">
            The Guarantee:
          </h3>
          <p className="text-xl md:text-2xl font-semibold text-trust">
            We will recover at least one paying job for you in the first 30 days, 
            or your next month is on us. No fine print.
          </p>
        </div>
      </div>
    </Section>
  )
}
