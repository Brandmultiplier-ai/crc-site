// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const intel: CaseStudy = {
  slug: "intel",
  client: "Intel",
  sector: "Consumer technology",
  eyebrow: "Case study · Agency years",
  title: "From the chip inside to the experience it makes possible.",
  result: "+25%",
  resultLabel: "sales and online conversions, Intel.com campaign work",
  lede: "Intel.com's home page and its two hottest product sections were rebuilt around a new global campaign, a new flagship processor and a public cause; sales and online conversions rose 25%. Chris Rubin led the creative copy and messaging as Associate Creative Director on the Intel account at Razorfish.",
  meta: [
    {
      label: "Client",
      value: "Intel",
    },
    {
      label: "Sector",
      value: "Consumer technology, processors",
    },
    {
      label: "Work",
      value:
        "Campaign creative and messaging for Intel.com: the Jim Parsons campaign, the Core M launch, the #ConflictFree social action campaign",
    },
    {
      label: "Role",
      value: "Associate Creative Director, Razorfish, on the Intel account",
    },
  ],
  sections: [
    {
      heading: "The shift",
      paragraphs: [
        "Intel had been known for half a century as the chip inside the machine. New leadership changed the directive: stop talking about the processor and start talking about the experiences the Intel-powered tools and toys create for the people using them.",
        "They signed Jim Parsons as the face of the campaign and asked our team to rebrand Intel.com to welcome the traffic the campaign would drive. The messaging revolved around a few anchors: “a lot's changed,” “upgrade,” “a world of new experiences.”",
        "The catch: the TV spots were still shooting. We had to build the online experience so the handoff from the screen to the site felt seamless, without ever seeing the spots.",
      ],
    },
    {
      heading: "What we built",
      paragraphs: [
        "Intel.com's home page, fully redesigned, with the campaign's threads running through every headline. Then the product landing pages for the two hottest categories, 2 in 1s and All-in-Ones, redesigned to coincide with the campaign.",
        "The Core M launch. A new flagship processor on a 14nm process: more power from less energy, faster response, far longer battery life, purpose-built for mobile devices. We put sharp, propulsive headlines on the home page and in external media, then a long-scroll product section that delivered the whole story in one place. The audience had zero tolerance for marketing fluff, so every claim sat on a proof point, footnoted for the most discerning readers.",
        "In Pursuit of Conflict-Free. Intel's CEO had set the company on a mission to eliminate conflict minerals from its supply chain and invest responsibly in the Congo. We launched the social action campaign's outpost on Intel.com: a content strategy puzzle first, then the full narrative, headlines and calls to action, built to draw a reader in fast, inform them clearly and give them easy ways to get involved. The #ConflictFree hashtag carried the conversation onward.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "Sales and online conversions rose 25% across the campaign work.",
        "The lesson carried forward: a shift in what a brand talks about, from the thing it makes to what the thing makes possible, changes every page the brand owns. The copy is where the shift becomes visible, felt, and experienced.",
      ],
    },
  ],
  next: {
    slug: "ledger",
    client: "Ledger",
    metric: "+20% monthly sales YoY",
  },
  logo: "intel.png",
  galleries: [
    {
      heading: "The pages.",
      intro:
        "Intel.com as it shipped: the campaign home page, the 2 in 1 and All-in-One sections, the Core M launch, and the #ConflictFree outpost.",
      items: [
        {
          src: "/assets/img/work/intel/home-1.jpg",
          caption: "Intel.com home page, campaign",
        },
        {
          src: "/assets/img/work/intel/home-2.jpg",
          caption: "Intel.com home page, continued",
        },
        {
          src: "/assets/img/work/intel/2in1-1.jpg",
          caption: "2 in 1 product section",
        },
        {
          src: "/assets/img/work/intel/2in1-2.jpg",
          caption: "2 in 1, continued",
        },
        {
          src: "/assets/img/work/intel/aio-1.jpg",
          caption: "All-in-One product section",
        },
        {
          src: "/assets/img/work/intel/core-m-1.jpg",
          caption: "Core M launch page",
        },
        {
          src: "/assets/img/work/intel/core-m-2.jpg",
          caption: "Core M, proof points",
        },
        {
          src: "/assets/img/work/intel/conflict-free-1.jpg",
          caption: "In Pursuit of Conflict-Free",
        },
        {
          src: "/assets/img/work/intel/conflict-free-2.jpg",
          caption: "Conflict-Free, continued",
        },
      ],
      variant: "tall",
    },
  ],
};
