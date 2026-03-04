import Link from "next/link";
import { ArrowRight } from "lucide-react";

const segments = [
  {
    title: "Home Energy",
    href: "/energy/home",
    desc: "Store your sun. Power your home.",
    detail: "5–21 kWh residential storage. Works with any solar setup.",
  },
  {
    title: "Office Energy",
    href: "/energy/office",
    desc: "Cut peak demand. Cut your bills.",
    detail: "Commercial ESS for offices and retail. ROI in 3–5 years.",
  },
  {
    title: "Industry",
    href: "/energy/industry",
    desc: "Reliable power. Zero downtime.",
    detail: "Industrial-grade storage. Backup + demand management.",
  },
  {
    title: "Power Park",
    href: "/energy/power-park",
    desc: "Grid-scale storage. Your terms.",
    detail: "Containerized MW-scale BESS for developers and utilities.",
  },
];

export function GridEnergySolutions() {
  return (
    <section className="bg-[var(--color-bg-subtle)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            GridEnergy
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] md:text-5xl">
            Storage for every scale.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-fg-muted)]">
            From a 5 kWh home battery to a 10 MW power park — one open platform, four segments.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg) => (
            <Link
              key={seg.href}
              href={seg.href}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-all hover:border-[var(--color-border-strong)] hover:shadow-sm"
            >
              <h3 className="text-base font-bold text-[var(--color-fg)]">{seg.title}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--color-gp-red)]">{seg.desc}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{seg.detail}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[var(--color-fg-subtle)] group-hover:text-[var(--color-fg-muted)]">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
