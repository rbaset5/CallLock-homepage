import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  id,
  marker,
  tone = "paper",
  texture = false,
  className,
  children,
}: {
  id?: string;
  marker: string;
  tone?: "paper" | "sunk" | "ink";
  texture?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    paper: "bg-paper text-ink",
    sunk: "bg-paper-sunk text-ink",
    ink: "bg-ink text-paper",
  } as const;

  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 overflow-hidden border-t",
        tone === "ink" ? "border-ink" : "border-rule-strong",
        tones[tone],
        className,
      )}
    >
      {texture ? <ShingleField tone={tone === "ink" ? "light" : "dark"} /> : null}
      <div className="relative mx-auto grid w-full max-w-320 grid-cols-1 px-5 sm:px-8 lg:grid-cols-[9rem_minmax(0,1fr)] lg:px-10">
        <div className="hidden lg:block">
          <p
            className={cn(
              "stencil sticky top-28 whitespace-nowrap pt-20 [writing-mode:vertical-rl]",
              tone === "ink" ? "text-paper/45" : "text-ink-faint",
            )}
          >
            {marker}
          </p>
        </div>
        <div
          className={cn(
            "py-16 sm:py-20 lg:border-l lg:py-28 lg:pl-12",
            tone === "ink" ? "lg:border-paper/20" : "lg:border-rule",
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  kicker,
  title,
  lede,
  tone = "paper",
}: {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "paper" | "ink";
}) {
  return (
    <header className="max-w-4xl">
      <p
        className={cn(
          "stencil",
          tone === "ink" ? "text-paper/60" : "text-ink-faint",
        )}
      >
        {kicker}
      </p>
      <h2 className="display mt-5 text-(length:--text-h2) text-balance">
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg sm:text-xl",
            tone === "ink" ? "text-paper/75" : "text-ink-soft",
          )}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}

/*
  The one thing this preview cannot give you yet, drawn in the same unfilled-field
  language as the packet's empty values.
*/
export function NumberPlate({
  tone = "paper",
  className,
}: {
  tone?: "paper" | "ink";
  className?: string;
}) {
  return (
    <div
      role="note"
      aria-label="Phone number pending"
      className={cn(
        "w-full max-w-sm border bg-paper-raised",
        tone === "ink" ? "border-paper" : "border-ink",
        className,
      )}
    >
      <p className="stencil bg-ink px-3 py-2 text-paper">Call Rashid</p>
      <div className="px-3 pt-3 pb-3.5">
        <p className="border-b-2 border-dashed border-core pb-1.5 font-mono text-base italic text-ink-faint">
          number pending
        </p>
        <p className="stencil mt-2.5 text-ink-faint">
          Google Voice is not assigned. Nothing on this page dials.
        </p>
      </div>
    </div>
  );
}

export function ShingleField({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        tone === "light"
          ? "shingle-field-light opacity-[0.09]"
          : "shingle-field opacity-[0.065]",
        className,
      )}
    />
  );
}

export function CoreMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block size-2 shrink-0 rounded-full bg-core align-middle",
        className,
      )}
    />
  );
}
