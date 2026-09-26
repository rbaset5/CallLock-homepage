import { Section, SectionHead } from "./primitives";

const faqs = [
  {
    q: "Is this an answering service?",
    a: "It does the same job: it picks up when you can't, takes down the details, and passes them to you. But it's an AI voice agent, not a room of operators reading a script. It asks the questions your business needs answered, and you pay for minutes used, not per-call fees.",
  },
  {
    q: "What if I already have a receptionist?",
    a: "Keep them. CallLock picks up when they can't: lunch, after hours, weekends, or when two lines ring at once. You set when it steps in.",
  },
  {
    q: "Will it give callers prices?",
    a: "Only if you want it to, and only as ranges you give us. The final price is always set by you, on site.",
  },
  {
    q: "Will callers know it's not a person?",
    a: "It sounds natural. If someone asks, it tells them the truth: it's your business's AI assistant, and it offers a callback from your team.",
  },
  {
    q: "How fast can I start?",
    a: "About a week. You fill out a short intake form, we build your agent from that and your website, and we run about 100 test calls. Then you test it yourself, and we walk you through turning on call forwarding. We keep watching your calls for the first month or two and fix anything that's off.",
  },
  {
    q: "What if it doesn't work for my business?",
    a: "It's month to month. If it's not catching calls you'd have missed, cancel before your next billing date. Your first month is $1, so if it doesn't work out, you're out a dollar.",
  },
];

export function Faq() {
  return (
    <Section id="faq" marker="FAQ" tone="sunk">
      <SectionHead title="FAQ" />

      <div className="mt-12 border-t border-rule-strong">
        {faqs.map((faq) => (
          <article key={faq.q} className="border-b border-rule py-7">
            <h3 className="max-w-3xl text-xl font-semibold tracking-tight text-balance sm:text-2xl">
              {faq.q}
            </h3>
            <p className="mt-3 max-w-3xl text-lg text-ink-soft">{faq.a}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
