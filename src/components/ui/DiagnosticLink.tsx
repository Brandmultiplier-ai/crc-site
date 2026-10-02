"use client";

import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { DIAGNOSTIC_URL, DIAGNOSTIC_UTM } from "@/content/site";

interface DiagnosticLinkProps extends Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "target" | "rel"
> {
  /** Where the click came from, reported as `source` on diagnostic_click. */
  source: string;
}

/** Link to the Diagnostic booking page, carrying UTMs so the booking records the page it came from. */
export function DiagnosticLink({ source, children, ...rest }: DiagnosticLinkProps) {
  const pathname = usePathname();
  const url = new URL(DIAGNOSTIC_URL);
  for (const [key, value] of Object.entries(DIAGNOSTIC_UTM)) url.searchParams.set(key, value);
  url.searchParams.set("utm_content", pathname);

  return (
    <a href={url.toString()} target="_blank" rel="noopener" data-src={source} {...rest}>
      {children}
    </a>
  );
}
