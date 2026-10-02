// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { BmPostGroup, WritingEntry } from "@/types/content";

/** The CRC pieces, in display order. */
export const writing: WritingEntry[] = [
  {
    path: "/why-some-brands-move-us/",
    title: "Why some brands move us",
    description:
      "Jung, the twelve archetypes, and why people love the brands they love. The essay that explains Movere.",
    byline: "Chris Rubin",
    year: "2023",
  },
  {
    path: "/5-successful-brand-repositioning-case-studies/",
    title: "Five brand repositionings that worked",
    description:
      "Domino's, Dove, Starbucks, Spotify, Old Spice: what each admitted, what each changed, and what happened next.",
    byline: "ChrisRubinCreativ Editorial",
    year: "2025",
  },
  {
    path: "/unlocking-utopia-the-innocent-archetype-in-branding-2/",
    title: "The Innocent: Coca-Cola, Dove, and the promise of a simpler world",
    description:
      "The archetype series, part one: what the Innocent promises, why Coke and Dove have held it for decades, and when it backfires.",
    byline: "Chris Rubin",
    year: "2023",
  },
  {
    path: "/embracing-the-maverick-rebel-archetypes-clout-in-branding/",
    title: "The Rebel: Harley-Davidson, Red Bull, Virgin, and the sale of defiance",
    description:
      "Part two: three brands that turned rule-breaking into a business, and the one condition that makes it fail.",
    byline: "Chris Rubin",
    year: "2023",
  },
  {
    path: "/7-brand-strategy-frameworks-that-drive-business-growth/",
    title: "Seven brand strategy frameworks, compared",
    description:
      "Positioning, the Brand Key, Keller's pyramid, Blue Ocean, Kapferer's prism, Aaker, BAV: what each is for and when to reach for it.",
    byline: "ChrisRubinCreativ Editorial",
    year: "2025",
  },
];

export const bmBlogIntro =
  "The founder work is on the BrandMultiplier blog. This is a reading order.";

/** BrandMultiplier blog reading order; paths are relative to the BrandMultiplier site. */
export const bmPostGroups: BmPostGroup[] = [
  {
    heading: "The founder's story problem",
    intro:
      'From <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7405394852714287105" target="_blank" rel="noopener">Story-Driven Growth, the BrandMultiplier newsletter</a>. Start at the top.',
    posts: [
      {
        path: "/blog/anatomy-of-a-founder-bottleneck",
        title: "Anatomy of a founder bottleneck",
        description:
          "A composite case: closing the win-rate gap between deals the founder is in and deals the founder is out of.",
        meta: "Story-Driven Growth",
      },
      {
        path: "/blog/the-identity-trap",
        title: "The identity trap: why founders won't leave the sales seat",
        description:
          "Process, budget and timing get the blame. Identity is the reason, and the fear of being replaceable runs backwards.",
        meta: "Story-Driven Growth",
      },
      {
        path: "/blog/the-compound-effect",
        title: "The compound effect",
        description:
          "Consulting deliverables start decaying the day they land. Narrative infrastructure compounds.",
        meta: "Story-Driven Growth",
      },
      {
        path: "/blog/measuring-narrative-infrastructure",
        title: "Measuring narrative infrastructure",
        description:
          "Four leading indicators, four lagging indicators and a four-tier maturity model, for reading the system before the outcomes confirm it.",
        meta: "Story-Driven Growth",
      },
      {
        path: "/blog/the-point-of-view-is-there-its-just-locked",
        title: "The point of view is there. It's just locked.",
        description:
          "April Dunford says B2B buyers need vendors with a point of view on AI's future. She's right. This is the layer underneath it.",
        meta: "Story-Driven Growth",
      },
      {
        path: "/blog/what-founders-become",
        title: "Founder to architect: the third option",
        description:
          "The opposite of founder dependency is architecture: what runs while you're out of the room, and what the ongoing role costs.",
        meta: "Story-Driven Growth",
      },
      {
        path: "/blog/the-ai-ready-founder",
        title: "AI-ready founders: five signals your edge is exposed",
        description:
          "The exposed asset is the advantage you never wrote down, and AI-readiness decays.",
        meta: "Story-Driven Growth",
      },
      {
        path: "/blog/exit-multiple-nobody-talks-about",
        title: "Founder dependency and exit value: five deal terms",
        description:
          "How founder dependency moves earnouts, escrow and retention, and what that does to the price.",
        meta: "Story-Driven Growth",
      },
    ],
  },
  {
    heading: "Myths, Machines, and Meaning",
    intro: "The trilogy where the archetype work on this site meets the machine.",
    posts: [
      {
        path: "/blog/myths-machines-and-meaning-the-symbiosis-of-anthropology-ai-and-brand-mythology",
        title: "The symbiosis of anthropology, AI and brand mythology",
        description:
          "The introduction: the most successful brands behave like shared myths, and what that means once the tools can read the myth.",
        meta: "Part one",
      },
      {
        path: "/blog/myths-machines-and-meaning-the-primal-code--unlocking-consumer-behavior-with-ai-and-archetypes",
        title: "The primal code",
        description:
          "Why the brands of the next decade will pair AI with the primal motivations of the people they serve.",
        meta: "Part two",
      },
      {
        path: "/blog/myths-machines-and-meaning-decoding-the-consumer-psyche",
        title: "Decoding the consumer psyche",
        description:
          "Machine learning and the Jungian archetypes, combined to find the unconscious drivers of behavior.",
        meta: "Part three",
      },
    ],
  },
];
