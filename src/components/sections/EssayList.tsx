import Link from "next/link";
import type { ReactNode } from "react";
import { writing } from "@/content/writing";
import { cn } from "@/lib/cn";

export const essayGridClass =
  "grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-px border border-line bg-line";

const tileClass = "block bg-s1 p-7 no-underline hover:bg-s2 focus-visible:bg-s2";

export function EssayTile({
  title,
  description,
  meta,
  small = false,
}: {
  title: ReactNode;
  description: ReactNode;
  meta: ReactNode;
  small?: boolean;
}) {
  return (
    <>
      <h3
        className={cn(
          "mb-2 font-disp leading-[1.1] font-bold font-stretch-[112%]",
          small ? "text-[22px]" : "text-[26px]",
        )}
      >
        {title}
      </h3>
      <p className="m-0 text-[15px] text-muted">{description}</p>
      <p className="m-0 mt-3.5 font-mono text-xs leading-[1.4] text-muted">{meta}</p>
    </>
  );
}

/** The CRC writing index, as tiles. */
export function EssayList() {
  return (
    <div className={essayGridClass}>
      {writing.map((w) => (
        <Link key={w.path} href={w.path} className={tileClass}>
          <EssayTile title={w.title} description={w.description} meta={`${w.byline} · ${w.year}`} />
        </Link>
      ))}
    </div>
  );
}

export { tileClass as essayTileClass };
