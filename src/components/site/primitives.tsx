import type { ReactNode } from "react";

import { CALL_RASHID } from "@/lib/phone";
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
        "relative scroll-mt-32 overflow-hidden border-t",
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
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "paper" | "ink";
}) {
  return (
    <header className="max-w-4xl">
      {kicker ? (
        <p
          className={cn(
            "stencil",
            tone === "ink" ? "text-paper/60" : "text-ink-faint",
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          "display text-(length:--text-h2) text-balance",
          kicker && "mt-5",
        )}
      >
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

export function CallRashid({
  note,
  tone = "paper",
}: {
  note: string;
  tone?: "paper" | "ink";
}) {
  return (
    <div className="w-full max-w-sm">
      <a
        href={CALL_RASHID.tel}
        className={cn(
          "block border bg-paper-raised outline-none transition-colors",
          "focus-visible:ring-2 focus-visible:ring-core focus-visible:ring-offset-2",
          tone === "ink"
            ? "border-paper hover:bg-paper focus-visible:ring-offset-ink"
            : "border-ink hover:bg-paper focus-visible:ring-offset-paper",
        )}
      >
        <p className="stencil bg-ink px-3 py-2 text-paper">Call Rashid</p>
        <div className="px-3 pt-3 pb-3.5">
          <p className="border-b-2 border-ink pb-1.5 font-mono text-base text-ink">
            {CALL_RASHID.display}
          </p>
        </div>
      </a>
      <p
        className={cn(
          "mt-3 text-sm leading-relaxed",
          tone === "ink" ? "text-paper/70" : "text-ink-soft",
        )}
      >
        {note}
      </p>
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
