import type { Metadata } from "next";
import Link from "next/link";
import { IconBoxes, IconCheck, IconShield, IconShieldAlert, IconShopifyBag } from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { breadcrumbNode, jsonLdScript, webPageNode } from "@/lib/json-ld";
import { demoUrl, installUrl, OG_IMAGES, SITE_URL } from "@/lib/site";

const TITLE = "Fraud and abuse detection | Guide";
const DESCRIPTION =
  "Guide catches claim and return abuse across its merchant network while resolving claims. Nothing for you to configure. If it hits your store, we tell you.";

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
  description:
    "Claim and return abuse assessed by Guide across its merchant network to catch serial claimants and reshipping rings, with the merchant notified rather than asked to operate it.",
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
              The abuse problem
              <br />
              you don&apos;t have
              <br />
              to <span className="text-accent">staff</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              Guide resolves claims and carries the cost of the approved ones, so catching abuse is
              our job rather than yours. It runs inside our claims process, across every merchant on
              the network. When a pattern turns up on your store, we tell you what we found.
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
              Fraud detection is a tool Guide runs internally, not a dashboard the merchant operates.
              Because Guide resolves claims and carries the cost of approved ones, it assesses claim
              and return abuse across the whole network rather than within one merchant&apos;s data. A
              serial claimant filing across several stores, or a reshipping ring reusing an address
              pattern, is visible at network level long before any single merchant would have the
              history to spot it. Merchants don&apos;t see scores or set thresholds. When abuse
              involves their store, Guide notifies them.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Why we run it</span>
            <h2 className="d2">
              It&apos;s our loss to absorb,
              <br className="hide-mob" /> so it&apos;s our work to do.
            </h2>
            <p className="lead">
              This isn&apos;t a tool we hand you. It&apos;s part of how Guide assesses a claim, and
              the incentive to get it right sits with the party paying for the outcome.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ico v">
                <IconBoxes />
              </span>
              <h3 className="d4 mt-4">Nothing to configure</h3>
              <p className="body mt-2">
                There&apos;s no fraud dashboard to learn, no score to interpret and no thresholds to
                keep tuned. It runs whether or not anyone on your team ever thinks about it, which is
                the difference between a service and a tool.
              </p>
            </div>
            <div className="card rv d-1">
              <span className="ico blue">
                <IconShieldAlert />
              </span>
              <h3 className="d4 mt-4">A view you can&apos;t get on your own</h3>
              <p className="body mt-2">
                A shopper filing their first claim with you might be filing their ninth this quarter.
                Your own order history can&apos;t show you that, and no amount of staffing would find
                it. The network sees it on the first claim.
              </p>
            </div>
            <div className="card rv d-2">
              <span className="ico v">
                <IconCheck />
              </span>
              <h3 className="d4 mt-4">You hear about it when it matters</h3>
              <p className="body mt-2">
                We don&apos;t send you a queue to work through. If abuse shows up against your brand,
                our team tells you what we saw and what we did, so you can decide what happens on
                your side of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">What actually happens</span>
            <h2 className="d2">
              Checked by us,
              <br />
              not by you.
            </h2>
            <p className="lead">
              Every step here is ours. The merchant-facing part of this product is the last one.
            </p>
          </div>
          <div className="flow rv">
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">The claim arrives</h3>
                <p className="body">
                  Same portal, same four fields. Nothing about the shopper&apos;s experience changes
                  because of what we already know, because telling someone they look suspicious is
                  how you lose an honest customer.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Signals are matched across the network</h3>
                <p className="body">
                  Addresses, devices and payment fingerprints checked against history from every
                  merchant on Guide, alongside claim frequency, order history and the specific pattern
                  of what&apos;s being claimed.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Our specialists make the call</h3>
                <p className="body">
                  A pattern is an input to a decision a person makes, not a verdict a machine reaches
                  on its own. Guide approves, asks for more evidence, or denies, under the standard
                  set out in our{" "}
                  <Link className="tlink" href="/terms">
                    terms of service
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">You&apos;re notified if it concerns your store</h3>
                <p className="body">
                  Repeat abuse against your brand reaches you with what we found and what we did
                  about it. It arrives as information rather than as a task, and your support queue
                  stays empty either way.
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
                A claims process that treats everyone as a suspect costs more in lost customers than
                it saves in refused payouts. Guide clears the honest majority quickly and spends its
                scrutiny on the small number of cases that earn it.
              </p>
              <ul className="blist">
                <li>Honest customers aren&apos;t asked for paperwork to prove it</li>
                <li>Every denial has stated reasons behind it</li>
                <li>Your team never has to arbitrate any of this</li>
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
                <span className="kicker">What reaches you</span>
                <h2 className="d2">
                  A notification,
                  <br />
                  not a workload.
                </h2>
                <p className="lead">
                  You don&apos;t administer any of this, so what arrives on your side is deliberately
                  narrow. It&apos;s the short list of things a merchant would actually want to know.
                </p>
              </div>
              <div className="card card-lg" style={{ padding: "8px 26px" }}>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Repeat claimants on your store</strong>
                    <span>
                      When the same shopper files against you more often than the pattern supports,
                      you hear about it, and you can decide what they&apos;re allowed to buy next.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Attempts we stopped</strong>
                    <span>
                      Reshipping rings and address clusters that filed against your brand and were
                      denied, so you know the attempt happened at all.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>The reasons behind a denial</strong>
                    <span>
                      In plain language, so you can answer the customer if they come to you rather
                      than to us.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Clusters that aren&apos;t fraud</strong>
                    <span>
                      Damage claims concentrated on one product or one warehouse are usually a
                      packaging or picking problem. We tell you either way, because that one is
                      yours to fix.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Nothing beyond that</strong>
                    <span>
                      No score to review, no queue to clear, no thresholds to keep tuned. If we
                      haven&apos;t told you about it, there&apos;s nothing waiting for you.
                    </span>
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
              Every fraud product oversells itself, so here is the boundary. Knowing where it stops
              is what lets you plan around the rest.
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
              <h3 className="d4">It isn&apos;t payment fraud tooling</h3>
              <p className="body mt-2">
                This covers what happens after the order: claims and returns. Stolen cards and
                chargebacks at the point of payment are a different problem, and you should keep
                whatever you already use for them.
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
              <span className="body mt-2">
                Protection and return coverage embedded directly in Shopify checkout.
              </span>
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
            <h2 className="d2">Ask us how a claim actually gets assessed.</h2>
            <p className="lead maxw-md">
              Book a demo and we&apos;ll walk the process end to end, including what makes us look
              twice.
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
            <p className="small">
              Thirty minutes, on your own catalogue &middot; Free to install, and our team does the build
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
