import { ContactLine } from '@/components/form/ContactLine'
import { EvidencePacket } from '@/components/form/EvidencePacket'
import { FormFooter } from '@/components/form/FormFooter'
import { FormMasthead } from '@/components/form/FormMasthead'
import { IncidentClock } from '@/components/form/IncidentClock'
import { IntakePath } from '@/components/form/IntakePath'
import { IssuedTo } from '@/components/form/IssuedTo'
import { TrialTerms } from '@/components/form/TrialTerms'
import { WhatThisIssues } from '@/components/form/WhatThisIssues'

export function ClaimForm() {
  return (
    <div className="binder-gutter min-h-dvh">
      <div className="relative mx-auto max-w-5xl px-3 py-6 pl-12 md:px-8 md:pl-20 md:py-10">
        <span
          className="hole-punch pointer-events-none absolute top-16 left-3 h-3.5 w-3.5 rounded-full bg-paper md:left-5 md:h-4 md:w-4"
          aria-hidden="true"
        />
        <span
          className="hole-punch pointer-events-none absolute top-[22rem] left-3 h-3.5 w-3.5 rounded-full bg-paper md:left-5 md:h-4 md:w-4"
          aria-hidden="true"
        />
        <span
          className="hole-punch pointer-events-none absolute top-[40rem] left-3 h-3.5 w-3.5 rounded-full bg-paper md:left-5 md:h-4 md:w-4"
          aria-hidden="true"
        />
        <article className="border border-rule bg-paper shadow-[0_18px_40px_rgb(26_35_40_/_0.12)]">
          <FormMasthead />
          <main id="main">
            <IncidentClock />
            <WhatThisIssues />
            <EvidencePacket />
            <IntakePath />
            <IssuedTo />
            <TrialTerms />
            <ContactLine />
          </main>
          <FormFooter />
        </article>
      </div>
    </div>
  )
}
