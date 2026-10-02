import { Gallery } from "@/components/media/Gallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CallToAction";
import { FilterableWork } from "@/components/sections/FilterableWork";
import { LogoWall } from "@/components/sections/LogoWall";
import { PageHead } from "@/components/ui/headings";
import { SITE_URL } from "@/content/site";
import { workCards, workGalleries } from "@/content/work";
import { breadcrumbsNode, organizationNode, pageMetadata } from "@/lib/seo";
import { plainText } from "@/lib/typography";

export const metadata = pageMetadata({
  path: "/work/",
  title: "Work",
  description:
    "Case studies from 30+ years of brand narrative work: Ledger, Apto Solutions, BetterCloud, Remark, Tria Beauty, Hard Rock Cafe, Intel, Google, Nickelodeon, Sony, Microsoft, American Red Cross.",
});

const itemListNode = {
  "@type": "ItemList",
  itemListElement: workCards.map((card, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: plainText(card.client),
    url: card.hasPage ? `${SITE_URL}/work/${card.slug}/` : `${SITE_URL}/work/#${card.slug}`,
  })),
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        nodes={[
          organizationNode,
          breadcrumbsNode([
            ["Home", "/"],
            ["Work", "/work/"],
          ]),
          itemListNode,
        ]}
      />
      <PageHead
        title="The work."
        lede="More than 30 years of it, one format: the client, the result, the number. Eighteen full case studies, and one more card that carries the number."
      />
      <FilterableWork />
      {workGalleries.map((gallery, i) => (
        <Gallery
          key={gallery.heading}
          gallery={gallery}
          className={i === 0 ? "mt-14" : undefined}
        />
      ))}
      <LogoWall />
      <CtaBlock source="work" />
    </>
  );
}
