'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { revealTransition } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export function Section({
  children,
  className,
  id,
  delay = 0,
}: SectionProps) {
  const reduce = useReducedMotion()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn('py-20 lg:py-24 px-4 sm:px-6 lg:px-8', className)}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={
        reduce || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
      }
      transition={{ ...revealTransition, delay }}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  )
}
