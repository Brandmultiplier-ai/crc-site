/**
 * Checks every URL contract against a running server: kept pages answer 200, every retired
 * WordPress URL redirects in one hop or answers 410, and the alias hosts fold into the apex.
 *
 *   npm run build && npm run start      (in one terminal)
 *   npm run verify:routes               (in another; BASE_URL defaults to http://localhost:3000)
 */
import { request } from "node:http";
import { request as requestHttps } from "node:https";
import { gonePaths, keptPaths, permanentRedirects } from "../src/content/redirects";
import { indexablePaths } from "../src/lib/routes";

const BASE_URL = new URL(process.env.BASE_URL ?? "http://localhost:3000");
const CANONICAL_ORIGIN = "https://chrisrubincreativ.com";
const ALIAS_HOSTS = ["chrisrubin.com", "www.chrisrubin.com", "www.chrisrubincreativ.com"];
const PERMANENT = new Set([301, 308]);

interface Reply {
  status: number;
  headers: Record<string, string | string[] | undefined>;
  body: string;
}

function get(path: string, host?: string): Promise<Reply> {
  const send = BASE_URL.protocol === "https:" ? requestHttps : request;
  return new Promise((resolve, reject) => {
    const req = send(
      {
        hostname: BASE_URL.hostname,
        port: BASE_URL.port,
        path: encodeURI(path),
        method: "GET",
        headers: host ? { host } : {},
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk: string) => (body += chunk));
        res.on("end", () => resolve({ status: res.statusCode ?? 0, headers: res.headers, body }));
      },
    );
    req.on("error", reject);
    req.end();
  });
}

const failures: string[] = [];
let checks = 0;

function expect(ok: boolean, message: string) {
  checks++;
  if (!ok) failures.push(message);
}

/** Resolves a Location header to a site-relative path (with hash) for comparison. */
function locationPath(location: string | string[] | undefined): string {
  const value = Array.isArray(location) ? location[0] : (location ?? "");
  const url = new URL(value, BASE_URL);
  return decodeURI(url.pathname) + url.search + url.hash;
}

async function main() {
  const pages = [...new Set([...indexablePaths(), ...keptPaths, "/pitchcraft/"])];
  for (const path of pages) {
    const res = await get(path);
    expect(res.status === 200, `${path}: expected 200, got ${res.status}`);
  }

  const pitchcraft = await get("/pitchcraft/");
  expect(
    String(pitchcraft.headers["x-robots-tag"] ?? "").includes("noindex"),
    "/pitchcraft/: missing X-Robots-Tag noindex",
  );
  expect(
    pitchcraft.body.includes('content="noindex, nofollow"'),
    "/pitchcraft/: missing robots meta",
  );

  for (const { source, destination } of permanentRedirects) {
    const res = await get(source);
    const target = locationPath(res.headers.location);
    expect(PERMANENT.has(res.status), `${source}: expected 301/308, got ${res.status}`);
    expect(target === destination, `${source}: redirected to ${target}, expected ${destination}`);
    const landing = await get(destination.split("#")[0]);
    expect(
      landing.status === 200,
      `${source}: destination ${destination} answered ${landing.status}`,
    );
  }

  for (const path of gonePaths) {
    const res = await get(path);
    expect(res.status === 410, `${path}: expected 410, got ${res.status}`);
  }

  for (const host of ALIAS_HOSTS) {
    const res = await get("/work/ledger/", host);
    const location = String(res.headers.location ?? "");
    expect(PERMANENT.has(res.status), `${host}: expected 301/308, got ${res.status}`);
    expect(
      location === `${CANONICAL_ORIGIN}/work/ledger/`,
      `${host}: redirected to "${location}", expected the apex with the path preserved`,
    );
  }

  const noSlash = await get("/work");
  expect(
    PERMANENT.has(noSlash.status) && locationPath(noSlash.headers.location) === "/work/",
    `/work: expected a permanent redirect to /work/, got ${noSlash.status}`,
  );

  const missing = await get("/this-page-does-not-exist/");
  expect(missing.status === 404, `unknown URL: expected 404, got ${missing.status}`);

  const sitemap = await get("/sitemap.xml");
  const urls = sitemap.body.match(/<loc>/g)?.length ?? 0;
  expect(
    urls === indexablePaths().length,
    `sitemap.xml: ${urls} URLs, expected ${indexablePaths().length}`,
  );
  expect(!sitemap.body.includes("/pitchcraft/"), "sitemap.xml must not list /pitchcraft/");

  const robots = await get("/robots.txt");
  expect(robots.body.includes("Sitemap: "), "robots.txt: missing Sitemap line");
  expect(!/Disallow: \/pitchcraft/.test(robots.body), "robots.txt must not disallow /pitchcraft/");

  const llms = await get("/llms.txt");
  expect(
    llms.status === 200 && llms.body.startsWith("# ChrisRubinCreativ"),
    "llms.txt: missing or malformed",
  );

  if (failures.length) {
    console.error(`\n${failures.length} of ${checks} checks failed:\n`);
    for (const f of failures) console.error(`  ✗ ${f}`);
    process.exit(1);
  }
  console.log(`All ${checks} route checks passed against ${BASE_URL.origin}.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
