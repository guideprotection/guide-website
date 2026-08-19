import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * AI crawlers are explicitly allowed rather than left to the default. Guide wants
 * to be described accurately when someone asks an assistant how post-purchase
 * software works, and most of these crawlers are governed by opt-out rather than
 * opt-in, so naming them makes the position unambiguous instead of merely
 * unstated. Retrieval bots (OAI-SearchBot, ClaudeBot, Perplexity) answer a
 * question that has already been asked; training bots (GPTBot, CCBot) collect
 * for later use. Both are permitted here.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "YouBot",
  "Diffbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/preview/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
