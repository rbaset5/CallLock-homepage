import { cn } from "@/lib/utils";

const rows = [
  { time: "4:19", caller: "unknown", result: "No answer. Went to the next truck." },
  { time: "4:23", caller: "unknown", result: "No answer. Went to the next truck." },
  { time: "4:31", caller: "unknown", result: "Voicemail. No callback." },
] as const;

export function CallLog() {
  return (
    <figure className="border border-ink bg-paper-raised">
      <figcaption className="stencil flex items-center justify-between gap-4 border-b border-ink bg-ink px-4 py-2.5 text-paper">
        <span>Inbound · one hail afternoon</span>
        <span className="text-paper/50">Sample</span>
      </figcaption>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-rule-strong">
            <th scope="col" className="stencil px-4 py-2 text-ink-faint">
              Time
            </th>
            <th
              scope="col"
              className="stencil hidden px-4 py-2 text-ink-faint sm:table-cell"
            >
              Caller
            </th>
            <th scope="col" className="stencil px-4 py-2 text-ink-faint">
              What happened
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.time}
              className="plate-in border-b border-rule"
              style={{ animationDelay: `${420 + index * 130}ms` }}
            >
              <th
                scope="row"
                className="px-4 py-3 align-top font-mono text-sm font-medium whitespace-nowrap"
              >
                {row.time}
                <span className="text-ink-faint"> pm</span>
              </th>
              <td className="hidden px-4 py-3 align-top font-mono text-sm italic text-ink-faint sm:table-cell">
                {row.caller}
              </td>
              <td className="px-4 py-3 align-top text-sm text-ink-soft">
                <span
                  className="mr-2 inline-block size-2 rounded-full bg-core align-baseline"
                  aria-hidden
                />
                {row.result}
              </td>
            </tr>
          ))}

          <tr
            className="plate-in bg-ink text-paper"
            style={{ animationDelay: `${420 + rows.length * 130}ms` }}
          >
            <th
              scope="row"
              className="px-4 py-4 align-top font-mono text-sm font-medium whitespace-nowrap"
            >
              4:38
              <span className="text-paper/55"> pm</span>
            </th>
            <td className="hidden px-4 py-4 align-top font-mono text-sm italic text-paper/55 sm:table-cell">
              unknown
            </td>
            <td className="px-4 py-4 align-top text-sm">
              <span className="stencil block text-paper">
                CallLock ran intake
              </span>
              <span className="mt-1.5 block font-mono text-sm text-paper/70">
                packet
                <Blank />
                filed to the shop inbox
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="stencil border-t border-ink px-4 py-2.5 text-ink-faint">
        One afternoon, drawn to show the problem. Not call records.
      </p>
    </figure>
  );
}

function Blank({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "mx-1.5 inline-block w-12 border-b border-dashed border-paper/60 align-baseline",
        className,
      )}
      aria-label="number pending"
    />
  );
}
