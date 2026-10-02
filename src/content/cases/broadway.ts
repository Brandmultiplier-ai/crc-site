// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const broadway: CaseStudy = {
  slug: "broadway",
  client: "Broadway.com",
  sector: "Entertainment",
  eyebrow: "Case study · Agency years",
  title: "The best of Broadway, refined for touch.",
  result: "iPad",
  resultLabel: "app for Broadway.com, and the first case study in a new narrative structure",
  lede: "Broadway.com tapped Fi to build an iPad app that put the latest buzz, photos, videos and ticket-buying in one place. Chris Rubin wrote, edited and produced the case study, the first one built on the narrative structure he created for Fi shortly after arriving.",
  meta: [
    {
      label: "Client",
      value: "Broadway.com",
    },
    {
      label: "Sector",
      value: "Entertainment, ticketing",
    },
    {
      label: "Work",
      value: "The Broadway.com iPad app: concept, strategy and UX, design, development",
    },
    {
      label: "Role",
      value:
        "Writer, editor and producer of the case study; author of Fi's case-study narrative structure",
    },
  ],
  sections: [
    {
      heading: "The brief",
      paragraphs: [
        "Take the best of Broadway.com, refine it for the iPad, and present an effortless touchscreen experience that puts the user in the driver's seat. A one-stop shop for buzz, information, pictures, and a seamless way to snag seats to any live performance.",
      ],
    },
    {
      heading: "What we built",
      paragraphs: [
        "It started on paper, in Fi-branded Moleskines: landing, shows list, show detail, video gallery. The sketches ended up not far from the shipped app. Then a site map, wireframes and a consistent set of touch gestures, with content and commerce meshed rather than bolted together.",
        "The design absorbed the Broadway.com brand and extended it: clean typography, gesture-driven navigation, a wall of iconic show imagery, tiles that flip to reveal details, and a menu that slides over content and gets out of the way. Portrait and landscape were both first-class, with smart grids and pre-loading so reading and watching felt comfortable either way. Native Objective-C on iOS 5, tied into Broadway.com's Django CMS.",
        "This was the first case study conceived and produced in the narrative structure and flow I created for Fi. Compared with what came after, we were still finding our way, and it shows a little. It's also where the method started.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "A popular app, and a repeatable way for a case-study powerhouse to tell its own stories. The projects that followed, Madden, Ramayana, Re:Brief, were told the same way, with more confidence each time.",
      ],
    },
  ],
  next: {
    slug: "wacom",
    client: "Wacom",
    metric: "A new kind of product site",
  },
  galleries: [
    {
      heading: "The app.",
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
  ],
};
