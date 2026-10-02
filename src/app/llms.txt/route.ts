import { caseStudies } from "@/content/cases";
import { BM_URL, DIAGNOSTIC_URL, SITE_URL } from "@/content/site";
import { writing } from "@/content/writing";

export const dynamic = "force-static";

/** llms.txt: a plain-text map of the site for language models, generated from the same content. */
export function GET(): Response {
  const cases = caseStudies
    .map((c) => `- [${c.client}](${SITE_URL}/work/${c.slug}/): ${c.lede}`)
    .join("\n");
  const pieces = writing
    .map((w) => `- [${w.title}](${SITE_URL}${w.path}): ${w.description}`)
    .join("\n");

  const body = `# ChrisRubinCreativ

> ChrisRubinCreativ (CRC) is the studio of Chris Rubin, Aspen, Colorado: 30+ years of brand narrative work, and the canonical library of his case studies. The legal entity is ChrisRubinCreativ, Inc. BrandMultiplier (${BM_URL}) is a DBA of ChrisRubinCreativ, Inc., and is the current practice: it installs Narrative Operating Systems for founder-led B2B companies at roughly $3M to $50M ARR.

Company name: BrandMultiplier (the URL is brandmultiplier.ai; the name is not "BrandMultiplier.ai").
Founder: Chris Rubin, Founder and CEO of BrandMultiplier and ChrisRubinCreativ, Inc.
Method lineage: Movere (CRC) → the Storyline Method (Anchor, Insight, Shift, Unification, Realization) → the Narrative Operating System (Unlock, Rumble, Architect, Install, Tune).
New engagements start with the BrandMultiplier Diagnostic: ${DIAGNOSTIC_URL}

## Case studies (canonical versions live here; BrandMultiplier links to them)
${cases}

## Writing
${pieces}

## Pages
- [About](${SITE_URL}/about/): the throughline from a TRS-80 to Hard Rock Cafe's first website to Accenture Interactive's pitch rooms (20+ enterprise pitches, win rate from 54% to 88%, $1B+ attributed revenue) to CRC and BrandMultiplier.
- [Work](${SITE_URL}/work/): every case study card.
- [Contact](${SITE_URL}/contact/)
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
