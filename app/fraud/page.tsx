import type { Metadata } from "next";
import Link from "next/link";
import { IconBoxes, IconCheck, IconShield, IconShieldAlert, IconShopifyBag } from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { breadcrumbNode, jsonLdScript, webPageNode } from "@/lib/json-ld";
import { demoUrl, installUrl, OG_IMAGES, SITE_URL } from "@/lib/site";

const TITLE = "Fraud and abuse detection | Guide";
const DESCRIPTION =
  "Abuse signals scored across the network, so that serial claimants and reshipping rings are caught before they start costing you margin.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fraud" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/fraud",
    images: OG_IMAGES,
  },
};

const serviceNode = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/fraud#service`,
  name: "Fraud and abuse detection",
  description: "Claim abuse signals scored across the Guide network to catch serial claimants and reshipping rings.",
  serviceType: "Post-purchase ecommerce software",
  provider: { "@id": `${SITE_URL}/#organization` },
  isRelatedTo: { "@id": `${SITE_URL}/#software` },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: { "@type": "BusinessAudience", audienceType: "Ecommerce merchants on Shopify" },
  url: `${SITE_URL}/fraud`,
};

export default function FraudPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/fraud",
              name: TITLE,
              description: DESCRIPTION,
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
              { name: "Fraud and abuse detection", path: "/fraud" },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceNode) }} />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Fraud Detection
            </span>
            <h1 className="d1">
              Catch the pattern
              <br />
              before it becomes
              <br />
              a <span className="text-accent">policy</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              Most claim and return abuse isn&apos;t clever. It&apos;s repetitive. Guide scores behavior
              across the whole merchant network so the pattern is visible on the first claim rather
              than the fifth.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("fraud-hero")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                View all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="narrow">
          <div className="answer rv">
            <span className="kicker">How fraud detection works</span>
            <p className="lead mt-4">
              Guide scores claim and return abuse across the whole network rather than within one
              merchant&apos;s data. A serial claimant filing across several stores, or a reshipping
              ring using the same address pattern, is visible at network level long before any single
              merchant would have enough history to spot it. Signals are advisory: the merchant sets
              the thresholds.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">How it works</span>
            <h2 className="d2">
              Three layers, none of them
              <br className="hide-mob" /> aimed at your honest customers.
            </h2>
            <p className="lead">
              Each layer runs before a specialist spends time on a case, and each one is explainable
              after the fact.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ico v">
                <IconShieldAlert />
              </span>
              <h3 className="d4 mt-4">Network-level signals</h3>
              <p className="body mt-2">
                Addresses, devices and payment fingerprints associated with abuse at one merchant are
                known at every other. Behavior that migrates arrives already flagged, which is the
                whole advantage of a network.
              </p>
            </div>
            <div className="card rv d-1">
              <span className="ico">
                <IconCheck />
              </span>
              <h3 className="d4 mt-4">Evidence validation</h3>
              <p className="body mt-2">
                Submitted photos are checked for reuse, manipulation and whether they actually show
                the product claimed, before a person spends time on them.
              </p>
            </div>
            <div className="card rv d-2">
              <span className="ico">
                <IconBoxes />
              </span>
              <h3 className="d4 mt-4">Rules you control</h3>
              <p className="body mt-2">
                You decide what a high score does: extra evidence, a manual queue, or a decline.
                Guide surfaces the signal, the policy stays yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">What happens to a suspicious claim</span>
            <h2 className="d2">Scored, not judged.</h2>
            <p className="lead">
              A score is an input to your policy, not a verdict. Nothing declines on its own unless
              you configure it to.
            </p>
          </div>
          <div className="flow rv">
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">The claim arrives</h3>
                <p className="body">
                  Same portal, same four fields. Nothing about the shopper experience changes based
                  on their score, because telling someone they look suspicious is how you lose an
                  honest customer.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Signals are matched</h3>
                <p className="body">
                  Address, device and payment fingerprints checked against network history. Claim
                  frequency, order history and the specific pattern of what is being claimed.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">A score is produced, with reasons</h3>
                <p className="body">
                  Not a black box. The dashboard shows which signals contributed, so a decision can be
                  defended to the customer or to a chargeback provider.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Your rule fires</h3>
                <p className="body">
                  Auto-approve, request evidence, route to your queue, or decline. You set the
                  thresholds and you can override any outcome in either direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconShield /> Proportionality
              </span>
              <h2 className="d2">
                Most people telling you
                <br />
                their package vanished
                <br />
                are telling the truth.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                Fraud tooling that treats every claim as suspect costs more in lost customers than it
                saves in prevented payouts. Guide is built to clear the honest majority instantly and
                spend its scrutiny on the small number of cases that warrant it.
              </p>
              <ul className="blist">
                <li>Genuine customers are not asked for paperwork</li>
                <li>Scores are explainable, so a decision can be defended</li>
                <li>You can always override, in either direction</li>
              </ul>
            </div>
            <div className="flex justify-center rv d-1">
              <picture>
                <source srcSet="/assets/mocks/returns.7659fa4062.avif" type="image/avif" />
                <img
                  className="mock phone"
                  src="/assets/mocks/returns.1b2b57a656.webp"
                  width={887}
                  height={1774}
                  alt="Guide returns portal, showing refund, exchange and store credit options"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="split split-t">
            <div className="flex justify-center rv d-1">
              <picture>
                <source srcSet="/assets/mocks/exchange.704dbffb2e.avif" type="image/avif" />
                <img
                  className="mock phone"
                  src="/assets/mocks/exchange.44c9c301ba.webp"
                  width={887}
                  height={1774}
                  alt="Guide exchange flow, choosing a replacement size and color"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="grid gap-7 rv">
              <div className="sec-head">
                <span className="kicker">Your rules</span>
                <h2 className="d2">
                  Where the line sits
                  <br />
                  is your decision.
                </h2>
                <p className="lead">
                  Two merchants in the same category will draw this differently, and both can be
                  right. Guide doesn&apos;t have an opinion about your risk appetite.
                </p>
              </div>
              <div className="card card-lg" style={{ padding: "8px 26px" }}>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Score thresholds</strong>
                    <span>What counts as high, and what happens at each level.</span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Actions</strong>
                    <span>
                      Request evidence, route to a manual queue, decline, or approve anyway and absorb
                      it.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Customer exemptions</strong>
                    <span>
                      Lifetime value or tier can override a score, so your best customers are never
                      treated as suspects.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Category rules</strong>
                    <span>
                      Higher scrutiny on the products that actually attract abuse, rather than across
                      the board.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Review and appeal</strong>
                    <span>Every decision is reopenable, and the reasons behind the score stay visible.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">The honest part</span>
            <h2 className="d2">What this doesn&apos;t do.</h2>
            <p className="lead">
              Every fraud product oversells itself, so here is the boundary. Knowing where the tool
              stops is what lets you staff the rest properly.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <h3 className="d4">It won&apos;t catch everything</h3>
              <p className="body mt-2">
                A first-time, well-executed claim from a clean address looks exactly like a genuine
                one, because at that moment there&apos;s no difference in the data. The network
                catches the repeat, which is where the volume actually is.
              </p>
            </div>
            <div className="card rv d-1">
              <h3 className="d4">It&apos;s not a substitute for a policy</h3>
              <p className="body mt-2">
                A score tells you how unusual something is. Only you can decide what you&apos;re
                willing to absorb to keep a customer, and that decision is a commercial one.
              </p>
            </div>
            <div className="card rv d-2">
              <h3 className="d4">It won&apos;t police your team</h3>
              <p className="body mt-2">
                Internal loss, mis-picks and warehouse error look like claims but are not fraud. Guide
                flags the pattern by SKU and location so you can see it, then it&apos;s yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Works with</span>
            <h2 className="d2">It does not stop at this module.</h2>
            <p className="lead">
              Every part of Guide writes to the same record, so what happens here changes how the
              next thing is handled.
            </p>
          </div>
          <div className="grid g3">
            <Link className="card card-hover rv" href="/protection">
              <strong className="d4">Checkout+</strong>
              <span className="body mt-2">Protection and free returns, offered where shoppers decide.</span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
            </Link>
            <Link className="card card-hover rv" href="/returns">
              <strong className="d4">Returns &amp; Exchanges</strong>
              <span className="body mt-2">Self-service portal with exchange-first routing.</span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
            </Link>
            <Link className="card card-hover rv" href="/tracking">
              <strong className="d4">Order Tracking</strong>
              <span className="body mt-2">Carrier-agnostic tracking on your own brand.</span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
            </Link>
            <Link className="card card-hover rv" href="/claims">
              <strong className="d4">Claims</strong>
              <span className="body mt-2">Lost, stolen and damaged orders resolved end to end.</span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
            </Link>
            <Link className="card card-hover rv" href="/analytics">
              <strong className="d4">Analytics</strong>
              <span className="body mt-2">Live dashboards across every module.</span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
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
            <h2 className="d2">See what the network already knows.</h2>
            <p className="lead maxw-md">
              We&apos;ll run a look-back against a sample of your historical claims and show you the
              patterns in them.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("fraud-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("fraud-cta")} target="_blank" rel="noopener">
                <IconShopifyBag />
                Install on Shopify
              </a>
            </div>
            <p className="small">Thirty minutes, on your own catalogue &middot; Or install free and set it up yourself</p>
          </div>
        </div>
      </section>
    </main>
  );
}
