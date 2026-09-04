'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { revealTransition } from '@/lib/motion'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  )
}
