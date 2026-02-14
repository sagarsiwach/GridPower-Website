import Link from "next/link";

const footerLinks = {
  products: [
    { label: "GridEnergy", href: "/energy" },
    { label: "GridCharge", href: "/charge" },
    { label: "GridDrive", href: "/drive" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border-light bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight cursor-pointer">
              <span className="text-gp-red">Grid</span>
              <span className="text-fg">Power</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              India&apos;s open energy infrastructure company. Charging, storage, and
              powertrain -- one open ecosystem.
            </p>
            <p className="mt-4 text-xs text-fg-muted">
              A DeltaEV Mobility company
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-fg">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-fg">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-fg">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border-light pt-8 text-center text-xs text-fg-muted">
          &copy; {new Date().getFullYear()} GridPower. All rights reserved. DeltaEV
          Mobility Pvt Ltd.
        </div>
      </div>
    </footer>
  );
}
