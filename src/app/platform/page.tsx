import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform | GridPower",
  description: "One platform for energy storage, EV charging, and powertrain. Monitor, manage, and optimize from a single console.",
};

const features = [
  {
    title: "GridCharge App",
    desc: "Real-time monitoring for EV charging sessions, energy storage levels, and savings. Available on iOS and Android.",
  },
  {
    title: "GridPower Console",
    desc: "Fleet and asset management for operators. OCPP 2.0.1, CSMS-ready. Multi-site, multi-tenant.",
  },
  {
    title: "Open API",
    desc: "Full REST API access. Connect your SCADA, billing system, fleet management, or build your own dashboard.",
  },
  {
    title: "Alerts & Analytics",
    desc: "Anomaly detection, predictive maintenance, and usage pattern analytics. Exportable reports.",
  },
  {
    title: "User Management",
    desc: "Role-based access, RFID/app-based authentication, and customer billing for public networks.",
  },
  {
    title: "OTA Updates",
    desc: "Remote firmware updates for all connected devices. Staged rollouts, rollback capability.",
  },
];

export default function PlatformPage() {
  return (
    <main>
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            Platform
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            One platform. Every asset.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            Software is the moat. GridPower&apos;s platform manages storage,
            charging, and powertrain from a single pane of glass.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-6"
              >
                <h3 className="text-base font-bold text-[var(--color-fg)]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-subtle)] py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-[var(--color-fg)]">
            See it in action.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
          >
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
