import { BlogPostPage } from "@/components/blog-post-page";
import { blogPostMetadata } from "@/lib/blog";

export const metadata = blogPostMetadata("blog-delivered-not-received");

export default function Page() {
  return <BlogPostPage slug="blog-delivered-not-received" />;
}
