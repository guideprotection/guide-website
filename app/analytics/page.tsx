import type { Metadata } from "next";
import Link from "next/link";
import { IconBars, IconBoxes, IconShieldAlert, IconShopifyBag } from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { breadcrumbNode, jsonLdScript, webPageNode } from "@/lib/json-ld";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Post-purchase analytics | Guide",
  description:
    "A live view of claims, returns, exchanges and delivery performance, with the cohort and reason data your team needs in order to act.",
  alternates: { canonical: "/analytics" },
  openGraph: {
    title: "Post-purchase analytics | Guide",
    description:
      "A live view of claims, returns, exchanges and delivery performance, with the cohort and reason data your team needs in order to act.",
    url: "/analytics",
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
    href: "/claims",
    title: "Claims",
    body: "Lost, stolen and damaged orders resolved end to end.",
  },
  {
    href: "/fraud",
    title: "Fraud Detection",
    body: "Run by Guide across the network.",
  },
];

export default function AnalyticsPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/analytics",
              name: "Post-purchase analytics | Guide",
              description:
                "A live view of claims, returns, exchanges and delivery performance, with the cohort and reason data your team needs in order to act.",
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
              { name: "Post-purchase analytics", path: "/analytics" },
            ])
          ),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Analytics
            </span>
            <h1 className="d1">
              A full view of claims, returns,
              <br />
              and every order <span className="text-accent">in between</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              Real-time dashboards give your team the numbers that matter: protected orders,
              claim rates, resolution trends and revenue recovered, all in one place.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("analytics-hero")} target="_blank" rel="noopener">
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
            <span className="kicker">What Guide&apos;s analytics show</span>
            <p className="lead mt-4">
              Because every Guide module writes to the same record of the customer, the analytics
              show claims, returns, exchanges and delivery performance as one picture rather than
              four exports that have to be reconciled. The useful part is the reason data
              underneath: which products come back, which carriers generate claims, and which
              cohorts do both.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconBars /> Analytics
              </span>
              <h2 className="d2">
                Numbers that reconcile,
                <br />
                because they come
                <br />
                from one source.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                When protection, claims, returns and tracking share a database, reporting stops
                being an exercise in matching four exports that disagree. Ask a question, get an
                answer, drill to the individual order.
              </p>
              <ul className="blist">
                <li>Live KPIs across protection, returns and tracking</li>
                <li>Compare protected vs. total order performance</li>
                <li>Drill into every claim and customer in seconds</li>
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
            <h2 className="d2">From event to answer.</h2>
            <p className="lead">
              Nothing here is a nightly batch. The dashboard is reading the same records the
              claims team is working from.
            </p>
          </div>
          <div className="flow rv">
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Every module writes to one record</h3>
                <p className="body">
                  A protected order, a scan, a claim and an exchange are all events against the
                  same customer. That&apos;s what makes the reporting agree with itself.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Dashboards update in near real time</h3>
                <p className="body">
                  You&apos;re not waiting for a sync. What the console shows is what the
                  operations team can see.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Ask in plain English</h3>
                <p className="body">
                  Which lanes are failing this month. Which SKU drives the most damage claims.
                  Which cohort exchanges rather than refunds. No report builder, no dashboard to
                  configure first.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Reconcile at month end</h3>
                <p className="body">
                  Order-level CSV that ties line by line to Shopify, so finance can check the
                  Shopify usage charge line by line, where you qualify for revenue share, rather
                  than taking it on trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">What you get</span>
            <h2 className="d2">Built for the person who has to explain it.</h2>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ico v">
                <IconBars />
              </span>
              <h3 className="d4 mt-4">Plain-English questions</h3>
              <p className="body mt-2">
                Ask which lanes are failing or which SKU drives the most damage claims, and get
                the answer without building a report first.
              </p>
            </div>
            <div className="card rv d-1">
              <span className="ico">
                <IconBoxes />
              </span>
              <h3 className="d4 mt-4">Exports finance trusts</h3>
              <p className="body mt-2">
                Order-level CSV that ties back to Shopify, so protection revenue and claim cost
                can be reconciled line by line rather than argued about.
              </p>
            </div>
            <div className="card rv d-2">
              <span className="ico">
                <IconShieldAlert />
              </span>
              <h3 className="d4 mt-4">Alerts, not dashboards</h3>
              <p className="body mt-2">
                Guide tells your ops lead when a metric moves outside its normal range, rather
                than waiting for somebody to remember to check.
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
            <div className="grid gap-7 rv">
              <div className="sec-head">
                <span className="kicker">Access</span>
                <h2 className="d2">
                  Who sees what,
                  <br />
                  and where it goes.
                </h2>
                <p className="lead">
                  The console isn&apos;t the only destination. Most teams want this data somewhere
                  else too, and it&apos;s yours to move.
                </p>
              </div>
              <div className="card card-lg" style={{ padding: "8px 26px" }}>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Roles</strong>
                    <span>
                      Role-based access per user. Finance sees settlement, CX sees claims,
                      agencies see only their client.
                    </span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Single sign-on</strong>
                    <span>SSO and audit logging on enterprise accounts.</span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Public API</strong>
                    <span>REST, documented, with webhooks on every event so you can push into a warehouse.</span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Scheduled exports</strong>
                    <span>CSV on a schedule to wherever your BI stack expects it.</span>
                  </span>
                </div>
                <div className="feat-row">
                  <span className="n" />
                  <span>
                    <strong>Portability</strong>
                    <span>
                      Your full claim, return and warranty history exported on request, including
                      if you leave.
                    </span>
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
            <span className="kicker">In practice</span>
            <h2 className="d2">What a team actually does with this.</h2>
            <p className="lead">
              Dashboards are only worth building if somebody changes something because of them.
              These are the three loops the console is designed to close.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <h3 className="d4">Weekly: failing lanes</h3>
              <p className="body mt-2">
                Which carrier and destination combinations are producing claims. Enough signal in
                a fortnight to change a shipping rule, and it is usually one lane doing most of
                the damage.
              </p>
            </div>
            <div className="card rv d-1">
              <h3 className="d4">Monthly: policy fit</h3>
              <p className="body mt-2">
                The mix between replaced, refunded, exchanged and declined. If it drifts from what
                you intended, the thresholds are wrong rather than the customers.
              </p>
            </div>
            <div className="card rv d-2">
              <h3 className="d4">Quarterly: SKU truth</h3>
              <p className="body mt-2">
                Contribution after returns, freight and processing. This is where a product that
                looks like a bestseller turns out to be funding its own returns.
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
            <h2 className="d2">See your own numbers in the console.</h2>
            <p className="lead maxw-md">
              Connect a sandbox store during the demo and we&apos;ll populate the dashboards with
              real structure.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("analytics-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("analytics-cta")} target="_blank" rel="noopener">
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
