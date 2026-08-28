import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const LAST_MODIFIED = "2026-08-25";

type Entry = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

const ENTRIES: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/protection", changeFrequency: "monthly", priority: 0.9 },
  { path: "/returns", changeFrequency: "monthly", priority: 0.9 },
  { path: "/tracking", changeFrequency: "monthly", priority: 0.8 },
  { path: "/claims", changeFrequency: "monthly", priority: 0.8 },
  { path: "/analytics", changeFrequency: "monthly", priority: 0.8 },
  { path: "/fraud", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.7 },
  { path: "/help", changeFrequency: "monthly", priority: 0.7 },
  { path: "/glossary", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/for-shoppers", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-delivered-not-received", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-exchange-first", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-not-insurance", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-protection-pricing", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-recovery", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-second-inbox", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-self-insure", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-white-label", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-who-gets-blamed", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog-wismo", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ENTRIES.map((entry) => ({
    url: entry.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${entry.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
