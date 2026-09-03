'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { PhoneCta } from '@/components/ui/PhoneCta'
import { zIndex } from '@/lib/z-index'
import { cn } from '@/lib/utils'

const nav = [
  { href: '#problem', label: 'Problem' },
  { href: '#packet', label: 'Packet' },
  { href: '#flow', label: 'Flow' },
  { href: '#trial', label: 'Trial' },
  { href: '#call-rashid', label: 'Call Rashid' },
]

export function Header() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: 1 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />
      <header
        className={cn(
          'sticky top-0 border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm',
          'dark:border-stone-800 dark:bg-stone-950/95',
          isScrolled && 'shadow-[0_8px_24px_rgb(28_25_23_/_0.08)]'
        )}
        style={{ zIndex: zIndex.stickyHeader }}
      >
        <p className="border-b border-stone-200 bg-stone-200/80 px-4 py-1.5 text-center text-xs text-stone-700 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300">
          Private preview. Live calllock.co is unchanged.
        </p>
        <div className="mx-auto flex max-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="rounded-md bg-zinc-950 px-2 py-1">
              <Image
                src="/logo.png"
                alt="CallLock"
                width={160}
                height={48}
                priority
                className="h-8 w-auto"
              />
            </span>
            <span className="hidden text-xs text-stone-500 xl:inline">
              Private preview
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm text-stone-700 hover:text-trust dark:text-stone-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:block">
            <PhoneCta size="sm" />
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                'h-0.5 w-5 bg-stone-700 transition-transform dark:bg-stone-200',
                isMobileMenuOpen && 'translate-y-2 rotate-45'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 bg-stone-700 dark:bg-stone-200',
                isMobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 bg-stone-700 transition-transform dark:bg-stone-200',
                isMobileMenuOpen && '-translate-y-2 -rotate-45'
              )}
            />
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-stone-200 px-4 py-4 lg:hidden dark:border-stone-800"
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-1 text-sm text-stone-800 dark:text-stone-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4">
              <PhoneCta size="sm" className="w-full" />
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}
