import { FormSection } from '@/components/form/FormSection'
import { FLOW_STEPS } from '@/lib/content'

export function IntakePath() {
  return (
    <FormSection letter="D" title="Intake path" id="path">
      <ol className="grid gap-0 border border-rule md:grid-cols-4">
        {FLOW_STEPS.map((step, index) => (
          <li
            key={step.title}
            className="border-b border-paper-rule px-4 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-mute">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </FormSection>
  )
}
