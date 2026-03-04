"use client";
import { useState } from "react";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-dark)] px-6">
      <div className="w-full max-w-md text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">Early Access</p>
        <h1 className="text-3xl font-bold text-white md:text-4xl">Get early access to GridOS.</h1>
        <p className="mt-4 text-base text-white/50">
          GridOS is the open-source energy operating system powering GridPower hardware.
          Join the waitlist for developer preview access.
        </p>
        {submitted ? (
          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-8">
            <p className="text-base font-semibold text-white">You&apos;re on the list.</p>
            <p className="mt-1 text-sm text-white/50">We&apos;ll email you when developer preview opens.</p>
          </div>
        ) : (
          <form className="mt-10 flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[var(--color-gp-red)]"
            />
            <button
              type="submit"
              className="rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
