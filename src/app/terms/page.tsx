import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | GridPower",
  description: "Terms of service for GridPower products and platform.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="pb-24 pt-32 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            Legal
          </p>
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-[var(--color-fg)] md:text-5xl">
            Terms of Service
          </h1>
          <div className="space-y-6 text-sm leading-relaxed text-[var(--color-fg-muted)]">
            <p>
              <strong className="text-[var(--color-fg)]">Effective Date:</strong> March 2026
            </p>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of GridPower products,
              services, and the GridPower platform operated by DeltaEV Mobility Private
              Limited (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;).
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">1. Services</h2>
            <p>
              GridPower provides energy storage systems, EV charging infrastructure,
              powertrain components, and associated software platforms. These Terms apply
              to all interactions with our products and services.
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">2. Account Registration</h2>
            <p>
              Access to the GridPower Console and related services may require account
              creation. You are responsible for maintaining the confidentiality of your
              account credentials.
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">3. Acceptable Use</h2>
            <p>
              You agree to use our services in compliance with applicable laws and
              regulations. Unauthorized access, reverse engineering of proprietary
              components, and misuse of API access are prohibited.
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">4. Warranty &amp; Liability</h2>
            <p>
              Hardware products are covered by manufacturer warranty as specified in
              product documentation. Software services are provided &quot;as is&quot; without
              warranties of any kind to the extent permitted by law.
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">5. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be
              subject to the exclusive jurisdiction of the courts of Goa, India.
            </p>

            <p className="border-t border-[var(--color-border)] pt-6">
              <strong className="text-[var(--color-fg)]">DeltaEV Mobility Private Limited</strong>
              <br />
              Plot No. S-153, Phase III, Verna Industrial Estate, Goa - 403722
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
