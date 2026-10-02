import { logos } from "@/content/logos";
import { cn } from "@/lib/cn";
import { imageSize } from "@/lib/images";
import { SectionHeading } from "@/components/ui/headings";

const LOGO_HEIGHT = 30;
const LOGO_MAX_WIDTH = 150;

function LogoList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className={cn(
        "m-0 flex list-none items-center gap-16 p-0 motion-reduce:flex-wrap motion-reduce:gap-x-10 motion-reduce:gap-y-7",
        duplicate && "motion-reduce:hidden",
      )}
    >
      {logos.map(({ file, name }) => {
        const src = `/assets/img/logos/${file}`;
        const natural = imageSize(src);
        const width = Math.min(
          LOGO_MAX_WIDTH,
          Math.round((LOGO_HEIGHT * natural.width) / natural.height),
        );
        return (
          <li key={file} className="flex-none">
            {/* Plain img: these marks are already small, and sending ~50 of them through the
                image optimizer delayed the work photos on the same page. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={duplicate ? "" : name}
              width={width}
              height={LOGO_HEIGHT}
              loading="lazy"
              decoding="async"
              className="block h-[30px] w-auto max-w-[150px] object-contain object-left opacity-75"
            />
          </li>
        );
      })}
    </ul>
  );
}

/** "Brands the work has touched": an endless marquee, or a static wrap under reduced motion. */
export function LogoWall({ className }: { className?: string }) {
  return (
    <section className={cn("overflow-hidden pt-10 pb-2", className)}>
      <SectionHeading className="mb-[22px]">Brands the work has touched.</SectionHeading>
      <div
        aria-label="Client and account logos"
        className="flex w-max animate-logos gap-16 will-change-transform backface-hidden motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap"
      >
        <LogoList />
        <LogoList duplicate />
      </div>
    </section>
  );
}
