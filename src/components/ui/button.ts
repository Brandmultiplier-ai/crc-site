import { cn } from "@/lib/cn";

/** Class names for the two button styles: solid spark, or ghost on the line color. */
export function buttonClass(variant: "solid" | "ghost" = "solid", extra?: string): string {
  return cn(
    "inline-block rounded-[2px] px-[22px] py-4 font-disp text-[15px] leading-none font-semibold no-underline",
    variant === "solid" ? "bg-spark text-bg" : "border border-line bg-transparent text-ink",
    extra,
  );
}
