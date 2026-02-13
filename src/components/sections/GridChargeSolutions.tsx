import { ArrowRight, Home, Building2, MapPin, Truck } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Home Charging",
    description: "Plug in when you arrive. Full by morning.",
  },
  {
    icon: Building2,
    title: "Office Charging",
    description: "Smart managed charging with load balancing.",
  },
  {
    icon: MapPin,
    title: "Destination Charging",
    description: "Turn parking into revenue.",
  },
  {
    icon: Truck,
    title: "Enterprise & Fleet",
    description: "Depot charging, fleet analytics, cost-per-km tracking.",
  },
];

export function GridChargeSolutions() {
  return (
    <section className="bg-[var(--muted)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[var(--gp-red)]">
            GridCharge
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Charging infrastructure that
            <br className="hidden md:block" />
            pays for itself.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
