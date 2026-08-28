import type { Metadata, Viewport } from "next";
import { AnalyticsInit } from "@/components/analytics-init";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LogoDefs } from "@/components/logo";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SearchModal } from "@/components/search-modal";
import { SearchProvider } from "@/components/search-provider";
import { fontVariables } from "@/lib/fonts";
import { baseOrganizationGraph, jsonLdScript } from "@/lib/json-ld";
import { OG_IMAGES, SITE_URL } from "@/lib/site";
import { THEME_INIT_SCRIPT } from "@/lib/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Guide | The post-purchase platform for Shopify",
  description:
    "One operating layer for shipping protection, returns, exchanges, order tracking and fraud detection, all on your own brand.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/assets/icons/favicon.ico", sizes: "48x48" }],
    apple: "/assets/icons/apple-touch-icon.8195cfc924.png",
  },
  openGraph: {
    type: "website",
    siteName: "Guide",
    locale: "en_US",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    site: "@guideprotection",
    images: ["/assets/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(baseOrganizationGraph()) }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <LogoDefs />
        <SearchProvider>
          <Header />
          <SearchModal />
          {children}
          <Footer />
        </SearchProvider>
        <ScrollReveal />
        <AnalyticsInit />
      </body>
    </html>
  );
}
