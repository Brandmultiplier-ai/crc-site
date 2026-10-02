import { timeline } from "@/content/timeline";
import { RichText } from "@/components/ui/RichText";

/** The throughline: a horizontally scrolling career timeline. The last stop is BrandMultiplier purple. */
export function Timeline() {
  return (
    <div className="bleed-x scrollbar-thin overflow-x-auto pb-3">
      <ol className="timeline-rail relative m-0 grid w-max min-w-full list-none auto-cols-[270px] grid-flow-col p-0 pt-[26px]">
        {timeline.map(({ label, title, description }) => (
          <li
            key={label}
            className="group relative pt-8 pr-7 before:absolute before:-top-[7px] before:left-0 before:size-4 before:rounded-full before:border-2 before:border-blue before:bg-bg before:content-[''] last:before:border-bmp last:before:bg-bmp"
          >
            <span className="mb-2.5 block font-mono text-[13px] leading-[1.4] font-medium text-blue group-last:text-bmp">
              {label}
            </span>
            <h3 className="mb-2 font-disp text-[21px] leading-[1.2] font-bold font-stretch-[110%]">
              <RichText text={title} noWidow />
            </h3>
            <p className="m-0 text-[15px] text-muted">
              <RichText text={description} noWidow />
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
