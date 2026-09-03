'use client'

import { GOOGLE_VOICE_PENDING_LABEL } from '@/lib/content'
import { formatDialableNumber, toE164 } from '@/lib/phone'
import { cn } from '@/lib/utils'

type PhoneCtaProps = {
  assignedDigits: string | null
  className?: string
  size?: 'sm' | 'lg'
}

const pendingClassName = [
  'inline-flex max-w-full items-center justify-center rounded-md border border-dashed border-stone-400 bg-stone-200/80 px-4 font-semibold text-stone-700',
  'cursor-not-allowed pointer-events-none opacity-80',
  'dark:border-stone-500 dark:bg-stone-800 dark:text-stone-200',
].join(' ')

const liveClassName = [
  'inline-flex max-w-full items-center justify-center rounded-md border border-action bg-action px-4 font-semibold text-white no-underline',
  'hover:bg-action/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust focus-visible:ring-offset-2',
  'active:scale-[0.98]',
].join(' ')

export function PhoneCta({
  assignedDigits,
  className,
  size = 'lg',
}: PhoneCtaProps) {
  const sizeClass =
    size === 'lg'
      ? 'min-h-12 py-3 text-xs sm:text-sm md:text-base'
      : 'min-h-9 py-2 text-xs sm:text-sm'

  if (!assignedDigits) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        title="Google Voice number is not assigned. This control does not dial."
        className={cn(pendingClassName, sizeClass, className)}
      >
        <span className="text-center">{GOOGLE_VOICE_PENDING_LABEL}</span>
      </button>
    )
  }

  return (
    <a
      href={`tel:${toE164(assignedDigits)}`}
      className={cn(liveClassName, sizeClass, className)}
    >
      <span className="text-center">
        {formatDialableNumber(assignedDigits)}
      </span>
    </a>
  )
}
