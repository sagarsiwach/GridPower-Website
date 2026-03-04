"use client";

export function SignupForm() {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="mb-1 block text-xs font-medium text-[var(--color-fg)]">
          Full Name
        </label>
        <input
          type="text"
          required
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-gp-red)]"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-[var(--color-fg)]">
          Email
        </label>
        <input
          type="email"
          required
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-gp-red)]"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-[var(--color-fg)]">
          Company (optional)
        </label>
        <input
          type="text"
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-gp-red)]"
        />
      </div>
      <button
        type="submit"
        className="mt-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
      >
        Create Account
      </button>
    </form>
  );
}
