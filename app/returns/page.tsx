import type { Metadata } from "next";
import Link from "next/link";
import { IconPackage, IconShopifyBag, IconSwapDouble } from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { jsonLdScript, webPageNode } from "@/lib/json-ld";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Returns and exchanges portal | Guide",
  description:
    "An exchange-first returns portal that offers the swap before the refund, so returns keep revenue with the brand instead of sending it back.",
  alternates: { canonical: "/returns" },
  openGraph: {
    title: "Returns and exchanges portal | Guide",
    description:
      "An exchange-first returns portal that offers the swap before the refund, so returns keep revenue with the brand instead of sending it back.",
    url: "/returns",
    images: OG_IMAGES,
  },
};

export default function ReturnsPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/returns",
              name: "Returns and exchanges portal | Guide",
              description:
                "An exchange-first returns portal that offers the swap before the refund, so returns keep revenue with the brand instead of sending it back.",
            }),
          ]),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Returns &amp; Exchanges
            </span>
            <h1 className="d1">
              An exchange-first returns module
              <br />
              that keeps the <span className="text-accent">revenue</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              A refund sends the money back. An exchange keeps it with the brand and keeps the
              customer. The portal offers the swap before it offers the money, so a return stops
              being a loss by default.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("returns-hero")} target="_blank" rel="noopener">
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
            <span className="kicker">What the returns portal is</span>
            <p className="lead mt-4">
              Guide&apos;s returns portal is a self-service flow, hosted on the merchant&apos;s own
              brand, where a shopper starts a return without emailing anyone. Before it offers a
              refund it offers a suitable exchange or store credit, which is what keeps the
              revenue in the business. Routing rules decide which items are eligible, where they
              should be sent, and which returns are not worth shipping back at all.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
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
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconPackage /> Exchange first
              </span>
              <h2 className="d2">
                The swap is offered
                <br />
                before the refund.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                The portal leads with what the customer can have instead: the right size, a
                different color, or store credit at a bonus rate. A refund is still there for
                anyone who wants it, but it stops being the default path, and revenue that would
                have left the brand stays with it.
              </p>
              <ul className="blist">
                <li>Instant exchange recommendations from live inventory</li>
                <li>One-tap return initiation</li>
                <li>Smart eligibility and policy checks</li>
                <li>Store credit at a bonus rate, if you offer it</li>
                <li>Refund still available, never hidden</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">How it works</span>
            <h2 className="d2">Four screens. No email thread.</h2>
            <p className="lead">
              The order of these screens is the entire product. Put refund first and most people
              press refund.
            </p>
          </div>
          <div className="flow rv">
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Identify the order</h3>
                <p className="body">
                  Order number and email, or a single tap from the tracking page they were already
                  looking at. No account, no password.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Say what happened</h3>
                <p className="body">
                  Structured reasons at the variant level rather than a free-text box nobody reads.
                  Too small, wrong color, not as pictured, arrived damaged.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">See what you would rather have</h3>
                <p className="body">
                  The right size, a close alternative, or bonus store credit. In stock, with any
                  price difference already calculated. Refund is available, it is just not first.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Ship it back, or do not</h3>
                <p className="body">
                  Label issued, exchange drafted in Shopify, your warehouse gets a clean
                  instruction. On low-value items where freight exceeds recovery, Guide can simply
                  tell them to keep it.
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
                <IconSwapDouble /> Exchanges
              </span>
              <h2 className="d2">
                Show them what they
                <br />
                actually wanted.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                Before a refund button appears, the portal offers the right size, a close
                alternative or bonus store credit. The shopper isn&apos;t being talked out of their
                money, they are being offered something better.
              </p>
              <ul className="blist">
                <li>Instant exchanges that ship before the return lands</li>
                <li>Bonus store credit at a rate you set</li>
                <li>Keep-it resolutions where freight exceeds recovery</li>
              </ul>
            </div>
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
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="split split-t">
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
            <div className="grid gap-7 rv">
              <div className="sec-head">
                <span className="kicker">Your rules</span>
                <h2 className="d2">
                  Your policy, enforced
                  <br />
                  the same way every time.
                </h2>
                <p className="lead">
                  Guide doesn&apos;t impose a returns policy. It applies the one you already have,
                  consistently, which is usually the part that breaks when a human is doing it.
                </p>
              </div>
              <div className="card card-lg" style={{ padding: "8px 26px" }}>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Windows and eligibility</strong>
                    <span>
                      Return windows by product, collection, customer tier or order value. Final
                      sale rules that actually hold.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Fees</strong>
                    <span>
                      Return fees, restocking fees, or free returns for everyone. Waivable per
                      customer tier.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Exchange risk</strong>
                    <span>
                      Which customers get an instant exchange that ships before the return
                      arrives, and which wait.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Store credit bonus</strong>
                    <span>The rate you offer above face value, if any.</span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Fraud thresholds</strong>
                    <span>
                      What happens when a shopper&apos;s behavior scores high across the network.
                      Extra evidence, manual queue, or decline.
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
            <span className="kicker">Beyond logistics</span>
            <h2 className="d2">
              Every return is a product review
              <br className="hide-mob" /> you did not have to ask for.
            </h2>
            <p className="lead">
              Structured return reasons at the variant level, routed to the people who can act on
              them.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <h3 className="d4">Sizing intelligence</h3>
              <p className="body mt-2">
                A consistent &quot;runs small&quot; signal on a specific variant, surfaced back to
                the product page once it&apos;s statistically meaningful rather than after one
                complaint.
              </p>
            </div>
            <div className="card rv d-1">
              <h3 className="d4">Defect clustering</h3>
              <p className="body mt-2">
                Damage claims and return reasons grouped by SKU, batch and vendor, so a
                manufacturing problem surfaces in weeks rather than seasons.
              </p>
            </div>
            <div className="card rv d-2">
              <h3 className="d4">Contribution by SKU</h3>
              <p className="body mt-2">
                True margin after returns, freight and processing. Some of your bestsellers are
                not bestsellers.
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
              <span className="body mt-2">Protection and return coverage, in Shopify checkout.</span>
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
            <Link className="card card-hover rv" href="/fraud">
              <strong className="d4">Fraud Detection</strong>
              <span className="body mt-2">Run by Guide across the network.</span>
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
            <h2 className="d2">See the portal on your own catalogue.</h2>
            <p className="lead maxw-md">
              We&apos;ll load your products and policies into a working returns portal during the
              demo.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("returns-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("returns-cta")} target="_blank" rel="noopener">
                <IconShopifyBag />
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
