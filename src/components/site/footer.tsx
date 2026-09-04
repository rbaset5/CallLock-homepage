export function Footer() {
  return (
    <footer className="border-t border-ink bg-paper-sunk">
      <div className="mx-auto w-full max-w-320 px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div>
            <p className="display text-4xl sm:text-5xl">CallLock</p>
            <p className="mt-4 max-w-md text-ink-soft">
              Storm-roof intake and one evidence packet, for insurance-storm
              roofing owners and operators.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {[
              { href: "/#loss", label: "The loss" },
              { href: "/#packet", label: "The packet" },
              { href: "/#call", label: "The call" },
              { href: "/#trial", label: "The trial" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="stencil text-ink-faint transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="stencil mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-rule-strong pt-6 text-ink-faint">
          <span>© 2026 CallLock</span>
          <span aria-hidden className="text-rule-strong">
            /
          </span>
          <span className="flex items-center gap-2">
            Number pending
            <span className="size-2 rounded-full bg-core" aria-hidden />
          </span>
        </p>
      </div>
    </footer>
  );
}
