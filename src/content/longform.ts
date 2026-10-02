import type { MDXContent } from "mdx/types";

type MdxModule = Promise<{ default: MDXContent }>;

/** MDX bodies for the root-level pages, keyed by URL slug. Add a line here when adding an article. */
export const longformBodies: Record<string, () => MdxModule> = {
  "why-some-brands-move-us": () => import("./articles/why-some-brands-move-us.mdx"),
  "5-successful-brand-repositioning-case-studies": () =>
    import("./articles/5-successful-brand-repositioning-case-studies.mdx"),
  "7-brand-strategy-frameworks-that-drive-business-growth": () =>
    import("./articles/7-brand-strategy-frameworks-that-drive-business-growth.mdx"),
  "unlocking-utopia-the-innocent-archetype-in-branding-2": () =>
    import("./articles/unlocking-utopia-the-innocent-archetype-in-branding-2.mdx"),
  "embracing-the-maverick-rebel-archetypes-clout-in-branding": () =>
    import("./articles/embracing-the-maverick-rebel-archetypes-clout-in-branding.mdx"),
  "terms-conditions": () => import("./legal/terms-conditions.mdx"),
  "privacy-policy-2": () => import("./legal/privacy-policy-2.mdx"),
  "shipping-refund-policy": () => import("./legal/shipping-refund-policy.mdx"),
};
