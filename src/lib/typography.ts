/**
 * Longest pair of words (visible characters) that is tied together. Longer pairs set in a display
 * size would make an unbreakable run wider than a phone screen; text-wrap: pretty covers those.
 */
const MAX_TIED_LENGTH = 14;

/**
 * Ties the last two words with a no-break space so a single word never sits alone on the last line.
 * Spaces inside inline tags (`<a href="…">`) are skipped, so markup stays intact.
 */
export function noWidow(text: string): string {
  const trimmed = text.trimEnd();
  let insideTag = false;
  let spaces = 0;
  let tieAt = -1;
  for (let i = trimmed.length - 1; i >= 0 && spaces < 2; i--) {
    const ch = trimmed[i];
    if (ch === ">") insideTag = true;
    else if (ch === "<") insideTag = false;
    else if (ch === " " && !insideTag) {
      spaces++;
      if (spaces === 1) tieAt = i;
      else if (plainText(trimmed.slice(i + 1)).length > MAX_TIED_LENGTH) return trimmed;
    }
  }
  if (tieAt < 0) return trimmed;
  if (spaces < 2 && plainText(trimmed).length > MAX_TIED_LENGTH) return trimmed;
  return `${trimmed.slice(0, tieAt)}\u00a0${trimmed.slice(tieAt + 1)}`;
}

/** Strips the inline markup subset, for places that need plain text (alt, title, JSON-LD). */
export function plainText(text: string): string {
  return text
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
