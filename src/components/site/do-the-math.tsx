import { Section, SectionHead } from "./primitives";

export function DoTheMath() {
  return (
    <Section id="math" marker="Do the math">
      <SectionHead
        title="Do the math"
        lede="Take the calls you miss in a week, multiply by what a job's worth to you, then multiply by four. That's roughly what walks away every month."
      />

      <blockquote className="mt-12 max-w-3xl border border-ink bg-paper-raised px-5 py-6 sm:px-8 sm:py-8">
        <p className="text-xl leading-snug text-ink sm:text-2xl">
          Example: 4 missed calls a week × $500 a job × 4 weeks = $8,000 a
          month you may never have known about.
        </p>
        <p className="mt-4 text-ink-soft">
          (That&apos;s an example. Put in your own numbers.)
        </p>
      </blockquote>
    </Section>
  );
}
