import { CALL_RASHID } from "@/lib/phone";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#who", label: "Who it's for" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink bg-paper-sunk">
      <div className="mx-auto w-full max-w-320 px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div>
            <p className="display text-4xl sm:text-5xl">CopperDesk</p>
            <p className="mt-4 max-w-md text-lg text-ink-soft">
              Catch the calls you miss and win the job.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {links.map((link) => (
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
          <span>© 2026 CopperDesk</span>
          <span aria-hidden className="text-rule-strong">
            ·
          </span>
          <a
            href={CALL_RASHID.tel}
            className="flex items-center gap-2 transition-colors hover:text-ink"
          >
            {CALL_RASHID.display}
            <span className="size-2 rounded-full bg-core" aria-hidden />
          </a>
        </p>
      </div>
    </footer>
  );
}
