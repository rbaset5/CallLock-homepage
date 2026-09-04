import { FormSection } from '@/components/form/FormSection'
import { ISSUED_TO, NOT_ISSUED_TO } from '@/lib/content'

export function IssuedTo() {
  return (
    <FormSection letter="E" title="Issued to / not issued to" id="issued-to">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            Issued to
          </h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink">
            {ISSUED_TO.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            Not issued to
          </h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-mute">
            {NOT_ISSUED_TO.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </FormSection>
  )
}
