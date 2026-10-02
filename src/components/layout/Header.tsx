import Link from "next/link";
import { BM_URL } from "@/content/site";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="relative flex flex-wrap items-center justify-between gap-4 py-[22px]">
      <Link
        href="/"
        aria-label="ChrisRubinCreativ home"
        className="-my-1.5 flex items-center gap-3.5 py-1.5 no-underline"
      >
        {/* Plain img: the SVG logo is tiny and needs no optimisation. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/img/logo-crc.svg"
          alt=""
          width={69}
          height={34}
          className="block h-[34px] w-auto"
        />
        <span className="font-disp text-[17px] leading-none font-semibold tracking-[-0.005em] font-stretch-[108%]">
          ChrisRubinCreativ
        </span>
      </Link>

      <nav
        aria-label="Primary"
        className="hidden flex-wrap gap-[22px] font-disp text-sm leading-none font-medium md:flex"
      >
        <NavLinks bmHref={BM_URL} />
      </nav>
      <MobileNav bmHref={BM_URL} />
    </header>
  );
}
