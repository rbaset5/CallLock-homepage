import {
  IconCamera,
  IconClipboardText,
  IconClock,
  IconHome,
  IconMapPin,
  IconCloudStorm,
  IconArrowRight,
} from '@tabler/icons-react'
import { PACKET_FIELDS } from '@/lib/content'
import { cn } from '@/lib/utils'

const fieldMeta: Record<
  (typeof PACKET_FIELDS)[number],
  { icon: typeof IconClock; value: string; pendingPhoto?: boolean }
> = {
  'Call time': { icon: IconClock, value: 'Empty until the call is logged' },
  Homeowner: { icon: IconHome, value: 'Empty until the caller is named' },
  'Property address': {
    icon: IconMapPin,
    value: 'Empty until the address is confirmed',
  },
  'Loss type': {
    icon: IconCloudStorm,
    value: 'Empty until hail or wind is stated',
  },
  'Claim facts': {
    icon: IconClipboardText,
    value: 'Empty until intake notes land',
  },
  'Street photo': {
    icon: IconCamera,
    value: 'Photo pending',
    pendingPhoto: true,
  },
  'Slope photo': {
    icon: IconCamera,
    value: 'Photo pending',
    pendingPhoto: true,
  },
  'Next action': {
    icon: IconArrowRight,
    value: 'Empty until the shop sets the next step',
  },
}

type EvidencePacketProps = {
  className?: string
}

export function EvidencePacket({ className }: EvidencePacketProps) {
  return (
    <article
      aria-labelledby="packet-visual-title"
      className={cn(
        'rounded-md border border-stone-300 bg-stone-50 text-stone-800 shadow-[0_12px_40px_rgb(28_25_23_/_0.08)]',
        'dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:shadow-[0_12px_40px_rgb(0_0_0_/_0.35)]',
        className
      )}
    >
      <header className="border-b border-stone-300 px-5 py-4 dark:border-stone-700">
        <p
          id="packet-visual-title"
          className="text-sm font-semibold tracking-tight text-trust dark:text-stone-100"
        >
          Storm evidence packet
        </p>
        <p className="mt-1 max-w-[65ch] text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          Sample layout only. Fields stay empty. Photos stay pending. No
          completed job is shown.
        </p>
      </header>
      <dl className="grid gap-0 sm:grid-cols-2">
        {PACKET_FIELDS.map((field) => {
          const meta = fieldMeta[field]
          const Icon = meta.icon
          return (
            <div
              key={field}
              className="border-b border-stone-200 px-5 py-4 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 dark:border-stone-800"
            >
              <dt className="flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400">
                <Icon
                  className="h-4 w-4 shrink-0"
                  stroke={1.5}
                  aria-hidden="true"
                />
                {field}
              </dt>
              <dd className="mt-2">
                {meta.pendingPhoto ? (
                  <div className="flex aspect-[16/10] items-center justify-center rounded-md border border-dashed border-stone-400 bg-stone-200/70 text-center dark:border-stone-600 dark:bg-stone-800">
                    <div>
                      <IconCamera
                        className="mx-auto h-6 w-6 text-stone-500"
                        stroke={1.5}
                        aria-hidden="true"
                      />
                      <p className="mt-2 text-sm font-medium text-stone-600 dark:text-stone-300">
                        {meta.value}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                    {meta.value}
                  </p>
                )}
              </dd>
            </div>
          )
        })}
      </dl>
    </article>
  )
}
