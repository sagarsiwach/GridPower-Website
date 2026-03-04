import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Ecosystem | GridPower",
  description: "No vendor lock-in. No black boxes. Your energy data stays yours.",
};

const pillars = [
  {
    title: "Use what you have.",
    desc: "GridPower works with your existing solar panels, your inverter brand, your EV. Open protocols — OCPP, Modbus, MQTT — mean you pick the best hardware for your project. We provide the intelligence layer.",
  },
  {
    title: "Know what you're buying.",
    desc: "Full transparency on specifications, protocols, and data flows. No proprietary firmware you can't audit. Our software stack is documented. Our hardware specs are published. You know exactly what you're getting.",
  },
  {
    title: "Your data stays yours.",
    desc: "We don't sell your energy consumption data. Your generation profiles, usage patterns, and asset performance data is owned by you. You choose who accesses it — including us. You can export everything.",
  },
  {
    title: "Switch if you want.",
    desc: "Don't like us? Export your data and switch. Our hardware works with any OCPP-compliant CSMS. Our storage systems use standard BMS protocols. We earn your loyalty by being better, not by locking you in.",
  },
];

export default function OpenEcosystemPage() {
  return (
    <main>
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">Open Ecosystem</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Built different. By design.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            The energy industry is full of proprietary black boxes. We built GridPower to be the opposite.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-8">
                <h2 className="text-2xl font-bold text-[var(--color-fg)]">{p.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-fg-muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] py-16 text-center">
        <div className="mx-auto max-w-xl px-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-gp-red-hover)]"
          >
            Talk to us about your project
          </Link>
        </div>
      </section>
    </main>
  );
}
