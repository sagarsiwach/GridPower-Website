import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Building2, MapPin, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "GridCharge | EV Charging Solutions",
  description:
    "EV charging infrastructure for homes, offices, destinations, and fleets. Smart managed charging with load balancing.",
};

const solutions = [
  {
    icon: Home,
    title: "Home Charging",
    description:
      "Plug in when you arrive. Full by morning. Install once, charge forever. Works with any EV, any solar setup.",
  },
  {
    icon: Building2,
    title: "Office Charging",
    description:
      "Smart managed charging with load balancing. Add charging to your parking lot without the complexity. Access control and billing handled.",
  },
  {
    icon: MapPin,
    title: "Destination Charging",
    description:
      "Hotels, malls, restaurants -- wherever your customers park. Offer charging as a service or amenity. Your pricing, your control.",
  },
  {
    icon: Truck,
    title: "Enterprise & Fleet",
    description:
      "Depot charging for logistics and delivery fleets. High-power DC, scheduling, fleet management integration. Built for uptime.",
  },
];

export default function ChargePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-[var(--gp-red)]">
            GridCharge
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
            Charging infrastructure that
            <br />
            pays for itself.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)]">
            From home chargers to fleet depots. Open protocols, smart management, no vendor lock-in.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)] py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.title}
                  className="rounded-2xl border border-[var(--border)] bg-white p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--muted)]">
                    <Icon className="h-6 w-6 text-[var(--foreground)]" />
                  </div>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                    {solution.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            Ready to electrify your location?
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--gp-red)] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--gp-red-dark)]"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
