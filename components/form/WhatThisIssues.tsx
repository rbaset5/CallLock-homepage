import { FormSection } from '@/components/form/FormSection'
import { INTAKE_BODY } from '@/lib/content'

export function WhatThisIssues() {
  return (
    <FormSection letter="B" title="What this form issues" id="issues">
      <p className="max-w-[62ch] text-base leading-relaxed text-ink md:text-lg">
        {INTAKE_BODY}
      </p>
      <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-ink-mute">
        One inbound storm call. One evidence packet. Not an HVAC receptionist.
        Not a calendar. Not a public rate card.
      </p>
    </FormSection>
  )
}
