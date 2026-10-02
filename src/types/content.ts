/**
 * Content model for the site. Strings marked "inline" may contain the small markup subset that
 * <RichText> renders: <i>, <em>, <b>, <strong>, <br> and <a href>.
 */

export type Era = "crc" | "agency" | "origin";

export interface CardArt {
  src: string;
  alt: string;
  /** "logo" renders the mark centered on a dark tile instead of a cropped photo. */
  kind?: "photo" | "logo";
}

export interface WorkCard {
  client: string;
  sector: string;
  metric: string;
  detail: string;
  slug: string;
  era: Era;
  /** False for cards that carry a number but have no full case study yet. */
  hasPage: boolean;
  art?: CardArt;
}

export interface GalleryItem {
  src: string;
  /** Inline. Also used as the image alt text. */
  caption: string;
}

export type GalleryVariant = "default" | "tall" | "small";

export interface Gallery {
  heading: string;
  /** Inline. */
  intro: string;
  items: GalleryItem[];
  variant?: GalleryVariant;
}

export interface CaseSection {
  heading: string;
  /** Inline. */
  paragraphs: string[];
}

export interface CaseVideo {
  /** File stem under /assets/video/<slug>/ (an .mp4 and a -poster.jpg). */
  file: string;
  title: string;
  description: string;
  seconds: number;
}

interface AwardBase {
  /** Heading of the section the award sits beside. */
  section: string;
  /** Inline. */
  caption: string;
}

export interface AwardVideo extends AwardBase {
  kind: "video";
  file: string;
  alt: string;
}

export interface AwardTile extends AwardBase {
  kind: "tile";
  organisation: string;
  name: string;
  for: string;
}

export type Award = AwardVideo | AwardTile;

export interface Quote {
  text: string;
  name: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  eyebrow: string;
  /** Inline. */
  title: string;
  /** The headline number, for example "+20%". Longer strings render as a text result. */
  result: string;
  /** Inline. */
  resultLabel: string;
  lede: string;
  meta: { label: string; value: string }[];
  sections: CaseSection[];
  quote?: Quote;
  next: { slug: string; client: string; metric: string };
  /** File under /assets/img/logos/. */
  logo?: string;
  /** Ambient loop beside the result number; file stem under /assets/video/<slug>/. */
  heroLoop?: string;
  /** Brand marks shown under the title; files under /assets/img/logos/brands/. */
  brands?: { file: string; name: string }[];
  award?: Award;
  /** Galleries rendered after the second section, in this order. */
  galleries?: Gallery[];
  /** Launch films rendered after the galleries. */
  videos?: CaseVideo[];
}

export interface TimelineEntry {
  label: string;
  title: string;
  description: string;
}

export interface WritingEntry {
  path: string;
  title: string;
  description: string;
  byline: string;
  year: string;
}

export interface BmPost {
  path: string;
  title: string;
  description: string;
  meta: string;
}

export interface BmPostGroup {
  heading: string;
  /** Inline. */
  intro: string;
  posts: BmPost[];
}

export interface Logo {
  /** File under /assets/img/logos/, including extension. */
  file: string;
  name: string;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  /** Inline. Display title when it differs from the plain title. */
  titleHtml?: string;
  description: string;
  byline: "Chris Rubin" | "ChrisRubinCreativ Editorial";
  datePublished: string;
  dateModified?: string;
}
