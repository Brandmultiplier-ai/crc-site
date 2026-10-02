import { articles } from "@/content/articles/meta";
import { caseStudies } from "@/content/cases";

/** Legal pages, at the exact WordPress URLs Stripe and Airwallex link to. */
export const legalPages = [
  {
    slug: "terms-conditions",
    title: "Terms and conditions",
    description:
      "Terms and conditions for engaging ChrisRubinCreativ, Inc. (BrandMultiplier is a DBA of ChrisRubinCreativ, Inc.).",
  },
  {
    slug: "privacy-policy-2",
    title: "Privacy policy",
    description:
      "How ChrisRubinCreativ, Inc. collects, uses and handles your information, including analytics cookies on this website.",
  },
  {
    slug: "shipping-refund-policy",
    title: "Shipping and refund policy",
    description:
      "Delivery and refund policy for ChrisRubinCreativ, Inc. services. All deliverables are digital.",
  },
] as const;

/** Every indexable page, in site order. Pitchcraft (unlisted) and the 404 are deliberately absent. */
export function indexablePaths(): string[] {
  return [
    "/",
    "/work/",
    ...caseStudies.map((c) => `/work/${c.slug}/`),
    "/about/",
    "/writing/",
    ...articles.map((a) => `/${a.slug}/`),
    "/contact/",
    ...legalPages.map((l) => `/${l.slug}/`),
  ];
}
