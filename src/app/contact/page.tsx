import { LongForm } from "@/components/layout/LongForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonClass } from "@/components/ui/button";
import { DiagnosticLink } from "@/components/ui/DiagnosticLink";
import { Kicker, PageHead } from "@/components/ui/headings";
import FaqBody from "@/content/pages/contact-faq.mdx";
import { CONTACT_EMAIL, CTA, SITE_URL } from "@/content/site";
import { breadcrumbsNode, organizationNode, pageMetadata, personNode } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { noWidow } from "@/lib/typography";

export const metadata = pageMetadata({
  path: "/contact/",
  title: "Contact",
  description:
    "Book the BrandMultiplier Diagnostic, or email ChrisRubinCreativ for everything else.",
});

const contactPageNode = {
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact/#page`,
  url: `${SITE_URL}/contact/`,
  mainEntity: { "@id": `${SITE_URL}/#org` },
};

const cardClass = "px-7 py-8";
const cardHeadingClass = "mb-3 font-disp text-[26px] leading-[1.2] font-bold font-stretch-[112%]";

export default function ContactPage() {
  return (
    <>
      <JsonLd
        nodes={[
          organizationNode,
          personNode,
          contactPageNode,
          breadcrumbsNode([
            ["Home", "/"],
            ["Contact", "/contact/"],
          ]),
        ]}
      />
      <PageHead
        title={noWidow("Let's move.")}
        lede={noWidow("Two doors. The first one is where nearly everything starts now.")}
      />

      <div className="my-8 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-px border border-line bg-line">
        <div className={cn(cardClass, "bg-brand")}>
          <Kicker className="text-white opacity-80">BrandMultiplier · the Diagnostic</Kicker>
          <h2 className={cardHeadingClass}>{CTA.question}</h2>
          <p className="mb-5 text-brand-ink">
            Every company has two versions of its story: the one the brand publishes, and the one
            the founder tells when someone asks what the company actually does. They&apos;re almost
            never the same, and the distance between them is where growth leaks. Before we talk, we
            read both: your site and materials on one side, how you sound telling it on the other.
            Then twenty minutes, live: where the two diverge, which one is doing the selling, and
            what the gap is likely costing you in deals your team runs without you. No slides. You
            keep the read either way.
          </p>
          <p className="mb-5 text-brand-ink">
            For founder-led B2B companies with a complex sale, roughly $3M to $50M ARR. If the
            founder won&apos;t be in the room, don&apos;t book.
          </p>
          <DiagnosticLink source="contact" className={buttonClass()}>
            {CTA.button}
          </DiagnosticLink>
        </div>
        <div className={cn(cardClass, "bg-s1")}>
          <Kicker>Everything else</Kicker>
          <h2 className={cardHeadingClass}>General inquiry</h2>
          <p className="mb-5 text-muted">
            Speaking, writing, a pitch that has to win, or something that doesn&apos;t fit a form.
            Email works best.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={buttonClass("ghost", "break-all")}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <LongForm>
        <FaqBody />
      </LongForm>
    </>
  );
}
