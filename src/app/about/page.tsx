import { LongForm } from "@/components/layout/LongForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CallToAction";
import { Timeline } from "@/components/sections/Timeline";
import { PageHead, ScrollHint } from "@/components/ui/headings";
import AboutBody from "@/content/pages/about.mdx";
import { SITE_URL } from "@/content/site";
import { breadcrumbsNode, organizationNode, pageMetadata, personNode } from "@/lib/seo";
import { noWidow } from "@/lib/typography";

export const metadata = pageMetadata({
  path: "/about/",
  title: "About Chris Rubin",
  description:
    "From a TRS-80 to Hard Rock Cafe's first website to the Accenture pitch rooms to CRC and BrandMultiplier: the throughline, the method in three generations, and the bookshelf.",
});

const aboutPageNode = {
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about/#page`,
  url: `${SITE_URL}/about/`,
  name: "About Chris Rubin",
  mainEntity: { "@id": `${SITE_URL}/#person` },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        nodes={[
          organizationNode,
          personNode,
          aboutPageNode,
          breadcrumbsNode([
            ["Home", "/"],
            ["About", "/about/"],
          ]),
        ]}
      />
      <PageHead
        title={noWidow("The throughline.")}
        lede={noWidow(
          "A kid getting a TRS-80 to do what he asked, and a founder getting a company to say what it means: same person, about forty years apart. This page draws the line between them.",
        )}
      />
      <section id="throughline" aria-label="The throughline" className="mt-14">
        <Timeline />
        <ScrollHint>Scroll the line →</ScrollHint>
      </section>
      <LongForm>
        <AboutBody />
      </LongForm>
      <CtaBlock source="about" />
    </>
  );
}
