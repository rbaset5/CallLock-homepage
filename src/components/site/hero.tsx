import { Button } from "@/components/ui/button";

import { CallLog } from "./call-log";
import { NumberPlate, ShingleField } from "./primitives";

const lines = ["Hail stops at 4:12.", "The phone starts at 4:19.", "You are still on a roof."];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <ShingleField />

      <div className="relative mx-auto w-full max-w-320 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24 lg:pb-24">
        <p className="stencil text-ink-faint">
          Storm-roof intake · insurance hail and wind
        </p>

        <h1 className="display mt-7 text-(length:--text-mega)">
          {lines.map((line, index) => (
            <span
              key={line}
              className="plate-in block text-balance"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-14 grid gap-12 border-t border-rule-strong pt-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <div>
            <p className="max-w-xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
              CallLock answers the storm calls you cannot reach, asks the
              homeowner the eight things a claim needs, and sends one evidence
              packet to the inbox you already read.
            </p>

            <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-stretch">
              <NumberPlate />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="stencil h-auto self-start rounded-none border-ink bg-transparent px-5 py-4 text-[0.6875rem] text-ink shadow-none hover:bg-ink hover:text-paper"
              >
                <a href="#packet">See the packet ↓</a>
              </Button>
            </div>
          </div>

          <CallLog />
        </div>
      </div>
    </section>
  );
}
