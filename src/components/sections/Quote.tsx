import type { Quote as QuoteData } from "@/types/content";
import { RichText } from "@/components/ui/RichText";
import { cn } from "@/lib/cn";
import { quotes } from "@/content/quotes";

export function Quote({ quote, className }: { quote: QuoteData; className?: string }) {
  return (
    <blockquote className={cn("m-0 border-t-2 border-blue pt-6", className)}>
      <p className="mb-4 font-disp text-[clamp(20px,2.2vw,27px)] leading-[1.3] font-semibold text-balance">
        “<RichText text={quote.text} noWidow />”
      </p>
      <footer className="font-mono text-[13px] leading-[1.4] text-muted">
        {quote.name} · {quote.role}
      </footer>
    </blockquote>
  );
}

/** "In their words": client quotes on the home page. */
export function Quotes() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-12">
      {quotes.map((q) => (
        <Quote key={q.name} quote={q} />
      ))}
    </div>
  );
}
