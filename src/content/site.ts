/** Site-wide constants and shared copy. URLs here are hard-coded in redirects, sitemap and JSON-LD: do not change them. */

export const SITE_URL = "https://chrisrubincreativ.com";
export const SITE_NAME = "ChrisRubinCreativ";
export const LEGAL_ENTITY = "ChrisRubinCreativ, Inc.";
export const BM_URL = "https://www.brandmultiplier.ai";
export const LINKEDIN_URL = "https://www.linkedin.com/in/chrisrubin";
export const CONTACT_EMAIL = "info@chrisrubincreativ.com";

/** The BrandMultiplier Diagnostic booking page. UTMs are appended at runtime by <DiagnosticLink>. */
export const DIAGNOSTIC_URL =
  "https://calendly.com/book-crc/the-diagnostic-20-min-with-chris";
export const DIAGNOSTIC_UTM = {
  utm_source: "crc",
  utm_medium: "site",
  utm_campaign: "diagnostic",
} as const;

export const NAV = [
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
  { label: "Writing", href: "/writing/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const FOOTER_LEGAL = "BrandMultiplier is a DBA of ChrisRubinCreativ, Inc. · Aspen, Colorado";

export const HERO = {
  headline: "I get the story out of one head and ",
  highlight: "into many.",
  body:
    "From the first Hard Rock Cafe website to Accenture's pitch rooms to the Narrative Operating System, " +
    "the job hasn't changed: find what a company actually believes, then build it into everything the company says. " +
    "CRC is the house. BrandMultiplier is the current practice.",
};

export const TERMINAL_NOTE =
  "One of the first things I ever wrote was a text adventure on a TRS-80. Seemed only fair to start here.";

export const BM_BLOCK = {
  headline: "You can close any room. Your team can't.",
  body:
    "BrandMultiplier installs a Narrative Operating System: the story extracted from the founder, " +
    "built into how the whole company sells, and kept current with a modern agentic stack. It starts with a free Diagnostic.",
};

export const CTA = {
  question: "Is your best story still living in one head?",
  button: "Book the Diagnostic",
};

/** Consent Mode v2 defaults to "denied" in these regions (EEA, UK, Switzerland) until the banner is answered. */
export const CONSENT_DENIED_REGIONS = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "GB",
  "CH",
  "NO",
  "IS",
  "LI",
];
