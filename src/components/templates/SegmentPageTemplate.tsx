import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Product {
  name: string;
  spec: string;
}

interface PainPoint {
  pain: string;
  solution: string;
}

interface SegmentPageProps {
  vertical: string;
  headline: string;
  subline: string;
  painPoints: PainPoint[];
  products: Product[];
  howItWorks: string[];
  platformNote?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function SegmentPageTemplate({
  vertical,
  headline,
  subline,
  painPoints,
  products,
  howItWorks,
  platformNote,
  ctaLabel,
  ctaHref,
}: SegmentPageProps) {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            {vertical}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            {subline}
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((item, i) => (
              <div key={i} className="rounded-xl border border-[var(--color-border)] p-6">
                <p className="text-sm text-[var(--color-fg-muted)] line-through">{item.pain}</p>
                <p className="mt-2 text-base font-semibold text-[var(--color-fg)]">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[var(--color-bg-subtle)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-[var(--color-fg)]">Products in this solution</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                <div className="text-base font-bold text-[var(--color-fg)]">{p.name}</div>
                <div className="mt-1 text-sm text-[var(--color-fg-muted)]">{p.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-[var(--color-fg)]">How it works</h2>
          <div className="flex flex-col gap-4 md:flex-row">
            {howItWorks.map((step, i) => (
              <div key={i} className="flex-1 rounded-xl border border-[var(--color-border)] p-6">
                <div className="mb-3 text-3xl font-bold text-[var(--color-gp-red)] opacity-30">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-fg)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform tie-in */}
      {platformNote && (
        <section className="bg-[var(--color-dark)] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-base text-white/60">{platformNote}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[var(--color-bg)] py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-[var(--color-fg)]">{ctaLabel}</h2>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
