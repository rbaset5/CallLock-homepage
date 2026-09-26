import { Section, SectionHead } from "./primitives";

const plans = [
  { name: "Starter", minutes: "100", price: "$95", rate: "95¢ / min" },
  { name: "Busy", minutes: "300", price: "$270", rate: "90¢ / min" },
  { name: "Crew", minutes: "500", price: "$425", rate: "85¢ / min" },
  { name: "Shop", minutes: "1,000", price: "$800", rate: "80¢ / min" },
];

const bullets = [
  {
    lead: "Month to month.",
    rest: " No long contract. Cancel before your next billing date and that's it.",
  },
  {
    lead: "Go over and nothing shuts off.",
    rest: " Extra minutes are billed at your plan's rate at the end of the month.",
  },
  {
    lead: "Billed on real call time.",
    rest: " A 10-second call is 10 seconds.",
  },
  {
    lead: "Test calls are free.",
    rest: " You only pay for real calls once you're live.",
  },
  {
    lead: "Try it first:",
    rest: " Run it for your first month for $1. If it's not catching jobs, cancel before the renewal and you're out a dollar.",
  },
];

const columns = ["Plan", "Minutes / month", "Price / month", "Works out to"] as const;

export function Pricing() {
  return (
    <Section id="pricing" marker="Pricing" tone="sunk">
      <SectionHead
        title="Pricing"
        lede="You pay for the minutes CopperDesk spends on the phone. Pick the plan that fits how many calls you miss. You can move up or down after you see a month of real calls."
      />

      <div className="mt-12 border border-ink bg-paper-raised">
        <table className="hidden w-full border-collapse text-left sm:table">
          <thead>
            <tr className="stencil border-b border-ink bg-ink text-paper">
              {columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-2.5 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.name} className="border-b border-rule last:border-b-0">
                <th
                  scope="row"
                  className="px-4 py-4 text-left text-lg font-semibold"
                >
                  {plan.name}
                </th>
                <td className="px-4 py-4 font-mono text-base">{plan.minutes}</td>
                <td className="px-4 py-4 font-mono text-base">{plan.price}</td>
                <td className="px-4 py-4 font-mono text-base">{plan.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sm:hidden">
          {plans.map((plan) => (
            <article key={plan.name} className="border-b border-rule px-4 py-5 last:border-b-0">
              <p className="stencil text-ink-faint">Plan</p>
              <h3 className="mt-1 text-xl font-semibold">{plan.name}</h3>
              <dl className="mt-3">
                {(
                  [
                    ["Minutes / month", plan.minutes],
                    ["Price / month", plan.price],
                    ["Works out to", plan.rate],
                  ] as const
                ).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-4 border-t border-rule py-2"
                  >
                    <dt className="stencil text-ink-faint">{label}</dt>
                    <dd className="font-mono text-base">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>

      <ul className="mt-10 max-w-3xl border-t border-rule-strong">
        {bullets.map((bullet) => (
          <li key={bullet.lead} className="border-b border-rule py-4 text-lg">
            <strong className="font-semibold text-ink">{bullet.lead}</strong>
            {bullet.rest}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-3xl text-lg text-ink-soft">
        Not sure which plan? Most shops that only use it for missed and
        after-hours calls start on Starter. We&apos;ll look at your first month
        together and adjust.
      </p>
    </Section>
  );
}
