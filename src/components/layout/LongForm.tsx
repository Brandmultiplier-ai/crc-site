import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** The long-form column (essays, About, legal, FAQ). Contains floats, so it establishes its own flow. */
export function LongForm({
  children,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  as?: "div" | "article";
  className?: string;
}) {
  return <Tag className={cn("flow-root max-w-[720px] pt-6 pb-12", className)}>{children}</Tag>;
}
