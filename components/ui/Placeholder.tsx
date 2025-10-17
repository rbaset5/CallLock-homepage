import React from 'react'
import { cn } from '@/lib/utils'

interface PlaceholderProps {
  aspectRatio: '16:9' | '9:16' | '4:3' | '1:1'
  text: string
  variant?: 'default' | 'phone' | 'desktop' | 'icon'
  className?: string
}

export function Placeholder({ 
  aspectRatio, 
  text, 
  variant = 'default', 
  className 
}: PlaceholderProps) {
  const aspectClasses = {
    '16:9': 'aspect-[16/9]',
    '9:16': 'aspect-[9/16]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square'
  }

  const variantClasses = {
    default: 'bg-gradient-to-br from-bg to-trust/10 border-2 border-border',
    phone: 'bg-gradient-to-br from-bg to-trust/10 border-2 border-border rounded-3xl',
    desktop: 'bg-gradient-to-br from-bg to-trust/10 border-2 border-border rounded-lg',
    icon: 'bg-gradient-to-br from-action/10 to-trust/10 border-2 border-action/20 rounded-full'
  }

  return (
    <div
      className={cn(
        'w-full flex items-center justify-center text-center p-4',
        aspectClasses[aspectRatio],
        variantClasses[variant],
        className
      )}
    >
      <span className="text-trust/70 font-medium text-sm md:text-base">
        {text}
      </span>
    </div>
  )
}




