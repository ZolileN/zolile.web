import type { MetadataRoute } from "next";
import { absoluteUrl, indexablePaths } from "@/lib/seo";

const priorities: Record<string, number> = {
  "/": 1,
  "/zolile-nonzapa": 0.95,
  "/projects": 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexablePaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: priorities[path] ?? 0.5,
  }));
}
