import { LongForm } from "@/components/layout/LongForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHead } from "@/components/ui/headings";
import PitchcraftBody from "@/content/pages/pitchcraft.mdx";
import { organizationNode, pageMetadata, personNode } from "@/lib/seo";
import { noWidow } from "@/lib/typography";

/** Unlisted: noindex here and in the X-Robots-Tag header, absent from the sitemap and navigation. */
export const metadata = pageMetadata({
  path: "/pitchcraft/",
  title: "Pitchcraft",
  description:
    "The Accenture Interactive pitch archive: how the room worked, the Company X manifesto, and more winning pitches.",
  noindex: true,
});

export default function PitchcraftPage() {
  return (
    <>
      <JsonLd nodes={[organizationNode, personNode]} />
      <PageHead
        title={noWidow("Pitchcraft.")}
        lede={noWidow(
          "The pitch rooms at Accenture Interactive: a win rate from 54% to 88% across more than 20 enterprise pitches, over $1B in attributed revenue. This page is the archive.",
        )}
      />
      <LongForm>
        <PitchcraftBody />
      </LongForm>
    </>
  );
}
