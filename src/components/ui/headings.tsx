import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** The large section label ("Selected work.", "Writing."). */
export const sectionHeadingClass =
  "font-disp text-section leading-[1.1] font-bold tracking-[-0.01em] text-ink font-stretch-[112%]";

export function SectionHeading({
  children,
  as: Tag = "h2",
  className,
}: {
  children: ReactNode;
  as?: "h2" | "p";
  className?: string;
}) {
  return <Tag className={cn(sectionHeadingClass, "mb-7", className)}>{children}</Tag>;
}

/** A section heading with a "more" link aligned to its baseline. */
export function SectionHead({
  title,
  more,
}: {
  title: ReactNode;
  more?: { href: string; label: string; external?: boolean };
}) {
  const moreClass =
    "-my-3.5 inline-block py-3.5 font-mono text-sm leading-none font-medium text-muted no-underline hover:text-ink";
  return (
    <div className="mb-7 flex flex-wrap items-baseline justify-between gap-4">
      <h2 className={cn(sectionHeadingClass, "m-0")}>{title}</h2>
      {more &&
        (more.external ? (
          <a href={more.href} target="_blank" rel="noopener" className={moreClass}>
            {more.label}
          </a>
        ) : (
          <Link href={more.href} className={moreClass}>
            {more.label}
          </Link>
        ))}
    </div>
  );
}

/** Page title block used by every non-home page. */
export function PageHead({
  title,
  lede,
  size = "page",
}: {
  title: ReactNode;
  lede?: ReactNode;
  /** "article" uses a smaller cap so long titles balance onto two even lines. */
  size?: "page" | "article";
}) {
  return (
    <div className="max-w-[980px] pt-[clamp(32px,6vw,72px)] pb-6">
      <h1
        className={cn(
          "mb-5 font-disp leading-[0.98] font-extrabold tracking-[-0.025em] font-stretch-[118%]",
          size === "page" ? "text-page" : "text-[clamp(32px,4.2vw,50px)]",
        )}
      >
        {title}
      </h1>
      {lede && <p className="m-0 max-w-[58ch] text-lede text-balance text-muted">{lede}</p>}
    </div>
  );
}

export function ScrollHint({ children = "Scroll →" }: { children?: ReactNode }) {
  return <p className="mt-4 font-mono text-[13px] leading-none text-muted">{children}</p>;
}

/** Small mono label above a block ("BrandMultiplier · the Diagnostic"). */
export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mb-7 font-mono text-sm leading-none font-medium text-blue", className)}>
      {children}
    </p>
  );
}
