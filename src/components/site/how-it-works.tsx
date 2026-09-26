import { Section, SectionHead } from "./primitives";

const steps = [
  {
    title: "1. A call comes in and you can't answer.",
    body: "You're under a sink, up a tree, or on another call. Your missed calls forward to CopperDesk and it picks up. You keep your own number. Use it for missed calls, after hours, and overflow, or run it 24/7 if you want. It can handle up to 10 calls at once.",
  },
  {
    title: "2. CopperDesk handles the caller.",
    body: "It answers as your business. It asks what the job is, the address, when they want it done, the caller's name, and the best number to reach them. It answers common questions using your business's own info, then tells the caller someone will reach out shortly. For emergencies, it can give the 911 line and ring several of your people at once.",
  },
  {
    title: "3. You get the details and lock in the job.",
    body: "A summary of the call lands in your email right away, with a text alert too if you want one. You call back and confirm the job, so a person always has the final say. If you use a CRM, we can push the details straight into it. Every call is recorded, and you can see call logs, transcripts, and recordings on your dashboard.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" marker="How it works">
      <SectionHead title="How it works" />

      <ol className="mt-12 max-w-3xl border-t border-rule-strong">
        {steps.map((step) => (
          <li key={step.title} className="border-b border-rule py-7">
            <h3 className="display text-(length:--text-h3) leading-[0.95] text-balance">
              {step.title}
            </h3>
            <p className="mt-3 text-lg text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-3xl text-lg text-ink">
        We start with missed calls. Once that&apos;s working, we set CopperDesk
        up to fit how your shop quotes, dispatches, and follows up.
      </p>
    </Section>
  );
}
