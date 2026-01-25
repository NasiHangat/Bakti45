export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO", // Non-Governmental Organization
    "name": "Yayasan Bakti 45 Sejahtera",
    "url": "https://bakti45.or.id",
    "logo": "https://bakti45.or.id/logo45.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Nagrak Kulon RT.03 RW.09, Desa Sukajaya",
      "addressLocality": "Kecamatan Lembang",
      "addressRegion": "Bandung Barat",
      "postalCode": "40391",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-881-0235-12953",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://www.facebook.com/baktiempatlimabdg",
      "https://www.instagram.com/bakti45bdg",
      "https://www.tiktok.com/@baktiempatlimabdg"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}