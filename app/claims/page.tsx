import type { Metadata } from "next";
import Link from "next/link";
import { IconCheck, IconShield, IconShopifyBag } from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { breadcrumbNode, jsonLdScript, webPageNode } from "@/lib/json-ld";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Claims resolution, handled for you | Guide",
  description:
    "Lost, stolen and damaged orders resolved end to end by our team, in your brand, so your support queue never has to see the ticket.",
  alternates: { canonical: "/claims" },
  openGraph: {
    title: "Claims resolution, handled for you | Guide",
    description:
      "Lost, stolen and damaged orders resolved end to end by our team, in your brand, so your support queue never has to see the ticket.",
    url: "/claims",
    images: OG_IMAGES,
  },
};

const worksWith = [
  {
    href: "/protection",
    title: "Checkout+",
    body: "Protection and return coverage, in Shopify checkout.",
  },
  {
    href: "/returns",
    title: "Returns & Exchanges",
    body: "Self-service portal with exchange-first routing.",
  },
  {
    href: "/tracking",
    title: "Order Tracking",
    body: "Carrier-agnostic tracking on your own brand.",
  },
  {
    href: "/analytics",
    title: "Analytics",
    body: "Live dashboards across every module.",
  },
  {
    href: "/fraud",
    title: "Fraud Detection",
    body: "Run by Guide across the network.",
  },
];

export default function ClaimsPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/claims",
              name: "Claims resolution, handled for you | Guide",
              description:
                "Lost, stolen and damaged orders resolved end to end by our team, in your brand, so your support queue never has to see the ticket.",
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
              { name: "Claims resolution, handled for you", path: "/claims" },
            ])
          ),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Claims
            </span>
            <h1 className="d1">
              Resolution, handled
              <br />
              end to <span className="text-accent">end</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              A shopper reports a problem in a portal that lives on your domain. Guide verifies
              it, applies your policy and resolves it, without a ticket ever reaching your team.
              The customer gets an answer in minutes instead of an apology in a day.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("claims-hero")} target="_blank" rel="noopener">
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
            <span className="kicker">What claims resolution means here</span>
            <p className="lead mt-4">
              When a shopper reports an order lost, stolen or damaged, they file the claim on the
              merchant&apos;s brand and Guide&apos;s team resolves it end to end: assessment,
              decision, and the reship or refund. The merchant&apos;s support queue doesn&apos;t
              see the ticket. Guide isn&apos;t an insurer, it resolves claims on the
              merchant&apos;s behalf and carries the cost of approved ones.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconCheck /> Claims
              </span>
              <h2 className="d2">
                Most claims never need
                <br />
                a human. The ones that
                <br />
                do get a good one.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                Guide scores every claim the moment it lands. Clean claims resolve automatically
                inside your rules. Ambiguous ones route to a specialist who opens the case with
                the carrier data, the order history and the risk assessment already in front of
                them.
              </p>
              <ul className="blist">
                <li>Auto-approve thresholds you define</li>
                <li>Evidence requirements by value and claim type</li>
                <li>Replacement orders drafted straight into Shopify</li>
                <li>Every message to your customer readable in your dashboard</li>
              </ul>
            </div>
            <div className="flex justify-center rv d-1">
              <picture>
                <source srcSet="/assets/mocks/dashboard.91cdfd9410.avif" type="image/avif" />
                <img
                  className="mock dash"
                  src="/assets/mocks/dashboard.2cd94da8e6.webp"
                  width={1358}
                  height={1159}
                  alt="Guide claims dashboard showing protected orders, claim rate and a table of recent claims"
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
            <h2 className="d2">Filed, verified, resolved.</h2>
            <p className="lead">The customer sees four fields and an outcome. This is what happens behind them.</p>
          </div>
          <div className="flow rv">
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">The shopper files</h3>
                <p className="body">
                  From a portal on your domain, linked from tracking and from your own returns
                  page. Four fields, about forty seconds, no account required.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Evidence is gathered automatically</h3>
                <p className="body">
                  Carrier scan history, delivery geocode, weather and service disruptions on the
                  lane, and this shopper&apos;s full order and claim history across the Guide
                  network.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Risk is scored, not guessed</h3>
                <p className="body">
                  A model trained on resolved claims across the network. It knows the difference
                  between a genuinely unlucky customer and the fourteenth stolen package to the
                  same address.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">It resolves, or it escalates</h3>
                <p className="body">
                  Clean claims inside your thresholds resolve immediately and the replacement is
                  drafted in Shopify. Anything ambiguous reaches a specialist who already has the
                  full picture rather than starting with a blank ticket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Control</span>
            <h2 className="d2">
              Generous where it builds loyalty.
              <br className="hide-mob" /> Firm where it does not.
            </h2>
            <p className="lead">
              Blanket approval is expensive and teaches a small group exactly how to exploit you.
              Blanket suspicion costs you good customers. The rules engine is precise enough to be
              both.
            </p>
          </div>
          <div className="grid g4">
            <div className="card rv">
              <h3 className="d4">Thresholds</h3>
              <p className="body mt-2">
                Approve instantly under a value you set, optionally scoped by category, customer
                value or first-versus-repeat claim.
              </p>
            </div>
            <div className="card rv d-1">
              <h3 className="d4">Evidence</h3>
              <p className="body mt-2">
                Require photos over a threshold or for damage specifically. Guide validates the
                photo shows the product before anyone reviews it.
              </p>
            </div>
            <div className="card rv d-2">
              <h3 className="d4">Network signals</h3>
              <p className="body mt-2">
                Addresses, devices and payment fingerprints flagged across every Guide merchant,
                so abuse arriving from elsewhere is already known.
              </p>
            </div>
            <div className="card rv d-3">
              <h3 className="d4">Override</h3>
              <p className="body mt-2">
                Any claim can be pulled into your own queue with one click. Some brands take every
                VIP claim manually. Most take none.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconShield /> Your brand, not ours
              </span>
              <h2 className="d2">
                The customer never
                <br />
                learns our name.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                The claim portal sits on your domain. The emails come from your sending address in
                your template. Our specialists are trained on your voice, your policy and your
                catalogue before they take a single case. When a shopper posts about the
                resolution, your brand gets the credit.
              </p>
            </div>
            <div className="card card-lg rv d-1">
              <div className="feat-row">
                <span className="n" />
                <span>
                  <strong>In-house specialists</strong>
                  <span>Employed, trained and measured by Guide, not a rotating outsourced bench.</span>
                </span>
              </div>
              <div className="feat-row">
                <span className="n" />
                <span>
                  <strong>Seven-day coverage</strong>
                  <span>Weekends are when shoppers notice a package is missing.</span>
                </span>
              </div>
              <div className="feat-row">
                <span className="n" />
                <span>
                  <strong>Named account lead</strong>
                  <span>In your Slack channel, not behind a support form.</span>
                </span>
              </div>
              <div className="feat-row">
                <span className="n" />
                <span>
                  <strong>Weekly claim digest</strong>
                  <span>Volume, cost, failing lanes and problem SKUs, sent to your ops lead.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="pull rv">
            <p className="q">
              Our customers who have had to file claims have the easiest experience. Their service
              is top notch.
            </p>
            <p className="who">Phoenician Grinders, over 2 years using Guide</p>
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
            {worksWith.map((item) => (
              <Link key={item.href} className="card card-hover rv" href={item.href}>
                <strong className="d4">{item.title}</strong>
                <span className="body mt-2">{item.body}</span>
                <span className="tlink" style={{ fontSize: ".85rem" }}>
                  Learn more
                </span>
              </Link>
            ))}
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
            <h2 className="d2">Take the queue off your team.</h2>
            <p className="lead maxw-md">
              We&apos;ll show you the claim console, the rules engine and how a real claim moves
              through it.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("claims-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("claims-cta")} target="_blank" rel="noopener">
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
