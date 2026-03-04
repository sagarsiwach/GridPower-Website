const stats = [
  { value: "280 GW", label: "Solar installed capacity target by 2030" },
  { value: "< 5%", label: "Of generation currently paired with storage" },
  { value: "₹1.2L Cr", label: "Electricity wasted annually due to grid inefficiency" },
  { value: "4–8 hrs", label: "Peak demand mismatch every day" },
];

export function ProblemSection() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
              The Problem
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] md:text-5xl">
              India&apos;s generation is solved.
              <br />
              <span className="text-[var(--color-fg-muted)]">Storage isn&apos;t.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-fg-muted)]">
              Solar and wind capacity is scaling fast. But what happens when the
              sun doesn&apos;t shine? The grid struggles with peak demand,
              intermittent generation, and zero intelligent management. Energy
              is generated, then wasted.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)]">
              The hard part is not generating power. It&apos;s effectively
              storing and utilizing it.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-6"
              >
                <div className="text-3xl font-bold text-[var(--color-fg)]">{stat.value}</div>
                <div className="mt-2 text-sm leading-snug text-[var(--color-fg-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
