// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const bettercloud: CaseStudy = {
  slug: "bettercloud",
  client: "BetterCloud",
  sector: "B2B SaaS",
  eyebrow: "Case study · B2B SaaS",
  title: "From Gartner Visionary to Gartner Leader.",
  result: "25%",
  resultLabel: "market share regained",
  lede: "BetterCloud, the SaaS management platform, regained 25% market share after CRC rebuilt its brand message with the leadership team; Gartner moved the company from Visionary to Leader.",
  meta: [
    {
      label: "Client",
      value: "BetterCloud",
    },
    {
      label: "Sector",
      value: "SaaS management, B2B software",
    },
    {
      label: "Work",
      value: "Brand identity, positioning, narrative",
    },
    {
      label: "Engagement",
      value: "Leadership-team extraction and message rebuild",
    },
  ],
  sections: [
    {
      heading: "The bottleneck",
      paragraphs: [
        "BetterCloud had a product its leadership could explain with precision. Gartner rated the company a Visionary.",
        "The message had grown up piecemeal, as messages do in fast-growing companies, and no longer matched the product. A leadership team this time, needing one story it could all tell.",
      ],
    },
    {
      heading: "What we extracted and built",
      paragraphs: [
        "The CRC process, run with the leadership team: extraction sessions to surface what the company believed about its market and its customers, then the synthesis that turns a room of strong opinions into one position everyone can defend.",
        "The output was a brand message built to outlast a campaign cycle, and the internal agreement that makes a message hold.",
        "Then it went on stage. Altitude is BetterCloud's customer conference, and the keynote experience was written and produced with Jesse and his team: the new message, told by the CEO, to the customers who'd decide whether it held.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "BetterCloud regained 25% market share, and moved from Gartner Visionary to Gartner Leader.",
        "The third beat came later, and quieter: BetterCloud was acquired by CoreStack, with Jesse still in the CEO's chair through the transaction. He stepped down once the deal was done. A message built to outlast a campaign cycle held through a market-share fight, a Gartner re-rating and an exit, which is the job it was built for.",
      ],
    },
  ],
  quote: {
    text: "The process allowed us to develop a more durable brand message than we would have been able to on our own.",
    name: "Jesse Levin",
    role: "then-CEO, BetterCloud",
  },
  next: {
    slug: "remark-growth-marketing",
    client: "Remark Growth Marketing",
    metric: "+36% revenue YoY",
  },
  logo: "bettercloud.svg",
  heroLoop: "bettercloud-hero-loop",
  galleries: [
    {
      heading: "Altitude.",
      intro: "BetterCloud's customer conference, where the message went on stage.",
      items: [
        {
          src: "/assets/img/work/bettercloud/atrium.jpg",
          caption: "Altitude, New York",
        },
        {
          src: "/assets/img/work/bettercloud/keynote.jpg",
          caption: "The keynote: Jesse Levin, CEO",
        },
        {
          src: "/assets/img/work/bettercloud/stage.jpg",
          caption: "The main stage",
        },
        {
          src: "/assets/img/work/bettercloud/panel.jpg",
          caption: "Customer panel",
        },
        {
          src: "/assets/img/work/bettercloud/room.jpg",
          caption: "A session in the room",
        },
      ],
    },
  ],
};
