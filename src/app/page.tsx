import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ─── Primitive section templates (swr-site pattern) ───────────────────────────

function Hero() {
  return (
    <section className="space-y-6 px-4 pt-24 pb-16 text-center sm:pt-32">
      <div className="mx-auto w-full max-w-4xl space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-3 py-1 text-xs font-semibold tracking-widest text-[var(--color-fg-subtle)] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gp-red)]" />
          The Open Energy Platform
        </span>
        <h1 className="text-balance text-center text-[40px]! font-semibold leading-[1.1] tracking-tight sm:text-5xl! xl:text-6xl!">
          India generates power.{" "}
          <span className="text-[var(--color-gp-red)]">We make sure</span>{" "}
          it&apos;s never wasted.
        </h1>
        <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-fg-muted)] sm:text-xl">
          Energy storage, EV charging, and powertrain solutions — built on open
          standards. No vendor lock-in. No black boxes.
        </p>
      </div>
      <div className="mx-auto flex w-fit flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/energy"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
        >
          Explore GridEnergy <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-fg)] transition-colors hover:bg-[var(--color-bg-tint)]"
        >
          Talk to Sales
        </Link>
      </div>
    </section>
  );
}

// 1/3 text | 2/3 content — separated by sm:divide-x
function OneTwoSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-12 p-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[var(--color-border)] sm:p-0">
      <div className="flex flex-col gap-2 text-balance sm:p-12">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-balance text-lg text-[var(--color-fg-muted)]">
          {description}
        </p>
      </div>
      <div className="col-span-2 sm:p-12">{children}</div>
    </div>
  );
}

// Centered heading + children
function CenteredSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid items-center gap-10 overflow-hidden px-4 py-8 sm:px-12 sm:py-12">
      <div className="mx-auto grid max-w-3xl gap-4 text-center">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-[40px]">
          {title}
        </h2>
        <p className="text-balance text-lg text-[var(--color-fg-muted)]">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

// 3-col text grid — no cards, just text
function TextGridSection({
  data,
}: {
  data: { id: string; title: string; description: string }[];
}) {
  return (
    <div className="grid gap-8 px-4 py-8 sm:px-12 sm:py-12 md:grid-cols-3">
      {data.map((item) => (
        <div key={item.id}>
          <h3 className="mb-2 text-lg font-semibold tracking-tight">
            {item.title}
          </h3>
          <p className="text-[var(--color-fg-muted)]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

// CTA bar — title left, button right
function CTASection({ title, href, cta }: { title: string; href: string; cta: string }) {
  return (
    <section className="flex flex-col gap-4 px-8 py-10 sm:px-12 md:flex-row md:items-center md:justify-between">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-[40px]">
        {title}
      </h2>
      <Link
        href={href}
        className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const problemStats = [
  { id: "1", title: "280 GW", description: "Solar capacity target by 2030 — generation is scaling fast." },
  { id: "2", title: "< 5%", description: "Of generation currently paired with storage." },
  { id: "3", title: "₹1.2L Cr", description: "Lost annually to grid inefficiency and peak mismatch." },
];

const energySegments = [
  { id: "home", title: "Home Energy", description: "5–21 kWh residential storage. Works with any solar setup.", href: "/energy/home" },
  { id: "office", title: "Office Energy", description: "Cut peak demand charges. ROI typically 3–5 years.", href: "/energy/office" },
  { id: "industry", title: "Industry", description: "Industrial-grade BESS. Backup + demand management.", href: "/energy/industry" },
  { id: "power-park", title: "Power Park", description: "MW-scale containerized storage for developers and utilities.", href: "/energy/power-park" },
];

const openPillars = [
  { id: "1", title: "Use what you have.", description: "Works with any solar panels, any inverter, any EV. Open protocols mean no hardware lock-in." },
  { id: "2", title: "Know what you're buying.", description: "Full transparency on specs and data flows. No proprietary firmware you can't audit." },
  { id: "3", title: "Your data stays yours.", description: "We don't sell your energy data. Export everything. Switch anytime." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Hero />

      {/* swr-site pattern: border-boxed section group with divide-y */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] sm:border-x">

          {/* Section 1: Problem — 1/3 text | 2/3 stats grid */}
          <OneTwoSection
            title="India's generation is solved. Storage isn't."
            description="Solar and wind capacity is scaling fast. But peak demand mismatch, intermittent generation, and zero intelligent management mean energy is generated, then wasted."
          >
            <div className="grid grid-cols-2 gap-px bg-[var(--color-border)]">
              {problemStats.concat([{ id: "4", title: "4–8 hrs", description: "Peak demand mismatch every day across the national grid." }]).map((s) => (
                <div key={s.id} className="bg-[var(--color-bg)] p-6">
                  <div className="text-3xl font-semibold tracking-tight text-[var(--color-fg)]">{s.title}</div>
                  <div className="mt-1 text-sm text-[var(--color-fg-muted)]">{s.description}</div>
                </div>
              ))}
            </div>
          </OneTwoSection>

          {/* Section 2: GridEnergy — centered heading + 4-col segment links */}
          <CenteredSection
            title="Storage for every scale."
            description="From a 5 kWh home battery to a 10 MW power park — one open platform, four segments."
          >
            <div className="grid grid-cols-2 gap-px bg-[var(--color-border)] md:grid-cols-4">
              {energySegments.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  className="group bg-[var(--color-bg)] p-6 transition-colors hover:bg-[var(--color-bg-subtle)]"
                >
                  <div className="text-sm font-semibold tracking-tight text-[var(--color-fg)] group-hover:text-[var(--color-gp-red)]">{s.title}</div>
                  <div className="mt-1 text-xs leading-snug text-[var(--color-fg-muted)]">{s.description}</div>
                </a>
              ))}
            </div>
          </CenteredSection>

          {/* Section 3: GridCharge + GridDrive — 1/3 | 2/3 */}
          <OneTwoSection
            title="Charging infrastructure that pays for itself."
            description="OCPP-compliant EV charging for homes, destinations, and enterprise fleets — managed by the GridPower platform."
          >
            <div className="flex flex-col divide-y divide-[var(--color-border)] border border-[var(--color-border)]">
              {[
                { label: "Home Charging", href: "/charge/home", sub: "7.4 kW AC wallbox. Wake up full." },
                { label: "Destination", href: "/charge/destination", sub: "Turn parking into revenue." },
                { label: "Enterprise & Fleet", href: "/charge/enterprise", sub: "Depot charging + load management." },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between px-5 py-4 transition-colors hover:bg-[var(--color-bg-subtle)]"
                >
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-fg)]">{item.label}</div>
                    <div className="text-xs text-[var(--color-fg-muted)]">{item.sub}</div>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-fg-subtle)] opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </OneTwoSection>

          {/* Section 4: Platform — 1/3 | 2/3 */}
          <OneTwoSection
            title="One platform. Every asset."
            description="Software is the moat. GridPower manages storage, charging, and powertrain from a single pane of glass — open, auditable, API-first."
          >
            <div className="grid gap-px bg-[var(--color-border)] sm:grid-cols-3">
              {[
                { name: "GridCharge App", for: "End users", desc: "Real-time monitoring for EV sessions, battery levels, and savings." },
                { name: "GridPower Console", for: "Operators", desc: "Fleet and asset management. OCPP 2.0.1 CSMS." },
                { name: "Open API", for: "Developers", desc: "Full API access. Connect your SCADA or build your own interface." },
              ].map((p) => (
                <div key={p.name} className="bg-[var(--color-bg)] p-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-fg-subtle)]">{p.for}</div>
                  <div className="mt-1 text-sm font-semibold text-[var(--color-fg)]">{p.name}</div>
                  <div className="mt-2 text-xs leading-relaxed text-[var(--color-fg-muted)]">{p.desc}</div>
                </div>
              ))}
            </div>
          </OneTwoSection>

          {/* Section 5: Open Ecosystem — 3-col text grid */}
          <TextGridSection data={openPillars} />

          {/* Section 6: CTA bar */}
          <CTASection
            title="Tell us about your property."
            href="/contact"
            cta="Request a Quote"
          />

        </div>
      </div>
    </main>
  );
}
