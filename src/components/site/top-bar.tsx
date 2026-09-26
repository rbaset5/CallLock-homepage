import Link from "next/link";

import { CALL_RASHID } from "@/lib/phone";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#who", label: "Who it's for" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-ink text-paper">
      <div className="mx-auto flex w-full max-w-320 flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="display text-2xl tracking-normal text-paper sm:text-[1.75rem]"
        >
          CopperDesk
        </Link>
        <a
          href={CALL_RASHID.tel}
          className="stencil order-2 flex items-center gap-2 text-paper/80 transition-colors hover:text-paper lg:order-3"
        >
          {CALL_RASHID.display}
          <span className="size-2 rounded-full bg-core" aria-hidden />
        </a>
        <nav
          aria-label="Sections"
          className="order-3 w-full lg:order-2 lg:w-auto"
        >
          <ul className="flex items-center gap-x-5 overflow-x-auto lg:gap-x-7">
            {links.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="stencil whitespace-nowrap text-paper/70 transition-colors hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
