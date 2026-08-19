import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/site";

export type BlogFrontmatter = {
  title: string;
  description: string;
  lead: string;
  category: string;
  date: string;
  readTime: string;
  readNextSlug: string;
  readNextTitle: string;
  readNextExcerpt: string;
};

export type BlogListItem = {
  slug: string;
} & BlogFrontmatter;

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Order posts are listed in on /blog, ported verbatim from the static index. */
export const BLOG_ORDER = [
  "blog-who-gets-blamed",
  "blog-recovery",
  "blog-white-label",
  "blog-second-inbox",
  "blog-wismo",
  "blog-exchange-first",
  "blog-protection-pricing",
  "blog-delivered-not-received",
  "blog-self-insure",
  "blog-not-insurance",
] as const;

export function getPostSource(slug: string) {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  return fs.readFileSync(file, "utf8");
}

export function getPostFrontmatter(slug: string): BlogFrontmatter {
  const source = getPostSource(slug);
  const { data } = matter(source);
  return data as BlogFrontmatter;
}

export function getAllPosts(): BlogListItem[] {
  return BLOG_ORDER.map((slug) => ({ slug, ...getPostFrontmatter(slug) }));
}

export function blogPostMetadata(slug: string): Metadata {
  const { title, description } = getPostFrontmatter(slug);
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title, description, url: `/${slug}`, type: "article", images: OG_IMAGES },
  };
}
