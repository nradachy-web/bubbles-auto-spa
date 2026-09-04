import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";
import { pageMeta, canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: SEO["ceramic-coating"].title,
  description: SEO["ceramic-coating"].description,
  path: "/ceramic-coating",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ceramic Coating",
  serviceType: "Ceramic Coating",
  description: SEO["ceramic-coating"].description,
  url: canonicalUrl("/ceramic-coating"),
  areaServed: BRAND.serviceArea.map((name) => ({ "@type": "City", name })),
  provider: { "@type": "AutoWash", "@id": `${SITE_URL}/#business`, name: BRAND.legalName, telephone: BRAND.phoneTel, url: canonicalUrl("/") },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageTemplate id="ceramic-coating" />
    </>
  );
}
