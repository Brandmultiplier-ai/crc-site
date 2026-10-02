// Content ported from the approved Phase 1 build. Edit copy here; components render it.
import type { CaseStudy } from "@/types/content";

export const wacom: CaseStudy = {
  slug: "wacom",
  client: "Wacom",
  sector: "Creative technology",
  eyebrow: "Case study · Agency years",
  title: "A product site you experience before you buy.",
  result: "New",
  resultLabel: "category of product site: experiential, with a humanised product finder",
  lede: "Wacom was known to creative professionals the world over and had just expanded into tools for everyday users. Fi rebuilt wacom.com from the ground up as a digital showroom that inspires first and guides second. Chris Rubin served as writer, editor and producer of the case study, embedded with the team.",
  meta: [
    {
      label: "Client",
      value: "Wacom",
    },
    {
      label: "Sector",
      value: "Creative technology, input devices",
    },
    {
      label: "Work",
      value:
        "Full redesign of wacom.com: a discovery page in place of a home page, a humanised product finder, layered navigation, the #MadeWithWacom community",
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
        "Wacom's existing base was serious creative professionals. Its new product lines were for the general public. One global experience had to engage first-timers without neglecting the professionals who were the bulk of its users, and present several multi-faceted product lines to the audience each was made for.",
      ],
    },
    {
      heading: "What we built",
      paragraphs: [
        "Product sites fall into three categories: utilitarian (Amazon, shelves and peer reviews), storytelling (Apple, the beauty of the object) and lifestyle (Bang & Olufsen, the product as status). Fi proposed a fourth. Call it the experiential site: let the user feel what it's like to own and use the product, with the site guiding them toward the right one through a new, humanised product finder.",
        "The home page became a discovery page, a dynamic starting point that flexes toward whichever kind of user arrives. Navigation worked like a friendly usher, there when needed: sticky items, jump navigation and a layered information architecture for exploring each product line at any depth. #MadeWithWacom stitched the existing fan base into the site as a living stream of what people were making.",
        "I was embedded behind the scenes at Fi for this one, and wrote, edited and produced the case study.",
      ],
    },
    {
      heading: "What changed",
      paragraphs: [
        "A new wacom.com, and a new answer to an old question: is the home page still relevant? For a brand whose products exist to make things, the answer was a place to discover rather than a place to land.",
      ],
    },
  ],
  next: {
    slug: "ea",
    client: "EA",
    metric: "A billion-dollar franchise, on the web",
  },
  logo: "wacom.png",
  galleries: [
    {
      heading: "The case study, as published.",
      intro:
        "Fi's case-study page, in slices: the product lines, the discovery page, navigation, a product page, Cintiq and Pro Pen, the community, and the team in Tokyo.",
      items: [
        {
          src: "/assets/img/work/wacom/hero.jpg",
          caption: "The new wacom.com",
        },
        {
          src: "/assets/img/work/wacom/inspires.jpg",
          caption: "A product site that inspires you",
        },
        {
          src: "/assets/img/work/wacom/products.jpg",
          caption: "The product lines",
        },
        {
          src: "/assets/img/work/wacom/discovery.jpg",
          caption: "The discovery page",
        },
        {
          src: "/assets/img/work/wacom/tiles.jpg",
          caption: "Discovery tiles",
        },
        {
          src: "/assets/img/work/wacom/navigation.jpg",
          caption: "Navigation: a friendly usher",
        },
        {
          src: "/assets/img/work/wacom/product-page.jpg",
          caption: "A product page that offers more than specs",
        },
        {
          src: "/assets/img/work/wacom/cintiq.jpg",
          caption: "Cintiq",
        },
        {
          src: "/assets/img/work/wacom/pro-pen.jpg",
          caption: "Pro Pen",
        },
        {
          src: "/assets/img/work/wacom/community.jpg",
          caption: "#MadeWithWacom: the community",
        },
        {
          src: "/assets/img/work/wacom/tokyo.jpg",
          caption: "Tokyo: the team, and a panda",
        },
        {
          src: "/assets/img/work/wacom/icons.jpg",
          caption: "The icon set",
        },
      ],
    },
  ],
};
