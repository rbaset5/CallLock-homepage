import { FormSection } from '@/components/form/FormSection'

export function TrialTerms() {
  return (
    <FormSection letter="F" title="Trial terms" id="trial">
      <p className="font-display text-5xl font-extrabold tracking-tight text-ink md:text-6xl">
        $0 for 90 days
      </p>
      <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-ink-mute">
        Ninety days at no charge. After that, Rashid sets the shop price. No
        public rate card on this page.
      </p>
    </FormSection>
  )
}
