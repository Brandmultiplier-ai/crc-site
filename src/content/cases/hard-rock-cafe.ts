// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const hardRockCafe: CaseStudy = {
  slug: "hard-rock-cafe",
  client: "Hard Rock Cafe International",
  sector: "Hospitality and entertainment",
  eyebrow: "Case study · Origin story",
  title: "The first Hard Rock website, a global sweepstakes, two magazines and a Telly.",
  result: "+15%",
  resultLabel: "in-store traffic, year over year, from the Mystery Tour",
  lede: "Hard Rock Cafe International raised in-store traffic 15% year over year with the Mystery Tour, a global sweepstakes Chris Rubin conceived, produced, launched and managed from inside the company, whose music video won a Telly Award.",
  meta: [
    {
      label: "Client",
      value: "Hard Rock Cafe International",
    },
    {
      label: "Sector",
      value: "Hospitality, music and entertainment",
    },
    {
      label: "Work",
      value:
        "The first Hard Rock website, the Mystery Tour sweepstakes, <i>The Hard Rocker</i> and <i>Rock Hard News</i>",
    },
    {
      label: "Role",
      value: "In-house: ran a department at international headquarters for several years",
    },
  ],
  sections: [
    {
      heading: "Where it started",
      paragraphs: [
        "Hard Rock Cafe International was a key account at my first agency job, until Hard Rock hired me away. For several years I ran a department at the international headquarters, before the pitch rooms, before CRC, before any of the rest.",
        "The job was the whole brand at once. Hard Rock's audience was global and loud, and the brand needed to speak to it in one voice across dozens of countries and every channel it had.",
      ],
    },
    {
      heading: "What I built",
      paragraphs: [
        "The first Hard Rock Cafe International website, produced and launched from inside the company: HardRock.com.",
        "The Hard Rock Mystery Tour: a global sweepstakes promotion I conceived, produced, launched and managed, with a music video at its center that played in every restaurant.",
        "<i>The Hard Rocker</i>, the full-color international newsletter, which I edited, designed and directed, and then <i>Rock Hard News</i>, a smaller magazine launched alongside it. Both went out in 30 languages to more than 65 countries.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "In-store traffic rose 15% against the same period the previous year. The music video won a Telly Award.",
        "More durably, it set the pattern for everything since: find the truest, most resonant story a brand has, then build it into every channel it uses.",
      ],
    },
  ],
  next: {
    slug: "intel",
    client: "Intel",
    metric: "+25% sales & online conversions",
  },
  logo: "hard-rock-cafe.png",
  award: {
    kind: "video",
    section: "What changed",
    caption:
      "The Telly Award, for the Mystery Tour music video.<br>The statue sits on Chris's bookshelf.",
    file: "telly-loop",
    alt: "The Telly Award statuette, turning",
  },
  galleries: [
    {
      heading: "Rock Hard News.",
      intro:
        "The magazine I launched and edited, photographed from the copies I kept: covers, the letters, the contents, the music mix, the map.",
      items: [
        {
          src: "/assets/img/work/hard-rock-cafe/rhn-live.jpg",
          caption: "Rock Hard News, Volume One: Hard Rock Live",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rhn-cover.jpg",
          caption: "Rock Hard News, Volume Two: Skate. Rock. Live.",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rhn-premiere-letter.jpg",
          caption: "The premiere-edition letter",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rhn-editor-letter.jpg",
          caption: "Editor's letter, Volume Two",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rhn-contents.jpg",
          caption: "Table of contents",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rhn-music-mix.jpg",
          caption: "HRC Music Mix: the month's video and audio adds",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rhn-credits.jpg",
          caption: "Credits: Editor-in-Chief",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rhn-map.jpg",
          caption: "Back cover: global locations",
        },
      ],
    },
    {
      heading: "The Hard Rocker.",
      intro:
        "The full-color international newsletter, in thirty languages to more than sixty-five countries: covers, the anniversary spread, the mission statement, the memorabilia column, the reports from the cafes.",
      items: [
        {
          src: "/assets/img/work/hard-rock-cafe/rocker-insider.jpg",
          caption: "The Hard Rocker: The Insider cover",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rocker-spirit.jpg",
          caption: "The Hard Rocker: Spreading the Spirit",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rocker-santa.jpg",
          caption: "The Hard Rocker: holiday cover",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rocker-xxv.jpg",
          caption: "The Hard Rocker: XXV Anniversary Collector's Edition",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/anniversary.jpg",
          caption: "25th anniversary center spread",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rocker-mission.jpg",
          caption: "The mission statement and the values, with a wallet card to cut out",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rocker-memo.jpg",
          caption: "Cool New Memo: from the vault",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rocker-pinpals.jpg",
          caption: "Cool New Memo and Pin Pals",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/rocker-reports.jpg",
          caption: "Hard Rocker reports from the cafes",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/around-the-clock.jpg",
          caption: "Back cover: Hard Rock Around the Clock",
        },
      ],
    },
    {
      heading: "Mystery Tour, online.",
      intro:
        "The sweepstakes on hardrock.com, as the Internet Archive kept it: six rounds, six mystery destinations, a grand-prize trip for two each time, and the clues.",
      items: [
        {
          src: "/assets/img/work/hard-rock-cafe/mystery-tour-logo.png",
          caption: "Hard Rock Mystery Tour",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/mystery-tour-clue-1.jpg",
          caption: "Clue 1",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/mystery-tour-clue-2.jpg",
          caption: "Clue 2",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/mystery-tour-clue-3.jpg",
          caption: "Clue 3",
        },
      ],
      variant: "small",
    },
    {
      heading: "Hard Rock Online.",
      intro:
        "The early hardrock.com, as the Internet Archive kept it: the Feed Your Head mark, the lightning-bolt pins and guitar pins made for the launch and sold on the site. We also developed and launched the online music store called Hard Rock Records, and a full online store of brand-new merch.",
      items: [
        {
          src: "/assets/img/work/hard-rock-cafe/online-logo.jpg",
          caption: "Hard Rock Online: Feed Your Head, www.hardrock.com",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/online-pin-ol1.jpg",
          caption: "The Hard Rock Online pin",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/online-pin-ol3.jpg",
          caption: "Guitar pin, www.hardrock.com down the neck",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/online-hardrockcom.jpg",
          caption: "HardRock.com",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/online-rocknews.jpg",
          caption: "Rock News: site navigation",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/online-merch.jpg",
          caption: "Check out our new merchandise",
        },
        {
          src: "/assets/img/work/hard-rock-cafe/online-xmascard.jpg",
          caption: "The holiday card",
        },
      ],
      variant: "small",
    },
  ],
};
