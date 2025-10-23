'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface ProcessStep {
  id: number
  icon: string
  title: string
  description: string
  timeBadge: string
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: '📞',
    title: 'Missed Call',
    description: 'Customer calls while you\'re busy on a job',
    timeBadge: '0 sec'
  },
  {
    id: 2,
    icon: '💬',
    title: 'Instant SMS',
    description: 'AI texts back in 5 seconds flat',
    timeBadge: '5 sec'
  },
  {
    id: 3,
    icon: '✅',
    title: 'Qualification',
    description: 'Gathers service needs & availability',
    timeBadge: '30 sec'
  },
  {
    id: 4,
    icon: '📅',
    title: 'Booked',
    description: 'Job appears on your calendar',
    timeBadge: '60 sec'
  }
]

export function CallLockProcessFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const ANIMATION_SPEED = 5000 // Time each step stays active (ms)

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % processSteps.length)
      }, ANIMATION_SPEED)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <div 
      className="p-8 md:p-12 max-w-4xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className="flex flex-col md:flex-row justify-between items-center relative max-w-4xl mx-auto">
        {/* Arrows for desktop */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5">
          {processSteps.slice(0, -1).map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-0.5 bg-gray-300"
              style={{
                left: `${12.5 + index * 25}%`,
                width: 'calc(25% - 50px)',
                top: '0'
              }}
              animate={{
                backgroundColor: currentStep > index ? '#1e3a8a' : '#e5e7eb',
                scaleX: currentStep > index ? 1 : 0.3
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="absolute right-0 top-0 w-0 h-0 border-l-3 border-t-2 border-b-2 border-transparent"
                animate={{
                  borderLeftColor: currentStep > index ? '#1e3a8a' : '#e5e7eb'
                }}
                transition={{ duration: 0.4, delay: 0.2 }}
                style={{
                  borderLeftWidth: '12px',
                  borderTopWidth: '8px',
                  borderBottomWidth: '8px',
                  right: '-12px',
                  top: '-6px'
                }}
              />
            </motion.div>
          ))}
        </div>

        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex-1 text-center relative z-10 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-lg relative"
              animate={{
                scale: currentStep === index ? 1.15 : 1,
                backgroundColor: currentStep === index ? '#1e3a8a' : '#ffffff',
                color: currentStep === index ? '#ffffff' : '#000000',
                boxShadow: currentStep === index 
                  ? '0 8px 30px rgba(30, 58, 138, 0.4)' 
                  : '0 4px 20px rgba(0,0,0,0.08)'
              }}
              transition={{ duration: 0.4 }}
            >
              {step.icon}
              
              {/* Time Badge */}
              <motion.span
                className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: currentStep === index ? 1 : 0,
                  scale: currentStep === index ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
              >
                {step.timeBadge}
              </motion.span>
            </motion.div>

            <motion.h3
              className="text-sm sm:text-base md:text-lg font-semibold mb-2"
              animate={{
                color: currentStep === index ? '#1e3a8a' : '#374151'
              }}
              transition={{ duration: 0.4 }}
            >
              {step.title}
            </motion.h3>

            <motion.p
              className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-40 sm:max-w-48 md:max-w-56 mx-auto"
              animate={{
                opacity: currentStep === index ? 1 : 0.7
              }}
              transition={{ duration: 0.4 }}
            >
              {step.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
