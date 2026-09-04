import { NumberPlate, Section, SectionHead } from "./primitives";

const terms = [
  { label: "Rate", value: "$0" },
  { label: "Term", value: "90 days" },
  { label: "After that", value: "Rashid sets your shop price on a call" },
  { label: "Rate card", value: "not published on this page" },
  { label: "Open to", value: "storm roofing owners and operators" },
];

export function Trial() {
  return (
    <Section id="trial" marker="Section E / The trial" tone="ink" texture>
      <SectionHead
        kicker="Section E"
        title="Ninety days, no charge."
        lede="Run it through one hail event and see what lands in your inbox. Nothing is billed during the preview, and there is no contract to get out of."
        tone="ink"
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-20">
        <dl className="border-t border-paper/25">
          {terms.map((term) => (
            <div
              key={term.label}
              className="flex items-baseline gap-3 border-b border-paper/15 py-4"
            >
              <dt className="stencil shrink-0 text-paper/60">{term.label}</dt>
              <span
                className="min-w-8 flex-1 translate-y-[-0.3em] border-b border-dotted border-paper/45"
                aria-hidden
              />
              <dd className="shrink-0 text-right font-mono text-sm text-paper sm:text-base">
                {term.value}
              </dd>
            </div>
          ))}
        </dl>

        <div>
          <NumberPlate tone="ink" className="max-w-none" />
          <p className="mt-6 text-sm text-paper/65">
            The preview is open to insurance-storm roofing owners and operators.
            The Google Voice number is not assigned yet, so there is nothing here
            to dial. This plate is where it will go.
          </p>
        </div>
      </div>
    </Section>
  );
}
