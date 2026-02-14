import { Home, Building2, Store, Factory, Zap } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Home",
    tagline: "Store your sun.",
    description: "Store solar energy during the day, use it at night. Reduce your bill by up to 80%.",
  },
  {
    icon: Building2,
    title: "Office",
    tagline: "Cut peak demand.",
    description: "Peak shaving and demand management for commercial buildings.",
  },
  {
    icon: Store,
    title: "Commercial",
    tagline: "Energy independence for hospitality.",
    description: "Reliable backup power for restaurants, malls, and hotels that pays for itself.",
  },
  {
    icon: Factory,
    title: "Industrial",
    tagline: "Reliable power. Zero downtime.",
    description: "Container-scale storage for factories and large facilities.",
  },
  {
    icon: Zap,
    title: "Power Park",
    tagline: "Grid-scale storage.",
    description: "Utility-grade energy storage for developers and power companies.",
  },
];

export function GridEnergySolutions() {
  return (
    <section id="solutions" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gp-primary">
            GridEnergy
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-fg md:text-5xl">
            Energy storage, every scale.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="group rounded-lg border border-border-light bg-white p-6 transition-all duration-200 hover:border-gp-primary/30 hover:shadow-md"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-bg-tint">
                  <Icon className="h-5 w-5 text-gp-primary" />
                </div>
                <h3 className="mb-1 text-base font-bold text-fg">
                  {solution.title}
                </h3>
                <p className="mb-3 text-sm font-semibold text-gp-primary">
                  {solution.tagline}
                </p>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
