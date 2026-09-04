import { Section, SectionHead } from "./primitives";

const steps = [
  {
    label: "The call is answered",
    body: "A voice agent picks up when nobody in the shop can. It says it is the shop and starts intake.",
  },
  {
    label: "Claim facts are asked for",
    body: "Date of loss, the carrier if the homeowner knows it, and what they can already see from the ground.",
  },
  {
    label: "Photos are requested",
    body: "One street shot, one slope shot. Both slots read photo pending until the files arrive.",
  },
  {
    label: "The packet is filed",
    body: "One sheet, in the inbox you already read. There is no dashboard to keep an eye on.",
  },
];

const script = [
  { speaker: "agent", text: "This is the shop. What is the property address?" },
  { speaker: "homeowner", text: "the address is given on the call" },
  { speaker: "agent", text: "Was this hail or wind, and what day did it hit?" },
  { speaker: "homeowner", text: "claim facts are captured here" },
  { speaker: "agent", text: "Send me a street photo and a slope photo when you can." },
] as const;

export function Intake() {
  return (
    <Section id="call" marker="Section C / The call">
      <SectionHead
        kicker="Section C"
        title="From the driveway to your inbox."
        lede="Four steps, in this order, every time. The script below is mechanics only. What the shop gets out of it is the packet."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <ol className="border-t border-rule-strong">
          {steps.map((step, index) => (
            <li
              key={step.label}
              className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-5 border-b border-rule py-7"
            >
              <span className="font-mono text-sm font-semibold tabular-nums text-core">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="display text-(length:--text-h3)">{step.label}</h3>
                <p className="mt-2.5 text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="self-start border border-ink bg-paper-raised">
          <figcaption className="stencil flex items-center justify-between gap-4 border-b border-ink bg-ink px-4 py-2.5 text-paper">
            <span>Intake script</span>
            <span className="text-paper/50">Mechanics only</span>
          </figcaption>

          <div className="divide-y divide-rule">
            {script.map((line, index) => (
              <p key={index} className="px-4 py-4">
                <span className="stencil block text-ink-faint">
                  {line.speaker === "agent" ? "Voice agent" : "Homeowner"}
                </span>
                {line.speaker === "agent" ? (
                  <span className="mt-1.5 block font-mono text-sm text-ink">
                    “{line.text}”
                  </span>
                ) : (
                  <span className="mt-1.5 block font-mono text-sm italic text-ink-faint">
                    [{line.text}]
                  </span>
                )}
              </p>
            ))}
          </div>

          <p className="stencil border-t border-ink px-4 py-2.5 text-ink-faint">
            Scripted sample. Not a live call, not a finished claim.
          </p>
        </figure>
      </div>
    </Section>
  );
}
