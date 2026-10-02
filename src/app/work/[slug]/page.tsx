import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies, getCaseStudy } from "@/content/cases";
import { SITE_URL } from "@/content/site";
import { breadcrumbsNode, organizationNode, pageMetadata, personNode } from "@/lib/seo";
import { plainText } from "@/lib/typography";

export const dynamicParams = false;

const BUILD_DATE = new Date().toISOString().slice(0, 10);

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return pageMetadata({
    path: `/work/${study.slug}/`,
    title: `${study.client} case study: ${study.result} ${plainText(study.resultLabel)}`,
    description: study.lede,
    ogType: "article",
    ogImage: `/assets/img/og/${study.slug}.png`,
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  const path = `/work/${study.slug}/`;
  const articleNode = {
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    headline: `${study.client}: ${plainText(study.title)}`,
    description: study.lede,
    about: { "@type": "Organization", name: study.client },
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#org` },
    mainEntityOfPage: SITE_URL + path,
    dateModified: BUILD_DATE,
    genre: "Case study",
    keywords: [study.sector, "brand narrative", "case study"],
  };

  return (
    <>
      <JsonLd
        nodes={[
          organizationNode,
          personNode,
          breadcrumbsNode([
            ["Home", "/"],
            ["Work", "/work/"],
            [study.client, path],
          ]),
          articleNode,
        ]}
      />
      <CaseStudyView study={study} />
    </>
  );
}
