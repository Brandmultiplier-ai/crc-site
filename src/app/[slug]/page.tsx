import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReadTracker } from "@/components/analytics/ReadTracker";
import { LongForm } from "@/components/layout/LongForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CallToAction";
import { PageHead } from "@/components/ui/headings";
import { RichText } from "@/components/ui/RichText";
import { articles } from "@/content/articles/meta";
import { longformBodies } from "@/content/longform";
import { SITE_URL } from "@/content/site";
import { legalPages } from "@/lib/routes";
import { authorNode, breadcrumbsNode, organizationNode, pageMetadata, personNode } from "@/lib/seo";

/** Essays and legal pages live at the site root, at their original WordPress URLs. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...articles, ...legalPages].map(({ slug }) => ({ slug }));
}

const findArticle = (slug: string) => articles.find((a) => a.slug === slug);
const findLegal = (slug: string) => legalPages.find((l) => l.slug === slug);

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = findArticle(slug) ?? findLegal(slug);
  if (!page) return {};
  return pageMetadata({
    path: `/${slug}/`,
    title: page.title,
    description: page.description,
    ogType: findArticle(slug) ? "article" : "website",
  });
}

export default async function RootLongformPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const loadBody = longformBodies[slug];
  const article = findArticle(slug);
  const legal = findLegal(slug);
  if (!loadBody) notFound();
  const { default: Body } = await loadBody();
  const path = `/${slug}/`;

  if (legal) {
    return (
      <>
        <JsonLd
          nodes={[
            organizationNode,
            breadcrumbsNode([
              ["Home", "/"],
              [legal.title, path],
            ]),
          ]}
        />
        <PageHead title={legal.title} />
        <LongForm>
          <Body />
        </LongForm>
      </>
    );
  }

  if (!article) notFound();
  const a = article;
  const articleNode = {
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    headline: a.title,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    author: authorNode(a.byline),
    publisher: { "@id": `${SITE_URL}/#org` },
    mainEntityOfPage: SITE_URL + path,
  };

  return (
    <>
      <JsonLd
        nodes={[
          organizationNode,
          personNode,
          breadcrumbsNode([
            ["Home", "/"],
            ["Writing", "/writing/"],
            [a.title, path],
          ]),
          articleNode,
        ]}
      />
      <LongForm as="article">
        <PageHead size="article" title={<RichText text={a.titleHtml ?? a.title} noWidow />} />
        <p className="mb-10 font-mono text-[13px] leading-[1.6] text-muted">
          {a.byline} · {a.datePublished.slice(0, 4)}
          {a.dateModified && ` · updated ${a.dateModified}`}
        </p>
        <Body />
      </LongForm>
      <CtaBlock source="article" />
      <ReadTracker kind="article" />
    </>
  );
}
