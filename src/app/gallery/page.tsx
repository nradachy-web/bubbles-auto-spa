import type { Metadata } from "next";
import GalleryShowcase from "@/components/sections/GalleryShowcase";
import CTABanner from "@/components/sections/CTABanner";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.gallery.title,
  description: SEO.gallery.description,
  alternates: { canonical: "/gallery" },
  openGraph: { title: SEO.gallery.title, description: SEO.gallery.description, url: "/gallery" },
  twitter: { title: SEO.gallery.title, description: SEO.gallery.description },
};

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <GalleryShowcase />
      <CTABanner heading="See your vehicle finished like this" />
    </main>
  );
}
