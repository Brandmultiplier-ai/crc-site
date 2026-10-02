import { jsonLdGraph } from "@/lib/seo";

type Node = Record<string, unknown>;

/** Emits a schema.org @graph as a JSON-LD script tag. */
export function JsonLd({ nodes }: { nodes: Node[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON is escaped by jsonLdGraph (no raw "<"), so it cannot close the script tag.
      dangerouslySetInnerHTML={{ __html: jsonLdGraph(...nodes) }}
    />
  );
}
