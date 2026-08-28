import type { Metadata } from "next";
import Link from "next/link";
import { IconBoxes, IconCheck, IconShopifyBag } from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { breadcrumbNode, jsonLdScript, webPageNode } from "@/lib/json-ld";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

const TITLE = "Pricing | No platform fee | Guide";
const DESCRIPTION =
  "No platform fee and nothing charged to you per order. Shoppers who add protection at checkout pay for it. See exactly how the model works.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/pricing",
    images: OG_IMAGES,
  },
};

export default function PricingPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/pricing",
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
              { name: "Pricing", path: "/pricing" },
            ])
          ),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 900, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Pricing
            </span>
            <h1 className="d1">
              No platform fee.
              <br />
              No <span className="text-accent">contract</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.16rem" }}>
              Guide is funded by the protection offer your shoppers choose to add at checkout. That
              revenue covers the software, the claims team and the replacements we ship. What is left
              is shared with you. The commercial detail sits in the{" "}
              <Link className="tlink" href="/terms" style={{ fontSize: "inherit" }}>
                terms of service
              </Link>
              , and the vocabulary used on this page is defined in the{" "}
              <Link className="tlink" href="/glossary" style={{ fontSize: "inherit" }}>
                glossary
              </Link>
              .
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("pricing-hero")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a className="btn btn-ghost btn-lg" href="#how">
                How the model works
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="grid g3">
            <div className="plan rv">
              <div className="grid gap-1.5">
                <span className="mono">Core</span>
                <h2 className="d4">Checkout+ &amp; Claims</h2>
              </div>
              <div className="plan-price">
                $0<small> /month</small>
              </div>
              <p className="body">
                Everything needed to stop absorbing delivery problems and start earning on them.
              </p>
              <ul className="checks">
                <li>
                  <IconCheck /> Checkout, cart and post-purchase protection offer
                </li>
                <li>
                  <IconCheck /> Dynamic per-order pricing engine
                </li>
                <li>
                  <IconCheck /> Claims worked end to end by Guide
                </li>
                <li>
                  <IconCheck /> Branded claims portal on your domain
                </li>
                <li>
                  <IconCheck /> Rules engine and fraud network
                </li>
                <li>
                  <IconCheck /> Revenue share for qualifying brands
                </li>
              </ul>
              <a className="btn btn-app" href={installUrl("pricing-plan")} target="_blank" rel="noopener">
                <IconShopifyBag />
                Install on Shopify
              </a>
            </div>
            <div className="plan hi rv d-1">
              <div className="grid gap-1.5">
                <span className="tag">Most merchants</span>
                <h2 className="d4">Post-purchase OS</h2>
              </div>
              <div className="plan-price">
                $0<small> /month</small>
              </div>
              <p className="body">The full platform on one data model. Still funded entirely by protection revenue.</p>
              <ul className="checks">
                <li>
                  <IconCheck /> Everything in Core
                </li>
                <li>
                  <IconCheck /> Returns &amp; exchanges with instant-exchange rules
                </li>
                <li>
                  <IconCheck /> Carrier-agnostic branded tracking
                </li>
                <li>
                  <IconCheck /> Order confirmation pages and emails
                </li>
                <li>
                  <IconCheck /> Analytics across every module
                </li>
                <li>
                  <IconCheck /> Named account lead in a shared Slack channel
                </li>
              </ul>
              <a className="btn btn-dark arw" href={demoUrl("pricing-plan")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <div className="plan rv d-2">
              <div className="grid gap-1.5">
                <span className="mono">Enterprise</span>
                <h2 className="d4">Custom</h2>
              </div>
              <div className="plan-price">
                Talk<small> to us</small>
              </div>
              <p className="body">Multi-region, multi-storefront, or wholesale and retail channels to cover.</p>
              <ul className="checks">
                <li>
                  <IconCheck /> Everything in Post-purchase OS
                </li>
                <li>
                  <IconCheck /> Multi-storefront and multi-currency
                </li>
                <li>
                  <IconCheck /> Custom underwriting and coverage terms
                </li>
                <li>
                  <IconCheck /> Dedicated implementation team
                </li>
                <li>
                  <IconCheck /> SSO, audit logging, custom DPA
                </li>
                <li>
                  <IconCheck /> Quarterly review with your ops leadership
                </li>
              </ul>
              <a className="btn btn-ghost" href="#demo">
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2" id="how">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">How the model works</span>
            <h2 className="d2">
              Four steps, nothing hidden
              <br className="hide-mob" /> in a footnote.
            </h2>
          </div>
          <div className="grid g4">
            <div className="card rv">
              <span className="mono">Step 01</span>
              <h3 className="d4 mt-4">Shoppers opt in, per order</h3>
              <p className="body mt-2">
                Customers choose to add protection and free returns at checkout, and pay a fee on
                that order. It is charged to them, not to you, and only on the orders they choose to
                protect.
              </p>
            </div>
            <div className="card rv d-1">
              <span className="mono">Step 02</span>
              <h3 className="d4 mt-4">Guide carries the risk</h3>
              <p className="body mt-2">
                Replacements, refunds, freight, the claims team and the software are all funded from
                that pool.
              </p>
            </div>
            <div className="card rv d-2">
              <span className="mono">Step 03</span>
              <h3 className="d4 mt-4">Qualifying brands share it</h3>
              <p className="body mt-2">
                Your customers pay the protection fee to you, not to us. Each month Guide takes its
                share through a Shopify usage charge, and for qualifying brands the rest simply stays
                in the store. There&apos;s no payout to wait for, because the money never leaves.
                Qualification depends on volume and claim profile, and we will tell you plainly where
                you stand rather than implying every merchant qualifies.
              </p>
            </div>
            <div className="card rv d-3">
              <span className="mono">Step 04</span>
              <h3 className="d4 mt-4">You will see one line, and it is not a fee</h3>
              <p className="body mt-2">
                Guide charges no platform fee and doesn&apos;t send an invoice, but you&apos;ll see a
                Guide line on your Shopify statement. That is the usage charge collecting the
                protection fees your customers already paid you, and nothing more. Returns, tracking
                and analytics are included. If protection stops covering the cost, that&apos;s our
                problem to solve, not a bill we pass on.
              </p>
            </div>
          </div>
          <div className="card card-lg mt-8 rv">
            <div className="split">
              <div className="grid gap-4">
                <h3 className="d4">Guide sets the price. You set the frame.</h3>
                <p className="body">
                  The offer price responds to cart value, destination, carrier and season, so a small
                  basket is not overcharged and a large one is not underpriced. That pricing is ours
                  to get right and ours to carry if we get it wrong. What you set is the frame it runs
                  inside: a floor, a ceiling, excluded categories and where the offer appears. Those
                  are changeable on any given day without a call.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <span className="tag">Published</span>
                  <span className="small">The same rate card applies whatever your volume</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="tag">None</span>
                  <span className="small">Platform fees, per-claim fees, onboarding fees or overage</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="tag">None</span>
                  <span className="small">Annual contract. Cancel any time by uninstalling the app.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="tag neutral">Honest</span>
                  <span className="small">If protection is structurally weak in your category, we will say so before you sign</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2" id="demo">
        <div className="wrap">
          <div className="split split-t">
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconBoxes /> Book a demo
              </span>
              <h2 className="d2">
                Thirty minutes,
                <br />
                on your own catalogue.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                We&apos;ll configure Checkout+ against your live theme, load your products into the
                returns portal, and mock your tracking page on your own brand. You&apos;ll see the
                actual thing your shoppers would, not a slide about it.
              </p>
              <ul className="blist">
                <li>Bring your ops or CX lead</li>
                <li>Live walkthrough of the claim console and rules engine</li>
                <li>We&apos;ll configure it against your live theme beforehand</li>
                <li>An honest read on whether Guide fits your category</li>
              </ul>
            </div>
            <div className="card card-lg rv d-1">
              <div className="book">
                <span className="eyepill">
                  <IconCheck /> Live calendar
                </span>
                <h3 className="d3 mt-4">Pick a time that suits you.</h3>
                <p className="body mt-4">
                  The link opens the same calendar our solutions team works from, so whatever slot
                  you take is confirmed the moment you take it. No qualification call before the real
                  one.
                </p>
                <a
                  className="btn btn-dark btn-lg arw mt-6"
                  style={{ width: "100%" }}
                  href={demoUrl("pricing-booking")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="book-demo"
                >
                  Book your demo<span className="sr-only"> (opens in a new tab)</span>
                </a>
                <ul className="blist mt-6">
                  <li>You&apos;ll get a calendar invite straight away, with the join link on it</li>
                  <li>Bring your store URL and we&apos;ll have it loaded before you join</li>
                  <li>If nothing on the calendar works, email us and we&apos;ll find a time</li>
                </ul>
                <p className="tiny center mt-6">
                  Prefer to write first?{" "}
                  <a href="mailto:hello@guideprotection.com" style={{ textDecoration: "underline" }}>
                    hello@guideprotection.com
                  </a>{" "}
                  reaches a person, not a queue.
                </p>
              </div>
            </div>
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
            <h2 className="d2">Bring us your last ninety days.</h2>
            <p className="lead maxw-md">
              We&apos;ll walk the platform on your own catalogue and give you an honest read on
              whether it fits.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("pricing-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("pricing-cta")} target="_blank" rel="noopener">
                <IconShopifyBag />
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
