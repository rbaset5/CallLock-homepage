'use client'

import React from 'react'
import { Section } from '@/components/ui/Section'
import { PricingSection } from '@/components/ui/pricing-section'
import { type PricingTier } from '@/components/ui/pricing-card'

export function Pricing() {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: {
        monthly: 299,
        yearly: 199,
      },
      description: "",
      features: [
        "Instant text to missed calls",
        "Capture every lead's info",
        "Get notified immediately",
        "See all missed calls in dashboard",
        "Basic AI conversation",
        "Setup done in 48 hours",
        "Dashboard for tracking Return on Investment",
      ],
      cta: "Book Demo",
    },
    {
      name: "Professional",
      price: {
        monthly: 499,
        yearly: 349,
      },
      description: "",
      features: [
        "Everything in Starter",
        "Jobs booked while you work",
        "Direct to your calendar",
        "No double-booking",
        "Appointment confirmations",
        "Reminder texts to customers",
        "3 response styles",
      ],
      cta: "Book Demo",
    },
    {
      name: "Growth",
      price: {
        monthly: 799,
        yearly: 599,
      },
      description: "",
      features: [
        "Everything in Professional",
        "Get more 5-star reviews",
        "Win back lost customers",
        "Nurture leads automatically",
        "Track ROI & conversions",
        "Support multiple crews",
        "Unlimited customization",
      ],
      cta: "Book Demo",
    },
    {
      name: "Enterprise",
      price: {
        monthly: "Custom",
        yearly: "Custom",
      },
      description: "Scale across your business",
      features: [
        "Everything in Growth",
        "Works with your software",
        "Unlimited locations",
        "Your dedicated success team",
        "Custom workflows",
        "Brand it as your own",
        "Enterprise SLA",
      ],
      cta: "Contact Us",
      highlighted: true,
    },
  ]

  return (
    <Section id="pricing" className="bg-white">
      <PricingSection
        title="Simple Pricing"
        subtitle="Choose the best plan for your needs"
        frequencies={["yearly", "monthly"]}
        tiers={tiers}
      />
    </Section>
  )
}
