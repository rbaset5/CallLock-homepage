import Image from 'next/image'

const index = [
  { href: '#incident', label: 'A Incident' },
  { href: '#issues', label: 'B Issues' },
  { href: '#packet', label: 'C Packet' },
  { href: '#path', label: 'D Path' },
  { href: '#issued-to', label: 'E Issued to' },
  { href: '#trial', label: 'F Trial' },
  { href: '#contact', label: 'G Contact' },
] as const

export function FormMasthead() {
  return (
    <header className="border-b border-rule">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-paper-rule bg-paper-raised px-3 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <span className="bg-ink px-2 py-1">
            <Image
              src="/logo.png"
              alt="CallLock"
              width={140}
              height={42}
              priority
              className="h-7 w-auto"
            />
          </span>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
            Field-issued claim form
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute sm:grid-cols-3">
          <div>
            <dt>Form</dt>
            <dd className="text-ink">CL-43711</dd>
          </div>
          <div>
            <dt>Copy</dt>
            <dd className="text-ink">Shop / field</dd>
          </div>
          <div>
            <dt>Class</dt>
            <dd className="text-ink">Storm-roof intake</dd>
          </div>
        </dl>
      </div>
      <nav
        aria-label="Form sections"
        className="flex flex-wrap gap-x-4 gap-y-2 px-3 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute md:px-6"
      >
        {index.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
