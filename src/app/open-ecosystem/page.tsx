import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Ecosystem | GridPower",
  description: "Open protocols, full transparency, no vendor lock-in. Our commitment to an open energy platform.",
};

const pillars = [
  {
    title: "Use what you have.",
    desc: "GridPower works with any solar panels, any inverter, any EV. We use OCPP, Modbus, REST APIs, and MQTT -- open protocols that let you integrate with existing infrastructure. You are never locked into our hardware.",
  },
  {
    title: "Know what you're buying.",
    desc: "Full transparency on specs, pricing, and data flows. No proprietary black boxes. Every product ships with published datasheets, open firmware documentation, and clear pricing. You can audit everything.",
  },
  {
    title: "Your data stays yours.",
    desc: "We do not sell your energy data. You control access. Your consumption patterns, your asset data, your customer information -- owned by you. Export anytime, delete anytime, no questions asked.",
  },
];

const protocols = [
  "OCPP 2.0.1",
  "Modbus TCP/RTU",
  "MQTT",
  "REST API",
  "BACnet",
  "CAN bus",
];

export default function OpenEcosystemPage() {
  return (
    <main>
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            Open Ecosystem
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Built different. By design.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            Three principles that set GridPower apart from every other energy company.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-8"
              >
                <h2 className="text-xl font-bold text-[var(--color-fg)]">{p.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-fg-muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-subtle)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-2xl font-bold text-[var(--color-fg)]">
            Protocols we support
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {protocols.map((p) => (
              <span
                key={p}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-sm font-medium text-[var(--color-fg)]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
