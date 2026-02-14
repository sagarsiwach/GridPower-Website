import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Building2, Store, Factory, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "GridEnergy | Energy Storage Solutions",
  description:
    "Energy storage systems from home batteries to grid-scale power parks. Store solar energy, reduce bills, and achieve energy independence.",
};

const solutions = [
  {
    icon: Home,
    title: "Home Energy",
    tagline: "Store your sun.",
    description:
      "Store solar energy during the day, use it at night. Reduce your electricity bill by up to 80%. Stay powered when the grid goes down.",
  },
  {
    icon: Building2,
    title: "Office Energy",
    tagline: "Cut peak demand.",
    description:
      "Peak shaving and demand management for commercial buildings. Lower your demand charges and meet sustainability targets with real data.",
  },
  {
    icon: Store,
    title: "Commercial Energy",
    tagline: "Energy independence for hospitality.",
    description:
      "Reliable backup power for restaurants, malls, and hospitality. Pays for itself through savings.",
  },
  {
    icon: Factory,
    title: "Industrial Energy",
    tagline: "Reliable power. Zero downtime.",
    description:
      "Container-scale storage for factories and large facilities. Reliable backup and peak shaving at industrial scale.",
  },
  {
    icon: Zap,
    title: "Power Park",
    tagline: "Grid-scale storage.",
    description:
      "Utility-grade energy storage for developers and power companies. Full documentation, serious capacity.",
  },
];

export default function EnergyPage() {
  return (
    <main>
      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gp-primary">
            GridEnergy
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-fg md:text-6xl">
            Energy that works for you,
            <br />
            not against you.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            From home batteries to grid-scale power parks. Open technology,
            published specs, no lock-in.
          </p>
        </div>
      </section>

      <section className="border-t border-border-light bg-bg-tint py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            Ready to take control of your energy?
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
