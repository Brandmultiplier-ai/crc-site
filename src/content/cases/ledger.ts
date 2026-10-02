// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const ledger: CaseStudy = {
  slug: "ledger",
  client: "Ledger",
  sector: "Blockchain hardware and digital value",
  eyebrow: "Case study · Blockchain hardware",
  title: "Two new brands, one voice, and a company built to outlast the weather.",
  result: "+20%",
  resultLabel: "monthly sales, year over year, during crypto winter",
  lede: "Ledger, the hardware-wallet company, grew monthly sales 20% year over year through its industry's worst downturn after CRC rebuilt its brand foundation and built two sub-brands from scratch.",
  meta: [
    {
      label: "Client",
      value: "Ledger",
    },
    {
      label: "Sector",
      value: "Blockchain hardware and digital-value services",
    },
    {
      label: "Work",
      value: "Brand foundation, positioning, naming, two sub-brands, launch and UX copy",
    },
    {
      label: "Engagement",
      value: "Global stakeholder Rumble, brand playbook, sub-brand build-outs",
    },
  ],
  sections: [
    {
      heading: "The bottleneck",
      paragraphs: [
        "Ledger had already won the hard part. Its hardware wallet was the trusted way to hold digital value, and the company had grown from a scrappy startup into an organization with many departments. What it lacked was a single voice.",
        "Each team had developed its own vocabulary in the absence of anything official, and the brand still read as a hardware maker at the moment Ledger wanted to become something larger: a multi-line company that could add new services and hold its footing while the market convulsed.",
        "Ledger had the inverse of the founder problem: too many heads, and no single story any of them could tell the same way. The fix was the same.",
        "The product didn't need to change. The story did.",
      ],
    },
    {
      heading: "What we extracted and built",
      paragraphs: [
        "We started with a Rumble: one collaborative session with stakeholders from across the globe, followed by interviews and a long stretch of synthesis. That work produced consensus on the things that usually stay implicit—vision, mission, focal points, what makes Ledger different. Teams got closer because they finally agreed on what they were saying.",
        "From that came a brand playbook: the foundation for a master brand that positioned Ledger in digital value and in what we called WebFuture: secure, trusted ownership of digital value and property, carried into the future. Then the positioning work: the audiences that mattered most, what they wanted, what frightened them, rendered as detailed personas.",
        "Then we built. Ledger Quest, a previously unnamed learning experience that teaches digital value and Web3 through gamified quests, got a name, a personality and a mascot, and we wrote campaigns and copy for it, down to the UX microcopy. Ledger Trust Services, the company's protection services around the hardware wallet, got its own brand playbook and messaging. We also wrote campaigns and copy for the Ledger Stax launch, and revised the flagship banner around a single idea: digital freedom, and taking control of it.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "Ledger came out of the engagement with a brand foundation, two fully developed sub-brands, and a voice its teams could use without a translator. The vocabulary that had fragmented across departments became one lexicon.",
        "The numbers held through a market that punished almost everyone: monthly sales rose 20% year over year during the downturn.",
      ],
    },
  ],
  quote: {
    text: "I really like what you've done for us. It's right on the money.<br>I have a lot of respect for what you do.",
    name: "Ian Rogers",
    role: "Chief Experience Officer, Ledger",
  },
  next: {
    slug: "apto-solutions",
    client: "Apto Solutions",
    metric: "+41% revenue YoY",
  },
  logo: "ledger.svg",
  heroLoop: "ledger-hero-loop",
  galleries: [
    {
      heading: "In context.",
      intro: "Product and campaign work from the engagement.",
      items: [
        {
          src: "/assets/img/work/ledger/in-context-1.jpg",
          caption: "Ledger Nano and Ledger Live",
        },
        {
          src: "/assets/img/work/ledger/in-context-2.jpg",
          caption: "Ledger Stax",
        },
        {
          src: "/assets/img/work/ledger/in-context-3.jpg",
          caption: "Ledger Stax, in hand",
        },
        {
          src: "/assets/img/work/ledger/quest.jpg",
          caption: "Ledger Quest reward cards",
        },
        {
          src: "/assets/img/work/ledger/ledger-live.jpg",
          caption: "Ledger Live",
        },
        {
          src: "/assets/img/work/ledger/quest-site.jpg",
          caption: "Ledger Quest site",
        },
      ],
    },
  ],
  videos: [
    {
      file: "ledger-in-context",
      title: "Ledger Stax",
      description:
        "The Stax launch: the master brand's voice on a new product, from the first line to the last frame.",
      seconds: 30,
    },
    {
      file: "ledger-live",
      title: "Ledger Live",
      description:
        "The app relaunch: one place for digital value, written for people who had never held any.",
      seconds: 45,
    },
    {
      file: "ledger-quest",
      title: "Ledger Quest",
      description:
        "The sub-brand from the ground up: name, personality, mascot, and the copy that makes learning feel like play.",
      seconds: 53,
    },
  ],
};
