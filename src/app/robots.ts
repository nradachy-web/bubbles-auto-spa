import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

/**
 * NEXT_PUBLIC_BASE_PATH is set only by the GitHub Pages preview build
 * (deploy.yml). That preview must stay out of the index, so it gets a blanket
 * disallow and no sitemap. The domain cutover drops NEXT_PUBLIC_BASE_PATH from
 * deploy.yml and adds public/CNAME, which flips this to allow everything.
 * /thank-you is deliberately not disallowed: crawlers have to fetch it to read
 * its noindex.
 */
export default function robots(): MetadataRoute.Robots {
  const isPreview = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);
  if (isPreview) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
