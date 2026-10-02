/**
 * 410 Gone for retired WordPress URLs. next.config.ts rewrites every path in content/redirects.ts
 * `gonePaths` here, so search engines drop them faster than they would a 404.
 */

const BODY = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>410 Gone · ChrisRubinCreativ</title><meta name="robots" content="noindex"><style>body{background:#0B0A12;color:#EFEEF7;font-family:Archivo,Helvetica,Arial,sans-serif;padding:48px 24px;max-width:640px;margin:0 auto}a{color:#5B8CFF}</style></head><body><h1>Gone.</h1><p>This page was retired. Try <a href="/work/">the work</a>, <a href="/writing/">the writing</a>, or <a href="/">the studio</a>.</p></body></html>`;

export const dynamic = "force-static";

export function GET(): Response {
  return new Response(BODY, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
      "X-Robots-Tag": "noindex",
    },
  });
}
