import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCallBar from "@/components/layout/StickyCallBar";
import { BRAND, SEO, SITE_URL, SERVICES, BUSINESS_DESCRIPTION } from "@/lib/constants";

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  style: ["normal"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.home.title, template: "%s" },
  description: SEO.home.description,
  keywords: [
    "auto detailing St. Clair Shores",
    "mobile detailing Macomb County",
    "car detailing St. Clair Shores MI",
    "ceramic coating St. Clair Shores",
    "paint correction Macomb County",
    "interior detailing St. Clair Shores",
    "boat detailing Michigan",
    "RV detailing Macomb County",
    "Bubbles Auto Spa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND.legalName,
    title: SEO.home.title,
    description: SEO.home.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: BRAND.legalName }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.home.title,
    description: SEO.home.description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "@id": `${SITE_URL}/#business`,
  name: BRAND.legalName,
  alternateName: BRAND.name,
  description: BUSINESS_DESCRIPTION,
  url: SITE_URL,
  telephone: BRAND.phoneTel,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address.street,
    addressLocality: BRAND.address.city,
    addressRegion: BRAND.address.state,
    postalCode: BRAND.address.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.4956, longitude: -82.889 },
  areaServed: BRAND.serviceArea.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [BRAND.social.instagram, BRAND.social.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Detailing services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}${s.href}` },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="on-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
