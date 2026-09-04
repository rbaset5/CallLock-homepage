"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Section, SectionHead } from "./primitives";

type Field =
  | { label: string; placeholder: string; kind: "line" }
  | { label: string; kind: "photo" };

const fields: Field[] = [
  { label: "Call time", placeholder: "empty until the call is logged", kind: "line" },
  { label: "Homeowner", placeholder: "empty until the caller is named", kind: "line" },
  {
    label: "Property address",
    placeholder: "empty until the address is confirmed",
    kind: "line",
  },
  { label: "Loss type", placeholder: "empty until hail or wind is stated", kind: "line" },
  { label: "Claim facts", placeholder: "empty until intake notes land", kind: "line" },
  { label: "Street photo", kind: "photo" },
  { label: "Slope photo", kind: "photo" },
  {
    label: "Next action",
    placeholder: "empty until the shop sets the next step",
    kind: "line",
  },
];

/*
  Intake asks for these in a fixed order, so the sheet fills its labels in that
  order as it comes into view. The values never fill: no call has been logged.
*/
function useSequence(total: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setFilled(total);
          return;
        }

        timer = window.setInterval(() => {
          setFilled((count) => {
            if (count >= total) {
              window.clearInterval(timer);
              return count;
            }
            return count + 1;
          });
        }, 190);
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [total]);

  return { ref, filled };
}

export function Packet() {
  const { ref, filled } = useSequence(fields.length);

  return (
    <Section id="packet" marker="Section B / The packet" tone="sunk">
      <SectionHead
        kicker="Section B"
        title="One packet. Eight fields. Nothing invented."
        lede="Every answered call produces the same sheet, in the order intake asks for it. On this page the values stay blank, because no call has been logged."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,44rem)_minmax(0,1fr)] lg:gap-16">
        <div ref={ref} className="relative">
          <div className="border border-ink bg-paper-raised">
          <p className="stencil flex items-center justify-between gap-4 border-b border-ink bg-ink px-4 py-2.5 text-paper">
            <span>Storm evidence packet</span>
            <span className="text-paper/50">Form CL-01</span>
          </p>

          <dl>
            {fields.map((field, index) => {
              const active = index < filled;
              const filling = index === filled - 1 && filled < fields.length;

              return (
                <div
                  key={field.label}
                  className={cn(
                    "grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-4 border-b border-rule px-4 py-4 transition-colors duration-500 last:border-b-0 sm:grid-cols-[3.5rem_10rem_minmax(0,1fr)] sm:gap-x-6",
                    active ? "bg-transparent" : "bg-paper-sunk/60",
                  )}
                >
                  <p
                    className={cn(
                      "font-mono text-sm font-semibold tabular-nums transition-colors duration-500",
                      active ? "text-core" : "text-rule-strong",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <dt
                    className={cn(
                      "stencil pt-1 transition-colors duration-500",
                      active ? "text-ink" : "text-ink-faint",
                    )}
                  >
                    {field.label}
                  </dt>
                  <dd className="col-span-2 mt-3 sm:col-span-1 sm:mt-0">
                    {field.kind === "line" ? (
                      <p
                        className={cn(
                          "border-b border-dashed pb-2 font-mono text-[0.9375rem] leading-6 italic text-ink-faint transition-colors duration-500",
                          active ? "border-rule-strong" : "border-rule",
                          filling && "caret",
                        )}
                      >
                        {field.placeholder}
                      </p>
                    ) : (
                      <div
                        className={cn(
                          "hatch flex h-16 items-center justify-center border border-dashed transition-colors duration-500 sm:h-20",
                          active ? "border-rule-strong" : "border-rule",
                        )}
                      >
                        <span className="stencil bg-paper-raised px-2 py-1 text-ink-faint">
                          Photo pending
                        </span>
                      </div>
                    )}
                  </dd>
                </div>
              );
            })}
            </dl>
          </div>

          <p
            aria-hidden
            className="display mt-8 inline-block -rotate-6 border-y-2 border-core px-3 py-1 text-xl text-core lg:absolute lg:-bottom-6 lg:left-12 lg:mt-0 lg:text-2xl"
          >
            No completed job shown
          </p>
        </div>

        <aside className="border-t border-ink pt-5 lg:mt-1">
          <p className="stencil text-ink-faint">Why it stays blank</p>
          <p className="mt-4 text-ink-soft">
            Photos hold their slot until the files land, so you can tell at a
            glance whether a packet is ready to hand to a carrier.
          </p>
          <p className="mt-4 text-ink-soft">
            Nothing here is a finished claim. The preview shows you the shape of
            the sheet, not somebody else&rsquo;s job.
          </p>
        </aside>
      </div>
    </Section>
  );
}
