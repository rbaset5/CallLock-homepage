'use client'

import React from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { HeadsetIcon, ChartIcon } from '@/components/ui/Icons'

export function Positioning() {
  return (
    <Section className="bg-bg">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-trust mb-12">
          Where do your missed calls go? You have two choices.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Answering Service Column */}
          <Card className="text-left">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-bg to-trust/10 border-2 border-border rounded-full flex items-center justify-center">
                <HeadsetIcon className="w-6 h-6 text-trust" />
              </div>
              <h3 className="text-2xl font-bold text-trust">
                Choose an Answering Service if…
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 text-xl mt-1">•</span>
                <span className="text-gray-600">Most of your calls are simple FAQs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 text-xl mt-1">•</span>
                <span className="text-gray-600">You just need basic message-taking.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 text-xl mt-1">•</span>
                <span className="text-gray-600">Your main goal is reducing receptionist costs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 text-xl mt-1">•</span>
                <span className="text-gray-600">The calls are low-urgency / low-value.</span>
              </li>
            </ul>
          </Card>

          {/* CallLock Column */}
          <Card className="text-left border-2 border-action/20 bg-gradient-to-br from-action/5 to-transparent">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-action/10 to-trust/10 border-2 border-action/20 rounded-full flex items-center justify-center">
                <ChartIcon className="w-6 h-6 text-action" />
              </div>
              <h3 className="text-2xl font-bold text-trust">
                Choose CallLock if…
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-action text-xl mt-1">✓</span>
                <span className="text-gray-600">A single missed call can cost you $1,000+.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-action text-xl mt-1">✓</span>
                <span className="text-gray-600">You need photos, urgency, & ZIP codes to qualify leads.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-action text-xl mt-1">✓</span>
                <span className="text-gray-600">Your first callback should be a sales call, not an interrogation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-action text-xl mt-1">✓</span>
                <span className="text-gray-600">You want to convert missed opportunities into booked, high-value jobs.</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Unison Strategy */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <p className="text-xl text-gray-600">
            Many shops use both: an answering service for the chatter, 
            CallLock to capture the jobs that pay the bills.
          </p>
        </div>
      </div>
    </Section>
  )
}
