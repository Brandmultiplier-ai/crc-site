import type { Metadata } from "next";
import { BM_URL, LEGAL_ENTITY, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/content/site";

const DEFAULT_OG_IMAGE = "/assets/img/og/og-default.png";

interface PageMetaInput {
  /** Site-relative path with trailing slash, for example "/work/ledger/". */
  path: string;
  title: string;
  description: string;
  /** Use the title as-is instead of appending " · ChrisRubinCreativ". */
  absoluteTitle?: boolean;
  noindex?: boolean;
  ogType?: "website" | "article";
  ogImage?: string;
}

/** Builds the per-page metadata: title, description, canonical, robots, Open Graph and Twitter. */
export function pageMetadata({
  path,
  title,
  description,
  absoluteTitle = false,
  noindex = false,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetaInput): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: ogType,
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
  };
}

// ---------- JSON-LD (schema.org graph nodes) ----------

type JsonLdNode = Record<string, unknown>;

export const organizationNode: JsonLdNode = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  name: LEGAL_ENTITY,
  alternateName: [SITE_NAME, "CRC"],
  legalName: LEGAL_ENTITY,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon-512.png`,
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aspen",
    addressRegion: "CO",
    addressCountry: "US",
  },
  founder: { "@id": `${SITE_URL}/#person` },
  brand: {
    "@type": "Brand",
    name: "BrandMultiplier",
    url: `${BM_URL}/`,
    description:
      "Narrative Operating Systems for founder-led B2B companies. A DBA of ChrisRubinCreativ, Inc.",
  },
  sameAs: [`${BM_URL}/`],
};

export const personNode: JsonLdNode = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Chris Rubin",
  jobTitle: "Founder and CEO",
  worksFor: { "@id": `${SITE_URL}/#org` },
  url: `${SITE_URL}/about/`,
  sameAs: [`${BM_URL}/`, LINKEDIN_URL],
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  knowsAbout: [
    "brand narrative",
    "brand positioning",
    "brand strategy",
    "founder storytelling",
    "pitch strategy",
  ],
  homeLocation: { "@type": "Place", name: "Aspen, Colorado" },
};

export function breadcrumbsNode(items: [name: string, path: string][]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: SITE_URL + path,
    })),
  };
}

export function jsonLdGraph(...nodes: JsonLdNode[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(
    /</g,
    "\\u003c",
  );
}

export const authorNode = (byline: string): JsonLdNode =>
  byline === "Chris Rubin"
    ? { "@id": `${SITE_URL}/#person` }
    : {
        "@type": "Organization",
        name: "ChrisRubinCreativ Editorial",
        parentOrganization: { "@id": `${SITE_URL}/#org` },
      };
