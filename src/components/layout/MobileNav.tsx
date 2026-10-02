"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { NavLinks } from "./NavLinks";

/**
 * Disclosure menu for narrow screens (below the md breakpoint). Closes on Escape, on a click outside,
 * and on navigation; focus returns to the toggle when closed with Escape.
 */
export function MobileNav({ bmHref }: { bmHref: string }) {
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const pathname = usePathname();
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // A route change closes the menu: it only stays open on the page it was opened on.
  const isOpen = open && openedAt === pathname;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [isOpen]);

  const toggle = () => {
    setOpenedAt(pathname);
    setOpen(!isOpen);
  };

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
        className="-mr-2 flex min-h-11 items-center gap-2 px-2 font-mono text-sm font-medium text-ink"
      >
        <span>{isOpen ? "Close" : "Menu"}</span>
        <span aria-hidden="true" className="relative block h-3 w-4">
          <span
            className={`absolute left-0 block h-0.5 w-4 bg-current transition-transform motion-reduce:transition-none ${isOpen ? "top-[5px] rotate-45" : "top-0.5"}`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-4 bg-current transition-transform motion-reduce:transition-none ${isOpen ? "top-[5px] -rotate-45" : "top-2"}`}
          />
        </span>
      </button>
      <nav
        id={panelId}
        aria-label="Primary"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full z-40 border-y border-line bg-bg py-2"
      >
        <div className="flex flex-col font-disp text-lg font-medium">
          <NavLinks
            bmHref={bmHref}
            onNavigate={() => setOpen(false)}
            linkClassName="flex min-h-12 items-center"
          />
        </div>
      </nav>
    </div>
  );
}
