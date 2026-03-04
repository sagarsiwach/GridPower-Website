import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand | GridPower",
  description: "GridPower brand guidelines, logos, and assets.",
};

export default function BrandPage() {
  return (
    <main>
      <section className="pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            Brand
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-fg)] md:text-6xl">
            GridPower Brand
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-fg-muted)]">
            Logos, colors, and guidelines for using the GridPower brand.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8">
              <h2 className="mb-4 text-lg font-bold text-[var(--color-fg)]">Wordmark</h2>
              <div className="flex h-32 items-center justify-center rounded-lg bg-[var(--color-bg-subtle)]">
                <span className="text-3xl font-bold tracking-tight">
                  <span className="text-[var(--color-gp-red)]">Grid</span>
                  <span className="text-[var(--color-fg)]">Power</span>
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-dark)] p-8">
              <h2 className="mb-4 text-lg font-bold text-white">Wordmark (Dark)</h2>
              <div className="flex h-32 items-center justify-center rounded-lg bg-[var(--color-dark-2)]">
                <span className="text-3xl font-bold tracking-tight">
                  <span className="text-[var(--color-gp-red)]">Grid</span>
                  <span className="text-white">Power</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-lg font-bold text-[var(--color-fg)]">Brand Colors</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div>
                <div className="mb-2 h-20 rounded-lg bg-[var(--color-gp-red)]" />
                <p className="text-xs font-medium text-[var(--color-fg)]">GridPower Red</p>
                <p className="text-xs text-[var(--color-fg-muted)]">#FA0016</p>
              </div>
              <div>
                <div className="mb-2 h-20 rounded-lg bg-[var(--color-dark)]" />
                <p className="text-xs font-medium text-[var(--color-fg)]">Dark</p>
                <p className="text-xs text-[var(--color-fg-muted)]">Primary dark surface</p>
              </div>
              <div>
                <div className="mb-2 h-20 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]" />
                <p className="text-xs font-medium text-[var(--color-fg)]">Background</p>
                <p className="text-xs text-[var(--color-fg-muted)]">Primary light surface</p>
              </div>
              <div>
                <div className="mb-2 h-20 rounded-lg bg-[var(--color-bg-subtle)]" />
                <p className="text-xs font-medium text-[var(--color-fg)]">Subtle</p>
                <p className="text-xs text-[var(--color-fg-muted)]">Secondary light surface</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[var(--color-fg-muted)]">
              For brand asset downloads and detailed guidelines,{" "}
              <Link href="/contact" className="text-[var(--color-gp-red)] hover:underline">
                contact our team
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
