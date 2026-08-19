import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { LogoGlyph } from "./logo";
import { getPostSource, type BlogFrontmatter } from "@/lib/blog";
import { blogPostingJsonLd, breadcrumbNode, webPageNode } from "@/lib/json-ld";
import { demoUrl, installUrl } from "@/lib/site";

export async function BlogPostPage({ slug }: { slug: string }) {
  const source = getPostSource(slug);
  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [webPageNode({ path: `/${slug}`, name: frontmatter.title, description: frontmatter.description })],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: frontmatter.title, path: `/${slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingJsonLd({ path: `/${slug}`, headline: frontmatter.title, description: frontmatter.description })
          ),
        }}
      />

      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="canvas" />
        <div className="wrap">
          <div className="grid gap-5" style={{ maxWidth: 760 }}>
            <span className="kicker">
              {frontmatter.category} &nbsp;&middot;&nbsp; {frontmatter.date} &nbsp;&middot;&nbsp; {frontmatter.readTime}
            </span>
            <h1 className="d1" style={{ fontSize: "clamp(2.4rem,4.6vw,3.6rem)" }}>
              {frontmatter.title}
            </h1>
            <p className="lead" style={{ fontSize: "1.12rem" }}>
              {frontmatter.lead}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prose">
            {content}
            <hr className="rule" style={{ margin: "48px 0" }} />
            <p className="small">Written by the Guide Team. We publish what we learn running this for merchants, not what ranks.</p>
            <div className="card mt-8" style={{ background: "var(--bg-2)", borderColor: "transparent" }}>
              <span className="kicker">Read next</span>
              <Link className="d4" style={{ display: "block", marginTop: 12 }} href={`/${frontmatter.readNextSlug}`}>
                {frontmatter.readNextTitle}
              </Link>
              <p className="body mt-2">{frontmatter.readNextExcerpt}</p>
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
            <h2 className="d2">Post-purchase, handled properly.</h2>
            <p className="lead maxw-md">See Guide running on your own catalogue. Thirty minutes, and an honest read on fit.</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl(`${slug}-cta`)} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl(`${slug}-cta`)} target="_blank" rel="noopener">
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
            <p className="small">Thirty minutes, on your own catalogue &middot; Or install free and set it up yourself</p>
          </div>
        </div>
      </section>
    </main>
  );
}
