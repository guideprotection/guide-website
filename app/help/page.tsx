import type { Metadata } from "next";
import Link from "next/link";
import { LogoGlyph } from "@/components/logo";
import { breadcrumbNode, faqPageJsonLd, jsonLdScript, webPageNode } from "@/lib/json-ld";
import { HELP_FAQ } from "@/lib/help-faq";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Help centre | Guide",
  description:
    "Answers to the questions merchants and shoppers ask after install: claims, billing, setup, white-label URLs and what protection covers.",
  alternates: { canonical: "/help" },
  openGraph: {
    title: "Help centre | Guide",
    description:
      "Answers to the questions merchants and shoppers ask after install: claims, billing, setup, white-label URLs and what protection covers.",
    url: "/help",
    images: OG_IMAGES,
  },
};

export default function HelpPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/help",
              name: "Help centre | Guide",
              description:
                "Answers to the questions merchants and shoppers ask after install: claims, billing, setup, white-label URLs and what protection covers.",
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
              { name: "Help centre", path: "/help" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(HELP_FAQ)) }}
      />

      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="canvas" />
        <div className="wrap">
          <div className="stack-20" style={{ maxWidth: 760 }}>
            <span className="kicker">Help centre</span>
            <h1 className="d1" style={{ fontSize: "clamp(2.4rem,4.6vw,3.6rem)" }}>
              Questions we actually get asked
            </h1>
            <p className="lead" style={{ fontSize: "1.12rem" }}>
              The eleven or so things that come up after install, answered plainly. If yours is not
              here, email us and it will be.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prose">
            <p className="small">
              Merchants and shoppers both end up here. The shopper questions are{" "}
              <a href="#shoppers">at the top</a>, the merchant ones <a href="#merchants">below them</a>
              , and the billing question everyone asks is <a href="#billing">near the end</a>.
            </p>

            <h2 id="shoppers">For shoppers</h2>
            <h3>How do I file a claim?</h3>
            <p>
              Go to{" "}
              <a href="https://claims.guideprotection.com">claims.guideprotection.com</a>, or use the
              claim link on the store&apos;s own site. It takes about a minute and you do not need an
              account. If the store has its own branded claim page, that link works too and reaches the
              same place.
            </p>
            <h3>What does protection cover?</h3>
            <p>
              Orders lost, stolen or damaged in transit. Guide replaces the order or refunds it,
              depending on what you would rather have and what the store stocks.
            </p>
            <h3>My tracking says delivered and there is no parcel.</h3>
            <p>
              This is the most common claim we handle and it is usually genuine. Check around the
              property and with neighbours first, because carriers do leave parcels in strange places.
              If it is not there, file the claim and say it was marked delivered but never arrived. You
              will not be asked for a police report.
            </p>
            <h3>Who am I dealing with, the store or Guide?</h3>
            <p>
              Both. You are the store&apos;s customer. Guide handles the delivery problem on their
              behalf, which is why the emails come from them and the resolution comes from us.
            </p>

            <h2 id="merchants">For merchants</h2>
            <h3>What does Guide add to my store?</h3>
            <p>
              A protection product in your catalogue, so the fee can be charged when a shopper accepts
              the offer, and the offer itself in the cart or at checkout. Our team does the install with
              you rather than handing you a snippet.
            </p>
            <h3>Can I file a claim for a customer?</h3>
            <p>
              Yes. Open the order in the Guide app, under Insights, and file on their behalf. Useful
              when someone emails you instead of using the claim form, which will happen.
            </p>
            <h3>Can I put claims on my own brand and my own URL?</h3>
            <p>
              Yes. The Branding page in the Guide app controls how the claim form looks, and Settings
              lets you generate a claim URL of your own rather than sending customers to a Guide-branded
              one. Most merchants do this, and it is the difference between a customer feeling handed off
              and a customer feeling looked after.
            </p>
            <h3>Does Guide work with my theme and my other apps?</h3>
            <p>
              Almost always. Where it does not, it is usually a cart drawer doing something unusual,
              and it is a fix rather than a blocker. Email{" "}
              <a href="mailto:hello@guideprotection.com">hello@guideprotection.com</a> and we will take a
              look at your store rather than asking you to describe it.
            </p>
            <h3>What does it cost a shopper?</h3>
            <p>
              Guide sets the price. It is a small flat fee on low-value carts and a percentage of the
              cart on higher-value ones. The exact rate depends on your catalogue and is confirmed before
              you launch, so ask during the demo rather than working from a number on a page.
            </p>

            <h2 id="billing">Billing</h2>
            <h3>Guide is free for merchants. So why is there a Guide charge on my Shopify statement?</h3>
            <p>This is the question we get most often after install, and the charge is real.</p>
            <p>
              Shopify&apos;s checkout is closed, so the money from a single order cannot be split between
              two parties at the point of sale. When a shopper adds protection, that fee is paid to you
              along with the rest of the order. It is sitting in your account, not ours.
            </p>
            <p>
              We then reclaim exactly that amount through a Shopify app usage charge. The figure on
              your statement is the total of the protection fees your shoppers paid, and nothing else.
              Money you were never entitled to keep, going back out.
            </p>
            <p>
              Guide is still free to you. No platform fee, no per-order fee, no subscription. The
              statement line looks like a cost because of how Shopify moves money, not because you are
              being charged for the software.
            </p>
            <h3>How do I check the charge is right?</h3>
            <p>
              Compare the usage charge against protection revenue for the same period in the Guide
              dashboard. They should match. If they do not, tell us, because that is a bug worth knowing
              about rather than an argument worth having.
            </p>

            <h2>Still stuck</h2>
            <p>
              Email <a href="mailto:hello@guideprotection.com">hello@guideprotection.com</a> with your
              store name and, if it is about one order, the order number. If you are a shopper, the
              fastest route is always{" "}
              <a href="https://claims.guideprotection.com">the claim form</a>, because it opens a case
              rather than a conversation.
            </p>
            <p>
              Definitions of the vocabulary used here are in the{" "}
              <Link href="/glossary">glossary</Link>. Commercial terms are in the{" "}
              <Link href="/terms">terms of service</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-wrap">
        <div className="cta-glow" />
        <div className="canvas" />
        <div className="narrow center">
          <div className="stack-28 rv" style={{ justifyItems: "center" }}>
            <span className="logo-tile">
              <LogoGlyph />
            </span>
            <h2 className="d2">Rather ask a person?</h2>
            <p className="lead maxw-md">
              Email hello@guideprotection.com, or book thirty minutes and bring the store with you.
            </p>
            <div className="flex gap-12 wrapf jc">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("help-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("help-cta")} target="_blank" rel="noopener">
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
            <p className="small">{CTA_FOOTER}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
