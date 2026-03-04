import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | GridPower",
  description:
    "GridPower is India's open energy infrastructure company. Learn about our mission, heritage, and team.",
};

const timeline = [
  { year: "2015", event: "Classic Packaging Industry established in Goa" },
  { year: "2019", event: "Kabira Mobility launches electric two-wheelers" },
  { year: "2026", event: "GridPower launches as India's open energy platform" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gp-red)]">
            About GridPower
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-fg)] md:text-6xl">
            India&apos;s open energy
            <br />
            infrastructure company.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-fg-muted)]">
            We believe energy infrastructure should be open, transparent, and
            accessible. Not locked behind proprietary systems and vendor
            contracts.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-tint)] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--color-fg)]">
                Our Story
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                <p>
                  GridPower grew out of Kabira Mobility, an electric two-wheeler
                  company founded in 2019 in Goa, India. Building electric
                  vehicles taught us that the real bottleneck isn&apos;t the
                  vehicle -- it&apos;s the infrastructure.
                </p>
                <p>
                  Charging stations that don&apos;t work. Energy storage
                  that&apos;s locked to one vendor. Software that holds your
                  data hostage. We saw these problems firsthand and decided to
                  build something different.
                </p>
                <p>
                  In 2026, we launched GridPower as an open energy platform. One
                  ecosystem for charging, storage, and powertrain -- built on
                  open protocols, published specs, and full transparency.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--color-fg)]">
                What We Build
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                  <h3 className="mb-1 font-bold text-[var(--color-fg)]">
                    GridEnergy
                  </h3>
                  <p className="text-sm text-[var(--color-fg-muted)]">
                    Energy storage systems from home batteries to grid-scale
                    power parks.
                  </p>
                </div>
                <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                  <h3 className="mb-1 font-bold text-[var(--color-fg)]">
                    GridCharge
                  </h3>
                  <p className="text-sm text-[var(--color-fg-muted)]">
                    EV charging infrastructure for homes, offices, and public
                    networks.
                  </p>
                </div>
                <div className="rounded-lg border border-[var(--color-border)] bg-white p-6">
                  <h3 className="mb-1 font-bold text-[var(--color-fg)]">
                    GridDrive
                  </h3>
                  <p className="text-sm text-[var(--color-fg-muted)]">
                    OEM powertrain kits for two, three, and four-wheeled electric
                    vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-[var(--color-fg)]">
            Timeline
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.year} className="text-center">
                <p className="text-3xl font-extrabold text-[var(--color-gp-red)]">
                  {item.year}
                </p>
                <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-tint)] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-[var(--color-fg)]">
            Our Team
          </h2>
          <p className="mb-12 text-sm text-[var(--color-fg-muted)]">
            A small, focused team building the future of energy infrastructure
            in India.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {["Leadership", "Engineering", "Operations"].map((dept) => (
              <div
                key={dept}
                className="rounded-lg border border-[var(--color-border)] bg-white p-8"
              >
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-[var(--color-bg-tint)]" />
                <p className="text-sm font-bold text-[var(--color-fg)]">
                  {dept}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 text-center md:grid-cols-3">
            <div>
              <p className="text-sm font-bold text-[var(--color-fg)]">
                Headquarters
              </p>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                Goa, India
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-fg)]">
                Legal Entity
              </p>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                DeltaEV Mobility Pvt Ltd
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-fg)]">
                Founded
              </p>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
