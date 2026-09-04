import { FormSection } from '@/components/form/FormSection'
import { GOOGLE_VOICE_PENDING_LABEL } from '@/lib/content'

export function ContactLine() {
  return (
    <FormSection letter="G" title="Contact line" id="contact">
      <p className="max-w-[58ch] text-base leading-relaxed text-ink">
        Call Rashid. The Google Voice number is not assigned. This field stays
        unfilled. Nothing on this page dials.
      </p>
      <div className="mt-6 max-w-xl border border-rule bg-paper-raised">
        <div className="grid grid-cols-[8rem_1fr] border-b border-paper-rule font-mono text-[10px] uppercase tracking-[0.16em]">
          <p className="border-r border-paper-rule px-3 py-2 text-ink-mute">
            Field
          </p>
          <p className="px-3 py-2 text-ink-mute">Value</p>
        </div>
        <div className="grid grid-cols-[8rem_1fr] items-center border-b border-paper-rule">
          <p className="border-r border-paper-rule px-3 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
            Google Voice
          </p>
          <p className="flex min-h-12 items-center justify-between gap-3 px-3 py-3">
            <span className="block h-px flex-1 bg-rule" aria-hidden="true" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-lost">
              Unfilled
            </span>
          </p>
        </div>
        <div className="grid grid-cols-[8rem_1fr] items-center">
          <p className="border-r border-paper-rule px-3 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
            Status
          </p>
          <p className="px-3 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-lost">
            {GOOGLE_VOICE_PENDING_LABEL}
          </p>
        </div>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
        Pending. Does not dial. No shop contact on this form.
      </p>
    </FormSection>
  )
}
