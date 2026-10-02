import Image from "next/image";
import Link from "next/link";
import type { WorkCard as WorkCardData } from "@/types/content";
import { RichText } from "@/components/ui/RichText";
import { imageSize } from "@/lib/images";

function CardArt({ art, eager }: { art: NonNullable<WorkCardData["art"]>; eager: boolean }) {
  const loading = eager ? "eager" : "lazy";
  const { width, height } = imageSize(art.src);
  if (art.kind === "logo") {
    return (
      <div className="flex aspect-[16/10] items-center justify-center border-b border-line bg-s2 px-8 py-7">
        <Image
          src={art.src}
          alt={art.alt}
          width={width}
          height={height}
          loading={loading}
          className="h-auto max-h-16 w-auto max-w-[70%] object-contain"
        />
      </div>
    );
  }
  return (
    <Image
      src={art.src}
      alt={art.alt}
      width={width}
      height={height}
      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 400px"
      loading={loading}
      fetchPriority={eager ? "high" : undefined}
      className="block aspect-[16/10] h-auto w-full border-b border-line bg-s2 object-cover object-top-left"
    />
  );
}

/** A card in the work grid: client, sector, the number, and (when a study exists) a link to it. */
export function WorkCard({
  card,
  hidden = false,
  eager = false,
}: {
  card: WorkCardData;
  hidden?: boolean;
  /** Above the fold: load the art immediately at high priority. */
  eager?: boolean;
}) {
  const body = (
    <>
      {card.art && <CardArt art={card.art} eager={eager} />}
      <div className="flex flex-1 flex-col gap-2 px-6 pt-6 pb-7">
        <p className="m-0 font-mono text-[13px] leading-[1.4] text-muted">{card.sector}</p>
        <h3 className="m-0 font-disp text-[22px] leading-[1.15] font-bold font-stretch-[110%]">
          <RichText text={card.client} noWidow />
        </h3>
        <p className="m-0 mt-auto font-disp text-[30px] leading-[1.05] font-extrabold tracking-[-0.01em] text-balance text-blue font-stretch-[112%]">
          {card.metric}
        </p>
        <p className="m-0 text-sm text-muted">
          <RichText text={card.detail} noWidow />
        </p>
        {card.hasPage ? (
          <span className="mt-1.5 font-mono text-[13px] leading-none font-medium text-spark">
            Read the case study →
          </span>
        ) : (
          <span className="mt-1.5 font-mono text-xs leading-none text-muted">
            Full study coming
          </span>
        )}
      </div>
    </>
  );

  const base = "relative flex min-h-[230px] flex-col bg-s1 no-underline";
  return card.hasPage ? (
    <Link
      id={card.slug}
      href={`/work/${card.slug}/`}
      data-era={card.era}
      hidden={hidden}
      className={`${base} hover:bg-s2 focus-visible:bg-s2`}
    >
      {body}
    </Link>
  ) : (
    <div id={card.slug} data-era={card.era} hidden={hidden} className={base}>
      {body}
    </div>
  );
}

export const workGridClass =
  "grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-px border border-line bg-line";
