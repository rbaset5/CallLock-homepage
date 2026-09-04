import { FormSection } from '@/components/form/FormSection'
import {
  HONESTY_STAMP,
  PACKET_FIELDS,
  PACKET_VALUES,
} from '@/lib/content'

export function EvidencePacket() {
  return (
    <FormSection letter="C" title="Evidence packet" id="packet">
      <div className="relative border border-rule bg-paper-raised">
        <div className="flex items-start justify-between gap-4 border-b border-paper-rule px-4 py-3">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
              Storm evidence packet
            </p>
            <p className="mt-1 max-w-[48ch] text-sm leading-relaxed text-ink-mute">
              Sample layout only. Values stay empty. Photo slots stay pending.
            </p>
          </div>
          <p className="honesty-stamp shrink-0 border-2 border-ink px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-ink">
            {HONESTY_STAMP}
          </p>
        </div>
        <dl className="grid sm:grid-cols-2">
          {PACKET_FIELDS.map((field) => {
            const value = PACKET_VALUES[field]
            const pendingPhoto = value === 'Photo pending'
            return (
              <div
                key={field}
                className="border-b border-paper-rule px-4 py-4 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  {field}
                </dt>
                <dd className="mt-2">
                  {pendingPhoto ? (
                    <div className="flex aspect-[16/10] items-center justify-center border border-dashed border-lost/50 bg-paper">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lost">
                        {value}
                      </p>
                    </div>
                  ) : (
                    <p className="ruled-empty min-h-8 font-mono text-sm text-lost">
                      <span className="sr-only">Empty</span>
                    </p>
                  )}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </FormSection>
  )
}
