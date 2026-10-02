import type { MDXComponents } from "mdx/types";
import { Film } from "@/components/media/Film";
import { InlineGallery } from "@/components/media/Gallery";
import * as blocks from "@/components/mdx/blocks";
import { A, Blockquote, H2, H3, Li, Ol, P, Table, Td, Th, Ul } from "@/components/mdx/prose";

const components: MDXComponents = {
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
  a: A,
  blockquote: Blockquote,
  table: Table,
  th: Th,
  td: Td,
  H2,
  H3,
  Film,
  InlineGallery,
  ...blocks,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
