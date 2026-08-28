import type { Metadata } from "next";
import Link from "next/link";
import { LogoGlyph } from "@/components/logo";
import { GLOSSARY_TERMS } from "@/lib/glossary";
import { breadcrumbNode, definedTermSetJsonLd, webPageNode } from "@/lib/json-ld";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

const TITLE = "Post-purchase glossary | Guide";
const DESCRIPTION =
  "Plain definitions of post-purchase terms, from attach rate and WISMO to exchange-first returns and network-level claim fraud.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/glossary" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/glossary", images: OG_IMAGES },
};

export default function GlossaryPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [webPageNode({ path: "/glossary", name: TITLE, description: DESCRIPTION })],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Post-purchase glossary", path: "/glossary" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            definedTermSetJsonLd({
              path: "/glossary",
              name: "Post-purchase glossary",
              description:
                "Plain definitions of the terms used in post-purchase ecommerce, from attach rate to WISMO.",
              terms: GLOSSARY_TERMS,
            })
          ),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Glossary
            </span>
            <h1 className="d1">
              The post-purchase vocabulary,
              <br />
              without the <span className="text-accent">padding</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              Plain definitions of the terms that get used loosely in this category. No vendor
              spin, no invented benchmarks, and nothing here that Guide cannot stand behind.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("glossary-hero")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                View all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="narrow">
          <dl className="terms rv">
            {GLOSSARY_TERMS.map((t) => (
              <div className="term" id={t.slug} key={t.slug}>
                <dt className="d4">{t.term}</dt>
                <dd className="body mt-2">{t.description}</dd>
              </div>
            ))}
          </dl>
          <p className="small mt-8">
            Working definitions rather than industry standards. Where a term is contested we have
            said what Guide means by it, which is the only definition we can speak for. See the{" "}
            <Link className="tlink" href="/blog" style={{ fontSize: ".855rem" }}>
              blog
            </Link>{" "}
            for the longer arguments behind several of these, or the{" "}
            <Link className="tlink" href="/products" style={{ fontSize: ".855rem" }}>
              platform overview
            </Link>{" "}
            for how the pieces fit together. How Guide handles the data behind these terms is set
            out in the{" "}
            <Link className="tlink" href="/privacy" style={{ fontSize: ".855rem" }}>
              privacy policy
            </Link>
            , and the commercial side sits in the{" "}
            <Link className="tlink" href="/terms" style={{ fontSize: ".855rem" }}>
              terms of service
            </Link>
            . For how teams put these into practice, see{" "}
            <Link className="tlink" href="/resources" style={{ fontSize: ".855rem" }}>
              resource center
            </Link>
            .
          </p>
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
            <h2 className="d2">Want this applied to your catalogue?</h2>
            <p className="lead maxw-md">
              Thirty minutes on your own store beats another page of definitions.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("glossary-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("glossary-cta")} target="_blank" rel="noopener">
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
            <p className="small">
              {CTA_FOOTER}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
