"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

interface ReadTrackerProps {
  kind: "case-study" | "article";
  /** Client name for case studies; empty for articles. */
  client?: string;
}

/** Fires case_study_view on load, then case_study_read or essay_read once 75% of the page is reached. */
export function ReadTracker({ kind, client = "" }: ReadTrackerProps) {
  useEffect(() => {
    if (kind === "case-study") track("case_study_view", { client });

    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const doc = document.documentElement;
      if ((doc.scrollTop + window.innerHeight) / doc.scrollHeight < 0.75) return;
      fired = true;
      const params = { client, title: document.title };
      if (kind === "case-study") track("case_study_read", params);
      else track("essay_read", params);
      window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [kind, client]);

  return null;
}
