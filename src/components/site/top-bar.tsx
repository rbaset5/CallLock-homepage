import Link from "next/link";

const links = [
  { href: "/#loss", label: "loss" },
  { href: "/#packet", label: "packet" },
  { href: "/#call", label: "call" },
  { href: "/#trial", label: "trial" },
];

export function TopBar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-ink bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-320 items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="display text-2xl tracking-normal text-paper sm:text-[1.75rem]"
          >
            CallLock
          </Link>
          <nav aria-label="Sections">
            <ul className="flex items-center gap-4 sm:gap-7">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="stencil whitespace-nowrap text-paper/70 transition-colors hover:text-paper"
                  >
                    <span className="hidden sm:inline">The </span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="hidden items-center gap-2 border-l border-paper/25 pl-6 md:flex">
                <span className="stencil text-paper/50">Number pending</span>
                <span className="size-2 rounded-full bg-core" aria-hidden />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
