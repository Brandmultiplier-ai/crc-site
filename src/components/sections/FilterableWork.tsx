"use client";

import { useState } from "react";
import { eras, workCards } from "@/content/work";
import type { Era } from "@/types/content";
import { WorkCard, workGridClass } from "./WorkCard";

/** Cards in the first row on wide screens, which are above the fold. */
const FIRST_ROW = 3;

/** The full library with the era filter (All, CRC, Agency years, Origin). */
export function FilterableWork() {
  const [filter, setFilter] = useState<Era | "all">("all");

  return (
    <>
      <h2 className="sr-only">Case studies</h2>
      <div role="group" aria-label="Filter by era" className="mb-6 flex flex-wrap gap-2">
        {eras.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
            className="min-h-11 rounded-full border border-line bg-transparent px-3 font-mono text-[13px] leading-none font-medium text-muted aria-pressed:border-blue aria-pressed:text-ink sm:min-h-0 sm:py-2"
          >
            {label}
          </button>
        ))}
      </div>
      <div className={workGridClass}>
        {workCards.map((card, i) => (
          <WorkCard
            key={card.slug}
            card={card}
            hidden={filter !== "all" && card.era !== filter}
            eager={i < FIRST_ROW}
          />
        ))}
      </div>
    </>
  );
}
