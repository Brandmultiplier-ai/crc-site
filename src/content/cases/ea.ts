// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const ea: CaseStudy = {
  slug: "ea",
  client: "EA SPORTS",
  sector: "Video games",
  eyebrow: "Case study · Agency years",
  title: "Madden Ultimate Team, from the console to the browser.",
  result: "Web",
  resultLabel: "interface for a billion-dollar franchise: packs, storefront, auction block, lineup",
  lede: "EA SPORTS wanted to extend the Madden NFL console experience to the web, and tapped Fi as the starting team. The result was maddenultimateteam.com: card packs, a storefront, an auction block and data visualizations in one interface that felt familiar to console gamers. Chris Rubin wrote, edited and produced the case study; some of his copy suggestions made it into the product.",
  meta: [
    {
      label: "Client",
      value: "EA SPORTS, Electronic Arts",
    },
    {
      label: "Sector",
      value: "Video games",
    },
    {
      label: "Work",
      value:
        "The Madden Ultimate Team web interface: strategy and UX, design, the cards, the owner's box, the auction block",
    },
    {
      label: "Role",
      value:
        "Writer, editor and producer of the case study, Fantasy Interactive; copy suggestions in the product",
    },
  ],
  sections: [
    {
      heading: "The brief",
      paragraphs: [
        "Electronic Arts earned more than $4 billion in net revenue in fiscal 2012, over a billion of it digital, and its expertise was rooted in the console. Bringing a deeply rich console experience to the web in a meaningful way was the challenge: a different device, desktop instead of TV, that still had to look and feel familiar to Madden players while offering new features.",
        "The UX problem was integration. Card packs, a storefront, an auction block, data visualizations and help screens, often only marginally related, all had to co-exist in one unified interface. EA gave Fi the reins, and the trust made it a collaboration from day one.",
      ],
    },
    {
      heading: "What we built",
      paragraphs: [
        "The cards were the heart of it. Old-school trading cards as the visual metaphor for managing a team, seven card types (player, coach, stadium, playbooks, injury recovery, uniforms, contract extension), each designed front to back with rating, position, photo, name and team. Borders made from solid gold.",
        "The owner's box, where you open new packs, built to match the childhood memory of tearing open a fresh pack: roll over, tear, discover, act. Contracts and injuries to manage. Drag-and-drop lineup configuration so the right personnel were always on the field. An auction-style marketplace for buying, selling and trading, with a countdown timer for every lot.",
        "This was the second case study I wrote and produced for Fi. The narrative structure from the first was holding.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "The ultimate NFL video-game franchise arrived on the web in a way built to thrill both gamers and fans. Madden Ultimate Team became a major contribution to the franchise and its future.",
      ],
    },
  ],
  next: {
    slug: "google-ramayana",
    client: "Google",
    metric: "Chrome's launch in Asia",
  },
  logo: "ea.png",
  galleries: [
    {
      heading: "The interface.",
      intro:
        "From the case study: the owner's box, the cards front to back, the packs, the auction block, a card profile, and the UX playbook.",
      items: [
        {
          src: "/assets/img/work/ea/owners-box.jpg",
          caption: "The owner's box",
        },
        {
          src: "/assets/img/work/ea/cards.jpg",
          caption: "Cards, front to back",
        },
        {
          src: "/assets/img/work/ea/card-packs.jpg",
          caption: "Packs",
        },
        {
          src: "/assets/img/work/ea/auctions.jpg",
          caption: "The auction block",
        },
        {
          src: "/assets/img/work/ea/card-profile.jpg",
          caption: "Card profile",
        },
        {
          src: "/assets/img/work/ea/playbook.jpg",
          caption: "The UX playbook",
        },
      ],
    },
  ],
};
