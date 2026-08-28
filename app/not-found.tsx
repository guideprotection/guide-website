import type { Metadata } from "next";
import Link from "next/link";
import { LogoGlyph } from "@/components/logo";
import { breadcrumbNode, webPageNode } from "@/lib/json-ld";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

const TITLE = "Page not found | Guide post-purchase platform";
const DESCRIPTION =
  "That page could not be found. Head back to the homepage, open the platform overview, or search the site for whatever you were after.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: true },
  alternates: { canonical: "/404" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/404", images: OG_IMAGES },
};

export default function NotFound() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [webPageNode({ path: "/404", name: TITLE, description: DESCRIPTION })],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Page not found", path: "/404" },
            ])
          ),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="e404">
            <span className="code">ERROR 404</span>
            <h1 className="d1" style={{ maxWidth: "16ch" }}>
              This page went missing in transit.
            </h1>
            <p className="lead maxw-md">
              Which is a problem we are unusually well equipped to talk about. The page you wanted
              either moved or never existed. Here is where most people are heading.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <Link className="btn btn-dark btn-lg arw" href="/">
                Back to the homepage
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Platform overview
              </Link>
            </div>
          </div>
          <div className="grid g3 mt-8">
            <Link className="card card-hover" href="/products">
              <strong className="d4">Platform</strong>
              <span className="body mt-2">All six modules and how they share one record.</span>
            </Link>
            <Link className="card card-hover" href="/pricing">
              <strong className="d4">Pricing</strong>
              <span className="body mt-2">No platform fee, no contract, and how the model works.</span>
            </Link>
            <Link className="card card-hover" href="/for-shoppers">
              <strong className="d4">File a claim</strong>
              <span className="body mt-2">For shoppers with a lost, stolen or damaged order.</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-wrap">
        <div className="cta-glow" />
        <div className="canvas" />
        <div className="narrow center">
          <div className="grid gap-7 rv" style={{ justifyItems: "center" }}>
            <span className="logo-tile">
              <LogoGlyph />
            </span>
            <h2 className="d2">Since you are here anyway.</h2>
            <p className="lead maxw-md">Thirty minutes on your own catalogue, and an honest read on whether Guide fits.</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("404-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("404-cta")} target="_blank" rel="noopener">
                <svg
                  className="bicon"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.9}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 8h16l-1.2 11.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8z" />
                  <path d="M8.5 10V6.5a3.5 3.5 0 0 1 7 0V10" />
                </svg>
                Install on Shopify
              </a>
            </div>
            <p className="small">{CTA_FOOTER}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
