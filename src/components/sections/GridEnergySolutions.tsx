import { ArrowRight, Home, Building2, Store, Factory, Zap } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Home Energy",
    description: "Store solar energy. Reduce bills by up to 80%.",
  },
  {
    icon: Building2,
    title: "Office Energy",
    description: "Peak shaving and demand management.",
  },
  {
    icon: Store,
    title: "Commercial Energy",
    description: "Energy independence for restaurants, malls, hospitality.",
  },
  {
    icon: Factory,
    title: "Industrial Energy",
    description: "Uninterrupted power for manufacturing.",
  },
  {
    icon: Zap,
    title: "Power Park",
    description: "Grid-scale storage and microgrid solutions.",
  },
];

export function GridEnergySolutions() {
  return (
    <section id="solutions" className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[var(--gp-red)]">
            GridEnergy
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Energy that works for you,
            <br className="hidden md:block" />
            not against you.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="group rounded-2xl border border-[var(--border)] bg-white p-8 transition-all hover:border-[var(--gp-red)]/20 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--muted)]">
                  <Icon className="h-6 w-6 text-[var(--foreground)]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                  {solution.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {solution.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--gp-red)] opacity-0 transition-opacity group-hover:opacity-100">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
