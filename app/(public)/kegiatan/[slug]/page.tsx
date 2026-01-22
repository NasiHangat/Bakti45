import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Home } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { kegiatanBySlugQuery, type KegiatanDetail } from "@/sanity/lib/queries";

/**
 * Kegiatan Detail Page Component.
 * Displays full content of a single kegiatan/news item.
 * Part of the Legal Traceability chain - content sourced from Sanity CMS.
 * 
 * @param params - Route parameters containing the slug
 */
export default async function KegiatanDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Fetch the kegiatan detail by slug
    const kegiatan = await client.fetch<KegiatanDetail | null>(
        kegiatanBySlugQuery,
        { slug }
    );

    // Return 404 if kegiatan not found
    if (!kegiatan) {
        notFound();
    }

    const formattedDate = kegiatan.publishedAt
        ? new Date(kegiatan.publishedAt).toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        : 'Tanggal tidak tersedia';

    // Generate Structured Data (JSON-LD) for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": kegiatan.title,
        "image": kegiatan.mainImage ? [
            urlFor(kegiatan.mainImage).width(1200).height(675).url()
        ] : [],
        "datePublished": kegiatan.publishedAt,
        "dateModified": kegiatan.publishedAt, // Simplified, ideally should track modification
        "author": {
            "@type": "Organization",
            "name": "Yayasan Bakti 45 Sejahtera",
            "url": "https://bakti45.or.id"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Yayasan Bakti 45 Sejahtera",
            "logo": {
                "@type": "ImageObject",
                "url": "https://bakti45.or.id/logo.png" // Placeholder or actual logo URL
            }
        },
        "description": kegiatan.excerpt || `Baca kegiatan ${kegiatan.title}`
    };

    return (
        <main className="min-h-screen bg-white font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* =========================================
          1. HEADER SECTION
      ========================================= */}
            <section className="relative pt-40 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="absolute -left-20 top-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Beranda
                        </Link>
                        <span>/</span>
                        <Link href="/kegiatan" className="hover:text-white transition-colors">
                            Kegiatan
                        </Link>
                        <span>/</span>
                        <span className="text-brand-yellow truncate max-w-[200px]">{kegiatan.title}</span>
                    </nav>

                    <div className="max-w-4xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-yellow font-bold text-xs uppercase tracking-wider mb-4 backdrop-blur-md">
                            Berita Kegiatan
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {kegiatan.title}
                        </h1>
                        <div className="flex items-center gap-4 text-blue-100">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <time dateTime={kegiatan.publishedAt} className="text-sm font-medium">
                                    {formattedDate}
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
          2. MAIN CONTENT
      ========================================= */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Featured Image */}
                        {kegiatan.mainImage && (
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl mb-12 border border-gray-100">
                                <Image
                                    src={urlFor(kegiatan.mainImage).width(1200).height(675).url()}
                                    alt={kegiatan.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        {/* Excerpt/Summary */}
                        {kegiatan.excerpt && (
                            <div className="bg-gray-50 border-l-4 border-brand-blue p-6 rounded-r-2xl mb-10">
                                <p className="text-gray-700 text-lg leading-relaxed italic">
                                    {kegiatan.excerpt}
                                </p>
                            </div>
                        )}

                        {/* Article Body */}
                        <article className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg">
                            {kegiatan.body && kegiatan.body.length > 0 ? (
                                <PortableText value={kegiatan.body} />
                            ) : (
                                <p className="text-gray-500 text-center py-8">
                                    Konten belum tersedia.
                                </p>
                            )}
                        </article>

                        {/* Back Button */}
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <Link
                                href="/kegiatan"
                                className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Kembali ke Daftar Kegiatan
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
          3. CTA SECTION
      ========================================= */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Ingin Tahu Lebih Banyak?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Kunjungi kami atau hubungi untuk informasi lebih lanjut tentang kegiatan dan program Yayasan Bakti 45 Sejahtera.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/kegiatan"
                            className="bg-white text-brand-blue font-bold py-3 px-6 rounded-full border-2 border-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                        >
                            Lihat Kegiatan Lainnya
                        </Link>
                        <Link
                            href="/kontak"
                            className="bg-brand-blue text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const kegiatan = await client.fetch<KegiatanDetail | null>(
        kegiatanBySlugQuery,
        { slug }
    );

    if (!kegiatan) {
        return {
            title: 'Kegiatan Tidak Ditemukan | Yayasan Bakti 45 Sejahtera',
        };
    }

    return {
        title: `${kegiatan.title} | Yayasan Bakti 45 Sejahtera`,
        description: kegiatan.excerpt || `Baca selengkapnya tentang ${kegiatan.title} di Yayasan Bakti 45 Sejahtera.`,
        openGraph: {
            title: `${kegiatan.title} | Yayasan Bakti 45 Sejahtera`,
            description: kegiatan.excerpt || `Baca selengkapnya tentang ${kegiatan.title} di Yayasan Bakti 45 Sejahtera.`,
            type: "article",
            locale: "id_ID",
            url: `https://bakti45.or.id/kegiatan/${slug}`,
            siteName: "Yayasan Bakti 45 Sejahtera",
            publishedTime: kegiatan.publishedAt,
            images: kegiatan.mainImage ? [
                {
                    url: urlFor(kegiatan.mainImage).width(1200).height(630).url(),
                    width: 1200,
                    height: 630,
                    alt: kegiatan.title,
                }
            ] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: `${kegiatan.title} | Yayasan Bakti 45 Sejahtera`,
            description: kegiatan.excerpt || `Baca selengkapnya tentang ${kegiatan.title} di Yayasan Bakti 45 Sejahtera.`,
            images: kegiatan.mainImage ? [urlFor(kegiatan.mainImage).width(1200).height(600).url()] : [],
        },
        alternates: {
            canonical: `/kegiatan/${slug}`,
        }
    };
}
