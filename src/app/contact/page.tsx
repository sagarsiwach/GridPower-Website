import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | GridPower",
  description: "Get in touch with GridPower. Request a quote for energy storage, EV charging, or powertrain solutions.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="pb-28 pt-32 md:pb-36 md:pt-40">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-[var(--gp-red)]">
              Contact
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
              Let&apos;s talk.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-[var(--muted-foreground)]">
              Tell us what you need and we will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            {/* Form */}
            <ContactForm />

            {/* Details */}
            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
                  Office
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  Plot No. S-153, Phase III
                  <br />
                  Verna Industrial Estate
                  <br />
                  Goa - 403722, India
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
                  Email
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">info@gridpower.co.in</p>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
                  Legal Entity
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">DeltaEV Mobility Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
