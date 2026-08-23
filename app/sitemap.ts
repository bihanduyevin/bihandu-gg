import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";

const baseUrl =
  "https://bihanduyevin.github.io/bihandu-gg";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const posts = getAllPosts();

  const blogRoutes: MetadataRoute.Sitemap =
    posts.map((post) => {
      const parsedDate = new Date(post.date);

      const lastModified = Number.isNaN(
        parsedDate.getTime(),
      )
        ? now
        : parsedDate;

      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.7,
      };
    });

  return [...staticRoutes, ...blogRoutes];
}