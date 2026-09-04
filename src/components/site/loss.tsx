import { Section, SectionHead } from "./primitives";

const facts = [
  {
    label: "Who calls",
    body: "The homeowner, standing in the driveway, minutes after the ice stops.",
  },
  {
    label: "Who answers",
    body: "The first shop to pick up. Not the closest shop, and not the best one.",
  },
  {
    label: "What voicemail does",
    body: "Nothing. By the time you hear it, the homeowner has dialed two more numbers.",
  },
];

export function Loss() {
  return (
    <Section id="loss" marker="Section A / The loss">
      <SectionHead
        kicker="Section A"
        title="A missed hail call is a job you never knew you lost."
        lede="Storm work arrives in one burst, on the phone, while your crew is tearing off a roof three towns over. Nobody in the shop is free, so the call keeps walking down the list."
      />

      <dl className="mt-14 border-t border-rule-strong">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="grid gap-2 border-b border-rule py-7 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-10"
          >
            <dt className="stencil pt-1.5 text-ink-faint">{fact.label}</dt>
            <dd className="max-w-2xl text-lg text-ink sm:text-xl">{fact.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
