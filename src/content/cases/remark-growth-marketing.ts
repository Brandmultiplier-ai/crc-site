// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const remarkGrowthMarketing: CaseStudy = {
  slug: "remark-growth-marketing",
  client: "Remark Growth Marketing",
  sector: "Marketing agency",
  eyebrow: "Case study · Agency",
  title: "A marketing agency that reimagined how it marketed itself.",
  result: "+36%",
  resultLabel: "revenue, year over year",
  lede: "Remark Growth Marketing grew revenue 36% year over year, with page views up 87% and lead conversions up 44%, after CRC rebuilt its brand identity, positioning and website narrative.",
  meta: [
    {
      label: "Client",
      value: "Remark Growth Marketing",
    },
    {
      label: "Sector",
      value: "Growth marketing agency",
    },
    {
      label: "Work",
      value: "Brand identity, positioning, website narrative, naming of proprietary methods",
    },
    {
      label: "Engagement",
      value: "Extraction, Foundational Messaging Brief, persona study, relaunch",
    },
  ],
  sections: [
    {
      heading: "The bottleneck",
      paragraphs: [
        "Remark had years of expertise and a client list built almost entirely on referrals and word of mouth. That works until it doesn't. To scale, the agency needed a wider market to know what it did and why that was different, and its own story had never been given the treatment it gave clients.",
        "Marketing is a sharp-elbowed category. Everyone in it claims strategy and creativity. Remark needed a position it could hold.",
      ],
    },
    {
      heading: "What we extracted and built",
      paragraphs: [
        "Interviews, research and data analysis first, to find the strengths that reflected what Remark actually was. Those became the focal pillars of a Foundational Messaging Brief and a position built on a named method and a specific buyer, in a category where everyone claims strategy.",
        "A target-audience persona study followed: the behaviors, pain points and motivations of the clients Remark most wanted, so both the messaging and Remark's own performance marketing could aim at the same people.",
        "Then the website narrative, written to make the right prospect want to reach out immediately. We also named Remark's proprietary tools and methods so they fit the new identity and lexicon, which gave the agency something to own that competitors couldn't copy.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "The refreshed identity and website put Remark on firmer ground in its market.",
        "Page views rose 87%. Lead conversions rose 44%. Revenue rose 36% year over year. Referrals never did that.",
      ],
    },
  ],
  quote: {
    text: "CRC comes through for us every time. Chris possesses that rare mix of creative flair and business acumen, which helps to ensure we meet our clients' growth objectives while providing real value, above and beyond the brief.",
    name: "Ash Geary",
    role: "CEO, Remark Growth Marketing",
  },
  next: {
    slug: "tria-beauty",
    client: "Tria Beauty",
    metric: "+63% website revenue YoY",
  },
  logo: "remark-growth-marketing.png",
  galleries: [
    {
      heading: "The paper trail.",
      intro: "Pages from the messaging brief.",
      items: [
        {
          src: "/assets/img/work/remark-growth-marketing/brief-1.jpg",
          caption: "Messaging brief",
        },
        {
          src: "/assets/img/work/remark-growth-marketing/brief-2.jpg",
          caption: "Messaging brief",
        },
        {
          src: "/assets/img/work/remark-growth-marketing/brief-3.jpg",
          caption: "Positioning pages",
        },
      ],
    },
  ],
};
