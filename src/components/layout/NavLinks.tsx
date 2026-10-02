"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { articles } from "@/content/articles/meta";
import { NAV } from "@/content/site";
import { cn } from "@/lib/cn";

interface NavLinksProps {
  bmHref: string;
  /** Extra classes for each link, used by the mobile menu for larger tap targets. */
  linkClassName?: string;
  onNavigate?: () => void;
}

const articlePaths = new Set(articles.map((a) => `/${a.slug}/`));

/** The primary links. A section stays highlighted on its child pages: case studies, articles. */
export function NavLinks({ bmHref, linkClassName, onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const isCurrent = (href: string) =>
    pathname === href ||
    (href === "/work/" && pathname.startsWith("/work/")) ||
    (href === "/writing/" && articlePaths.has(pathname));

  return (
    <>
      {NAV.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          onClick={onNavigate}
          aria-current={isCurrent(href) ? "page" : undefined}
          className={cn(
            "text-muted no-underline hover:text-ink focus-visible:text-ink aria-[current=page]:text-ink",
            linkClassName,
          )}
        >
          {label}
        </Link>
      ))}
      <a
        href={bmHref}
        target="_blank"
        rel="noopener"
        onClick={onNavigate}
        className={cn("text-bmp no-underline", linkClassName)}
      >
        BrandMultiplier ↗
      </a>
    </>
  );
}
