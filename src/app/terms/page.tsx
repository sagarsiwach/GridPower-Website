import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | GridPower",
};

export default function TermsPage() {
  return (
    <main className="bg-[var(--color-bg)] pb-32 pt-32">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-[var(--color-fg)]">Terms of Service</h1>
        <p className="mt-2 text-sm text-[var(--color-fg-subtle)]">Last updated: March 2026</p>
        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-fg-muted)]">
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">1. Company</h2>
            <p>GridPower is a brand of DeltaEV Mobility Private Limited, incorporated in India. Registered office: Goa, India.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">2. Use of this Website</h2>
            <p>This website is provided for informational purposes. Product specifications are subject to change. Contact us for current specifications and availability.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">3. Intellectual Property</h2>
            <p>All content on gridpower.co.in is the property of DeltaEV Mobility Private Limited unless otherwise noted. GridPower, GridEnergy, GridCharge, and GridDrive are trademarks of DeltaEV Mobility Private Limited.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">4. Limitation of Liability</h2>
            <p>DeltaEV Mobility Private Limited is not liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on information published herein.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">5. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Goa, India.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">6. Contact</h2>
            <p>For questions about these terms, email legal@gridpower.co.in or use the contact form on our website.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
