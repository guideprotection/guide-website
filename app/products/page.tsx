import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBars,
  IconCheck,
  IconShield,
  IconShieldAlert,
  IconSwapDouble,
  IconTruck,
} from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { jsonLdScript, webPageNode, breadcrumbNode } from "@/lib/json-ld";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Guide platform | One post-purchase layer",
  description:
    "Six modules on one record of the customer: protection, returns, exchanges, order tracking, claims and fraud detection run by Guide.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "The Guide platform | One post-purchase layer",
    description:
      "Six modules on one record of the customer: protection, returns, exchanges, order tracking, claims and fraud detection run by Guide.",
    url: "/products",
    images: OG_IMAGES,
  },
};

const integrationLogos = [
  ["shopify.3f62a000e3.webp", 116, 116, "Shopify"],
  null,
  null,
  ["zendesk.4d5dbc9351.webp", 116, 116, "Zendesk"],
  "hero",
  ["gorgias.75e636320d.webp", 116, 116, "Gorgias"],
  null,
  null,
  ["tiktok.187609de13.webp", 116, 116, "TikTok"],
] as const;

const integrationRow2 = [
  null,
  ["northbeam.ff7f7593a2.webp", 116, 116, "Northbeam"],
  null,
  ["skio.5d823ea2bf.webp", 128, 128, "Skio"],
  null,
  ["okendo.14e05d89fb.webp", 92, 92, "Okendo"],
  null,
  ["loop.b316fcefe1.webp", 116, 116, "Loop"],
  null,
] as const;

const integrationRow3 = [
  ["emotive.b407ff76f0.webp", 116, 116, "Emotive"],
  null,
  ["recharge.37eb0e204f.webp", 110, 110, "Recharge"],
  null,
] as const;

function KeycapRow({ row, className }: { row: readonly (readonly [string, number, number, string] | "hero" | null)[]; className?: string }) {
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

export default function ProductsPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/products",
              name: "The Guide platform | One post-purchase layer",
              description:
                "Six modules on one record of the customer: protection, returns, exchanges, order tracking, claims and fraud detection run by Guide.",
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
              { name: "The Guide platform", path: "/products" },
            ])
          ),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> The platform
            </span>
            <h1 className="d1">
              One system behind
              <br />
              every <span className="text-accent">post-purchase</span>
              <br />
              moment.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              Guide isn&apos;t a bundle of apps sold together. It&apos;s one operating layer with one
              record of the customer, so what happened on a claim in March informs how an exchange
              is handled in June.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("products-hero")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/pricing">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="sec-head-row rv">
            <h2 className="d2" style={{ maxWidth: "16ch" }}>
              Six modules. One record.
            </h2>
            <Link className="tlink" href="/pricing">
              See pricing
            </Link>
          </div>
          <div className="prod rv">
            <Link href="/protection">
              <span className="ico v">
                <IconShield />
              </span>
              <strong className="d4">Checkout+</strong>
              <span className="body">
                Protection and return coverage offered at the moment shoppers decide, in your brand,
                with no dark patterns.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
            </Link>
            <Link href="/returns">
              <span className="ico">
                <IconSwapDouble />
              </span>
              <strong className="d4">Returns &amp; Exchanges</strong>
              <span className="body">
                Self-service portal, exchange-first flows, instant resolutions and automated policy
                enforcement.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
            </Link>
            <Link href="/tracking">
              <span className="ico">
                <IconTruck />
              </span>
              <strong className="d4">Order Tracking</strong>
              <span className="body">
                Carrier-agnostic tracking on your own domain with proactive updates from dispatch to
                doorstep.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
            </Link>
            <Link href="/claims">
              <span className="ico">
                <IconCheck />
              </span>
              <strong className="d4">Claims</strong>
              <span className="body">
                Lost, stolen, damaged and missing items resolved end to end by our team, in your
                voice, at our cost.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
            </Link>
            <Link href="/analytics">
              <span className="ico">
                <IconBars />
              </span>
              <strong className="d4">Analytics</strong>
              <span className="body">
                Live dashboards across protection, claims, returns and tracking, with drill-down to
                any order.
              </span>
              <span className="tlink" style={{ fontSize: ".85rem" }}>
                Learn more
              </span>
            </Link>
            <Link href="/fraud">
              <span className="ico">
                <IconShieldAlert />
              </span>
              <strong className="d4">Fraud Detection</strong>
              <span className="body">
                Run by Guide across the network, applied before a claim or an exchange is
                approved.
              </span>
            </Link>
          </div>
          <p className="small mt-6">
            <Link className="tlink" href="/fraud" style={{ fontSize: ".855rem" }}>
              Fraud detection
            </Link>{" "}
            is the one that works differently. It is not a surface a shopper meets; it runs
            underneath the other five and decides what they are offered.
          </p>
        </div>
      </section>

      <section className="section-sm bg-bg-2">
        <div className="wrap">
          <div className="band rv">
            <div>
              <div className="b-k">One record</div>
              <div className="b-v">
                Protection, claims, returns and tracking all write to the same customer, so context
                follows them between modules.
              </div>
            </div>
            <div>
              <div className="b-k">One install</div>
              <div className="b-v">
                A Shopify app and a checkout extension toggle. Brand assets and policy rules are
                configured once and apply everywhere.
              </div>
            </div>
            <div>
              <div className="b-k">One team</div>
              <div className="b-v">
                A named account lead owns the whole surface. There&apos;s nobody to point at when
                something breaks.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Why one system</span>
            <h2 className="d2">The context is the product.</h2>
            <p className="lead">
              Anyone can sell you six features. What changes the outcome is what happens when they
              share a database, and it&apos;s the one thing a competitor can&apos;t copy by shipping
              another module.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <h3 className="d4">Risk travels</h3>
              <p className="body mt-2">
                A shopper with a pattern of suspicious claims doesn&apos;t get an instant exchange.
                Six separate apps would never know, because none of them can see the other five.
              </p>
            </div>
            <div className="card rv d-1">
              <h3 className="d4">Generosity travels</h3>
              <p className="body mt-2">
                A loyal customer who has had two genuinely bad deliveries gets treated better,
                automatically, without an agent having to notice and decide.
              </p>
            </div>
            <div className="card rv d-2">
              <h3 className="d4">One portal to learn</h3>
              <p className="body mt-2">
                Claims, returns and tracking behind a single experience on your domain, rather than
                four vendors&apos; interfaces with four different ideas about buttons.
              </p>
            </div>
            <div className="card rv d-3">
              <h3 className="d4">One implementation</h3>
              <p className="body mt-2">
                Brand assets, policies and integrations configured once and applied across every
                module. Change your return window in one place.
              </p>
            </div>
            <div className="card rv d-3">
              <h3 className="d4">One set of numbers</h3>
              <p className="body mt-2">
                Protected orders, claim rate, resolution trend and recovered revenue reconcile,
                because they come from one source rather than four exports that disagree.
              </p>
            </div>
            <div className="card rv d-3">
              <h3 className="d4">One team accountable</h3>
              <p className="body mt-2">
                Nobody to point at when something breaks. A named lead owns the whole surface, in
                your Slack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="narrow center">
          <p className="small">
            <Link className="tlink" href="/#one-record" style={{ fontSize: ".95rem" }}>
              See how that plays out across one customer over four months
            </Link>
          </p>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Implementation</span>
            <h2 className="d2">You install it. We build it.</h2>
            <p className="lead">
              The work is mostly decisions, not engineering, and the engineering that does exist is
              ours. Bring someone who can approve a returns policy.
            </p>
          </div>
          <div className="flow rv">
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">You install the app</h3>
                <p className="body">
                  One install from the Shopify App Store. No developer, no theme edits, and nothing
                  you&apos;ve got to configure yourself.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">We implement it for you</h3>
                <p className="body">
                  The Guide Team does the build: brand assets, policy thresholds, disclosure copy,
                  ESP and helpdesk connections, all set up against your live theme. You make the
                  decisions, we do the work. This isn&apos;t a self-serve app you&apos;re left alone
                  with.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">We extend it across the surfaces</h3>
                <p className="body">
                  Tracking page and returns portal built and QA&apos;d on your own domain, in your
                  brand. A shopper doesn&apos;t ever see ours.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">You change what you want, when you want</h3>
                <p className="body">
                  Policy, branding, thresholds, copy and exclusions are yours to adjust from the
                  dashboard afterwards. No ticket, no call, and you don&apos;t wait on us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">Integrations</span>
            <h2 className="d2 center">Reads your stack. Doesn&apos;t replace it.</h2>
          </div>
          <div className="kb rv">
            <KeycapRow row={integrationLogos} />
            <KeycapRow row={integrationRow2} className="r2" />
            <KeycapRow row={integrationRow3} className="r3" />
          </div>
          <p className="small center mt-8">
            Plus a public REST API, webhooks on every event, and a partner team that will build the
            connector you need.
          </p>
        </div>
      </section>

      <section className="section" id="fit">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Fit</span>
            <h2 className="d2">
              Who Guide is for,
              <br className="hide-mob" /> and who it is not.
            </h2>
            <p className="lead">
              Most of this category will tell you it suits everyone. It does not, and finding out
              after an install is expensive for both of us. Here is the honest version, so you can
              rule us out in a minute rather than a month.
            </p>
          </div>
          <div className="split split-t rv">
            <div className="card card-lg">
              <span className="ico v">
                <IconCheck />
              </span>
              <h3 className="d4 mt-16">Guide fits if</h3>
              <ul className="checks mt-16">
                <li>
                  <IconCheck aria-hidden="true" />
                  You sell physical goods on Shopify. Guide is a Shopify app and works nowhere else.
                </li>
                <li>
                  <IconCheck aria-hidden="true" />
                  Delivery problems, returns and exchanges are enough work that somebody on your team
                  feels them.
                </li>
                <li>
                  <IconCheck aria-hidden="true" />
                  You want the whole post-purchase experience to stay on your brand rather than a
                  vendor&apos;s.
                </li>
                <li>
                  <IconCheck aria-hidden="true" />
                  You would rather claims were resolved for you than be given tooling to resolve them
                  yourself.
                </li>
                <li>
                  <IconCheck aria-hidden="true" />
                  You want protection funded by the shopper who opts in, with no platform fee and no
                  per-order cost to you.
                </li>
              </ul>
            </div>
            <div className="card card-lg">
              <span className="ico blue">
                <IconShieldAlert />
              </span>
              <h3 className="d4 mt-16">Guide does not fit if</h3>
              <ul className="checks mt-16">
                <li>
                  <IconCheck aria-hidden="true" />
                  You are not on Shopify, or you sell digital goods and services with nothing to ship.
                </li>
                <li>
                  <IconCheck aria-hidden="true" />
                  You want to make the approval and denial calls yourself. Guide carries the cost of
                  approved claims, so Guide makes them.
                </li>
                <li>
                  <IconCheck aria-hidden="true" />
                  You want to set the protection price. Guide sets it, priced to the cart rather than
                  a flat rate.
                </li>
                <li>
                  <IconCheck aria-hidden="true" />
                  You are shopping for insurance. Guide is not an insurer and does not underwrite
                  policies.
                </li>
                <li>
                  <IconCheck aria-hidden="true" />
                  Your order volume is low enough that a delivery problem is still a personal email
                  rather than a process.
                </li>
              </ul>
            </div>
          </div>
          <p className="small center mt-8">
            Still not sure? The{" "}
            <Link className="tlink" href="/help" style={{ fontSize: "inherit" }}>
              help centre
            </Link>{" "}
            answers the questions merchants ask after install, and the{" "}
            <Link className="tlink" href="/pricing" style={{ fontSize: "inherit" }}>
              pricing page
            </Link>{" "}
            sets out the commercial model in full.
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
            <h2 className="d2">Better for your customer. Lighter for your team.</h2>
            <p className="lead maxw-md">
              Thirty minutes across every module, configured against your own catalogue and
              policies.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("products-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("products-cta")} target="_blank" rel="noopener">
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
