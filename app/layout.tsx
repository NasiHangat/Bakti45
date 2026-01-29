import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bakti45sejahtera.my.id'),
  title: {
    default: "Yayasan Bakti 45 Sejahtera | Panti Asuhan Bandung",
    template: "%s | Yayasan Bakti 45 Sejahtera"
  },
  description: "Yayasan Bakti 45 Sejahtera adalah panti asuhan resmi dan terpercaya di Bandung. Fokus pada pembinaan anak yatim piatu dan dhuafa melalui pendidikan dan kemandirian.",
  keywords: ["Panti Asuhan Bandung", "Yayasan Bakti 45 Sejahtera", "Donasi Anak Yatim", "Relawan Pendidikan", "Sedekah Online", "Zakat Bandung", "Panti Asuhan Terpercaya"],
  authors: [{ name: "Yayasan Bakti 45 Sejahtera" }],
  creator: "Yayasan Bakti 45 Sejahtera",
  publisher: "Yayasan Bakti 45 Sejahtera",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.bakti45sejahtera.my.id",
    title: "Yayasan Bakti 45 Sejahtera | Membangun Generasi Mandiri",
    description: "Lembaga Kesejahteraan Sosial Anak (LKSA) resmi di Bandung. Menerima penyaluran zakat, infaq, dan sedekah untuk beasiswa pendidikan anak yatim.",
    siteName: "Yayasan Bakti 45 Sejahtera",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yayasan Bakti 45 Sejahtera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yayasan Bakti 45 Sejahtera",
    description: "Panti asuhan resmi di Bandung. Bantu wujudkan cita-cita anak yatim piatu bersama kami.",
    images: ["/twitter-image.png"],
    creator: "@bakti45",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Yayasan Bakti 45 Sejahtera",
    "url": "https://www.bakti45sejahtera.my.id",
    "logo": "https://www.bakti45sejahtera.my.id/logo45.png",
    "sameAs": [
      "https://www.facebook.com/bakti45sejahtera",
      "https://www.instagram.com/bakti45sejahtera"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kp. Nagrak Kulon",
      "addressLocality": "Bandung",
      "addressRegion": "Jawa Barat",
      "postalCode": "40141",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-881-0235-12953",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": "Indonesian"
    }
  };

  return (
    <html lang="id">
      <head>
        <Script
          id="organization-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}