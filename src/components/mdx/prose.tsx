import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { DIAGNOSTIC_URL } from "@/content/site";
import { DiagnosticLink } from "@/components/ui/DiagnosticLink";
import { cn } from "@/lib/cn";

/*
 * Styled elements for long-form content (essays, About, Pitchcraft, legal). MDX maps its markdown
 * output onto these through src/mdx-components.tsx; H2 and H3 are also usable directly for
 * headings that need an id.
 */

export const h2Class =
  "mt-12 mb-3.5 font-disp text-[28px] leading-[1.2] font-bold text-blue font-stretch-[112%] [.brand-logo+&]:mt-11 [.brand-logo-tall+&]:mt-[58px]";
export const h3Class =
  "mt-8 mb-2.5 font-disp text-[21px] leading-[1.3] font-bold font-stretch-[108%]";

export const H2 = ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
  <h2 className={cn(h2Class, "scroll-mt-6", className)} {...props} />
);
export const H3 = ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
  <h3 className={cn(h3Class, className)} {...props} />
);
export const P = (props: ComponentPropsWithoutRef<"p">) => <p className="mb-[18px]" {...props} />;
export const Ul = (props: ComponentPropsWithoutRef<"ul">) => (
  <ul className="mb-[18px] list-disc pl-[22px]" {...props} />
);
export const Ol = (props: ComponentPropsWithoutRef<"ol">) => (
  <ol className="mb-[18px] list-decimal pl-[22px]" {...props} />
);
export const Li = (props: ComponentPropsWithoutRef<"li">) => (
  <li className="mb-2 [&>p]:m-0" {...props} />
);

export const blockquoteClass =
  "my-7 border-l-2 border-blue py-1 pl-5 [&_p]:font-disp [&_p]:text-xl [&_p]:leading-[1.4] [&_p]:font-medium [&_p]:text-balance [&_p]:text-ink";
export const Blockquote = (props: ComponentPropsWithoutRef<"blockquote">) => (
  <blockquote className={blockquoteClass} {...props} />
);

/** Internal links use client-side navigation; the Diagnostic link carries UTMs; others open in a new tab. */
export function A({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  const className = "underline";
  if (href.startsWith(DIAGNOSTIC_URL)) {
    return (
      <DiagnosticLink source="link" className={className}>
        {children}
      </DiagnosticLink>
    );
  }
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(external && { target: "_blank", rel: "noopener" })}
      {...props}
    >
      {children}
    </a>
  );
}

/** Wide tables scroll inside their own box on small screens instead of widening the page. */
export const Table = (props: ComponentPropsWithoutRef<"table">) => (
  <div className="mb-6 overflow-x-auto">
    <table className="w-full min-w-[560px] border-collapse text-[15px]" {...props} />
  </div>
);
export const Th = (props: ComponentPropsWithoutRef<"th">) => (
  <th
    className="border-b border-line px-3 py-2.5 text-left align-top font-mono text-[13px] leading-[1.4] font-medium text-muted"
    {...props}
  />
);
export const Td = (props: ComponentPropsWithoutRef<"td">) => (
  <td className="border-b border-line px-3 py-2.5 text-left align-top" {...props} />
);
