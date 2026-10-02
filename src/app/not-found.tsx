import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Page not found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="max-w-[720px] py-24">
      <h1 className="mb-5 font-disp text-[clamp(38px,6vw,80px)] leading-none font-extrabold font-stretch-[118%]">
        You can&apos;t go that way.
      </h1>
      <p className="mb-[18px] max-w-[58ch] text-lede text-balance text-muted">
        That page isn&apos;t here. The old site had nearly 180 URLs; this one has far fewer, on
        purpose.
      </p>
      <p className="flex flex-wrap gap-4">
        <Link href="/" className={buttonClass()}>
          Back to the studio
        </Link>
        <Link href="/work/" className={buttonClass("ghost")}>
          The work
        </Link>
      </p>
    </div>
  );
}
