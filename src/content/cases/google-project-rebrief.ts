// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const googleProjectRebrief: CaseStudy = {
  slug: "google-project-rebrief",
  client: "Google",
  sector: "Technology",
  eyebrow: "Case study · Agency years",
  title: "Four classic ads, rebuilt for the modern web.",
  result: "Cannes",
  resultLabel: "Cyber Lion for Project Re:Brief",
  lede: "Project Re:Brief was Google's experiment in what advertising could become: four iconic campaigns re-imagined with modern technology, with the original creatives consulted along the way. Fi planned, designed and developed the interactive experience that carried it all, across desktop, tablet and mobile. Chris Rubin served as senior producer for Fi and wrote and edited the copy for the digital side.",
  meta: [
    {
      label: "Client",
      value: "Google",
    },
    {
      label: "Sector",
      value: "Technology, advertising",
    },
    {
      label: "Work",
      value:
        "The Project Re:Brief website and interactive experience: strategy, UX, design, development",
    },
    {
      label: "Role",
      value:
        "Senior producer, Fantasy Interactive; copy for the digital side; case study written and produced",
    },
  ],
  sections: [
    {
      heading: "The brief",
      paragraphs: [
        "Google, Johannes Leonardo and Grow Interactive started by consulting the creatives behind the classic campaigns for Alka-Seltzer, Avis, Volvo and Coca-Cola. Then they set out to re-imagine those ads in the context of modern technology while preserving the emotional resonance of the originals.",
        "Coke's “Hilltop” became the clearest example. What if you really could buy the world a Coke? The answer ran from a display ad through moderation, a queue, a specially built vending machine somewhere else in the world, a reply, and a composited video on YouTube back to the sender.",
        "Fi's job was the layer that held it all: plan, design and develop an interactive experience that delivered four complex sets of branded content, a feature-length documentary and the global navigation, without crowding the interface or confusing the user.",
      ],
    },
    {
      heading: "What we built",
      paragraphs: [
        "The site map went through endless iterations before the navigation felt inevitable, then wireframes for desktop, tablet and mobile. The design landed on a muted palette and custom photography so each brand's section could shine without overpowering the whole.",
        "Each campaign shipped with banner ads the user could configure, so the site had to show the ads in real-life scenarios with their settings live. There was a custom YouTube player for the documentary and the films, so the visual environment never broke.",
        "I produced the project for Fi and wrote and edited the copy on the digital side. Then I wrote, edited and produced the case study.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "Project Re:Brief won a Cannes Cyber Lion. The marriage of creativity and technology was the core of the experience, and the story Fi got to tell.",
      ],
    },
  ],
  next: {
    slug: "sony-connected-world",
    client: "Sony",
    metric: "33 languages, one launch",
  },
  logo: "google.png",
  brands: [
    {
      file: "coca-cola.svg",
      name: "Coca-Cola",
    },
    {
      file: "volvo.svg",
      name: "Volvo",
    },
    {
      file: "avis.svg",
      name: "Avis",
    },
    {
      file: "alka-seltzer.png",
      name: "Alka-Seltzer",
    },
  ],
  award: {
    kind: "tile",
    section: "What changed",
    caption: "The Cannes Lions International Festival of Creativity, Cyber Lions category.",
    organisation: "Cannes Lions",
    name: "Cyber Lion",
    for: "Project Re:Brief",
  },
  galleries: [
    {
      heading: "The experience.",
      intro:
        "From the case study, in the order it was told: the brief, the site on desktop, the challenge, the Coke section, wireframe beside finished design, the Volvo ad on YouTube, and the custom player.",
      items: [
        {
          src: "/assets/img/work/google-project-rebrief/folder.jpg",
          caption: "The brief",
        },
        {
          src: "/assets/img/work/google-project-rebrief/desktop.jpg",
          caption: "Project Re:Brief on desktop",
        },
        {
          src: "/assets/img/work/google-project-rebrief/challenge.jpg",
          caption: "The challenge board",
        },
        {
          src: "/assets/img/work/google-project-rebrief/coke-page.jpg",
          caption: "The Coke section",
        },
        {
          src: "/assets/img/work/google-project-rebrief/wire-to-design.jpg",
          caption: "Wireframe to finished design",
        },
        {
          src: "/assets/img/work/google-project-rebrief/volvo-ad.jpg",
          caption: "Volvo's countdown, on YouTube",
        },
        {
          src: "/assets/img/work/google-project-rebrief/video-player.jpg",
          caption: "The custom video player",
        },
        {
          src: "/assets/img/work/google-project-rebrief/player-ios.jpg",
          caption: "The player on iOS",
        },
      ],
    },
  ],
};
