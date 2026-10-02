import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { ConsentDefaults } from "@/components/analytics/ConsentDefaults";
import { LinkTracking } from "@/components/analytics/LinkTracking";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE_NAME, SITE_URL } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
  // The arrows (← →) are outside the latin subset. Without an Arial-based metric fallback they
  // come from the system monospace instead, matching the approved build.
  adjustFontFallback: false,
});
const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  openGraph: {
    siteName: SITE_NAME,
    images: [
      {
        url: "/assets/img/og/og-default.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/img/og/og-default.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B0A12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable} ${vt323.variable}`}>
      <head>
        <ConsentDefaults />
      </head>
      <body>
        <a
          href="#main"
          className="absolute top-2 -left-[999px] z-10 bg-spark px-3 py-2 text-bg focus:left-2"
        >
          Skip to content
        </a>
        <div id="top" className="mx-auto max-w-site px-gutter">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
        <ConsentBanner />
        <LinkTracking />
        {/* The insights script is served by the Vercel edge; elsewhere it would 404. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
