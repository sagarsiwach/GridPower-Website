import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "GridEnergy — Energy Storage | GridPower",
  description: "Solar storage for homes, offices, industry, and power parks. Open ecosystem, no lock-in.",
};

const segments = [
  { title: "Home Energy", href: "/energy/home", desc: "Store your sun. Power your home.", sub: "5–21 kWh residential storage" },
  { title: "Office Energy", href: "/energy/office", desc: "Cut peak demand. Cut your bills.", sub: "Commercial ESS, ROI 3–5 years" },
  { title: "Industry", href: "/energy/industry", desc: "Reliable power. Zero downtime.", sub: "Industrial BESS + demand management" },
  { title: "Power Park", href: "/energy/power-park", desc: "Grid-scale storage. Your terms.", sub: "MW-scale containerized BESS" },
];

export default function EnergyPage() {
  return (
    <main>
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">GridEnergy</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Energy that works for you, not against you.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            Solar storage, hybrid inverters, commercial ESS, and grid-scale solutions — all on an open platform.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-6 transition-all hover:border-[var(--color-border-strong)] hover:shadow-sm"
              >
                <h2 className="text-base font-bold text-[var(--color-fg)]">{s.title}</h2>
                <p className="mt-1 text-sm font-medium text-[var(--color-gp-red)]">{s.desc}</p>
                <p className="mt-3 text-sm text-[var(--color-fg-muted)]">{s.sub}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[var(--color-fg-subtle)] group-hover:text-[var(--color-fg-muted)]">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
