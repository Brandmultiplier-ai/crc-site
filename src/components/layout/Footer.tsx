import Link from "next/link";
import { BM_URL, FOOTER_LEGAL } from "@/content/site";
import { CookieSettingsButton } from "./CookieSettingsButton";

const LINKS = [
  { label: "Terms", href: "/terms-conditions/" },
  { label: "Privacy", href: "/privacy-policy-2/" },
  { label: "Refunds", href: "/shipping-refund-policy/" },
  { label: "Contact", href: "/contact/" },
];

const linkClass =
  "inline-flex min-h-11 items-center text-muted no-underline hover:text-ink md:min-h-0";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-line py-10">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="mb-2 text-[17px] leading-none font-bold">CRC · ChrisRubinCreativ, Inc.</p>
          <p className="m-0 text-sm text-muted">{FOOTER_LEGAL}</p>
        </div>
        <div className="flex flex-wrap gap-x-[18px] font-disp text-sm leading-none max-md:gap-y-1">
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className={linkClass}>
              {label}
            </Link>
          ))}
          <CookieSettingsButton className={linkClass} />
          <a href={BM_URL} target="_blank" rel="noopener" className={linkClass}>
            brandmultiplier.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
