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
    description:
      "Store solar energy during the day, use it at night. Reduce your electricity bill by up to 80%. Stay powered when the grid goes down.",
  },
  {
    icon: Building2,
    title: "Office Energy",
    description:
      "Peak shaving and demand management for commercial buildings. Lower your demand charges and meet sustainability targets with real data.",
  },
  {
    icon: Store,
    title: "Commercial Energy",
    description:
      "Energy independence for restaurants, malls, and hospitality. Reliable backup power that pays for itself through savings.",
  },
  {
    icon: Factory,
    title: "Industrial Energy",
    description:
      "Uninterrupted power for manufacturing. Container-scale storage for factories and large facilities. Reliable backup and peak shaving.",
  },
  {
    icon: Zap,
    title: "Power Park",
    description:
      "Grid-scale storage and microgrid solutions. Utility-grade energy storage for developers and power companies. Full documentation, serious capacity.",
  },
];

export default function EnergyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-[var(--gp-red)]">
            GridEnergy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
            Energy that works for you,
            <br />
            not against you.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)]">
            From home batteries to grid-scale power parks. Open technology, published specs, no
            lock-in.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)] py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            Ready to take control of your energy?
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
