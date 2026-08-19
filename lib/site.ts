export const SITE_URL = "https://guideprotection.com";
export const SITE_NAME = "Guide";

/**
 * Next.js does not deep-merge `openGraph` across layout/page metadata: a page
 * that redeclares `openGraph` replaces the whole object, dropping the root
 * layout's `images`. Every route with its own `openGraph` block spreads this
 * in so the OG image survives.
 */
export const OG_IMAGES = [{ url: "/assets/og.png", width: 1200, height: 630, alt: "Guide, the post-purchase OS" }];

export function demoUrl(content: string) {
  return `https://scheduler.zoom.us/guidepro/guide-demo?utm_source=guide_site&utm_medium=cta&utm_campaign=demo&utm_content=${content}`;
}

export function installUrl(content: string) {
  return `https://apps.shopify.com/guide-1?utm_source=guide_site&utm_medium=cta&utm_campaign=install&utm_content=${content}`;
}

export type NavLink = {
  label: string;
  href: string;
  description: string;
  icon: "shield" | "swap" | "truck" | "check" | "bars" | "shieldAlert" | "books" | "glossary" | "pages" | "claimDoc";
};

export const NAV_PRODUCTS: NavLink[] = [
  { label: "Checkout+", href: "/protection", description: "Protection and free returns, offered at checkout", icon: "shield" },
  { label: "Returns & Exchanges", href: "/returns", description: "Self-service portal with smart routing", icon: "swap" },
  { label: "Order Tracking", href: "/tracking", description: "Carrier-agnostic, on your own brand", icon: "truck" },
  { label: "Claims", href: "/claims", description: "Resolution handled end to end", icon: "check" },
  { label: "Analytics", href: "/analytics", description: "Live view of claims, returns and orders", icon: "bars" },
  { label: "Fraud Detection", href: "/fraud", description: "Abuse signals scored across the network", icon: "shieldAlert" },
];

export const NAV_RESOURCES: NavLink[] = [
  { label: "Resource center", href: "/resources", description: "Guides and playbooks", icon: "books" },
  { label: "Glossary", href: "/glossary", description: "Plain definitions of post-purchase terms", icon: "glossary" },
  { label: "Blog", href: "/blog", description: "Operational notes on post-purchase", icon: "pages" },
  { label: "File a claim", href: "/for-shoppers", description: "For shoppers", icon: "claimDoc" },
];

export const FOOTER_PRODUCTS = [
  { label: "Platform overview", href: "/products" },
  { label: "Checkout+", href: "/protection" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "Order Tracking", href: "/tracking" },
  { label: "Claims", href: "/claims" },
  { label: "Analytics", href: "/analytics" },
  { label: "Fraud Detection", href: "/fraud" },
];

export const FOOTER_RESOURCES = [
  { label: "Resource center", href: "/resources" },
  { label: "Integrations", href: "/resources#integrations" },
  { label: "File a claim", href: "/for-shoppers" },
];

export const FOOTER_LEGAL = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
];
