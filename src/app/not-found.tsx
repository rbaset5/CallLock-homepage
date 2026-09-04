import Link from "next/link";

import { Footer } from "@/components/site/footer";
import { ShingleField } from "@/components/site/primitives";
import { TopBar } from "@/components/site/top-bar";
import { Button } from "@/components/ui/button";

const sections = [
  { href: "/#loss", label: "The loss" },
  { href: "/#packet", label: "The packet" },
  { href: "/#call", label: "The call" },
  { href: "/#fit", label: "The fit" },
  { href: "/#trial", label: "The trial" },
];

export default function NotFound() {
  return (
    <>
      <TopBar />
      <main className="relative flex-1 overflow-hidden">
        <ShingleField />

        <div className="relative mx-auto w-full max-w-320 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <p className="stencil text-ink-faint">Form CL-404</p>
          <h1 className="display mt-5 max-w-3xl text-(length:--text-h2) text-balance">
            That page is not part of this preview.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">
            The whole preview lives on one page. Pick a section and carry on.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:gap-16">
            <dl className="border border-ink bg-paper-raised">
              <p className="stencil border-b border-ink bg-ink px-4 py-2.5 text-paper">
                Request log
              </p>
              <div className="border-b border-rule px-4 py-4">
                <dt className="stencil text-ink-faint">Requested page</dt>
                <dd className="mt-2 border-b border-dashed border-rule-strong pb-2 font-mono text-[0.9375rem] leading-6 italic text-ink-faint">
                  no such page in the preview
                </dd>
              </div>
              <div className="px-4 py-4">
                <dt className="stencil text-ink-faint">What is here</dt>
                <dd className="mt-2 border-b border-dashed border-rule-strong pb-2 font-mono text-[0.9375rem] leading-6 text-ink">
                  one page, five sections
                </dd>
              </div>
            </dl>

            <div>
              <ul className="border-t border-rule-strong">
                {sections.map((section) => (
                  <li key={section.href} className="border-b border-rule">
                    <a
                      href={section.href}
                      className="stencil flex items-center justify-between gap-4 py-4 text-ink-faint transition-colors hover:text-ink"
                    >
                      {section.label}
                      <span aria-hidden>&rarr;</span>
                    </a>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="stencil mt-8 h-auto rounded-none border-ink bg-transparent px-5 py-4 text-[0.6875rem] text-ink shadow-none hover:bg-ink hover:text-paper"
              >
                <Link href="/">Back to the start</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
