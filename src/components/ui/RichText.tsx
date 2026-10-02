import type { ReactNode } from "react";
import { noWidow as tieLastWords } from "@/lib/typography";

type Tag = "i" | "em" | "b" | "strong" | "a";

interface Frame {
  tag: Tag | "root";
  href?: string;
  children: ReactNode[];
}

const TOKEN = /<(\/?)(i|em|b|strong|a|br)\b([^>]*)>/gi;

/**
 * Renders content strings that carry a small inline markup subset (<i>, <em>, <b>, <strong>, <br>,
 * <a href>) as React elements. Anything else is rendered as text, so content can never inject markup.
 */
export function RichText({ text, noWidow = false }: { text: string; noWidow?: boolean }) {
  const source = noWidow ? tieLastWords(text) : text;
  const root: Frame = { tag: "root", children: [] };
  const stack: Frame[] = [root];
  let cursor = 0;
  let key = 0;

  const top = () => stack[stack.length - 1];
  const close = (frame: Frame): ReactNode => {
    const k = key++;
    switch (frame.tag) {
      case "a": {
        const external = /^https?:/.test(frame.href ?? "");
        return (
          <a
            key={k}
            href={frame.href}
            className="underline"
            {...(external && { target: "_blank", rel: "noopener" })}
          >
            {frame.children}
          </a>
        );
      }
      case "i":
        return <i key={k}>{frame.children}</i>;
      case "em":
        return <em key={k}>{frame.children}</em>;
      case "b":
        return <b key={k}>{frame.children}</b>;
      case "strong":
        return <strong key={k}>{frame.children}</strong>;
      default:
        return frame.children;
    }
  };

  for (const match of source.matchAll(TOKEN)) {
    if (match.index > cursor) top().children.push(source.slice(cursor, match.index));
    cursor = match.index + match[0].length;
    const [, slash, rawTag, attrs] = match;
    const tag = rawTag.toLowerCase();

    if (tag === "br") {
      top().children.push(<br key={key++} />);
    } else if (!slash) {
      const href = tag === "a" ? /href="([^"]*)"/.exec(attrs)?.[1] : undefined;
      stack.push({ tag: tag as Tag, href, children: [] });
    } else if (stack.length > 1 && top().tag === tag) {
      const frame = stack.pop()!;
      top().children.push(close(frame));
    }
  }
  if (cursor < source.length) top().children.push(source.slice(cursor));
  while (stack.length > 1) {
    const frame = stack.pop()!;
    top().children.push(close(frame));
  }
  return <>{root.children}</>;
}
