// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { Era, Gallery, WorkCard } from "@/types/content";

export const workCards: WorkCard[] = [
  {
    client: "Ledger",
    sector: "Blockchain hardware",
    metric: "+20% monthly sales YoY",
    detail: "Through the industry's worst downturn. Two sub-brands built from scratch.",
    slug: "ledger",
    era: "crc",
    hasPage: true,
    art: {
      src: "/assets/img/work/ledger/in-context-2.jpg",
      alt: "Ledger Stax devices held in a hand",
    },
  },
  {
    client: "BetterCloud",
    sector: "B2B SaaS",
    metric: "25% market share regained",
    detail: "From Gartner Visionary to Gartner Leader.",
    slug: "bettercloud",
    era: "crc",
    hasPage: true,
    art: {
      src: "/assets/img/work/bettercloud/card.jpg",
      alt: "Altitude, BetterCloud's customer conference, New York",
    },
  },
  {
    client: "Tria Beauty",
    sector: "Consumer technology",
    metric: "+63% website revenue YoY",
    detail: "Referral revenue up 600%+. Messaging moved from the device to the transformation.",
    slug: "tria-beauty",
    era: "crc",
    hasPage: true,
    art: {
      src: "/assets/img/work/tria-beauty/card-product.jpg",
      alt: "The Tria hair-removal laser in use",
    },
  },
  {
    client: "Hard Rock Cafe International",
    sector: "Global sweepstakes",
    metric: "+15% in-store traffic",
    detail: "The Mystery Tour, and a Telly Award. Also the first Hard Rock website.",
    slug: "hard-rock-cafe",
    era: "origin",
    hasPage: true,
    art: {
      src: "/assets/img/work/hard-rock-cafe/rhn-cover.jpg",
      alt: "Rock Hard News cover",
    },
  },
  {
    client: "Disney",
    sector: "Disney Vacation Club repositioning",
    metric: "+38% memberships in 90 days",
    detail:
      "Inquiries and bookings up 50% in the first 14 days; growth held at +30% YoY for 18 months. Plus copy across the parks. Before any of it: the canoes.",
    slug: "disney",
    era: "origin",
    hasPage: true,
    art: {
      src: "/assets/img/work/disney/vacation-magic-cover.jpg",
      alt: "Vacation Magic, the Disney Vacation Club newsletter",
    },
  },
  {
    client: "Intel",
    sector: "Global product launch",
    metric: "+25% sales & online conversions",
    detail: "Core M, the Jim Parsons campaign and #ConflictFree on Intel.com.",
    slug: "intel",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/intel/core-m.jpg",
      alt: "Intel Core M launch page",
    },
  },
  {
    client: "Nickelodeon",
    sector: "Kids' Choice Awards app",
    metric: "+20% engagement YoY",
    detail: "A gamified voting app with a featured spot in the App Store.",
    slug: "nickelodeon-kids-choice-awards",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/nickelodeon/kca.jpg",
      alt: "Nickelodeon Kids' Choice Awards app",
    },
  },
  {
    client: "Google",
    sector: "Project Re:Brief",
    metric: "Cannes Cyber Lion",
    detail: "Four classic campaigns rebuilt for the modern web.",
    slug: "google-project-rebrief",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/google/rebrief.jpg",
      alt: "Google Project Re:Brief",
    },
  },
  {
    client: "Sony",
    sector: "Connected World launch",
    metric: "33 languages, one launch",
    detail: "Companion site for Sony's global campaign, from IFA Berlin to CES.",
    slug: "sony-connected-world",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/sony/connected-world.jpg",
      alt: "Sony Connected World",
    },
  },
  {
    client: "Microsoft",
    sector: "Retail promotion",
    metric: "+18% online conversions",
    detail: "Sign-ups and purchases beat every previous quarter.",
    slug: "microsoft",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/microsoft/concept.jpg",
      alt: "Microsoft retail campaign concept",
    },
  },
  {
    client: "USA Today",
    sector: "News relaunch",
    metric: "FWA Site of the Day",
    detail: "One of America's most-read news sites, re-imagined for how people consume news now.",
    slug: "usa-today",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/usa-today/card.jpg",
      alt: "USA Today relaunch case study",
    },
  },
  {
    client: "Broadway.com",
    sector: "iPad app",
    metric: "Broadway, on the iPad",
    detail:
      "The best of Broadway.com, refined for touch: shows, videos, and a clean, sophisticated visual personality.",
    slug: "broadway",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/broadway/card.jpg",
      alt: "Broadway.com iPad app case study",
    },
  },
  {
    client: "Wacom",
    sector: "Product site reinvention",
    metric: "A new kind of product site",
    detail:
      "An experiential site that lets you feel what it's like to own the product, with a humanised product finder.",
    slug: "wacom",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/wacom/card.jpg",
      alt: "The new Wacom.com case study",
    },
  },
  {
    client: "EA",
    sector: "Madden Ultimate Team",
    metric: "A billion-dollar franchise, on the web",
    detail:
      "Card packs, storefront, auction block and data visualizations in one interface familiar to console gamers.",
    slug: "ea",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/ea/card.jpg",
      alt: "EA Madden Ultimate Team case study",
    },
  },
  {
    client: "Google",
    sector: "Ramayana",
    metric: "Chrome's launch in Asia",
    detail:
      "An interactive retelling of the epic, with OgilvyOne: handcrafted artwork, digital physics, five chapters across multiple Chrome windows.",
    slug: "google-ramayana",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/google-ramayana/card.jpg",
      alt: "Google Ramayana case study",
    },
  },
  {
    client: "The Future of Airline Websites",
    sector: "Creative exploration",
    metric: "Three airlines called within ten days",
    detail:
      "A what-if for online travel booking: intelligent, aware, suggestive. Conceived, written and produced by Chris at Fantasy Interactive.",
    slug: "airline",
    era: "agency",
    hasPage: true,
    art: {
      src: "/assets/img/work/airline/card.jpg",
      alt: "The Future of Airline Websites",
    },
  },
  {
    client: "Apto Solutions",
    sector: "IT asset disposition",
    metric: "+41% revenue YoY",
    detail: "The founders' story, finally told without the founders.",
    slug: "apto-solutions",
    era: "crc",
    hasPage: true,
    art: {
      src: "/assets/img/work/apto-solutions/card.jpg",
      alt: "Pages from the Apto Solutions messaging brief",
    },
  },
  {
    client: "Remark Growth Marketing",
    sector: "Agency",
    metric: "+36% revenue YoY",
    detail: "+87% page views and +44% lead conversions after the rebuild.",
    slug: "remark-growth-marketing",
    era: "crc",
    hasPage: true,
    art: {
      src: "/assets/img/work/remark-growth-marketing/card.jpg",
      alt: "Pages from the Remark messaging brief",
    },
  },
  {
    client: "American Red Cross",
    sector: "Donor campaign",
    metric: "+30% blood donations",
    detail: "Year over year, from one messaging campaign.",
    slug: "american-red-cross",
    era: "agency",
    hasPage: false,
    art: {
      src: "/assets/img/work/american-red-cross/card.jpg",
      alt: "American Red Cross",
    },
  },
];

/** The eight cards on the Home grid, in order: strong numbers and real art. */
export const homeWorkSlugs: string[] = [
  "ledger",
  "bettercloud",
  "tria-beauty",
  "hard-rock-cafe",
  "disney",
  "intel",
  "nickelodeon-kids-choice-awards",
  "google-project-rebrief",
];

export const eras: { value: Era | "all"; label: string }[] = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "crc",
    label: "CRC",
  },
  {
    value: "agency",
    label: "Agency years",
  },
  {
    value: "origin",
    label: "Origin",
  },
];

/** Archive galleries shown under the card grid on /work/. */
export const workGalleries: Gallery[] = [
  {
    heading: "Disney Vacation Club",
    intro:
      "<i>Vacation Magic</i>, the international newsletter, photographed from the archive: the cover, the club news, the resort pages, the member stories.",
    items: [
      {
        src: "/assets/img/work/disney/vacation-magic-cover.jpg",
        caption: "Vacation Magic, cover",
      },
      {
        src: "/assets/img/work/disney/spread-1.jpg",
        caption: "Club News spread",
      },
      {
        src: "/assets/img/work/disney/spread-2.jpg",
        caption: "Old Key West and Vero Beach",
      },
      {
        src: "/assets/img/work/disney/spread-3.jpg",
        caption: "Hilton Head Island and BoardWalk Villas",
      },
      {
        src: "/assets/img/work/disney/spread-4.jpg",
        caption: "Making Magic: member stories",
      },
      {
        src: "/assets/img/work/disney/old-key-west.jpg",
        caption: "Disney's Old Key West Resort page",
      },
      {
        src: "/assets/img/work/disney/boardwalk.jpg",
        caption: "Disney's BoardWalk Villas page",
      },
      {
        src: "/assets/img/work/disney/anniversary.jpg",
        caption: "Happy Anniversary, Disney Vacation Club",
      },
      {
        src: "/assets/img/work/disney/remember-the-magic.jpg",
        caption: "Remember the Magic: the back page",
      },
    ],
  },
  {
    heading: "Microsoft Store",
    intro:
      "Retail work from the archive: an Xbox table on the store floor with the copy sketched in marker before it was set in type, the back-to-school concepts, a holiday e-blast, the NYC Mixer site.",
    items: [
      {
        src: "/assets/img/work/microsoft/xbox-table.jpg",
        caption: "Xbox One X and One S table, in store: the copy roughed in by hand",
      },
      {
        src: "/assets/img/work/microsoft/xbox-table-detail.jpg",
        caption: "The table, detail",
      },
      {
        src: "/assets/img/work/microsoft/bts-artist.jpg",
        caption: "Back-to-school concept: Artist",
      },
      {
        src: "/assets/img/work/microsoft/bts-collette.jpg",
        caption: "Back-to-school concept: Collette",
      },
      {
        src: "/assets/img/work/microsoft/bts-easton.jpg",
        caption: "Back-to-school concept: Easton",
      },
      {
        src: "/assets/img/work/microsoft/bts-engineer.jpg",
        caption: "Back-to-school concept: Engineer",
      },
      {
        src: "/assets/img/work/microsoft/bts-mikaila.jpg",
        caption: "Back-to-school concept: Mikaila",
      },
      {
        src: "/assets/img/work/microsoft/ala-moana.jpg",
        caption: "Holiday e-blast, Ala Moana Center",
      },
      {
        src: "/assets/img/work/microsoft/mixer-site.jpg",
        caption: "NYC Mixer site",
      },
    ],
  },
  {
    heading: "Broadway.com, on the iPad",
    intro:
      "From the case study: the idea sheet, the shows grid, a show page, the featured news layer, and the app in both orientations.",
    items: [
      {
        src: "/assets/img/work/broadway/sketchpad.jpg",
        caption: "The idea sheet: home page, sketched",
      },
      {
        src: "/assets/img/work/broadway/shows.jpg",
        caption: "Shows",
      },
      {
        src: "/assets/img/work/broadway/show-detail.jpg",
        caption: "Show page: Chicago",
      },
      {
        src: "/assets/img/work/broadway/ipad.jpg",
        caption: "Featured news",
      },
      {
        src: "/assets/img/work/broadway/layer.jpg",
        caption: "The news layer",
      },
      {
        src: "/assets/img/work/broadway/orientation.jpg",
        caption: "Landscape and portrait",
      },
    ],
  },
  {
    heading: "Madden Ultimate Team",
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
];
