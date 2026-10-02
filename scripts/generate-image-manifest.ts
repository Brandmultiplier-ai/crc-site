/**
 * Writes src/content/imageManifest.json: intrinsic width and height for every raster and SVG image
 * under public/assets/img, keyed by its public URL. next/image needs dimensions to reserve space
 * and avoid layout shift. Run after adding or replacing images: `npm run images`.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { imageSize } from "image-size";

const root = join(import.meta.dirname, "..");
const publicDir = join(root, "public");
const imageDir = join(publicDir, "assets", "img");
const outFile = join(root, "src", "content", "imageManifest.json");
const extensions = new Set([".jpg", ".jpeg", ".png", ".svg", ".webp", ".gif"]);

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return walk(path);
    const ext = name.slice(name.lastIndexOf(".")).toLowerCase();
    return extensions.has(ext) ? [path] : [];
  });
}

const manifest: Record<string, [number, number]> = {};
for (const file of walk(imageDir).sort()) {
  const { width, height } = imageSize(readFileSync(file));
  if (!width || !height) throw new Error(`Could not read dimensions of ${file}`);
  const url = "/" + relative(publicDir, file).split(sep).join("/");
  manifest[url] = [width, height];
}

writeFileSync(outFile, JSON.stringify(manifest, null, 1) + "\n");
console.log(`imageManifest.json: ${Object.keys(manifest).length} images`);
