import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | GridPower",
  description:
    "GridPower is India's open energy infrastructure company. Learn about our mission, heritage, and team.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-[var(--gp-red)]">
            About GridPower
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
            India&apos;s open energy
            <br />
            infrastructure company.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)]">
            We believe energy infrastructure should be open, transparent, and accessible. Not locked
            behind proprietary systems and vendor contracts.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)] py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                Our Story
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                <p>
                  GridPower grew out of Kabira Mobility, an electric two-wheeler company founded in
                  2019 in Goa, India. Building electric vehicles taught us that the real bottleneck
                  isn&apos;t the vehicle -- it&apos;s the infrastructure.
                </p>
                <p>
                  Charging stations that don&apos;t work. Energy storage that&apos;s locked to one vendor.
                  Software that holds your data hostage. We saw these problems firsthand and decided
                  to build something different.
                </p>
                <p>
                  In 2026, we launched GridPower as an open energy platform. One ecosystem for
                  charging, storage, and powertrain -- built on open protocols, published specs, and
                  full transparency.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                What We Build
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-[var(--border)] bg-white p-6">
                  <h3 className="mb-1 font-semibold text-[var(--foreground)]">GridEnergy</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Energy storage systems from home batteries to grid-scale power parks.
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-white p-6">
                  <h3 className="mb-1 font-semibold text-[var(--foreground)]">GridCharge</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    EV charging infrastructure for homes, offices, and public networks.
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-white p-6">
                  <h3 className="mb-1 font-semibold text-[var(--foreground)]">GridDrive</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    OEM powertrain kits for two, three, and four-wheeled electric vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            Our Team
          </h2>
          <p className="mb-12 text-sm text-[var(--muted-foreground)]">
            A small, focused team building the future of energy infrastructure in India.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {["Leadership", "Engineering", "Operations"].map((dept) => (
              <div
                key={dept}
                className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-8"
              >
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-[var(--border)]" />
                <p className="text-sm font-medium text-[var(--foreground)]">{dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 text-center md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">Headquarters</p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">Goa, India</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">Legal Entity</p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">DeltaEV Mobility Pvt Ltd</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">Founded</p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">2026</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
