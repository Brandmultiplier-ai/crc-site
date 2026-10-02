"use client";

import { openConsentSettings } from "@/lib/analytics";

/** Footer control that reopens the consent banner. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Cookie settings
    </button>
  );
}
