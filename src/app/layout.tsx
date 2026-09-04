import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCallBar from "@/components/layout/StickyCallBar";
import { BRAND, SEO, SITE_URL, SERVICES, BUSINESS_DESCRIPTION } from "@/lib/constants";
import { canonicalUrl } from "@/lib/seo";

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
  // NEXT_PUBLIC_BASE_PATH is set only by the GitHub Pages preview build. That
  // preview must not be indexed: its canonicals point at bubblesautospa.org,
  // which still serves the old site. The domain cutover drops
  // NEXT_PUBLIC_BASE_PATH from deploy.yml and adds public/CNAME, which flips
  // this back to index: true with no code change. robots.ts mirrors it.
  robots: { index: !process.env.NEXT_PUBLIC_BASE_PATH, follow: true },
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
  url: canonicalUrl("/"),
  telephone: BRAND.phoneTel,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address.street,
    addressLocality: BRAND.address.city,
    addressRegion: BRAND.address.state,
    postalCode: BRAND.address.zip,
    addressCountry: "US",
  },
  // The shop: 23525 Little Mack Ave, St. Clair Shores, MI 48080.
  geo: { "@type": "GeoCoordinates", latitude: 42.4697, longitude: -82.9069 },
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
      itemOffered: { "@type": "Service", name: s.name, url: canonicalUrl(s.href) },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="on-white">
        {/* Skip link. Visually hidden until focused, then a solid button pinned
            top-left above the fixed nav (z-50) and the hero rinse sheet (z-60).
            Built from utilities only: the unlayered .btn rules in globals.css
            would override sr-only, so .btn is not used here. The text colour
            uses the important form (text-white!) because the unlayered
            a { color: inherit } reset in globals.css beats a plain layered
            utility. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:inline-flex focus:h-12 focus:items-center focus:rounded-[4px] focus:bg-blue focus:px-[22px] focus:text-[15px] focus:font-semibold focus:text-white!"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
