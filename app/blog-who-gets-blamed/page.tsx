import { BlogPostPage } from "@/components/blog-post-page";
import { blogPostMetadata } from "@/lib/blog";

export const metadata = blogPostMetadata("blog-who-gets-blamed");

export default function Page() {
  return <BlogPostPage slug="blog-who-gets-blamed" />;
}
