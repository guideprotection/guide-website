import type { Metadata } from "next";
import Link from "next/link";
import { IconBoxes, IconShield, IconSwapDouble } from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { jsonLdScript, webPageNode, breadcrumbNode } from "@/lib/json-ld";
import { demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checkout+ | Shipping protection and free returns",
  description:
    "Offer shipping protection and free returns at checkout, in your own brand. It funds the returns program without a platform fee.",
  alternates: { canonical: "/protection" },
  openGraph: {
    title: "Checkout+ | Shipping protection and free returns",
    description:
      "Offer shipping protection and free returns at checkout, in your own brand. It funds the returns program without a platform fee.",
    url: "/protection",
    images: OG_IMAGES,
  },
};

export default function ProtectionPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/protection",
              name: "Checkout+ | Shipping protection and free returns",
              description:
                "Offer shipping protection and free returns at checkout, in your own brand. It funds the returns program without a platform fee.",
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
              { name: "Checkout+", path: "/protection" },
            ])
          ),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Checkout+
            </span>
            <h1 className="d1">
              Add returns &amp; protection
              <br />
              where shoppers <span className="text-accent">already</span>
              <br />
              decide.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              A clean, on-brand checkout experience that lets customers add shipping protection and
              get free returns thrown in, before they commit to the order, which is exactly where
              hesitation costs you basket size.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("protection-hero")} target="_blank" rel="noopener">
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
            <span className="kicker">What Checkout+ is</span>
            <p className="lead mt-4">
              Checkout+ is a shipping protection and free returns offer that Guide presents as a
              single line in the cart, rendered as a native checkout extension rather than an
              injected script. The shopper accepts or declines it before paying, and the copy,
              colors and typography are the merchant&apos;s own. When a protected order is later
              lost, stolen or damaged, Guide resolves the claim and covers the replacement, which is
              what funds the free returns program without a platform fee.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconShield /> At checkout
              </span>
              <h2 className="d2">
                One line in the cart.
                <br />
                Nothing else changes.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                Guide renders as a native Shopify checkout extension, not an injected script and not
                an iframe. It inherits your type, your colors and your spacing, and it survives
                every platform and theme update.
              </p>
              <ul className="blist">
                <li>One-click protection upsell</li>
                <li>Branded to match your store</li>
                <li>No redirects or pop-ups</li>
              </ul>
            </div>
            <div className="flex justify-center rv d-1">
              <picture>
                <source srcSet="/assets/mocks/checkout.fb3fdaebde.avif" type="image/avif" />
                <img
                  className="mock phone"
                  src="/assets/mocks/checkout.b8978ad62a.webp"
                  width={887}
                  height={1774}
                  alt="Checkout+ cart on a Shopify store, showing shipping protection and free returns added to the order"
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
          <div className="sec-head rv">
            <span className="kicker">How it works</span>
            <h2 className="d2">From install to first protected order.</h2>
            <p className="lead">
              There&apos;s no development work in this. The longest part is deciding your policy.
            </p>
          </div>
          <div className="flow rv">
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Install the app</h3>
                <p className="body">
                  A Shopify app install from the App Store. No theme edits, no code, no developer,
                  and nothing you have to configure yourself.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">We implement it for you</h3>
                <p className="body">
                  The Guide Team sets up the checkout element, your branding and your policy rules
                  against your live theme. You approve the decisions, we do the work.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">The engine prices each order</h3>
                <p className="body">
                  Cart value and composition, destination loss history, carrier and service level,
                  season, and whether this shopper has ordered from you before. Every offer is a
                  decision the engine can explain.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">The shopper decides</h3>
                <p className="body">
                  Clear opt-in, honest coverage language, a visible decline path. Whatever they
                  choose is written to the order record so it is auditable later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Where it appears</span>
            <h2 className="d2">Cart, checkout, or both.</h2>
            <p className="lead">
              Guide renders wherever it converts best for your funnel. You choose which surfaces are
              live, and reporting is broken out by surface so you can tell what is working.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ico v">
                <IconShield />
              </span>
              <h3 className="d4 mt-4">Checkout extension</h3>
              <p className="body mt-2">
                For Shopify Plus. A native app block inside checkout, which is the highest-intent
                moment and the surface that survives platform updates.
              </p>
            </div>
            <div className="card rv d-1">
              <span className="ico">
                <IconBoxes />
              </span>
              <h3 className="d4 mt-4">Cart drawer and cart page</h3>
              <p className="body mt-2">
                For every other plan. Drop-in components for any theme with no code, matching your
                existing cart styling.
              </p>
            </div>
            <div className="card rv d-2">
              <span className="ico">
                <IconSwapDouble />
              </span>
              <h3 className="d4 mt-4">Post-purchase offer</h3>
              <p className="body mt-2">
                A second chance for shoppers who declined the first time, shown on the order status
                page. Additive, since it only reaches people who already said no.
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
                <source srcSet="/assets/mocks/checkout.fb3fdaebde.avif" type="image/avif" />
                <img
                  className="mock phone"
                  src="/assets/mocks/checkout.b8978ad62a.webp"
                  width={887}
                  height={1774}
                  alt="Checkout+ cart on a Shopify store, showing shipping protection and free returns added to the order"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="grid gap-7 rv">
              <div className="sec-head">
                <span className="kicker">Your rules</span>
                <h2 className="d2">
                  We price it.
                  <br />
                  You govern it.
                </h2>
                <p className="lead">
                  Guide sets the protection price, so you are never guessing at a number or carrying
                  the risk of getting it wrong. Everything around the offer is yours, and changeable
                  on any given day without a call.
                </p>
              </div>
              <div className="card card-lg" style={{ padding: "8px 26px" }}>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Branding</strong>
                    <span>
                      Wording, colors, placement and the look of every surface a shopper sees.
                      Yours, not ours.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Price floor and ceiling</strong>
                    <span>
                      Cap what the engine may ever charge, in absolute terms or as a share of cart
                      value.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Category rules</strong>
                    <span>Exclude products, collections or destinations from the offer entirely.</span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Copy and disclosure</strong>
                    <span>
                      Your wording, within the reviewed disclosure language for each market you sell
                      into.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Placement</strong>
                    <span>Which surfaces render the offer, and in what order.</span>
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
            <span className="kicker">Coverage</span>
            <h2 className="d2">What a protected order covers.</h2>
            <p className="lead">
              Written in plain language, because the person reading it at 11pm is deciding whether
              to trust your brand.
            </p>
          </div>
          <div className="grid g4">
            <div className="card rv">
              <h3 className="d4">Lost in transit</h3>
              <p className="body mt-2">
                No scan movement past the carrier&apos;s window. Replaced or refunded, the shopper
                chooses.
              </p>
            </div>
            <div className="card rv d-1">
              <h3 className="d4">Stolen after delivery</h3>
              <p className="body mt-2">
                Marked delivered, never received. No police report, no notarized affidavit, no
                theatre.
              </p>
            </div>
            <div className="card rv d-2">
              <h3 className="d4">Damaged on arrival</h3>
              <p className="body mt-2">
                A single photo starts it. Most damage claims resolve without a further request.
              </p>
            </div>
            <div className="card rv d-3">
              <h3 className="d4">Wrong or missing item</h3>
              <p className="body mt-2">
                Even when it was a pick-and-pack error on your side. Guide covers it and flags the
                SKU.
              </p>
            </div>
          </div>
          <p className="small mt-6">
            Coverage terms, limits and exclusions are set out in full in the{" "}
            <Link href="/terms">terms of use</Link>, including per-order value limits and excluded
            categories. Some categories, including perishables, custom fabrication and high-value
            jewellery, carry specific conditions we will walk through before launch.
          </p>
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
            <h2 className="d2">Put it in the cart and watch what happens.</h2>
            <p className="lead maxw-md">
              We will configure Checkout+ against your live theme during the demo so you can see
              the exact element your shoppers would.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("protection-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("protection-cta")} target="_blank" rel="noopener">
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
              Thirty minutes, on your own catalogue &middot; Or install free and set it up yourself
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
