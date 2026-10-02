import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { gonePaths, permanentRedirects } from "./src/content/redirects";

const CANONICAL_ORIGIN = "https://chrisrubincreativ.com";
/** Every other hostname 301s to the apex, path preserved, in one hop. */
const ALIAS_HOSTS = ["chrisrubin.com", "www.chrisrubin.com", "www.chrisrubincreativ.com"];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Old WordPress URLs carry the slash, so old -> new stays a single hop. Do not change.
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: { root: __dirname },
  images: {
    formats: ["image/avif", "image/webp"],
    // In dev, the optimizer encodes every image on first view, so a page full of
    // photos sits blank while Sharp works through the queue. Production still optimizes.
    unoptimized: process.env.NODE_ENV === "development",
  },

  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      // Unlisted: noindex in the header as well as the meta tag. Never add it to robots.txt Disallow,
      // or crawlers could not read the noindex.
      { source: "/pitchcraft/", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
      {
        source: "/assets/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  async redirects() {
    return [
      ...ALIAS_HOSTS.map((host) => ({
        // A raw capture keeps the trailing slash, so the apex never needs a second hop to add it.
        source: "/:path(.*)",
        has: [{ type: "host" as const, value: host }],
        destination: `${CANONICAL_ORIGIN}/:path`,
        statusCode: 301 as const,
      })),
      ...permanentRedirects.map(({ source, destination }) => ({
        source,
        destination,
        statusCode: 301 as const,
      })),
    ];
  },

  async rewrites() {
    // Redirects cannot answer 410, so retired URLs are rewritten to a handler that does.
    return gonePaths.map((source) => ({ source, destination: "/gone/" }));
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
