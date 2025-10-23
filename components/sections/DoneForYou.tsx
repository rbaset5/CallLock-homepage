'use client'
import React from 'react'
import { Section } from '@/components/ui/Section'
import { motion } from 'framer-motion'
import { Features } from '@/components/ui/features-1'
import { Button } from '@/components/ui/Button'

export function DoneForYou() {
  return (
    <Section id="done-for-you" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-20 lg:pt-24">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-trust text-center mb-12 leading-tight"
        >
          Most 'Done-For-You' Services Aren't.<br />Ours Is.
        </motion.h2>


        {/* Features Component */}
        <Features />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            variant="primary" 
            size="lg" 
            className="text-lg px-8 py-4"
          >
            Book Demo
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
