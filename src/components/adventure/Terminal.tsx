"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { DiagnosticLink } from "@/components/ui/DiagnosticLink";
import { INITIAL_STATE, STUDIO_DESCRIPTION } from "@/lib/adventure/data";
import { chipsFor, exitsLine, step, type Effect, type Line } from "@/lib/adventure/engine";
import { cn } from "@/lib/cn";

interface ScreenLine extends Line {
  id: number;
}

const OPENING: ScreenLine[] = [
  { id: 0, text: "CRC ADVENTURE, a very small game.\nType a command and press return." },
  { id: 1, text: "> look", kind: "cmd" },
  { id: 2, text: STUDIO_DESCRIPTION },
  { id: 3, text: exitsLine("studio"), kind: "exits" },
];

const linkClass = "text-amber-light underline";

function LineView({ line }: { line: Line }) {
  const { link } = line;
  return (
    <p
      className={cn(
        "mb-2 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] whitespace-pre-wrap",
        line.kind === "cmd" && "text-amber-light",
        line.kind === "exits" && "text-amber-light opacity-85",
        !line.kind && "text-muted",
      )}
    >
      {line.text}
      {link &&
        ("diagnostic" in link ? (
          <DiagnosticLink source="adventure" className={linkClass}>
            {link.label}
          </DiagnosticLink>
        ) : (
          <Link href={link.href} className={linkClass}>
            {link.label}
          </Link>
        ))}
    </p>
  );
}

/** CRC Adventure: a very small text adventure. The world logic lives in lib/adventure/engine.ts. */
export function Terminal() {
  const router = useRouter();
  const [world, setWorld] = useState(INITIAL_STATE);
  const [lines, setLines] = useState(OPENING);
  const [effect, setEffect] = useState<Effect | null>(null);
  const [input, setInput] = useState("");
  const screenRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(OPENING.length);

  useEffect(() => {
    const screen = screenRef.current;
    if (screen && lines !== OPENING) screen.scrollTop = screen.scrollHeight;
  }, [lines]);

  useEffect(() => {
    if (!effect) return;
    const timer = window.setTimeout(() => {
      if (effect.type === "navigate") {
        router.push(effect.href);
      } else {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document
          .getElementById(effect.targetId)
          ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }
      setEffect(null);
    }, effect.delayMs);
    return () => window.clearTimeout(timer);
  }, [effect, router]);

  function run(command: string) {
    const result = step(world, command);
    if (!result) return;
    setWorld(result.state);
    setLines((prev) => [
      ...prev,
      ...result.lines.map((line) => ({ ...line, id: nextId.current++ })),
    ]);
    if (result.effect) setEffect(result.effect);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    run(input);
    setInput("");
  }

  return (
    <div className="min-w-0">
      <div
        role="region"
        aria-label="CRC text adventure"
        className="relative overflow-hidden rounded-[10px] border border-crt-edge bg-crt shadow-[0_0_0_6px_#1a1409,0_24px_60px_-20px_rgba(243,105,1,.25)]"
      >
        <div className="flex items-center justify-between border-b border-crt-edge bg-crt-bar px-3.5 py-2 font-mono text-xs leading-none text-amber-dim">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="block size-[9px] rounded-full bg-crt-edge" />
            <i className="block size-[9px] rounded-full bg-crt-edge" />
            <i className="block size-[9px] rounded-full bg-crt-edge" />
          </span>
          <span>crc adventure · 16K ram</span>
        </div>

        <div
          ref={screenRef}
          aria-live="polite"
          className="crt-scanlines relative h-[280px] scrollbar-thin overflow-y-auto px-4 pt-3.5 pb-2.5 font-term text-[21px] leading-[1.2] text-amber [text-shadow:0_0_6px_rgba(255,179,71,.45)] lg:h-[330px]"
        >
          {lines.map((line) => (
            <LineView key={line.id} line={line} />
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          autoComplete="off"
          className="flex items-center gap-2 border-t border-[#2a1f0f] px-4 pt-2 pb-3 font-term text-[21px] leading-none text-amber"
        >
          <label htmlFor="cmd" className="whitespace-nowrap">
            &gt;
            <span
              aria-hidden="true"
              className="ml-0.5 hidden motion-safe:inline motion-safe:animate-blink"
            >
              _
            </span>
          </label>
          <input
            id="cmd"
            name="cmd"
            type="text"
            spellCheck={false}
            autoCapitalize="none"
            autoCorrect="off"
            enterKeyHint="send"
            aria-label="Type a command"
            placeholder="help"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="-my-3 min-w-0 flex-1 border-0 bg-transparent py-3 text-amber-light caret-amber outline-0 placeholder:text-[#757575]"
          />
        </form>

        <div className="flex flex-wrap gap-1.5 px-4 pb-3.5">
          {chipsFor(world.room).map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => run(chip)}
              className="rounded border border-[#4a3418] bg-transparent px-[9px] py-[5px] font-term text-lg leading-none text-amber hover:bg-[#2a1d0c] focus-visible:bg-[#2a1d0c] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-amber max-sm:min-h-11 max-sm:px-3"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
