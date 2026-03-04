import Link from "next/link";

const columns = [
  {
    label: "GridEnergy",
    links: [
      { label: "Home Energy", href: "/energy/home" },
      { label: "Office Energy", href: "/energy/office" },
      { label: "Industry", href: "/energy/industry" },
      { label: "Power Park", href: "/energy/power-park" },
    ],
  },
  {
    label: "GridCharge",
    links: [
      { label: "Home Charging", href: "/charge/home" },
      { label: "Destination", href: "/charge/destination" },
      { label: "Enterprise & Fleet", href: "/charge/enterprise" },
    ],
  },
  {
    label: "GridDrive",
    links: [
      { label: "Two-Wheeler", href: "/drive/two-wheeler" },
      { label: "Three-Wheeler", href: "/drive/three-wheeler" },
      { label: "Four-Wheeler", href: "/drive/four-wheeler" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Open Ecosystem", href: "/open-ecosystem" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-[var(--color-gp-red)]">Grid</span>
              <span className="text-[var(--color-fg)]">Power</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
              The Open Energy Platform
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-[var(--color-gp-red)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-gp-red-hover)]"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.label}>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-fg-subtle)]">
                {col.label}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-fg-subtle)]">
            &copy; {new Date().getFullYear()} DeltaEV Mobility Private Limited. GridPower is a brand of DeltaEV Mobility Pvt Ltd.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]">Terms</Link>
            <Link href="/privacy" className="text-xs text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]">Privacy</Link>
            <Link href="/brand" className="text-xs text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]">Brand</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
