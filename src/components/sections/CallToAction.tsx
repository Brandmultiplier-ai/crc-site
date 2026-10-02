import { BM_BLOCK, CTA } from "@/content/site";
import { buttonClass } from "@/components/ui/button";
import { DiagnosticLink } from "@/components/ui/DiagnosticLink";
import { sectionHeadingClass } from "@/components/ui/headings";
import { cn } from "@/lib/cn";
import { noWidow } from "@/lib/typography";

/** The closing Diagnostic prompt at the foot of most pages. */
export function CtaBlock({ source }: { source: string }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-5 bg-brand p-8">
      <p className="m-0 max-w-[24ch] font-disp text-2xl leading-[1.2] font-bold text-balance font-stretch-[110%]">
        {noWidow(CTA.question)}
      </p>
      <DiagnosticLink source={source} className={buttonClass()}>
        {CTA.button}
      </DiagnosticLink>
    </div>
  );
}

/** "Now: BrandMultiplier." The home page's purple block. */
export function BrandMultiplierBlock() {
  const [first, second] = noWidow(BM_BLOCK.headline).split("room. ");
  return (
    <section className="mt-6 mb-[72px] bg-brand px-[clamp(24px,5vw,64px)] py-[clamp(40px,6vw,80px)]">
      <p className={cn(sectionHeadingClass, "mb-[18px] text-white opacity-90")}>
        Now: <span className="text-spark">BrandMultiplier</span>.
      </p>
      <h2 className="mb-5 max-w-[20ch] font-disp text-bm leading-none font-extrabold text-balance font-stretch-[118%]">
        {first}room.
        <br />
        {second}
      </h2>
      <p className="mb-7 max-w-[58ch] text-brand-ink">{noWidow(BM_BLOCK.body)}</p>
      <DiagnosticLink source="home" className={buttonClass()}>
        Book the Diagnostic
      </DiagnosticLink>
    </section>
  );
}
