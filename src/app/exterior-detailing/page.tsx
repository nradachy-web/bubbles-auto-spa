import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.exterior.title,
  description: SEO.exterior.description,
  alternates: { canonical: "/exterior-detailing" },
  openGraph: { title: SEO.exterior.title, description: SEO.exterior.description, url: "/exterior-detailing" },
  twitter: { title: SEO.exterior.title, description: SEO.exterior.description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Exterior Detailing",
  serviceType: "Auto Exterior Detailing",
  description: SEO.exterior.description,
  url: `${SITE_URL}/exterior-detailing`,
  areaServed: BRAND.serviceArea.map((name) => ({ "@type": "City", name })),
  provider: { "@type": "AutoWash", "@id": `${SITE_URL}/#business`, name: BRAND.legalName, telephone: BRAND.phoneTel, url: SITE_URL },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageTemplate id="exterior" />
    </>
  );
}
