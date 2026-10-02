/**
 * dataLayer events the site pushes. GTM turns these into GA4 events and conversions; every
 * marketing tag lives inside the GTM container, never in this codebase.
 */
export interface AnalyticsEvents {
  case_study_view: { client: string };
  case_study_read: { client: string; title: string };
  essay_read: { client: string; title: string };
  diagnostic_click: { source: string };
  outbound_to_brandmultiplier: { link_url: string };
  contact_submit: { method: "mailto" };
}

export type AnalyticsEvent = keyof AnalyticsEvents;

type DataLayerEntry = Record<string, unknown> | IArguments;

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
    /** Defined by the inline Consent Mode script in <head> (see ConsentDefaults). */
    gtag?: (...args: unknown[]) => void;
  }
}

export function track<E extends AnalyticsEvent>(event: E, params: AnalyticsEvents[E]): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ ...params, event, page_path: window.location.pathname });
}

// ---------- Consent Mode v2 ----------

export const CONSENT_STORAGE_KEY = "crc_consent";
export type ConsentChoice = "granted" | "denied";
export const CONSENT_OPEN_EVENT = "crc:consent-open";

export function readConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

/** Stores the visitor's choice and updates Consent Mode for every tag in the container. */
export function applyConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage can be unavailable (private mode); the choice still applies for this page view.
  }
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
