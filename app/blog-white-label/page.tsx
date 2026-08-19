import { BlogPostPage } from "@/components/blog-post-page";
import { blogPostMetadata } from "@/lib/blog";

export const metadata = blogPostMetadata("blog-white-label");

export default function Page() {
  return <BlogPostPage slug="blog-white-label" />;
}
