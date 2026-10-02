// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const googleRamayana: CaseStudy = {
  slug: "google-ramayana",
  client: "Google",
  sector: "Technology",
  eyebrow: "Case study · Agency years",
  title: "An ancient epic, retold to launch a browser.",
  result: "5",
  resultLabel: "chapters across multiple Chrome windows, for the launch of Chrome in Asia",
  lede: "To launch the Chrome browser in Asia, Google Singapore, OgilvyOne and Fi retold the Ramayana as an interactive experience: handcrafted artwork, layered visual storytelling, digital physics and Google products woven into the story across five chapters and multiple Chrome windows. Chris Rubin wrote, edited and produced the case study; some of his copy suggestions made it into the product.",
  meta: [
    {
      label: "Client",
      value: "Google Singapore, with OgilvyOne",
    },
    {
      label: "Sector",
      value: "Technology, browsers",
    },
    {
      label: "Work",
      value:
        "The interactive Ramayana: concept, storyboards, illustration, interface components, Chrome engineering",
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
        "Beyond a digital retelling of a classic tale, the challenge was staying true to the narrative as told in both the Indonesian and Thai cultures, inside a rich, immersive interactive experience, and making the Chrome browser itself the star.",
        "Four main characters dominate the story, and each looks different by region: the Indonesian depictions puppet-like and friendly, the Thai versions fiercer and more realistic. Both had to be honoured.",
      ],
    },
    {
      heading: "What we built",
      paragraphs: [
        "Everything started strictly analog: a scene-by-scene retelling on paper, then storyboards that mapped the narrative to a flow and timeline. A seasoned illustrator drew the characters and their worlds, with inspiration from the textiles, tapestries and landscapes of Southeast Asia and the Indian subcontinent.",
        "Google products carried parts of the story: Maps for location, Talk for dialogue between characters, Weather, Docs for messages from characters to the user, product search for an adventurer's gear, and Chrome's own “Aw, Snap” for a moment of play. All the windows each chapter needed were spawned at Start and hidden behind the narration window, so the story never got lost behind the visuals.",
        "Digital physics did the rest: particle systems for fire, smoke and forest ambiance, spring-based tail physics for the burning scene, ray casting and collision detection for the forest shooter, inverse kinematics for the arm and bow. This was the third case study I wrote and produced for Fi, and the point where the format hit its stride.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "An immersive, emotionally captivating experience in the digital space, and a launch that showed what Chrome could do for users, developers and creatives alike. The real star of the story was the browser.",
      ],
    },
  ],
  next: {
    slug: "airline",
    client: "The Future of Airline Websites",
    metric: "Three airlines called within ten days",
  },
  logo: "google.png",
  galleries: [
    {
      heading: "The retelling.",
      intro:
        "From the case study: the island map, the characters in their Indonesian and Thai forms, the sketches, the interface components, the Google products in the story, and the windows working together.",
      items: [
        {
          src: "/assets/img/work/google-ramayana/map.jpg",
          caption: "The island, mapped as part of the fully interactive experience",
        },
        {
          src: "/assets/img/work/google-ramayana/characters-indonesia.jpg",
          caption: "Shinta, Rama, the Monk and Rahwana: Indonesia",
        },
        {
          src: "/assets/img/work/google-ramayana/characters-thai.jpg",
          caption: "The same four: Thailand",
        },
        {
          src: "/assets/img/work/google-ramayana/sketch-top.jpg",
          caption: "Initial interaction ideas",
        },
        {
          src: "/assets/img/work/google-ramayana/sketch-4.jpg",
          caption: "Storyboards",
        },
        {
          src: "/assets/img/work/google-ramayana/interface.jpg",
          caption: "The interface components",
        },
        {
          src: "/assets/img/work/google-ramayana/google-products.jpg",
          caption: "Maps, Talk, Weather, Docs, product search, Aw Snap",
        },
        {
          src: "/assets/img/work/google-ramayana/windows.jpg",
          caption: "Multiple Chrome windows",
        },
        {
          src: "/assets/img/work/google-ramayana/demon.jpg",
          caption: "Rahwana",
        },
        {
          src: "/assets/img/work/google-ramayana/canvas.jpg",
          caption: "The forest scene",
        },
        {
          src: "/assets/img/work/google-ramayana/multiple-windows.jpg",
          caption: "Working separately and together",
        },
      ],
    },
  ],
};
