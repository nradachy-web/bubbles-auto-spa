import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO["paint-correction"].title,
  description: SEO["paint-correction"].description,
  alternates: { canonical: "/paint-correction" },
  openGraph: { title: SEO["paint-correction"].title, description: SEO["paint-correction"].description, url: "/paint-correction" },
  twitter: { title: SEO["paint-correction"].title, description: SEO["paint-correction"].description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paint Correction",
  serviceType: "Auto Paint Correction",
  description: SEO["paint-correction"].description,
  url: `${SITE_URL}/paint-correction`,
  areaServed: BRAND.serviceArea.map((name) => ({ "@type": "City", name })),
  provider: { "@type": "AutoWash", "@id": `${SITE_URL}/#business`, name: BRAND.legalName, telephone: BRAND.phoneTel, url: SITE_URL },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageTemplate id="paint-correction" />
    </>
  );
}
