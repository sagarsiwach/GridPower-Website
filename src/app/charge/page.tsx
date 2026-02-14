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
    tagline: "Charge at home. Wake up full.",
    description:
      "Install once, charge forever. Works with any EV, any solar setup.",
  },
  {
    icon: Building2,
    title: "Office Charging",
    tagline: "EV charging as a workplace benefit.",
    description:
      "Smart managed charging with load balancing. Access control and billing handled.",
  },
  {
    icon: MapPin,
    title: "Destination Charging",
    tagline: "Turn parking into revenue.",
    description:
      "Hotels, malls, restaurants -- wherever your customers park. Your pricing, your control.",
  },
  {
    icon: Truck,
    title: "Enterprise & Fleet",
    tagline: "Manage your fleet's energy.",
    description:
      "Depot charging for logistics and delivery fleets. High-power DC, scheduling, fleet management integration.",
  },
];

export default function ChargePage() {
  return (
    <main>
      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gp-primary">
            GridCharge
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-fg md:text-6xl">
            Charging infrastructure that
            <br />
            pays for itself.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            From home chargers to fleet depots. Open protocols, smart
            management, no vendor lock-in.
          </p>
        </div>
      </section>

      <section className="border-t border-border-light bg-bg-tint py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.title}
                  className="rounded-lg border border-border-light bg-white p-8"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-bg-tint">
                    <Icon className="h-5 w-5 text-gp-primary" />
                  </div>
                  <h2 className="mb-1 text-xl font-bold text-fg">
                    {solution.title}
                  </h2>
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

      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-fg">
            Ready to electrify your location?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gp-cta px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gp-cta-hover cursor-pointer"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
