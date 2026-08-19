import type { Metadata } from "next";
import Link from "next/link";
import { IconShopifyBag } from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { breadcrumbNode, jsonLdScript, webPageNode } from "@/lib/json-ld";
import { demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "File a claim on your order | Guide",
  description:
    "Report a lost, stolen or damaged order, check an existing claim, and see what your protection covers. This page is for shoppers.",
  alternates: { canonical: "/for-shoppers" },
  openGraph: {
    title: "File a claim on your order | Guide",
    description:
      "Report a lost, stolen or damaged order, check an existing claim, and see what your protection covers. This page is for shoppers.",
    url: "/for-shoppers",
    images: OG_IMAGES,
  },
};

export default function ForShoppersPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/for-shoppers",
              name: "File a claim on your order | Guide",
              description:
                "Report a lost, stolen or damaged order, check an existing claim, and see what your protection covers. This page is for shoppers.",
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
              { name: "File a claim on your order", path: "/for-shoppers" },
            ])
          ),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 820, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> For shoppers
            </span>
            <h1 className="d1">
              Something went wrong
              <br />
              with your order?
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              If the store you bought from uses Guide, this is the right place. Filing takes about
              a minute, and the Guide Team takes it from there.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href="https://claims.guideprotection.com">
                File a claim
              </a>
              <a className="btn btn-ghost btn-lg" href="#how">
                What happens next
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">What to do</span>
            <h2 className="d2">Three steps, and you are done.</h2>
          </div>
          <div className="flow rv">
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Find your order number</h3>
                <p className="body">
                  It is in your order confirmation email from the store, usually near the top and
                  starting with a hash. If you cannot find the email, search your inbox for the
                  store name.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Tell us what happened</h3>
                <p className="body">
                  Lost, never arrived, marked delivered but missing, arrived damaged, or the wrong
                  item. Four fields, about forty seconds. If it arrived damaged, one photo helps
                  and usually settles it immediately.
                </p>
              </div>
            </div>
            <div className="flow-item">
              <span className="n" />
              <div className="c">
                <h3 className="d4">Choose how you want it fixed</h3>
                <p className="body">
                  A replacement or a refund, depending on what the store offers and what is in
                  stock. Most claims resolve without anyone needing to email you back.
                </p>
              </div>
            </div>
          </div>
          <p className="small rv" style={{ marginTop: 28, maxWidth: "64ch" }}>
            To resolve a claim we use the order details the store shares with us. Our{" "}
            <Link href="/privacy">privacy policy</Link> sets out what is collected, how it is
            used, and who it may be disclosed to.
          </p>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="split split-t">
            <div className="grid gap-5 rv">
              <span className="kicker">After you file</span>
              <h2 className="d2">A person is looking at it.</h2>
              <p className="lead">
                Straightforward claims resolve on their own, often before you have closed the tab.
                Anything that needs judgement goes to the Guide Team, who handle it on behalf of
                the store you bought from and under that store&apos;s policies.
              </p>
              <p className="body">
                You will hear about every stage by email, sent from the store&apos;s own address
                rather than ours. You do not need to chase it, and you do not need to contact the
                store separately. If we need something from you, such as a photograph of damage,
                we will ask for that one thing rather than sending you back to the start.
              </p>
            </div>
            <div className="grid gap-4 rv">
              <div className="card">
                <strong className="d4">You will not be asked for</strong>
                <ul className="blist mt-4">
                  <li>A police report for a parcel marked delivered</li>
                  <li>The original packaging, unless the claim is for damage</li>
                  <li>A phone call, or a place in a queue</li>
                </ul>
              </div>
              <a className="btn btn-dark btn-lg arw" href="https://claims.guideprotection.com">
                File a claim
              </a>
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
            <h2 className="d2">Still stuck?</h2>
            <p className="lead maxw-md">
              Email hello@guideprotection.com with your order number and we will pick it up from
              there.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("for-shoppers-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("for-shoppers-cta")} target="_blank" rel="noopener">
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
