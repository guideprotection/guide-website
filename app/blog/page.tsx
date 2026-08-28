import type { Metadata } from "next";
import Link from "next/link";
import { LogoGlyph } from "@/components/logo";
import { getAllPosts } from "@/lib/blog";
import { blogNode, breadcrumbNode, webPageNode } from "@/lib/json-ld";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";

const TITLE = "Blog | Notes on post-purchase operations";
const DESCRIPTION =
  "Operational writing on returns, exchanges, delivery exceptions and protection pricing, from the people who actually run the systems.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/blog", images: OG_IMAGES },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [webPageNode({ path: "/blog", name: TITLE, description: DESCRIPTION })],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbNode([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogNode({ description: DESCRIPTION })) }}
      />

      <section className="hero">
        <div className="canvas" />
        <div className="wrap">
          <div className="hero-head" style={{ maxWidth: 920, margin: "0 auto" }}>
            <span className="pill">
              <span className="dot" /> Blog
            </span>
            <h1 className="d1">
              Notes from the
              <br />
              post-purchase <span className="text-accent">weeds</span>.
            </h1>
            <p className="lead maxw-md" style={{ fontSize: "1.12rem" }}>
              Operational writing for people who run this for a living. No thought leadership, no predictions, no
              reheated statistics.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("blog-hero")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                View all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="grid g3">
            {posts.map((post) => (
              <Link className="card card-hover rv" href={`/${post.slug}`} key={post.slug}>
                <span className="meta-row">
                  <span className="tag neutral">{post.category}</span>
                  <span>{post.readTime}</span>
                </span>
                <strong className="d4 mt-4">{post.title}</strong>
                <span className="body mt-2">{post.description}</span>
                <span className="tlink" style={{ fontSize: ".85rem" }}>
                  Read
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
            <h2 className="d2">Rather talk than read?</h2>
            <p className="lead maxw-md">
              Thirty minutes on your own catalogue, with an honest read on whether Guide fits your category.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("blog-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("blog-cta")} target="_blank" rel="noopener">
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
