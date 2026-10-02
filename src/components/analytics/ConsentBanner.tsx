"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { applyConsent, CONSENT_OPEN_EVENT, readConsent, type ConsentChoice } from "@/lib/analytics";

/**
 * One-line, non-blocking cookie banner. Shown once to visitors without a stored choice (the region is
 * not known client-side), and again whenever "Cookie settings" in the footer is clicked.
 */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Deferred so the banner never renders during hydration, only once the stored choice is known.
    const id = requestAnimationFrame(() => setOpen(readConsent() === null));
    const reopen = () => setOpen(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
    };
  }, []);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    applyConsent(choice);
    setOpen(false);
  };

  const button =
    "min-h-11 rounded-[2px] border px-3 font-mono text-[13px] leading-none font-medium sm:min-h-0 sm:py-[9px]";

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-[720px] flex-wrap items-center justify-between gap-4 border border-line bg-s2 px-4 py-3 text-sm"
    >
      <p className="m-0 text-muted">
        This site uses analytics cookies to understand what gets read.{" "}
        <Link href="/privacy-policy-2/" className="-my-3.5 inline-block py-3.5 text-ink underline">
          Privacy
        </Link>
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => choose("denied")}
          className={`${button} border-line bg-transparent text-ink`}
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className={`${button} border-spark bg-spark text-bg`}
        >
          Allow
        </button>
      </div>
    </div>
  );
}
