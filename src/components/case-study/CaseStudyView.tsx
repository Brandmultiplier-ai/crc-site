import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import type { Award, CaseSection, CaseStudy } from "@/types/content";
import { ReadTracker } from "@/components/analytics/ReadTracker";
import { AmbientVideo } from "@/components/media/AmbientVideo";
import { Film } from "@/components/media/Film";
import { Gallery } from "@/components/media/Gallery";
import { Quote } from "@/components/sections/Quote";
import { CtaBlock } from "@/components/sections/CallToAction";
import { RichText } from "@/components/ui/RichText";
import { cn } from "@/lib/cn";
import { imageSize } from "@/lib/images";
import { noWidow } from "@/lib/typography";

/** Galleries and films are placed after this section, once the problem and the work are set up. */
const MEDIA_AFTER_SECTION = 1;
/** Results longer than this ("Cannes Cyber Lion") render as words, not a number. */
const NUMERIC_RESULT_MAX = 5;

const sectionClass = "mb-12 max-w-[680px]";
const sectionHeadingClass =
  "mb-3.5 font-disp text-[26px] leading-[1.2] font-bold text-blue font-stretch-[112%]";

function AwardFigure({ award, slug }: { award: Award; slug: string }) {
  return (
    <figure className="m-0 mt-3 mb-[18px] max-w-[220px] sm:col-start-2 sm:row-span-6 sm:row-start-2 sm:m-0 sm:max-w-none">
      {award.kind === "tile" ? (
        <div className="flex aspect-[8/9] flex-col items-center justify-center gap-2.5 border border-line bg-s1 bg-[radial-gradient(120%_80%_at_50%_110%,rgba(214,165,58,.22),transparent_60%)] p-5 text-center">
          <span className="font-mono text-[11px] leading-none font-medium tracking-[0.14em] text-gold uppercase">
            {award.organisation}
          </span>
          <span className="font-disp text-[clamp(24px,2.6vw,32px)] leading-none font-extrabold text-balance text-ink font-stretch-[112%]">
            {award.name}
          </span>
          <span className="min-w-[60%] border-t border-gold/40 pt-1.5 text-[13px] leading-[1.4] text-muted">
            {award.for}
          </span>
        </div>
      ) : (
        <AmbientVideo
          src={`/assets/video/${slug}/${award.file}.mp4`}
          poster={`/assets/video/${slug}/${award.file}-poster.jpg`}
          preload="metadata"
          aria-label={award.alt}
          className="block aspect-[8/9] w-full border border-line bg-bg object-cover"
        />
      )}
      <figcaption className="px-0.5 pt-2 font-mono text-xs leading-[1.5] text-muted">
        <RichText text={award.caption} noWidow />
      </figcaption>
    </figure>
  );
}

function Section({ section, award, slug }: { section: CaseSection; award?: Award; slug: string }) {
  return (
    <section
      className={cn(
        sectionClass,
        award && "sm:grid sm:grid-cols-[minmax(0,1fr)_min(32%,220px)] sm:items-start sm:gap-x-8",
      )}
    >
      <h2 className={cn(sectionHeadingClass, award && "sm:col-span-full")}>{section.heading}</h2>
      {award && <AwardFigure award={award} slug={slug} />}
      {section.paragraphs.map((p, i) => (
        <p key={i} className={cn("mb-3.5", award && "sm:col-start-1")}>
          <RichText text={p} noWidow />
        </p>
      ))}
    </section>
  );
}

function ResultBlock({ study }: { study: CaseStudy }) {
  const isWords = study.result.length > NUMERIC_RESULT_MAX;
  const hasLoop = Boolean(study.heroLoop);
  const loopPoster = `/assets/video/${study.slug}/${study.heroLoop}-poster.jpg`;
  return (
    <div
      className={cn(
        "border border-line bg-s1",
        hasLoop
          ? "grid items-center gap-6 overflow-hidden md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] motion-reduce:md:grid-cols-1"
          : "flex flex-wrap items-end gap-5 p-7",
      )}
    >
      <div className={hasLoop ? "flex flex-wrap items-end gap-5 p-7" : "contents"}>
        <span
          className={cn(
            "font-disp font-extrabold tracking-[-0.03em] text-blue font-stretch-[112%]",
            isWords
              ? "text-result-words leading-[0.95] text-balance"
              : "text-result leading-[0.85]",
          )}
        >
          {isWords ? noWidow(study.result) : study.result}
        </span>
        <span
          className={cn(
            "pb-2.5 font-mono text-sm leading-[1.4] font-medium text-ink",
            isWords ? "flex-[1_1_260px]" : "max-w-[28ch]",
          )}
        >
          <RichText text={study.resultLabel} noWidow />
        </span>
      </div>
      {study.heroLoop && (
        <div className="relative block aspect-video h-full w-full bg-bg motion-reduce:hidden md:aspect-auto md:min-h-[220px]">
          {/* The poster is the page's largest paint, so it is an optimized eager image under the
              video rather than a <video poster>, which is discovered late and served unoptimized. */}
          <Image
            src={loopPoster}
            alt=""
            fill
            sizes="(max-width: 760px) 100vw, 480px"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
          <AmbientVideo
            src={`/assets/video/${study.slug}/${study.heroLoop}.mp4`}
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 block size-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

function Films({ study }: { study: CaseStudy }) {
  if (!study.videos?.length) return null;
  return (
    <section className={cn(sectionClass, "max-w-[760px]")}>
      <h2 className={sectionHeadingClass}>The work, in motion.</h2>
      <p className="mb-3.5">Three launch films from the engagement. Sound on.</p>
      {study.videos.map((v) => (
        <Film
          key={v.file}
          src={`/assets/video/${study.slug}/${v.file}.mp4`}
          poster={`/assets/video/${study.slug}/${v.file}-poster.jpg`}
          title={v.title}
          description={v.description}
          duration={`${v.seconds}s`}
        />
      ))}
    </section>
  );
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const logo = study.logo ? `/assets/img/logos/${study.logo}` : null;
  const logoSize = logo ? imageSize(logo) : null;

  return (
    <>
      <article className="max-w-[980px] pt-10 pb-6">
        <Link
          href="/work/"
          className="font-mono text-sm leading-none font-medium text-blue no-underline"
        >
          ← All work
        </Link>
        <p className="mt-10 mb-3 font-mono text-sm leading-none text-muted">{study.eyebrow}</p>
        {logo && logoSize && (
          <Image
            src={logo}
            alt={`${study.client} logo`}
            width={logoSize.width}
            height={logoSize.height}
            loading="eager"
            className="mt-[22px] mb-1.5 block h-9 w-auto opacity-90"
          />
        )}
        <h1 className="m-0 font-disp text-client leading-[0.95] font-extrabold tracking-[-0.02em] font-stretch-[120%]">
          {study.client}
        </h1>
        <p className="mt-4 mb-10 max-w-[34ch] font-disp text-[clamp(20px,2.4vw,28px)] leading-[1.3] font-medium text-balance text-muted">
          <RichText text={study.title} noWidow />
        </p>

        {study.brands && (
          <ul
            aria-label="The brands in the project"
            className="-mt-4 mb-9 flex list-none flex-wrap items-center gap-x-6 gap-y-3.5 p-0 sm:gap-x-9 sm:gap-y-[18px]"
          >
            {study.brands.map(({ file, name }) => {
              const src = `/assets/img/logos/brands/${file}`;
              const { width, height } = imageSize(src);
              return (
                <li key={file}>
                  <Image
                    src={src}
                    alt={`${name} logo`}
                    width={width}
                    height={height}
                    className="block h-5 w-auto max-w-[150px] opacity-92 sm:h-[26px] sm:max-w-[200px]"
                  />
                </li>
              );
            })}
          </ul>
        )}

        <ResultBlock study={study} />

        <p className="my-9 max-w-[54ch] text-[clamp(19px,1.9vw,23px)] text-balance">
          {noWidow(study.lede)}
        </p>

        <dl className="m-0 mb-16 grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-px border border-line bg-line">
          {study.meta.map(({ label, value }) => (
            <div key={label} className="bg-bg px-[18px] py-4">
              <dt className="font-mono text-[13px] leading-[1.4] text-muted">{label}</dt>
              <dd className="mt-1 text-[15px]">{value}</dd>
            </div>
          ))}
        </dl>

        {study.sections.map((section, i) => (
          <Fragment key={section.heading}>
            <Section
              section={section}
              slug={study.slug}
              award={study.award?.section === section.heading ? study.award : undefined}
            />
            {i === MEDIA_AFTER_SECTION && (
              <>
                {study.galleries?.map((g) => (
                  <Gallery key={g.heading} gallery={g} />
                ))}
                <Films study={study} />
              </>
            )}
          </Fragment>
        ))}

        {study.quote && <Quote quote={study.quote} className="my-16 max-w-[760px]" />}

        <div className="flex flex-wrap justify-between gap-4 border-t border-line py-6 font-mono text-sm leading-[1.4] text-muted">
          <span>Next case study</span>
          <Link
            href={`/work/${study.next.slug}/`}
            className="font-disp text-[19px] leading-[1.3] font-semibold text-ink no-underline"
          >
            <b>{study.next.client}:</b> {study.next.metric} →
          </Link>
        </div>

        <CtaBlock source={`case:${study.slug}`} />
      </article>
      <ReadTracker kind="case-study" client={study.client} />
    </>
  );
}
