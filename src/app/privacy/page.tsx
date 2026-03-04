import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GridPower",
  description: "How GridPower collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="pb-24 pt-32 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            Legal
          </p>
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-[var(--color-fg)] md:text-5xl">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-sm leading-relaxed text-[var(--color-fg-muted)]">
            <p>
              <strong className="text-[var(--color-fg)]">Effective Date:</strong> March 2026
            </p>
            <p>
              DeltaEV Mobility Private Limited (&quot;GridPower&quot;, &quot;we&quot;, &quot;us&quot;) is
              committed to protecting your privacy. This policy explains how we collect,
              use, and safeguard your information.
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">1. Information We Collect</h2>
            <p>
              We collect information you provide directly (name, email, company) and
              data generated through use of our products (energy consumption, charging
              sessions, device telemetry).
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">2. How We Use Your Data</h2>
            <p>
              Your data is used to deliver and improve our services, provide customer
              support, generate usage analytics, and send service-related communications.
              We do not sell your data to third parties.
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">3. Data Storage &amp; Security</h2>
            <p>
              Data is stored on secure servers with encryption at rest and in transit.
              Access is restricted to authorized personnel. We conduct regular security
              assessments.
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">4. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal
              data at any time. Energy and usage data can be exported through the
              GridPower Console or API.
            </p>

            <h2 className="text-lg font-bold text-[var(--color-fg)]">5. Contact</h2>
            <p>
              For privacy-related inquiries, contact us at privacy@gridpower.co.in.
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
