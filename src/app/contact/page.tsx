import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | GridPower",
  description:
    "Get in touch with GridPower. Request a quote for energy storage, EV charging, or powertrain solutions.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gp-primary)]">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl">
              Let&apos;s talk.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-[var(--foreground-muted)]">
              Tell us what you need and we will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <ContactForm />

            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--foreground)]">
                  Office
                </h3>
                <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                  Plot No. S-153, Phase III
                  <br />
                  Verna Industrial Estate
                  <br />
                  Goa - 403722, India
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--foreground)]">
                  Email
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  info@gridpower.co.in
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--foreground)]">
                  Legal Entity
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  DeltaEV Mobility Pvt Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
