import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { imageSize } from "@/lib/images";
import { blockquoteClass } from "./prose";

/* Block components available in every MDX file (registered in src/mdx-components.tsx). */

export function Lede({ children }: { children: ReactNode }) {
  return <p className="mb-[18px] text-lede text-balance text-muted">{children}</p>;
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mb-[18px] border border-line bg-s1 px-5 py-4 text-[15px] text-muted">
      {children}
    </p>
  );
}

/** "The results" box after each case in the repositioning and archetype posts. */
export function Takeaway({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside className="my-7 rounded border border-l-[3px] border-line border-l-blue bg-s1 px-6 py-5 [&_p]:m-0 [&_p]:text-base [&_p+p]:mt-2.5">
      <span className="mb-2.5 block font-mono text-xs leading-none font-medium tracking-[0.08em] text-blue uppercase">
        {label}
      </span>
      {children}
    </aside>
  );
}

/** A brand mark that sits just above the following heading. */
export function BrandLogo({
  src,
  alt,
  tall = false,
}: {
  src: string;
  alt: string;
  tall?: boolean;
}) {
  const { width, height } = imageSize(src);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "brand-logo mt-14 block w-auto max-w-[180px] opacity-95",
        tall ? "brand-logo-tall -mb-12 h-12" : "-mb-[34px] h-[34px]",
      )}
    />
  );
}

export function Pullquote({ cite, children }: { cite: string; children: ReactNode }) {
  return (
    <blockquote className={blockquoteClass}>
      {children}
      <footer className="font-mono text-[13px] leading-[1.4] text-muted">{cite}</footer>
    </blockquote>
  );
}

export function References({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 border-t border-line pt-5 text-sm text-muted [&_ol]:pl-[18px]">
      {children}
    </div>
  );
}

export function Facts({ children }: { children: ReactNode }) {
  return (
    <dl className="mt-6 mb-10 grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-px border border-line bg-line">
      {children}
    </dl>
  );
}

export function Fact({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="bg-s1 px-5 py-[18px]">
      <dt className="font-mono text-xs leading-[1.4] text-muted">{term}</dt>
      <dd className="mt-1.5 text-[15px]">{children}</dd>
    </div>
  );
}

/** Two-column book list (one column on small screens). */
export function Shelf({ children }: { children: ReactNode }) {
  return <div className="[&>ul]:columns-1 [&>ul]:gap-8 sm:[&>ul]:columns-2">{children}</div>;
}

const captionClass = "px-0.5 pt-2 font-mono text-xs leading-[1.5] text-muted";

/** The floated portrait on About; full width on narrow screens. */
export function Portrait({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  const { width, height } = imageSize(src);
  return (
    <figure className="m-0 mb-5 w-full max-w-[320px] xs:float-right xs:mt-1.5 xs:mb-4 xs:ml-7 xs:w-[min(42%,300px)]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        sizes="(max-width: 560px) 320px, 300px"
        className="block h-auto w-full border border-line"
      />
      <figcaption className={captionClass}>{caption}</figcaption>
    </figure>
  );
}

/** A full-width still image with a caption. */
export function Still({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  const { width, height } = imageSize(src);
  return (
    <figure className="m-0 mt-2 mb-7">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 760px) 100vw, 720px"
        className="block h-auto w-full border border-line"
      />
      <figcaption className={captionClass}>{caption}</figcaption>
    </figure>
  );
}

/** A headline outcome number on Pitchcraft. */
export function PitchWin({ value, children }: { value: string; children: ReactNode }) {
  return (
    <div className="my-7 flex flex-wrap items-end gap-6 border border-l-[3px] border-line border-l-spark bg-s1 px-7 py-6">
      <span className="font-disp text-[clamp(48px,7vw,84px)] leading-[0.9] font-extrabold tracking-[-0.03em] text-spark font-stretch-[112%]">
        {value}
      </span>
      <span className="max-w-[36ch] pb-1.5 font-mono text-sm leading-[1.5] font-medium text-ink">
        {children}
      </span>
    </div>
  );
}
