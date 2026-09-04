import { HERO_LINES, PRODUCT_LINE } from '@/lib/content'

export function IncidentClock() {
  return (
    <section
      id="incident"
      aria-labelledby="hero-heading"
      className="border-t border-rule"
    >
      <header className="flex items-stretch border-b border-paper-rule bg-paper-raised">
        <span
          aria-hidden="true"
          className="flex w-10 shrink-0 items-center justify-center border-r border-rule font-mono text-base font-semibold md:w-12 md:text-lg"
        >
          A
        </span>
        <p className="flex items-center px-3 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] md:px-4 md:text-xs">
          Incident clock
        </p>
      </header>
      <div className="px-3 py-8 md:px-6 md:py-12">
        <h1 id="hero-heading" className="sr-only">
          {HERO_LINES.join(' ')}
        </h1>
        <p className="font-display text-[clamp(2.4rem,8vw,5.6rem)] leading-[0.92] font-extrabold tracking-tight text-ink">
          {HERO_LINES[0]}
        </p>
        <p className="mt-3 font-display text-[clamp(2.4rem,8vw,5.6rem)] leading-[0.92] font-extrabold tracking-tight text-ink">
          {HERO_LINES[1]}
        </p>
        <p className="mt-3 font-display text-[clamp(2.4rem,8vw,5.6rem)] leading-[0.92] font-extrabold tracking-tight text-ink">
          {HERO_LINES[2]}
        </p>
        <p className="mt-8 max-w-[54ch] text-base leading-relaxed text-ink-mute md:text-lg">
          {PRODUCT_LINE}
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-lost">
          Seven minutes. The job is already moving.
        </p>
      </div>
    </section>
  )
}
