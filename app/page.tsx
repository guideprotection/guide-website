import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { HeroCarousel, type CarouselItem } from "@/components/hero-carousel";
import {
  IconBars,
  IconBoxes,
  IconCheck,
  IconEnvelope,
  IconPackage,
  IconShield,
  IconShieldAlert,
  IconSwapDouble,
  IconTruck,
} from "@/components/icons";
import { LogoGlyph } from "@/components/logo";
import { jsonLdScript, webPageNode } from "@/lib/json-ld";
import { demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guide | The post-purchase platform for Shopify",
  description:
    "One operating layer for shipping protection, returns, exchanges, order tracking and fraud detection, all on your own brand.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Guide | The post-purchase platform for Shopify",
    description:
      "One operating layer for shipping protection, returns, exchanges, order tracking and fraud detection, all on your own brand.",
    url: "/",
    images: OG_IMAGES,
  },
};

const wheelItems: CarouselItem[] = [
  {
    label: "Checkout+",
    avif: "/assets/mocks/checkout.fb3fdaebde.avif",
    webp: "/assets/mocks/checkout.b8978ad62a.webp",
    width: 887,
    height: 1774,
    alt: "Checkout+ cart on a Shopify store, showing shipping protection and return coverage added to the order",
  },
  {
    label: "Returns",
    avif: "/assets/mocks/returns.7659fa4062.avif",
    webp: "/assets/mocks/returns.1b2b57a656.webp",
    width: 887,
    height: 1774,
    alt: "Guide returns portal, showing refund, exchange and store credit options",
  },
  {
    label: "Exchanges",
    avif: "/assets/mocks/exchange.704dbffb2e.avif",
    webp: "/assets/mocks/exchange.44c9c301ba.webp",
    width: 887,
    height: 1774,
    alt: "Guide exchange flow, choosing a replacement size and color",
  },
  {
    label: "Order Tracking",
    avif: "/assets/mocks/tracking.b82edbc4a6.avif",
    webp: "/assets/mocks/tracking.2804d676d6.webp",
    width: 887,
    height: 1918,
    alt: "Branded order tracking page showing delivery milestones and order items",
  },
];

type ProductGridItem = {
  href: string;
  icon: ReactNode;
  variant?: string;
  title: string;
  body: string;
};

const productGrid: ProductGridItem[] = [
  {
    href: "/protection",
    icon: <IconShield />,
    variant: "v",
    title: "Checkout+",
    body: "Protection and return coverage embedded directly in Shopify checkout.",
  },
  {
    href: "/returns",
    icon: <IconSwapDouble />,
    variant: "blue",
    title: "Returns & Exchanges",
    body: "A self-service portal with smart routing, automated decisions inside your rules and policy enforcement.",
  },
  {
    href: "/tracking",
    icon: <IconTruck />,
    variant: "v",
    title: "Order Tracking",
    body: "Carrier-agnostic tracking on your own brand, with proactive delivery updates.",
  },
  {
    href: "/claims",
    icon: <IconCheck />,
    variant: "blue",
    title: "Claims",
    body: "Lost, stolen and damaged orders resolved end to end, in your voice, at our cost.",
  },
  {
    href: "/analytics",
    icon: <IconBars />,
    variant: "v",
    title: "Analytics",
    body: "Live dashboards across protection, claims, returns and tracking in one place.",
  },
  {
    href: "/fraud",
    icon: <IconShieldAlert />,
    variant: "blue",
    title: "Fraud Detection",
    body: "Guide catches claim and return abuse across the network. You don't run it. You get told when it involves you.",
  },
];

const oneRecordCards = [
  {
    variant: "v" as const,
    icon: <IconBoxes />,
    title: "Shared shopper history",
    body: "A claim in March is visible when the same shopper asks for an exchange in June. Six separate apps can't see each other's data, so each one meets that customer for the first time.",
  },
  {
    variant: "blue" as const,
    icon: <IconShieldAlert />,
    title: "Consistent risk signals",
    body: "One assessment by our team, applied the same way at the claim and at the exchange. Separate tools reach separate conclusions about the same person on the same day.",
  },
  {
    variant: "v" as const,
    icon: <IconCheck />,
    title: "Faster resolutions",
    body: "Nobody has to look up the order in a second system before deciding, which is where most of the waiting in a support queue actually comes from.",
  },
  {
    variant: "blue" as const,
    icon: <IconShield />,
    title: "Better personalization",
    body: "A loyal customer with two genuinely bad deliveries gets treated differently from a first-time buyer with a suspicious pattern, without an agent having to notice.",
  },
  {
    variant: "v" as const,
    icon: <IconPackage />,
    title: "One operational record",
    body: "Protection, returns, tracking and claims write to the same customer, so your team reads one history rather than reconciling four.",
  },
  {
    variant: "blue" as const,
    icon: <IconBars />,
    title: "Fewer disconnected exports",
    body: "One set of numbers that agrees with itself, instead of four CSVs that have to be matched up before anyone can answer a question.",
  },
];

type JourneyRow = {
  when: string;
  key?: boolean;
  icon: ReactNode;
  title: string;
  body: string;
  tags: { label: string; neutral?: boolean }[];
};

const journeyRows: JourneyRow[] = [
  {
    when: "04 MAR",
    icon: <IconShield />,
    title: "Adds protection at checkout",
    body: "Opts in on a $248 order. Guide now has a record for this customer, not just this order.",
    tags: [{ label: "Checkout+", neutral: true }],
  },
  {
    when: "12 MAR",
    icon: <IconTruck />,
    title: "Parcel marked delivered. It was not.",
    body: "Tracking sees the scan, the customer does not see the box. She opens a claim from the tracking page she was already looking at.",
    tags: [
      { label: "Tracking", neutral: true },
      { label: "Claims", neutral: true },
    ],
  },
  {
    when: "12 MAR",
    key: true,
    icon: <IconCheck />,
    title: "Resolved without a ticket",
    body: "First claim, clean carrier history, low risk. Auto-approved inside your rules, replacement drafted in Shopify, your CX team never sees it.",
    tags: [
      { label: "Recovery" },
      { label: "Zero tickets", neutral: true },
    ],
  },
  {
    when: "21 JUN",
    icon: <IconSwapDouble />,
    title: "Requests an exchange, wrong size",
    body: "Three months later, different module, same record.",
    tags: [{ label: "Returns", neutral: true }],
  },
  {
    when: "21 JUN",
    key: true,
    icon: <IconBoxes />,
    title: "This is the part five separate apps cannot do",
    body: "Guide already knows she had one genuine delivery failure that was not her fault, and no pattern of abuse. So she is offered an instant exchange that ships before the return lands, rather than being asked to post the item back first. A standalone returns app would have treated her like a stranger.",
    tags: [{ label: "Context applied" }, { label: "Instant exchange" }],
  },
  {
    when: "21 JUN",
    icon: <IconEnvelope />,
    title: "Registers the product, becomes a first-party contact",
    body: "Six orders in. The thing that could have lost her in March is the reason she is still here.",
    tags: [{ label: "Confirmations", neutral: true }],
  },
];

const testimonials = [
  {
    quote:
      "They are always willing to collaborate with us to find the best possible solutions, especially when navigating complex situations such as fraudulent claims. Fast, fair, and effective resolutions.",
    initials: "N",
    name: "NRML",
    meta: "2 years using Guide",
  },
  {
    quote:
      "It offers new customers another layer of order assurance and confidence when ordering, which helps strengthen conversion rate.",
    initials: "EA",
    name: "Elva's All Naturals",
    meta: "Over 18 months using Guide",
  },
  {
    quote:
      "The customer support has been the best I've worked with, bar none. This app has taken a lot of shipping-related stress off our company's shoulders.",
    initials: "MM",
    name: "Morrocco Method International",
    meta: "Over 2 years using Guide",
  },
];

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

export default function HomePage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/",
              name: "Guide | The post-purchase platform for Shopify",
              description:
                "One operating layer for shipping protection, returns, exchanges, order tracking and fraud detection, all on your own brand.",
            }),
          ]),
        }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 1000, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> The post-purchase platform for Shopify
            </span>
            <h1 className="d1">
              Turn every post-purchase moment
              <br />
              into <span className="accent">retained revenue</span>.
            </h1>
            <p className="lead maxw-md hero-lead">
              Protection, returns, exchanges, claims, tracking and fraud detection in one layer,
              on your brand, so a delivery problem doesn&apos;t cost you the customer.
            </p>
            <div className="flex gap-12 wrapf jc mt-8">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("home-hero")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the Platform
              </Link>
            </div>
            <p className="small mt-8">
              <a
                className="tlink"
                href={installUrl("home-hero-text")}
                target="_blank"
                rel="noopener"
                style={{ fontSize: ".95rem" }}
              >
                Install from the Shopify App Store
              </a>
            </p>
          </div>
          <HeroCarousel items={wheelItems} />
        </div>
      </section>

      <section className="section-sm" id="proof">
        <div className="wrap">
          <div className="proof rv">
            <div className="proof-glow" />
            <div className="split split-t">
              <div className="stack-16">
                <span className="kicker">Verified</span>
                <p className="stat-xl stat-acc">21 minutes</p>
                <h2 className="d4">From approval to resolution sent, on average.</h2>
                <p className="tiny">
                  Averaged across approved claims, measured from approval to the replacement or refund being
                  issued. Not submission time, not time to a decision, and not how long a refund takes to clear
                  the shopper&apos;s bank.{" "}
                  <Link className="tlink" href="/claims" style={{ fontSize: "inherit" }}>
                    How a claim actually moves
                  </Link>
                  .
                </p>
              </div>
              <div className="stack-16">
                <span className="kicker">From the Shopify App Store</span>
                <div className="card">
                  <p className="body">
                    &ldquo;Their team is always willing to collaborate with us to find the best possible
                    solutions, especially when navigating complex situations such as fraudulent claims.&rdquo;
                  </p>
                  <p className="tiny mt-8">
                    <strong>NRML</strong> &middot; 2 years using Guide
                  </p>
                </div>
                <div className="card">
                  <p className="body">
                    &ldquo;It offers new customers another layer of order assurance and confidence when
                    ordering, which helps strengthen conversion rate.&rdquo;
                  </p>
                  <p className="tiny mt-8">
                    <strong>Elva&apos;s All Naturals</strong> &middot; Over 18 months using Guide
                  </p>
                </div>
                <p className="tiny">
                  <a
                    className="tlink"
                    href="https://apps.shopify.com/guide-1/reviews"
                    target="_blank"
                    rel="noopener"
                    style={{ fontSize: ".8rem" }}
                  >
                    Read every review on the Shopify App Store
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">The whole idea</span>
            <h2 className="d2">
              The moment it goes wrong
              <br className="hide-mob" /> is the moment you win them.
            </h2>
            <p className="lead">
              A parcel that never arrived. The wrong size. A delivery that slipped a week. Every
              one of those is a customer quietly deciding whether to order from you again. Guide
              takes the worst moment in the journey and turns it into the reason they come back.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ico v">
                <IconCheck />
              </span>
              <h3 className="d4 mt-16">A recovery, not an apology</h3>
              <p className="body mt-8">
                The shopper resolves it where they already were, in your brand, without writing an
                email or waiting on a reply. What would have been a complaint becomes the story
                they tell about how well you handled it.
              </p>
            </div>
            <div className="card rv d-1">
              <span className="ico blue">
                <IconSwapDouble />
              </span>
              <h3 className="d4 mt-16">Fewer tickets reaching your team</h3>
              <p className="body mt-8">
                Where is my order. How do I send this back. It arrived damaged. Guide answers all
                three before they become a conversation, so your agents spend their day on the
                questions that genuinely need a person.
              </p>
            </div>
            <div className="card rv d-2">
              <span className="ico v">
                <IconBars />
              </span>
              <h3 className="d4 mt-16">A bigger basket at checkout</h3>
              <p className="body mt-8">
                Protection and return coverage remove the hesitation that quietly caps cart size. When
                the risk of buying comes down, shoppers commit to the order they actually wanted
                rather than the safe version of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="sec-head-row rv">
            <h2 className="d2" style={{ maxWidth: "16ch" }}>
              Choose the problem you want to solve first.
            </h2>
            <Link className="tlink" href="/products">
              View all products
            </Link>
          </div>
          <div className="prod rv">
            {productGrid.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`ico${item.variant ? ` ${item.variant}` : ""}`}>{item.icon}</span>
                <strong className="d4">{item.title}</strong>
                <span className="body">{item.body}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg-2" id="one-record">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">One record</span>
            <h2 className="d2">
              What &quot;one system&quot; actually
              <br className="hide-mob" /> buys you, in one customer.
            </h2>
            <p className="lead">
              Every vendor in this category says the modules are connected. Here is what that
              sentence is worth. One shopper, one record, four months. Watch what March changes
              about June.
            </p>
          </div>
          <div className="journey rv">
            <div className="journey-head">
              <div className="journey-who">
                <span className="journey-av">JM</span>
                <span className="grid gap-1.5">
                  <strong style={{ fontSize: ".96rem", fontWeight: 550, letterSpacing: "-.018em" }}>
                    Jamie M.
                  </strong>
                  <span className="tiny">Customer since March &middot; 6 orders &middot; 1 claim &middot; 2 exchanges</span>
                </span>
              </div>
              <span className="tag">Example unified customer record</span>
            </div>
            <div className="journey-rail">
              {journeyRows.map((row, i) => (
                <div key={i} className={`jrow${row.key ? " key" : ""}`}>
                  <span className="when">{row.when}</span>
                  <span className="mark">{row.icon}</span>
                  <span className="what">
                    <strong>{row.title}</strong>
                    <span>{row.body}</span>
                    <span className="tags">
                      {row.tags.map((tag) => (
                        <span key={tag.label} className={`tag${tag.neutral ? " neutral" : ""}`}>
                          {tag.label}
                        </span>
                      ))}
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <div className="journey-foot">
              <span className="small" style={{ flex: 1, minWidth: "16ch" }}>
                Risk travels. Generosity travels. That&apos;s the whole argument for one system, and
                it&apos;s the only part a competitor can&apos;t copy by shipping another module.
              </span>
              <Link className="btn btn-ghost btn-sm arw" href="/products">
                See the platform
              </Link>
            </div>
          </div>
          <p className="tiny mt-24">
            An illustrative journey, built from the rules the product actually applies. It is not a real
            customer record and no shopper data is shown.
          </p>
          <div className="grid g3 mt-32 rv">
            {oneRecordCards.map((card) => (
              <div key={card.title} className="card">
                <span className={`ico ${card.variant}`}>{card.icon}</span>
                <h3 className="d4 mt-16">{card.title}</h3>
                <p className="small mt-8">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="small center mt-32">
            <Link className="tlink" href="/products" style={{ fontSize: ".95rem" }}>
              Explore the platform
            </Link>
          </p>
        </div>
      </section>

      <section className="section inv">
        <div className="wrap">
          <div className="grid gap-4 rv center" style={{ justifyItems: "center" }}>
            <span className="kicker">The deal</span>
            <h2 className="d2">
              Guide carries the risk.
              <br className="hide-mob" /> You keep the customer.
            </h2>
            <p className="lead maxw-md">
              The parcel wasn&apos;t your fault. The fix still has to look like it came from you.
            </p>
          </div>
          <div className="grid g3 mt-8 rv">
            <div>
              <strong className="d4">Free to you</strong>
              <p className="small mt-2">
                No platform fee, and nothing charged to you per order. The shopper who adds
                protection is the one who pays for it, at checkout, on the orders they choose.
              </p>
            </div>
            <div>
              <strong className="d4">Fewer tickets</strong>
              <p className="small mt-2">
                Claims are worked by the Guide Team, in your brand and on your policies. Most of
                them don&apos;t reach your inbox at all, and the ones that do have already been
                through a person.
              </p>
            </div>
            <div>
              <strong className="d4">A better ending</strong>
              <p className="small mt-8">
                The decision, the replacement and the cost of it are ours. Nobody argues with a carrier
                and nobody waits on one. What you keep is a customer who watched you fix something that was
                never your fault.
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
                <IconShield /> At checkout
              </span>
              <h2 className="d2">
                The hesitation happens
                <br />
                before they pay.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                A clean, on-brand checkout experience that lets customers add shipping protection and add
                return coverage, before they commit to the order. Take the risk out of the decision and
                shoppers stop trimming their basket to play it safe.
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
                  alt="Checkout+ cart on a Shopify store, showing shipping protection and return coverage added to the order"
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
                <IconPackage /> Returns
              </span>
              <h2 className="d2">
                A refund is not the only thing
                <br />
                they would accept.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                Customers start a return or exchange in seconds, and the portal offers the swap
                before it offers the money back. Your team gets smart routing and full visibility
                without a ticket ever being opened, on your policies and your branding.
              </p>
              <ul className="blist">
                <li>One-tap return initiation</li>
                <li>Smart eligibility and policy checks</li>
                <li>Instant exchange recommendations</li>
                <li>Prepaid labels generated the moment a return is approved</li>
                <li>Custom resolutions: refund, exchange, or store credit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconTruck /> Tracking
              </span>
              <h2 className="d2">
                Nobody should have to visit
                <br />a carrier&apos;s website.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                Give customers a single, beautifully branded place to track every shipment.
                Integrate with any carrier or merchant and deliver proactive updates from dispatch
                to doorstep, so nobody has to write in and ask.
              </p>
              <ul className="blist">
                <li>Unified tracking across all carriers</li>
                <li>Automated delivery notifications</li>
                <li>Branded tracking page that drives repeat visits</li>
              </ul>
            </div>
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
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="split">
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
              <span className="eyepill">
                <IconBars /> Analytics
              </span>
              <h2 className="d2">
                Four exports that disagree,
                <br />
                or one that does not.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                Dashboards, updating in near real time, give your team the numbers that matter: protected
                orders, claim rates, resolution trends and revenue recovered, all in one place.
              </p>
              <ul className="blist">
                <li>Live KPIs across protection, returns and tracking</li>
                <li>Filter by carrier, reason code or cohort</li>
                <li>Compare protected vs. total order performance</li>
                <li>Drill into every claim and customer in seconds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="flex justify-center rv d-1">
              <figure className="fig">
                <picture>
                  <source srcSet="/assets/mocks/whitelabel.980d2d79ba.avif" type="image/avif" />
                  <img
                    className="mock wide"
                    src="/assets/mocks/whitelabel.b3b0ccef7c.webp"
                    width={1200}
                    height={683}
                    alt="A claim lookup form running on the Livva Energy storefront, carrying the merchant's own logo, photography and typography with no Guide branding"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <figcaption>
                  Livva Energy&apos;s claim lookup, running on their own domain. The support address
                  at the foot of the form is a setting, not a limitation.
                </figcaption>
              </figure>
            </div>
            <div className="grid gap-7 rv">
              <span className="eyepill">
                <IconShield /> White label
              </span>
              <h2 className="d2">
                Front to back,
                <br />
                it stays your brand.
              </h2>
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "30em" }}>
                Guide is built to disappear. Every surface a shopper touches carries your logo,
                your type, your photography and your domain. This is a live claim lookup on a
                customer&apos;s storefront. There&apos;s nothing of ours on it.
              </p>
              <ul className="blist">
                <li>Checkout, returns and tracking, all on your domain</li>
                <li>Email and SMS sent from your address through your own provider</li>
                <li>Replies written in your voice, by people trained on your policies</li>
                <li>Merchant dashboard themable for agencies and multi-brand groups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">Integrations</span>
            <h2 className="d2 center">Plays nicely with your stack.</h2>
            <p className="lead center">
              Connect the tools you already run, without a lengthy implementation.
            </p>
          </div>
          <div className="kb rv">
            <KeycapRow row={integrationLogos} />
            <KeycapRow row={integrationRow2} className="r2" />
            <KeycapRow row={integrationRow3} className="r3" />
          </div>
          <p className="small center mt-8">
            Plus a public REST API, webhooks on every event, and a partner team that will build
            the connector you need.{" "}
            <Link className="tlink" href="/resources#integrations" style={{ fontSize: ".855rem" }}>
              See all integrations
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">From the Shopify App Store</span>
            <h2 className="d2 center">Why Shopify brands choose Guide.</h2>
          </div>
          <div className="grid g3">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`card rv${i === 1 ? " d-1" : i === 2 ? " d-2" : ""}`}>
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p
                  className="d4 mt-4"
                  style={{ fontWeight: 400, fontFamily: "var(--font-serif)", fontSize: "1.24rem", lineHeight: 1.4 }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="byline mt-6">
                  <span className="av">{t.initials}</span>
                  <span className="grid gap-1.5">
                    <strong style={{ fontSize: ".88rem", fontWeight: 550 }}>{t.name}</strong>
                    <span className="tiny">{t.meta}</span>
                  </span>
                </div>
              </div>
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
            <h2 className="d2">Every surface, on your brand.</h2>
            <p className="lead maxw-md">
              See Guide running on your catalog in 30 minutes, with your ops lead in the room, and an honest
              read on what it would change for your customers and your team.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("home-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("home-cta")} target="_blank" rel="noopener">
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
              Thirty minutes, on your own catalogue &middot; Free to install, and our team does the build
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
