import { PhoneCta } from '@/components/ui/PhoneCta'
import { assignedGoogleVoiceNumber } from '@/lib/phone'

export function Footer() {
  const assigned = assignedGoogleVoiceNumber()

  return (
    <footer className="border-t border-stone-300 bg-stone-100 text-stone-700 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-lg font-semibold text-trust dark:text-stone-100">
              CallLock
            </p>
            <p className="mt-3 max-w-[65ch] text-sm leading-relaxed">
              Storm-roof intake and an evidence packet for insurance-storm
              roofing owners and operators. This page is a private preview.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-trust dark:text-stone-100">
              Call Rashid
            </p>
            {assigned ? null : (
              <p className="mt-3 text-sm leading-relaxed">
                Google Voice is not assigned. The control below does not dial.
              </p>
            )}
            <div className="mt-4">
              <PhoneCta size="sm" />
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-stone-500">
          © 2026 CallLock. Private preview. Not the live site.
        </p>
      </div>
    </footer>
  )
}
