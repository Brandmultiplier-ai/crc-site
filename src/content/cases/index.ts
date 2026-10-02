import type { CaseStudy } from "@/types/content";

import { ledger } from "./ledger";
import { aptoSolutions } from "./apto-solutions";
import { bettercloud } from "./bettercloud";
import { remarkGrowthMarketing } from "./remark-growth-marketing";
import { triaBeauty } from "./tria-beauty";
import { hardRockCafe } from "./hard-rock-cafe";
import { intel } from "./intel";
import { nickelodeonKidsChoiceAwards } from "./nickelodeon-kids-choice-awards";
import { googleProjectRebrief } from "./google-project-rebrief";
import { sonyConnectedWorld } from "./sony-connected-world";
import { usaToday } from "./usa-today";
import { broadway } from "./broadway";
import { wacom } from "./wacom";
import { ea } from "./ea";
import { googleRamayana } from "./google-ramayana";
import { airline } from "./airline";
import { disney } from "./disney";
import { microsoft } from "./microsoft";

/** Every full case study, in library order. */
export const caseStudies: CaseStudy[] = [
  ledger,
  aptoSolutions,
  bettercloud,
  remarkGrowthMarketing,
  triaBeauty,
  hardRockCafe,
  intel,
  nickelodeonKidsChoiceAwards,
  googleProjectRebrief,
  sonyConnectedWorld,
  usaToday,
  broadway,
  wacom,
  ea,
  googleRamayana,
  airline,
  disney,
  microsoft,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
