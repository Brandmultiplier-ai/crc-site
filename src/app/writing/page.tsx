import { JsonLd } from "@/components/seo/JsonLd";
import { BmBlog } from "@/components/sections/BmBlog";
import { CtaBlock } from "@/components/sections/CallToAction";
import { EssayList } from "@/components/sections/EssayList";
import { PageHead, SectionHead } from "@/components/ui/headings";
import { BM_URL } from "@/content/site";
import { breadcrumbsNode, organizationNode, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/writing/",
  title: "Writing",
  description:
    "Essays and articles on brand craft from ChrisRubinCreativ: why some brands move us, brand repositioning case studies, and brand strategy frameworks.",
});

export default function WritingPage() {
  return (
    <>
      <JsonLd
        nodes={[
          organizationNode,
          breadcrumbsNode([
            ["Home", "/"],
            ["Writing", "/writing/"],
          ]),
        ]}
      />
      <PageHead
        title="Writing."
        lede={
          <>
            Brand craft: positioning, repositioning, frameworks, and why some brands move people.
            The founder work is on the{" "}
            <a href={`${BM_URL}/blog`} className="underline">
              BrandMultiplier blog
            </a>
            ; a reading order is further down.
          </>
        }
      />
      <section className="py-[72px]">
        <SectionHead title="On CRC." />
        <EssayList />
      </section>
      <BmBlog />
      <CtaBlock source="writing" />
    </>
  );
}
