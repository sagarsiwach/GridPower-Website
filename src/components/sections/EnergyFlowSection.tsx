const steps = [
  { label: "Generation", sub: "Solar · Wind · Grid", icon: "☀" },
  { label: "Storage", sub: "GridVault · GridTitan", icon: "⚡" },
  { label: "Management", sub: "GridPower Platform", icon: "◈" },
  { label: "Application", sub: "Home · Office · EV · Fleet", icon: "→" },
];

export function EnergyFlowSection() {
  return (
    <section className="bg-[var(--color-dark)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            The Solution
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            The new grid starts here.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            A distributed micro-grid where every home, office, and factory has
            storage — and GridPower&apos;s software manages all of it
            intelligently.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row md:items-stretch md:gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center md:flex-1">
              <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-6 text-center md:mx-2">
                <div className="mb-3 text-3xl">{step.icon}</div>
                <div className="text-base font-bold text-white">{step.label}</div>
                <div className="mt-1 text-xs text-white/40">{step.sub}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden text-white/20 md:block md:text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
