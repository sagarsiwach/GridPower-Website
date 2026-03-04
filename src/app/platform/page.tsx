import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform | GridPower",
  description: "One platform to manage energy storage, EV charging, and powertrain assets.",
};

const products = [
  {
    name: "GridCharge App",
    for: "End users",
    desc: "Real-time monitoring for EV sessions, battery levels, and energy savings. iOS and Android.",
    features: ["Session history", "Smart charge scheduling", "Cost per kWh tracking", "Energy savings dashboard"],
  },
  {
    name: "GridPower Console",
    for: "Operators",
    desc: "Fleet and asset management for charging depot operators and energy system owners. OCPP 2.0.1 CSMS.",
    features: ["Multi-site management", "Remote diagnostics", "Revenue tracking", "API access"],
  },
  {
    name: "GridPower EMS",
    for: "Grid / Industrial",
    desc: "Grid-scale energy management. Full SCADA integration, demand forecasting, asset dispatch.",
    features: ["Modbus / BACnet / MQTT", "Demand forecasting", "Asset dispatch", "Utility-grade telemetry"],
  },
];

export default function PlatformPage() {
  return (
    <main>
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">Platform</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            One platform. Every asset.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            Software is the moat. GridPower manages storage, charging, and powertrain from a single pane of glass — open, auditable, API-first.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((p) => (
              <div key={p.name} className="rounded-xl border border-[var(--color-border)] p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-fg-subtle)]">{p.for}</p>
                <h2 className="mt-2 text-xl font-bold text-[var(--color-fg)]">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{p.desc}</p>
                <ul className="mt-6 flex flex-col gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-fg-muted)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-gp-red)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-2xl font-bold text-white">API-first. No walled gardens.</h2>
          <p className="mt-4 text-base text-white/50">
            Full REST API access to your energy data. Connect your SCADA, your billing system, your analytics — or build your own interface.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
          >
            Request API Access <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
