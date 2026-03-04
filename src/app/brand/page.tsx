import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand | GridPower",
};

export default function BrandPage() {
  return (
    <main className="bg-[var(--color-bg)] pb-32 pt-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">Brand</p>
        <h1 className="text-3xl font-bold text-[var(--color-fg)]">Brand Assets</h1>
        <p className="mt-4 text-base text-[var(--color-fg-muted)]">Logo downloads, color palette, and typography guidelines. Full brand kit coming soon.</p>

        <div className="mt-16">
          <h2 className="mb-6 text-lg font-bold text-[var(--color-fg)]">Primary Colors</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "gp-red", hex: "#FA0016", token: "--color-gp-red" },
              { name: "Dark", hex: "#121113", token: "--color-dark" },
              { name: "Mauve 12", hex: "#211f26", token: "--color-fg" },
              { name: "Mauve 1", hex: "#fdfcfd", token: "--color-bg" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col gap-2 text-sm">
                <div
                  className="h-16 w-32 rounded-lg border border-[var(--color-border)]"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="font-semibold text-[var(--color-fg)]">{c.name}</span>
                <span className="text-[var(--color-fg-muted)]">{c.hex}</span>
                <span className="font-mono text-xs text-[var(--color-fg-subtle)]">{c.token}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-[var(--color-fg)]">Typography</h2>
          <p className="text-sm text-[var(--color-fg-muted)]">Geist Sans (primary) · Geist Mono (code)</p>
        </div>

        <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-8 text-center">
          <p className="text-sm text-[var(--color-fg-muted)]">Full brand kit (logo files, usage guidelines, Figma file) — coming soon.</p>
        </div>
      </div>
    </main>
  );
}
