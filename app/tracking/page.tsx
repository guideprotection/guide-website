import type { Metadata } from "next";
import Link from "next/link";
import { IconShieldAlert, IconShopifyBag, IconSwapDouble, IconTruck } from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { jsonLdScript, webPageNode } from "@/lib/json-ld";
import { demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Branded order tracking | Guide",
  description:
    "Carrier-agnostic order tracking on your own domain, with proactive delivery notifications that cut where-is-my-order tickets.",
  alternates: { canonical: "/tracking" },
  openGraph: {
    title: "Branded order tracking | Guide",
    description:
      "Carrier-agnostic order tracking on your own domain, with proactive delivery notifications that cut where-is-my-order tickets.",
    url: "/tracking",
    images: OG_IMAGES,
  },
};

export default function TrackingPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/tracking",
              name: "Branded order tracking | Guide",
              description:
                "Carrier-agnostic order tracking on your own domain, with proactive delivery notifications that cut where-is-my-order tickets.",
            }),
          ]),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Order Tracking
            </span>
            <h1 className="d1">
              Carrier-agnostic tracking
              <br />
              that stays <span className="text-accent">on brand</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              Give customers a single, beautifully branded place to track every shipment.
              Integrate with any carrier or merchant and deliver proactive updates from dispatch
              to doorstep, so nobody has to write in and ask.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("tracking-hero")} target="_blank" rel="noopener">
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
            <span className="kicker">What branded order tracking is</span>
            <p className="lead mt-4">
              Guide replaces the carrier&apos;s tracking page with one on the merchant&apos;s own
              domain, carrying the merchant&apos;s brand. It&apos;s carrier-agnostic, so the
              experience doesn&apos;t change when a merchant switches carrier or runs several at
              once, and it pushes proactive updates when a delivery slips rather than waiting for
              the shopper to check. That&apos;s what removes the reason most
              where-is-my-order tickets get written.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="flex justify-center rv d-1">
              <picture>
                <source srcSet="/assets/mocks/tracking.b82edbc4a6.avif" type="image/avif" />
                <img
                  className="mock phone"
                  src="/assets/mocks/tracking.2804d676d6.webp"
                  width={887}
                  height={1918}
                  alt="Branded order tracking page showing delivery milestones and order items"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconTruck /> Tracking
              </span>
              <h2 className="d2">
                The page they refresh four
                <br />
                times a day should be yours.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                Tracking lives on your own domain, with your navigation and your merchandising. No
                third-party redirect, no competitor placements, no carrier page from 1998.
              </p>
              <ul className="blist">
                <li>Unified tracking across all carriers</li>
                <li>Automated delivery notifications</li>
                <li>One page whichever carrier moved the parcel</li>
                <li>Branded tracking page that drives repeat visits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">How it works</span>
            <h2 className="d2">From label to doorstep, in your voice.</h2>
            <p className="lead">
              Where is my order is the largest ticket category in most ecommerce inboxes.
              It&apos;s an information problem, not a staffing problem.
            </p>
          </div>
          <div className="flow rv">
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">The label is created</h3>
                <p className="body">
                  Guide picks up the shipment from Shopify or your fulfillment platform the moment
                  it exists, whichever carrier it&apos;s going with.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Scans become sentences</h3>
                <p className="body">
                  &quot;Arrived at facility&quot; means nothing to a shopper. Guide translates
                  carrier status codes into plain language with a real delivery estimate attached.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Delays get announced, not discovered</h3>
                <p className="body">
                  When a scan stalls or a delivery window is missed, the customer hears it from
                  you first. This one message does more work than the rest of the sequence
                  combined and almost nobody sends it.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Problems resolve on the same page</h3>
                <p className="body">
                  If the parcel is genuinely lost or damaged, the claim starts from the page they
                  are already looking at, at the exact moment they realize something is wrong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">What it does</span>
            <h2 className="d2">Three things a carrier page will never do.</h2>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ico v">
                <IconTruck />
              </span>
              <h3 className="d4 mt-4">Every carrier, one view</h3>
              <p className="body mt-2">
                Domestic, international, freight and regional carriers normalised into a single
                status model, so the customer never has to interpret a carrier code or visit a
                site that doesn&apos;t know your brand exists.
              </p>
            </div>
            <div className="card rv d-1">
              <span className="ico">
                <IconShieldAlert />
              </span>
              <h3 className="d4 mt-4">Proactive, not reactive</h3>
              <p className="body mt-2">
                Guide watches for stalled scans and missed delivery windows and messages the
                customer before they message you. Silence is what turns a delay into a ticket, and
                then into a refund request.
              </p>
            </div>
            <div className="card rv d-2">
              <span className="ico">
                <IconSwapDouble />
              </span>
              <h3 className="d4 mt-4">Merchandised properly</h3>
              <p className="body mt-2">
                Recommendations driven by what they just bought, with real inventory awareness. It
                is the most-visited page you own between purchase and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="split split-t">
            <div className="flex justify-center rv d-1">
              <picture>
                <source srcSet="/assets/mocks/tracking.b82edbc4a6.avif" type="image/avif" />
                <img
                  className="mock phone"
                  src="/assets/mocks/tracking.2804d676d6.webp"
                  width={887}
                  height={1918}
                  alt="Branded order tracking page showing delivery milestones and order items"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="grid gap-7 rv">
              <div className="sec-head">
                <span className="kicker">Your rules</span>
                <h2 className="d2">
                  Your domain, your sender,
                  <br />
                  your words.
                </h2>
                <p className="lead">
                  The tracking experience is a surface you own. Guide supplies the data and the
                  logic, and stays out of the way of everything the customer can see.
                </p>
              </div>
              <div className="card card-lg" style={{ padding: "8px 26px" }}>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Domain</strong>
                    <span>
                      track.yourbrand.com, with your navigation and footer. Not a page on our
                      site.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Notification channel</strong>
                    <span>
                      Email and SMS through your own Klaviyo, Postscript or Attentive account,
                      from your sending address.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Trigger points</strong>
                    <span>
                      Which events send a message, and which stay silent. Dispatch, out for
                      delivery, delayed, delivered, exception.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Delay threshold</strong>
                    <span>How long a scan may stall before the customer hears about it.</span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Merchandising</strong>
                    <span>What appears below the timeline, and whether it appears at all.</span>
                  </span>
                </div>
              </div>
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
              <span className="body mt-2">Abuse signals scored across the network.</span>
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
            <h2 className="d2">Take back the most-visited page you don&apos;t own.</h2>
            <p className="lead maxw-md">
              We&apos;ll mock your tracking page on your own brand before the call so you can see
              it rather than imagine it.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("tracking-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("tracking-cta")} target="_blank" rel="noopener">
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
