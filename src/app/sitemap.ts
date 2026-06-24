import type { MetadataRoute } from "next";
import { SITE_URL, CITIES } from "@/lib/constants";

export const dynamic = "force-static";

const LAST_MODIFIED = "2026-06-24";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/exterior-detailing", priority: 0.9 },
    { path: "/interior-detailing", priority: 0.9 },
    { path: "/paint-correction", priority: 0.9 },
    { path: "/ceramic-coating", priority: 0.9 },
    { path: "/marine-rv-detailing", priority: 0.9 },
    { path: "/gallery", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    ...CITIES.map((c) => ({ path: `/auto-detailing/${c.slug}`, priority: 0.7 })),
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority,
  }));
}
