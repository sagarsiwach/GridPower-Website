import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GridPower",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[var(--color-bg)] pb-32 pt-32">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-[var(--color-fg)]">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--color-fg-subtle)]">Last updated: March 2026</p>
        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-fg-muted)]">
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">1. Data Controller</h2>
            <p>DeltaEV Mobility Private Limited (&ldquo;GridPower&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is the data controller for information collected through gridpower.co.in.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">2. What We Collect</h2>
            <p>When you submit a contact form or sign up for early access, we collect your email address and any information you voluntarily provide. We do not collect browsing data beyond standard server logs.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">3. How We Use It</h2>
            <p>We use your contact information to respond to your enquiry or send you product updates you requested. We do not sell your data or share it with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">4. Your Rights</h2>
            <p>You may request deletion of your data at any time by emailing privacy@gridpower.co.in. We will delete or anonymise your data within 30 days.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">5. Cookies</h2>
            <p>This website does not use tracking cookies. No third-party analytics scripts are loaded.</p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-bold text-[var(--color-fg)]">6. Contact</h2>
            <p>Privacy questions: privacy@gridpower.co.in</p>
          </section>
        </div>
      </div>
    </main>
  );
}
