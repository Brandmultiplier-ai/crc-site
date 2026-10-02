"use client";

import { useEffect } from "react";
import { DIAGNOSTIC_URL } from "@/content/site";
import { track } from "@/lib/analytics";

/**
 * One delegated click listener for every link on every page, so links rendered from content
 * (MDX, data files) are tracked without each one opting in.
 */
export function LinkTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const href = link.href;
      if (href.startsWith(DIAGNOSTIC_URL)) {
        track("diagnostic_click", { source: link.dataset.src ?? "link" });
      } else if (href.includes("brandmultiplier.ai")) {
        track("outbound_to_brandmultiplier", { link_url: href });
      } else if (href.startsWith("mailto:")) {
        track("contact_submit", { method: "mailto" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
