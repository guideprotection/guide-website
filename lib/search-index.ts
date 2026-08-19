export type SearchEntry = {
  t: string;
  d: string;
  u: string;
  k: string;
};

// Ported from the static build's assets/search-index.*.js. The "Confirmations"
// entry pointed at a page that was published and withdrawn (it now redirects
// to /products); it is intentionally dropped here rather than carried forward.
export const SEARCH_INDEX: SearchEntry[] = [
  { t: "Checkout+", d: "Protection and free returns offered at checkout, in your brand.", u: "/protection", k: "protection upsell cart aov attach" },
  { t: "Returns & Exchanges", d: "Self-service portal with smart routing and instant exchanges.", u: "/returns", k: "returns exchange refund store credit portal" },
  { t: "Order Tracking", d: "Carrier-agnostic tracking on your own brand, with proactive updates.", u: "/tracking", k: "tracking wismo carrier delivery notifications" },
  { t: "Claims", d: "Lost, stolen and damaged orders resolved end to end.", u: "/claims", k: "claims lost stolen damaged resolution" },
  { t: "Analytics", d: "Live dashboards across protection, claims, returns and tracking.", u: "/analytics", k: "analytics dashboard reporting kpi data" },
  { t: "Fraud Detection", d: "Abuse signals scored across the merchant network.", u: "/fraud", k: "fraud abuse returns claims network risk" },
  { t: "Platform overview", d: "How the six modules share one record of the customer.", u: "/products", k: "platform overview modules integration" },
  { t: "Pricing", d: "No platform fee and no contract. How the model works and who qualifies for revenue share.", u: "/pricing", k: "pricing cost fee revenue share contract free qualify" },
  { t: "Book a demo", d: "Thirty minutes on your own catalogue.", u: "/pricing#demo", k: "demo contact sales book call" },
  { t: "Resources", d: "Returns policy guidance, operator writing, the glossary and integrations.", u: "/resources", k: "resources help docs api integrations" },
  { t: "Blog", d: "Operational notes on post-purchase.", u: "/blog", k: "blog articles writing guides notes" },
  { t: "Cut WISMO tickets", d: "How to reduce where-is-my-order volume without hiring.", u: "/blog-wismo", k: "wismo tickets support volume tracking" },
  { t: "Exchange-first returns", d: "The returns policy changes that actually retain revenue.", u: "/blog-exchange-first", k: "returns policy exchange refund credit" },
  { t: "Pricing protection", d: "Why one flat protection price is the wrong answer.", u: "/blog-protection-pricing", k: "protection pricing attach adverse selection" },
  { t: "Who gets blamed", d: "The carrier lost it and your brand takes the review.", u: "/blog-who-gets-blamed", k: "carrier blame fault delivery failure review" },
  { t: "The customer you nearly lost", d: "Turning a delivery failure into retention.", u: "/blog-recovery", k: "recovery retention loyalty service failure" },
  { t: "Whose brand is the apology in", d: "Why white label decides who gets the credit.", u: "/blog-white-label", k: "white label brand credit vendor portal" },
  { t: "The second inbox", d: "Why claims cost more than where-is-my-order.", u: "/blog-second-inbox", k: "support tickets claims cost queue judgement" },
  { t: "Delivered, not received", d: "The most common claim, and how to judge it.", u: "/blog-delivered-not-received", k: "delivered not received porch piracy claim scan" },
  { t: "Not insurance", d: "Why shipping protection is not an insurance product.", u: "/blog-not-insurance", k: "insurance regulation compliance protection structure" },
  { t: "Absorb it yourself", d: "When skipping protection is the right call.", u: "/blog-self-insure", k: "self insure absorb losses economics margin" },
  { t: "File a claim", d: "For shoppers with a lost, stolen or damaged order.", u: "/for-shoppers", k: "shopper claim lost stolen damaged help" },
  { t: "Privacy policy", d: "What we collect, why, and how long we keep it.", u: "/privacy", k: "privacy gdpr data policy" },
  { t: "Terms of service", d: "The agreement between Guide and merchants.", u: "/terms", k: "terms legal agreement contract" },
];
