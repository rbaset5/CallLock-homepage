import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg border border-border p-6',
        hover && 'hover:shadow-xl transition-shadow duration-200',
        className
      )}
    >
      {children}
    </div>
  )
}
