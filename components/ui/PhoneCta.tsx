'use client'

import { GOOGLE_VOICE_PENDING_LABEL } from '@/lib/content'
import { cn } from '@/lib/utils'

type PhoneCtaProps = {
  className?: string
  size?: 'sm' | 'lg'
}

export function PhoneCta({ className, size = 'lg' }: PhoneCtaProps) {
  return (
    <a
      href="tel:"
      aria-disabled="true"
      tabIndex={-1}
      onClick={(event) => {
        event.preventDefault()
      }}
      title="Google Voice number is not assigned. This control does not dial."
      className={cn(
        'inline-flex max-w-full items-center justify-center rounded-md border border-dashed border-stone-400 bg-stone-200/80 px-4 font-semibold text-stone-700 no-underline',
        'cursor-not-allowed opacity-80',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust focus-visible:ring-offset-2',
        'dark:border-stone-500 dark:bg-stone-800 dark:text-stone-200',
        size === 'lg'
          ? 'min-h-12 py-3 text-xs sm:text-sm md:text-base'
          : 'min-h-9 py-2 text-xs sm:text-sm',
        className
      )}
    >
      <span className="text-center">{GOOGLE_VOICE_PENDING_LABEL}</span>
    </a>
  )
}
