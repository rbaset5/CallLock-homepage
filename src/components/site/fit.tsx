import { Section, SectionHead } from "./primitives";

const forShops = [
  "Insurance-storm roofing owners",
  "Insurance-storm roofing operators",
  "Shops that run on hail and wind calls",
];

const notForShops = [
  "HVAC",
  "Retail roofing sales",
  "Water-loss restoration",
  "General contractors",
];

export function Fit() {
  return (
    <Section id="fit" marker="Section D / The fit" tone="sunk">
      <SectionHead
        kicker="Section D"
        title="Built for hail and wind. Not for everyone."
        lede="Intake only asks good questions when it knows what kind of loss it is listening for. Saying no to the rest is what keeps the packet worth reading."
      />

      <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-16">
        <div>
          <p className="stencil border-b border-ink pb-2.5">Set up for</p>
          <ul className="mt-1">
            {forShops.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-b border-rule py-4 text-lg"
              >
                <span className="size-2 shrink-0 translate-y-[-0.15em] rounded-full bg-core" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="stencil border-b border-rule-strong pb-2.5 text-ink-faint">
            Not set up for
          </p>
          <ul className="mt-1">
            {notForShops.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-b border-rule py-4 text-lg text-ink-faint"
              >
                <span className="w-2 shrink-0 border-b border-rule-strong translate-y-[-0.3em]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
