import { Home, Building2, MapPin, Truck } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Home Charging",
    tagline: "Charge at home. Wake up full.",
    description: "Install once, charge forever. Works with any EV, any solar setup.",
  },
  {
    icon: Building2,
    title: "Office Charging",
    tagline: "EV charging as a workplace benefit.",
    description: "Smart managed charging with load balancing. Access control and billing handled.",
  },
  {
    icon: MapPin,
    title: "Destination Charging",
    tagline: "Turn parking into revenue.",
    description: "Hotels, malls, restaurants -- wherever your customers park. Your pricing, your control.",
  },
  {
    icon: Truck,
    title: "Enterprise & Fleet",
    tagline: "Manage your fleet's energy.",
    description: "Depot charging, fleet analytics, cost-per-km tracking. Built for uptime.",
  },
];

export function GridChargeSolutions() {
  return (
    <section className="bg-[var(--background-tint)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gp-primary)]">
            GridCharge
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl">
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
                className="group rounded-lg border border-[var(--border)] bg-white p-6 transition-all duration-200 hover:border-[var(--gp-primary)]/30 hover:shadow-md"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[var(--background-tint)]">
                  <Icon className="h-5 w-5 text-[var(--gp-primary)]" />
                </div>
                <h3 className="mb-1 text-base font-bold text-[var(--foreground)]">
                  {solution.title}
                </h3>
                <p className="mb-3 text-sm font-semibold text-[var(--gp-primary)]">
                  {solution.tagline}
                </p>
                <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
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
