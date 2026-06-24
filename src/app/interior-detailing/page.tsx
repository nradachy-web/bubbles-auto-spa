import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.interior.title,
  description: SEO.interior.description,
  alternates: { canonical: "/interior-detailing" },
  openGraph: { title: SEO.interior.title, description: SEO.interior.description, url: "/interior-detailing" },
  twitter: { title: SEO.interior.title, description: SEO.interior.description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Interior Detailing",
  serviceType: "Auto Interior Detailing",
  description: SEO.interior.description,
  url: `${SITE_URL}/interior-detailing`,
  areaServed: BRAND.serviceArea.map((name) => ({ "@type": "City", name })),
  provider: { "@type": "AutoWash", "@id": `${SITE_URL}/#business`, name: BRAND.legalName, telephone: BRAND.phoneTel, url: SITE_URL },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageTemplate id="interior" />
    </>
  );
}
