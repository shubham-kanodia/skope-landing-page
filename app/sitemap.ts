import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPostDate = posts.reduce(
    (latest, p) => {
      const d = new Date(p.updated ?? p.date);
      return d > latest ? d : latest;
    },
    new Date(posts[posts.length - 1]?.date ?? Date.now()),
  );

  return [
    {
      url: "https://skope.network",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://skope.network/blog",
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `https://skope.network/blog/${p.slug}`,
      lastModified: new Date(p.updated ?? p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
