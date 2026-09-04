type FormSectionProps = {
  letter: string
  title: string
  id: string
  children: React.ReactNode
}

export function FormSection({ letter, title, id, children }: FormSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-rule"
    >
      <header className="flex items-stretch border-b border-paper-rule bg-paper-raised">
        <span
          aria-hidden="true"
          className="flex w-10 shrink-0 items-center justify-center border-r border-rule font-mono text-base font-semibold text-ink md:w-12 md:text-lg"
        >
          {letter}
        </span>
        <h2
          id={`${id}-heading`}
          className="flex items-center px-3 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink md:px-4 md:text-xs"
        >
          {title}
        </h2>
      </header>
      <div className="px-3 py-6 md:px-6 md:py-8">{children}</div>
    </section>
  )
}
