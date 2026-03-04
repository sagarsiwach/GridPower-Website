import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | GridPower",
  description: "Case studies and installations across energy storage, EV charging, and powertrain.",
};

const projects = [
  {
    title: "Residential Solar + Storage",
    client: "Private Residence, Goa",
    capacity: "10 kWh",
    brand: "GridEnergy",
    summary: "Rooftop solar paired with GridVault Home. 80% bill reduction, full backup during monsoon outages.",
  },
  {
    title: "Hotel Destination Charging",
    client: "Hospitality Partner, Karnataka",
    capacity: "4 x 22 kW AC",
    brand: "GridCharge",
    summary: "Four AC chargers in hotel parking. Revenue-generating charging for guests. OCPP-managed.",
  },
  {
    title: "Industrial Backup Storage",
    client: "Manufacturing Facility, Maharashtra",
    capacity: "500 kWh",
    brand: "GridEnergy",
    summary: "GridTitan I1 providing peak shaving and outage protection for critical production lines.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            Projects
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-fg)] md:text-6xl">
            Built. Installed. Running.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-fg-muted)]">
            Real installations across India. Energy storage, EV charging, and powertrain.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
                  {p.brand}
                </p>
                <h2 className="text-lg font-bold text-[var(--color-fg)]">{p.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                  {p.client} &middot; {p.capacity}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                  {p.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-[var(--color-fg)]">
            Want to see your project here?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
