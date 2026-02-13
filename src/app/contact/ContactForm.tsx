"use client";

export function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
          Interest Area
        </label>
        <select
          id="interest"
          className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gp-red)]"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option>Home Energy</option>
          <option>Commercial Energy</option>
          <option>EV Charging</option>
          <option>Fleet Solutions</option>
          <option>OEM / Powertrain</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] outline-none transition-colors focus:border-[var(--gp-red)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your requirements..."
          className="w-full resize-none rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] outline-none transition-colors focus:border-[var(--gp-red)]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[var(--gp-red)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--gp-red-dark)]"
      >
        Request a Quote
      </button>
    </form>
  );
}
