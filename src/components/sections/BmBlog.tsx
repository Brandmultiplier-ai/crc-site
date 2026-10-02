import { BM_URL } from "@/content/site";
import { bmBlogIntro, bmPostGroups } from "@/content/writing";
import { RichText } from "@/components/ui/RichText";
import { SectionHead } from "@/components/ui/headings";
import { EssayTile, essayGridClass, essayTileClass } from "./EssayList";

/** The BrandMultiplier blog reading order on /writing/. Every tile links out. */
export function BmBlog() {
  return (
    <section id="brandmultiplier" className="mt-14 py-[72px]">
      <SectionHead
        title={
          <>
            From the <span className="text-spark">BrandMultiplier</span> blog.
          </>
        }
        more={{ href: `${BM_URL}/blog`, label: "All posts ↗", external: true }}
      />
      <p className="mb-7 max-w-[62ch]">
        <RichText text={bmBlogIntro} noWidow />
      </p>
      {bmPostGroups.map((group) => (
        <div key={group.heading} className="mt-9">
          <h3 className="mb-1.5 font-disp text-xl leading-[1.2] font-bold font-stretch-[112%]">
            {group.heading}
          </h3>
          <p className="mb-4 max-w-[62ch] text-[15px] text-muted">
            <RichText text={group.intro} />
          </p>
          <div className={essayGridClass}>
            {group.posts.map((post) => (
              <a
                key={post.path}
                href={BM_URL + post.path}
                target="_blank"
                rel="noopener"
                className={essayTileClass}
              >
                <EssayTile
                  small
                  title={<RichText text={post.title} noWidow />}
                  description={<RichText text={post.description} noWidow />}
                  meta={`BrandMultiplier · ${post.meta} ↗`}
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
