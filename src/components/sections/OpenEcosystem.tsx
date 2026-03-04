const pillars = [
  {
    title: "Use what you have.",
    desc: "GridPower works with any solar panels, any inverter, any EV. Open protocols mean you're never locked into our hardware.",
  },
  {
    title: "Know what you're buying.",
    desc: "Full transparency on specs, pricing, and data flows. No proprietary black boxes. Open architecture means you can audit everything.",
  },
  {
    title: "Your data stays yours.",
    desc: "We don't sell your energy data. You control access. Your consumption patterns, your asset data — owned by you.",
  },
];

export function OpenEcosystem() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            Open Ecosystem
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] md:text-5xl">
            Built different. By design.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-8"
            >
              <h3 className="text-xl font-bold text-[var(--color-fg)]">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
