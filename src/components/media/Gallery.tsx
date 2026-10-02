import Image from "next/image";
import type { Gallery as GalleryData, GalleryVariant } from "@/types/content";
import { RichText } from "@/components/ui/RichText";
import { ScrollHint } from "@/components/ui/headings";
import { cn } from "@/lib/cn";
import { imageSize } from "@/lib/images";
import { plainText } from "@/lib/typography";

const IMAGE_HEIGHT: Record<GalleryVariant, string> = {
  default: "h-[220px] sm:h-[300px]",
  tall: "h-[320px] sm:h-[440px]",
  small: "h-[150px] sm:h-[200px]",
};

export interface GalleryTrackItem {
  src: string;
  alt: string;
  caption: string;
}

/** A horizontal strip of real pieces that bleeds to the viewport gutter and scroll-snaps. */
export function GalleryTrack({
  items,
  variant = "default",
  label,
}: {
  items: GalleryTrackItem[];
  variant?: GalleryVariant;
  label: string;
}) {
  return (
    <>
      <div
        role="region"
        aria-label={label}
        tabIndex={0}
        className="bleed-x flex snap-x snap-proximity scrollbar-thin gap-3.5 overflow-x-auto pb-2.5"
      >
        {items.map((item) => {
          const { width, height } = imageSize(item.src);
          return (
            <figure key={item.src} className="m-0 max-w-[min(78vw,520px)] flex-none snap-start">
              <Image
                src={item.src}
                alt={item.alt}
                width={width}
                height={height}
                sizes="(max-width: 640px) 80vw, 800px"
                className={cn(
                  "block w-auto max-w-none border border-line bg-s1",
                  IMAGE_HEIGHT[variant],
                )}
              />
              <figcaption className="max-w-[36ch] px-0.5 pt-2 font-mono text-xs leading-[1.5] text-muted">
                <RichText text={item.caption} />
              </figcaption>
            </figure>
          );
        })}
      </div>
      <ScrollHint />
    </>
  );
}

/** A titled gallery section (case studies and the Work page). */
export function Gallery({ gallery, className }: { gallery: GalleryData; className?: string }) {
  return (
    <section className={cn("mb-14", className)}>
      <h2 className="mb-2.5 font-disp text-[26px] leading-[1.2] font-bold text-blue font-stretch-[112%]">
        <RichText text={gallery.heading} />
      </h2>
      <p className="mb-[18px] max-w-[60ch] text-muted">
        <RichText text={gallery.intro} noWidow />
      </p>
      <GalleryTrack
        label={plainText(gallery.heading)}
        variant={gallery.variant}
        items={gallery.items.map((i) => ({ ...i, alt: plainText(i.caption) }))}
      />
    </section>
  );
}

/** A gallery inside long-form content, introduced by a kicker instead of a heading. */
export function InlineGallery({ kicker, items }: { kicker: string; items: GalleryTrackItem[] }) {
  return (
    <div className="mt-7 mb-10">
      <p className="mb-3 font-mono text-sm leading-none font-medium text-blue">{kicker}</p>
      <GalleryTrack label={kicker} items={items} />
    </div>
  );
}
