import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";
import { pageMeta, canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: SEO["paint-correction"].title,
  description: SEO["paint-correction"].description,
  path: "/paint-correction",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paint Correction",
  serviceType: "Auto Paint Correction",
  description: SEO["paint-correction"].description,
  url: canonicalUrl("/paint-correction"),
  areaServed: BRAND.serviceArea.map((name) => ({ "@type": "City", name })),
  provider: { "@type": "AutoWash", "@id": `${SITE_URL}/#business`, name: BRAND.legalName, telephone: BRAND.phoneTel, url: canonicalUrl("/") },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageTemplate id="paint-correction" />
    </>
  );
}
