import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  { title: "GridCharge App", desc: "Real-time monitoring for EV charging sessions, energy storage levels, and savings." },
  { title: "GridPower Console", desc: "Fleet and asset management for operators. OCPP 2.0.1, CSMS-ready." },
  { title: "Open API", desc: "Full API access. Connect your SCADA, your billing system, your own dashboard." },
];

export function PlatformSection() {
  return (
    <section className="bg-[var(--color-dark)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            Platform
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            One platform. Every asset.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Software is the moat. GridPower&apos;s platform manages storage, charging,
            and powertrain from a single pane of glass.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gp-red)] hover:underline"
          >
            Explore the Platform <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
