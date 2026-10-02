/**
 * Builds the CRC mark as the favicon, Apple touch icon, and the default social card.
 * The paths are the official logo (public/assets/img/logo-crc.svg), placed on the site background.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const BG = "#0B0A12";
const LOGO_VIEW = { w: 1955, h: 975.52 };

const source = readFileSync(join(publicDir, "assets", "img", "logo-crc.svg"), "utf8");
const paths = [...source.matchAll(/<path\b[^>]*\/>/g)].map((m) => m[0]).join("");
if (!paths) throw new Error("No paths found in logo-crc.svg");

/** The mark, centered, with `pad` as a fraction of the shorter side left empty. */
function framed(size, pad) {
  const inner = size * (1 - pad * 2);
  const width = inner;
  const height = inner * (LOGO_VIEW.h / LOGO_VIEW.w);
  const x = (size - width) / 2;
  const y = (size - height) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${BG}"/>
  <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="0 0 ${LOGO_VIEW.w} ${LOGO_VIEW.h}">${paths}</svg>
</svg>`;
}

/** 1200×630 share image: the mark centered on the site background. */
function social() {
  const width = 1200;
  const height = 630;
  const markW = 760;
  const markH = markW * (LOGO_VIEW.h / LOGO_VIEW.w);
  const x = (width - markW) / 2;
  const y = (height - markH) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${BG}"/>
  <svg x="${x}" y="${y}" width="${markW}" height="${markH}" viewBox="0 0 ${LOGO_VIEW.w} ${LOGO_VIEW.h}">${paths}</svg>
</svg>`;
}

writeFileSync(join(publicDir, "favicon.svg"), framed(64, 0.12));

const master = await sharp(Buffer.from(framed(512, 0.12)))
  .png()
  .toBuffer();
const sizes = [
  ["favicon-32.png", 32],
  ["favicon-192.png", 192],
  ["favicon-512.png", 512],
  ["apple-touch-icon.png", 180],
];
for (const [name, size] of sizes) {
  await sharp(master).resize(size, size).png().toFile(join(publicDir, name));
}
await sharp(Buffer.from(social()))
  .png()
  .toFile(join(publicDir, "assets", "img", "og", "og-default.png"));
console.log("brand icons written");
