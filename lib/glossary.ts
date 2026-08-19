export type GlossaryTerm = {
  slug: string;
  term: string;
  description: string;
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: "post-purchase",
    term: "Post-purchase",
    description:
      "Everything that happens after a shopper clicks buy: the confirmation, the delivery, the tracking updates, and any return, exchange or claim that follows. It is the longest stretch of the customer relationship and usually the least designed.",
  },
  {
    slug: "post-purchase-os",
    term: "Post-purchase OS",
    description:
      "A single operating layer that handles every post-purchase event on one record of the customer, rather than separate apps for protection, returns, tracking and claims that cannot see each other's data.",
  },
  {
    slug: "shipping-protection",
    term: "Shipping protection",
    description:
      "An option presented at checkout that covers the shopper if their order is lost, stolen or damaged in transit. When a claim is approved the item is reshipped or refunded without the merchant absorbing the cost.",
  },
  {
    slug: "checkout+",
    term: "Checkout+",
    description:
      "Guide's name for the checkout offer that bundles shipping protection with free returns into one line item, presented in the merchant's brand with a clear decline path.",
  },
  {
    slug: "exchange-first-returns",
    term: "Exchange-first returns",
    description:
      "A returns flow that shows the shopper a suitable exchange or store credit before it shows them a refund. It keeps revenue in the business without tightening the return policy or making a refund harder to reach.",
  },
  {
    slug: "wismo",
    term: "WISMO",
    description:
      "Where is my order. The most common support ticket in ecommerce, generated when a shopper cannot tell what is happening to a delivery. WISMO volume is a symptom of tracking visibility, not of understaffed support.",
  },
  {
    slug: "delivery-exception",
    term: "Delivery exception",
    description:
      "Any event that stops a parcel completing its journey as scheduled: a failed delivery attempt, a customs hold, a misroute, or a carrier marking an order delivered when the shopper has not received it.",
  },
  {
    slug: "claim",
    term: "Claim",
    description:
      "A shopper's report that an order was lost, stolen, damaged or never arrived. Under Guide the claim is filed on the merchant's brand and resolved by Guide's team rather than by the merchant's support queue.",
  },
  {
    slug: "return-fraud",
    term: "Return fraud",
    description:
      "Abuse of a return or claim policy, including serial claimants, wardrobing, and reshipping rings that file repeat claims across multiple merchants. It is detectable at network level long before it is visible to one merchant.",
  },
  {
    slug: "white-label",
    term: "White label",
    description:
      "Software that carries the merchant's brand rather than the vendor's, front to back. A genuinely white-labelled post-purchase flow means the shopper never learns that a third party is involved.",
  },
  {
    slug: "attach-rate",
    term: "Attach rate",
    description:
      "The share of orders where a shopper accepts an optional offer at checkout, such as shipping protection. It is the number that determines whether a protection-funded model works for a given catalogue.",
  },
  {
    slug: "carrier-agnostic",
    term: "Carrier-agnostic",
    description:
      "Working the same way regardless of which carrier moves the parcel, so tracking and claims do not change shape when a merchant switches carrier or runs several at once.",
  },
];
