// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const usaToday: CaseStudy = {
  slug: "usa-today",
  client: "USA Today",
  sector: "News media",
  eyebrow: "Case study · Agency years",
  title: "Re-imagining how America reads the news.",
  result: "FWA",
  resultLabel: "Site of the Day, then Adobe's Cutting Edge Award, for the relaunched usatoday.com",
  lede: "Gannett and USA Today faced the challenge every publisher faced: evolve with the audience or fade with the paper. Fi re-imagined usatoday.com for how people consume news now. Chris Rubin served as writer, editor and producer of the case study, an embedded-journalism piece on the undertaking.",
  meta: [
    {
      label: "Client",
      value: "USA Today, Gannett",
    },
    {
      label: "Sector",
      value: "News media, publishing",
    },
    {
      label: "Work",
      value: "The redesign of usatoday.com, and the case study that told its story",
    },
    {
      label: "Role",
      value: "Writer, editor and producer, Fantasy Interactive",
    },
  ],
  sections: [
    {
      heading: "The brief",
      paragraphs: [
        "Newspaper readership was in decline while the appetite for news had never been larger. A 2012 Pew Research Center survey put digital second only to television as the preferred way Americans got their news, up from fourth place in 2008.",
        "For USA Today the web had to be a huge part of the answer. The questions that shaped the work: what are the mechanics and drivers of the business, what are readers' pain points, how do we serve journalists and contributors, and how do we give advertisers and audience a better ad experience at the same time?",
      ],
    },
    {
      heading: "What we built",
      paragraphs: [
        "Definition first, then approach, then user flows and journeys iterated until every path was sensible and efficient. Only then design, in a continuous feedback loop with the team at USA Today.",
        "The takeaway Fi carried away: no matter how much content you have, less is more in presentation. Readers arrive with a mission. The site's job is to help them complete it, and to make the content easy to share, because sharing is the broadest organic reach a publisher has.",
        "I was embedded with the team as the work happened, and wrote, edited and produced the case study from inside it.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "A new usatoday.com that served the people producing the news and the digitally native audience consuming it. The site went on to an FWA Site of the Day and Adobe's Cutting Edge Award, and .net Magazine covered the build in its How We Built column.",
        "A story Fi could tell about the future of a venerable publication, told while it was being built.",
      ],
    },
  ],
  next: {
    slug: "broadway",
    client: "Broadway.com",
    metric: "Broadway, on the iPad",
  },
  galleries: [
    {
      heading: "The case study, as published.",
      intro:
        "Fi's case-study page for the relaunch, in slices: the pitch, the logo, discovery, UX and design, the pages and devices, and what came after.",
      items: [
        {
          src: "/assets/img/work/usa-today/pitch.jpg",
          caption: "Fi wins the pitch: the room",
        },
        {
          src: "/assets/img/work/usa-today/fi-wins.jpg",
          caption: "Fi Wins the Pitch",
        },
        {
          src: "/assets/img/work/usa-today/logo.jpg",
          caption: "Old logo, new logo",
        },
        {
          src: "/assets/img/work/usa-today/discovery.jpg",
          caption: "The Discovery phase",
        },
        {
          src: "/assets/img/work/usa-today/ux-design.jpg",
          caption: "UX and Design",
        },
        {
          src: "/assets/img/work/usa-today/pages.jpg",
          caption: "The pages",
        },
        {
          src: "/assets/img/work/usa-today/modules.jpg",
          caption: "One long page per section",
        },
        {
          src: "/assets/img/work/usa-today/devices.jpg",
          caption: "Desktop, tablet, phone",
        },
        {
          src: "/assets/img/work/usa-today/reimagination.jpg",
          caption: "Welcome to reimagination",
        },
        {
          src: "/assets/img/work/usa-today/impact.jpg",
          caption: "Impact: FWA Site of the Day, Adobe Cutting Edge",
        },
        {
          src: "/assets/img/work/usa-today/net-magazine.jpg",
          caption: ".net Magazine: How We Built",
        },
      ],
    },
  ],
};
