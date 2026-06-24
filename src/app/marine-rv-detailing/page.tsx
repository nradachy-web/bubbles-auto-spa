import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO["marine-rv"].title,
  description: SEO["marine-rv"].description,
  alternates: { canonical: "/marine-rv-detailing" },
  openGraph: { title: SEO["marine-rv"].title, description: SEO["marine-rv"].description, url: "/marine-rv-detailing" },
  twitter: { title: SEO["marine-rv"].title, description: SEO["marine-rv"].description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marine & RV Detailing",
  serviceType: "Marine and RV Detailing",
  description: SEO["marine-rv"].description,
  url: `${SITE_URL}/marine-rv-detailing`,
  areaServed: BRAND.serviceArea.map((name) => ({ "@type": "City", name })),
  provider: { "@type": "AutoWash", "@id": `${SITE_URL}/#business`, name: BRAND.legalName, telephone: BRAND.phoneTel, url: SITE_URL },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageTemplate id="marine-rv" />
    </>
  );
}
