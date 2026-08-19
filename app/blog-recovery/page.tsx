import { BlogPostPage } from "@/components/blog-post-page";
import { blogPostMetadata } from "@/lib/blog";

export const metadata = blogPostMetadata("blog-recovery");

export default function Page() {
  return <BlogPostPage slug="blog-recovery" />;
}
