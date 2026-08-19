import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBars,
  IconBoxes,
  IconCheck,
  IconEnvelope,
  IconShield,
  IconShopifyBag,
} from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { breadcrumbNode, jsonLdScript, webPageNode } from "@/lib/json-ld";
import { demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources for Shopify merchants | Guide",
  description:
    "Returns policy guidance, operator writing, a plain-English glossary and the shopper claim portal, gathered in one place for your team.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources for Shopify merchants | Guide",
    description:
      "Returns policy guidance, operator writing, a plain-English glossary and the shopper claim portal, gathered in one place for your team.",
    url: "/resources",
    images: OG_IMAGES,
  },
};

type LogoCell = readonly [string, number, number, string] | "hero" | null;

const integrationRow1: readonly LogoCell[] = [
  ["shopify.3f62a000e3.webp", 116, 116, "Shopify"],
  null,
  null,
  ["zendesk.4d5dbc9351.webp", 116, 116, "Zendesk"],
  "hero",
  ["gorgias.75e636320d.webp", 116, 116, "Gorgias"],
  null,
  null,
  ["tiktok.187609de13.webp", 116, 116, "TikTok"],
];

const integrationRow2: readonly LogoCell[] = [
  null,
  ["northbeam.ff7f7593a2.webp", 116, 116, "Northbeam"],
  null,
  ["skio.5d823ea2bf.webp", 128, 128, "Skio"],
  null,
  ["okendo.14e05d89fb.webp", 92, 92, "Okendo"],
  null,
  ["loop.b316fcefe1.webp", 116, 116, "Loop"],
  null,
];

const integrationRow3: readonly LogoCell[] = [
  ["emotive.b407ff76f0.webp", 116, 116, "Emotive"],
  null,
  ["recharge.37eb0e204f.webp", 110, 110, "Recharge"],
  null,
];

function KeycapRow({ row, className }: { row: readonly LogoCell[]; className?: string }) {
  return (
    <div className={`kb-row ${className ?? ""}`.trim()}>
      {row.map((cell, i) => {
        if (cell === null) return <span key={i} className="kb-key blank" aria-hidden="true" />;
        if (cell === "hero") {
          return (
            <span key={i} className="kb-key hero-key" role="img" aria-label="Guide">
              <LogoGlyph />
            </span>
          );
        }
        const [src, w, h, alt] = cell;
        return (
          <span key={i} className="kb-key">
            <img src={`/assets/logos/${src}`} width={w} height={h} loading="lazy" decoding="async" alt={alt} />
          </span>
        );
      })}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/resources",
              name: "Resources for Shopify merchants | Guide",
              description:
                "Returns policy guidance, operator writing, a plain-English glossary and the shopper claim portal, gathered in one place for your team.",
            }),
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Resources for Shopify merchants", path: "/resources" },
            ])
          ),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Resources
            </span>
            <h1 className="d1">
              Everything you need
              <br />
              to run this <span className="text-accent">well</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              Setup guides, policy templates, operator playbooks and the shopper-facing claim
              portal.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("resources-hero")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                View all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="prod rv">
            <a href="https://claims.guideprotection.com">
              <span className="ico">
                <IconCheck />
              </span>
              <strong className="d4">File a claim</strong>
              <span className="body">
                For shoppers. Report a lost, stolen or damaged order and check the status of an
                existing claim.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Go to claims
              </span>
            </a>
            <Link href="/blog-exchange-first">
              <span className="ico">
                <IconEnvelope />
              </span>
              <strong className="d4">Returns policy design</strong>
              <span className="body">
                How to structure a returns policy that retains revenue without tightening the
                rules.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Read the guide
              </span>
            </Link>
            <Link href="/blog">
              <span className="ico">
                <IconBars />
              </span>
              <strong className="d4">Operator writing</strong>
              <span className="body">
                Notes on claim thresholds, exchange-first returns and cutting
                where-is-my-order volume.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Read the blog
              </span>
            </Link>
            <Link href="/glossary">
              <span className="ico v">
                <IconBoxes />
              </span>
              <strong className="d4">Glossary</strong>
              <span className="body">
                Plain definitions of the terms this category uses loosely, from attach rate to
                WISMO.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Read the glossary
              </span>
            </Link>
            <Link href="/for-shoppers">
              <span className="ico">
                <IconShield />
              </span>
              <strong className="d4">For shoppers</strong>
              <span className="body">
                What coverage includes, how a claim is resolved, and what to expect once you have
                filed one.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                See how it works
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2" id="integrations">
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">Integrations</span>
            <h2 className="d2 center">Plays nicely with your stack.</h2>
            <p className="lead center">Connect the tools you already use. One keystroke and you&apos;re live.</p>
          </div>
          <div className="kb rv">
            <KeycapRow row={integrationRow1} />
            <KeycapRow row={integrationRow2} className="r2" />
            <KeycapRow row={integrationRow3} className="r3" />
          </div>
          <p className="small center mt-8">
            Don&apos;t see yours? The public API and webhooks cover it, and our partner team will
            build the connector. Unfamiliar with a term on this page? The{" "}
            <Link className="tlink" href="/glossary" style={{ fontSize: ".855rem" }}>
              glossary
            </Link>{" "}
            defines them plainly.
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
            <h2 className="d2">Still have a question?</h2>
            <p className="lead maxw-md">
              Talk to someone who has implemented this a few hundred times rather than reading
              another page about it.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("resources-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("resources-cta")} target="_blank" rel="noopener">
                <IconShopifyBag />
                Install on Shopify
              </a>
            </div>
            <p className="small">
              Thirty minutes, on your own catalogue &middot; Or install free and set it up yourself
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
