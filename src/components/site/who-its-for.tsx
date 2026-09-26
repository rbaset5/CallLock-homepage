import { Section, SectionHead } from "./primitives";

const trades = [
  "Plumbers and drain cleaners",
  "Electricians",
  "HVAC",
  "Roofers and gutter cleaners",
  "Tree services",
  "Water damage and restoration",
  "Junk removal",
  "Locksmiths",
  "Glass repair",
  "Septic",
];

const goodFit = [
  "Run small crews and nobody's free to answer",
  "Get calls after hours or on weekends",
  "Have jobs worth enough that losing one a week hurts",
];

export function WhoItsFor() {
  return (
    <Section id="who" marker="Who it's for" tone="sunk">
      <SectionHead
        title="Who it's for"
        lede="Any trade or service business that loses money when the phone goes to voicemail. For example:"
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <ul className="border-t border-rule-strong">
          {trades.map((trade) => (
            <li
              key={trade}
              className="flex items-baseline gap-3 border-b border-rule py-3.5 text-lg"
            >
              <span
                className="size-2 shrink-0 translate-y-[-0.15em] rounded-full bg-core"
                aria-hidden
              />
              {trade}
            </li>
          ))}
        </ul>

        <div>
          <p className="border-b border-ink pb-2.5 text-lg font-semibold">
            It&apos;s a good fit if you:
          </p>
          <ul>
            {goodFit.map((item) => (
              <li
                key={item}
                className="border-b border-rule py-4 text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-ink-soft">
            It&apos;s probably not for you if the phone hardly rings, or someone
            already answers every call, day and night.
          </p>
        </div>
      </div>
    </Section>
  );
}
