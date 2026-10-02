import { Terminal } from "@/components/adventure/Terminal";
import { HERO, TERMINAL_NOTE } from "@/content/site";

export function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-x-14 gap-y-10 pt-[clamp(40px,7vw,96px)] pb-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div>
        <h1 className="mb-6 font-disp text-hero leading-[0.98] font-extrabold tracking-[-0.025em] font-stretch-[118%]">
          {HERO.headline}
          <span className="text-blue">{HERO.highlight}</span>
        </h1>
        <p className="max-w-[58ch] text-[clamp(17px,1.4vw,19px)] text-muted">{HERO.body}</p>
        <p className="mt-7 max-w-[58ch] rounded border-[1.5px] border-spark bg-spark/6 px-5 py-4 font-mono text-sm leading-[1.55] text-muted">
          <b className="font-medium text-ink">movēre</b> <span>| mo-VERR-ay |</span>{" "}
          <i className="text-blue not-italic">Latin, verb</i>: to move. The root of emotion and
          motivation, and the name of the method CRC was built on.{" "}
          <span className="mt-2.5 block font-medium text-ink">
            Core thesis: Let&apos;s <i>move</i> people.
          </span>
        </p>
      </div>
      <div className="min-w-0">
        <Terminal />
        <p className="mx-0.5 mt-[22px] max-w-[44ch] font-mono text-[13px] leading-[1.6] text-[#8a8499]">
          {TERMINAL_NOTE}
        </p>
      </div>
    </section>
  );
}
