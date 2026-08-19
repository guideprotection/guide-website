import { SITE_URL } from "./site";

const LAST_MODIFIED = "2026-08-07";

const organizationNode = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Guide",
  legalName: "Guide Protection",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/logo.svg`,
    width: 512,
    height: 512,
  },
  description:
    "Guide is the post-purchase operating system for ecommerce merchants. One layer handles shipping protection, returns, exchanges, order tracking and fraud detection, entirely under the merchant's own brand.",
  email: "hello@guideprotection.com",
  sameAs: [
    "https://www.linkedin.com/company/guide-1",
    "https://x.com/guideprotection",
    "https://apps.shopify.com/guide-1",
    "https://apps.shopify.com/partners/guide2",
  ],
  knowsAbout: [
    "post-purchase experience",
    "shipping protection",
    "package protection",
    "ecommerce returns",
    "exchange-first returns",
    "order tracking",
    "delivery exceptions",
    "return fraud",
    "claims resolution",
    "Shopify apps",
    "white-label customer experience",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@guideprotection.com",
    availableLanguage: ["en"],
  },
};

const websiteNode = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Guide",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const softwareApplicationNode = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "Guide",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Post-purchase experience platform",
  operatingSystem: "Web, Shopify",
  url: `${SITE_URL}/`,
  downloadUrl: "https://apps.shopify.com/guide-1",
  installUrl: "https://apps.shopify.com/guide-1",
  softwareHelp: { "@type": "CreativeWork", url: `${SITE_URL}/resources` },
  description:
    "One operating layer for shipping protection, returns, exchanges, order tracking and fraud detection, running on the merchant's own brand.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  featureList: [
    "Shipping protection and free returns offered at checkout",
    "Self-service returns portal with exchange-first routing",
    "Carrier-agnostic branded order tracking",
    "End-to-end claims resolution handled by Guide",
    "Post-purchase analytics across every module",
    "Network-level fraud and abuse detection",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description:
      "No platform fee and nothing charged to the merchant per order. The shopper who adds protection pays it. Guide is funded by the protection offer shoppers choose at checkout.",
  },
};

export function baseOrganizationGraph() {
  return [organizationNode, websiteNode, softwareApplicationNode];
}

export function webPageNode({
  path,
  name,
  description,
  ogImage = `${SITE_URL}/assets/og.png`,
}: {
  path: string;
  name: string;
  description: string;
  ogImage?: string;
}) {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
    dateModified: LAST_MODIFIED,
    primaryImageOfPage: { "@type": "ImageObject", url: ogImage },
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleNode({
  path,
  headline,
  description,
  datePublished,
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    datePublished,
    dateModified: LAST_MODIFIED,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}

export function blogNode({ description }: { description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Guide blog",
    description,
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Guide",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/assets/logo.svg`,
    },
  };
}

export function blogPostingJsonLd({
  path,
  headline,
  description,
}: {
  path: string;
  headline: string;
  description: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "Guide", url: `${SITE_URL}/`, logo: `${SITE_URL}/assets/logo.svg` },
    publisher: {
      "@type": "Organization",
      name: "Guide",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/assets/logo.svg`,
    },
    isPartOf: { "@type": "Blog", name: "Guide blog", url: `${SITE_URL}/blog` },
  };
}

export function definedTermSetJsonLd({
  path,
  name,
  description,
  terms,
}: {
  path: string;
  name: string;
  description: string;
  terms: { slug: string; term: string; description: string }[];
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${url}#termset`,
    name,
    description,
    url,
    publisher: { "@id": `${SITE_URL}/#organization` },
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${url}#${t.slug}`,
      name: t.term,
      description: t.description,
      inDefinedTermSet: { "@id": `${url}#termset` },
    })),
  };
}

export function jsonLdScript(graph: unknown[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
