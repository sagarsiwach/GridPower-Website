import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "GridCharge — EV Charging | GridPower",
  description: "EV charging for homes, destinations, and enterprise fleets. OCPP-compliant.",
};

const segments = [
  { title: "Home Charging", href: "/charge/home", desc: "Charge at home. Wake up full.", sub: "7.4 kW AC wallbox" },
  { title: "Destination", href: "/charge/destination", desc: "Turn parking into revenue.", sub: "Hotels, malls, offices" },
  { title: "Enterprise & Fleet", href: "/charge/enterprise", desc: "Manage your fleet's energy.", sub: "Depot charging + EMS" },
];

export default function ChargePage() {
  return (
    <main>
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">GridCharge</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Charging infrastructure that pays for itself.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            OCPP-compliant EV charging hardware managed by the GridPower platform. Home to grid-scale.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
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
