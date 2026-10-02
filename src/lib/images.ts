import manifest from "@/content/imageManifest.json";

const sizes: Record<string, number[]> = manifest;

/** Intrinsic dimensions of an image under /public, from the generated manifest (`npm run images`). */
export function imageSize(src: string): { width: number; height: number } {
  const entry = sizes[src];
  if (!entry) throw new Error(`Image not in manifest: ${src}. Run \`npm run images\`.`);
  return { width: entry[0], height: entry[1] };
}
