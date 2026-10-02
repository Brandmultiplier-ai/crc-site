import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { BrandMultiplierBlock } from "@/components/sections/CallToAction";
import { EssayList } from "@/components/sections/EssayList";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { Quotes } from "@/components/sections/Quote";
import { Timeline } from "@/components/sections/Timeline";
import { WorkCard, workGridClass } from "@/components/sections/WorkCard";
import { ScrollHint, SectionHead, SectionHeading } from "@/components/ui/headings";
import { SITE_NAME, SITE_URL } from "@/content/site";
import { homeWorkSlugs, workCards } from "@/content/work";
import { organizationNode, pageMetadata, personNode } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  title: "ChrisRubinCreativ · The story out of one head and into many",
  absoluteTitle: true,
  description:
    "CRC is the house: 30+ years of brand narrative work for Hard Rock Cafe, Google, Intel, Ledger, BetterCloud and founder-led companies. BrandMultiplier is the current practice.",
});

const websiteNode = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#org` },
};

const selectedWork = homeWorkSlugs.map((slug) => {
  const card = workCards.find((c) => c.slug === slug);
  if (!card) throw new Error(`Home page lists unknown work card "${slug}"`);
  return card;
});

export default function HomePage() {
  return (
    <>
      <JsonLd nodes={[organizationNode, personNode, websiteNode]} />
      <Hero />

      <section id="throughline" className="mt-14 scroll-mt-4">
        <SectionHeading className="mb-1">The throughline.</SectionHeading>
        <Timeline />
        <ScrollHint>
          Scroll the line →{" "}
          <Link href="/about/" className="underline">
            Read the whole story
          </Link>
        </ScrollHint>
      </section>

      <section id="work" className="scroll-mt-4 py-[72px]">
        <SectionHead title="Selected work." more={{ href: "/work/", label: "All work →" }} />
        <div className={workGridClass}>
          {selectedWork.map((card, i) => (
            <WorkCard key={card.slug} card={card} eager={i < 2} />
          ))}
        </div>
      </section>

      <LogoWall className="pt-0" />

      <section className="py-[72px]">
        <SectionHeading>In their words.</SectionHeading>
        <Quotes />
      </section>

      <section id="writing" className="py-[72px]">
        <SectionHead title="Writing." more={{ href: "/writing/", label: "All writing →" }} />
        <EssayList />
      </section>

      <BrandMultiplierBlock />
    </>
  );
}
