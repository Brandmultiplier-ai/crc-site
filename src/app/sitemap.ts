import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { indexablePaths } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().slice(0, 10);
  return indexablePaths().map((path) => ({ url: SITE_URL + path, lastModified }));
}
