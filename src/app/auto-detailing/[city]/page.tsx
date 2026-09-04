import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityTemplate from "@/components/sections/CityTemplate";
import { CITIES, BRAND, SITE_URL } from "@/lib/constants";
import { pageMeta, canonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) return {};
  const title = `Auto Detailing in ${city.name}, MI | Bubbles Auto Spa`;
  const description = `Mobile and shop auto detailing in ${city.name}, MI. Exterior, interior, paint correction, ceramic coating, and marine & RV. Certified Nasiol, 3M, and 3D. Call ${BRAND.phoneDisplay}.`;
  return pageMeta({ title, description, path: `/auto-detailing/${city.slug}` });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Auto Detailing in ${city.name}`,
    serviceType: "Auto Detailing",
    description: `Mobile and shop auto detailing in ${city.name}, MI by Bubbles Auto Spa.`,
    url: canonicalUrl(`/auto-detailing/${city.slug}`),
    areaServed: { "@type": "City", name: city.name },
    provider: {
      "@type": "AutoWash",
      "@id": `${SITE_URL}/#business`,
      name: BRAND.legalName,
      telephone: BRAND.phoneTel,
      url: canonicalUrl("/"),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CityTemplate city={city} />
    </>
  );
}
