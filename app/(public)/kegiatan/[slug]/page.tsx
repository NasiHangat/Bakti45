import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Home, User, Share2, Tag } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { kegiatanBySlugQuery, type KegiatanDetail } from "@/sanity/lib/queries";

/**
 * Kegiatan Detail Page Component.
 * Updated with new Blue/Cyan Color Theme.
 */
export default async function KegiatanDetailPage({
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

    // JSON-LD for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": kegiatan.title,
        "image": kegiatan.mainImage ? [
            urlFor(kegiatan.mainImage).width(1200).height(675).url()
        ] : [],
        "datePublished": kegiatan.publishedAt,
        "dateModified": kegiatan.publishedAt,
        "author": {
            "@type": "Organization",
            "name": "Yayasan Bakti 45 Sejahtera",
            "url": "https://bakti45.or.id"
        },
        "description": kegiatan.excerpt
    };

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-brand-yellow selection:text-blue-600">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* =========================================
                 1. HERO / HEADER SECTION (Updated Gradient)
            ========================================= */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-500 via-blue-400 to-sky-500 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-blue-50 mb-8 font-medium">
                        <Link href="/" className="hover:text-yellow-300 transition-colors flex items-center gap-1">
                            <Home className="w-3 h-3 md:w-4 md:h-4" />
                            Beranda
                        </Link>
                        <span>/</span>
                        <Link href="/kegiatan" className="hover:text-yellow-300 transition-colors">
                            Kegiatan
                        </Link>
                        <span>/</span>
                        <span className="text-yellow-300 truncate max-w-[150px] md:max-w-xs">{kegiatan.title}</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-white/20 border border-white/40 text-yellow-300 font-bold text-xs uppercase tracking-wider backdrop-blur-md">
                                <Tag className="w-3 h-3" />
                                Berita & Kegiatan
                            </span>
                            <span className="text-blue-50 text-sm flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {formattedDate}
                            </span>
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight drop-shadow-md">
                            {kegiatan.title}
                        </h1>

                        <div className="flex items-center gap-3 pt-2">
                             <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/30">
                                <User className="w-5 h-5" />
                             </div>
                             <div>
                                <p className="text-sm font-bold">Admin Yayasan</p>
                                <p className="text-xs text-blue-100">Tim Media Bakti 45</p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
                 2. MAIN CONTENT AREA
            ========================================= */}
            <section className="relative py-12 md:py-20 -mt-10 z-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12">
                        
                        {/* --- CONTENT COLUMN (8/12) --- */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-[2rem] shadow-xl shadow-cyan-900/5 p-6 md:p-10 border border-gray-100">
                                
                                {/* Featured Image */}
                                {kegiatan.mainImage && (
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm mb-10 group">
                                        <Image
                                            src={urlFor(kegiatan.mainImage).width(1200).height(675).url()}
                                            alt={kegiatan.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            priority
                                        />
                                    </div>
                                )}

                                {/* Excerpt */}
                                {kegiatan.excerpt && (
                                    <div className="mb-10 text-xl md:text-2xl font-medium text-gray-800 leading-relaxed font-serif border-l-4 border-yellow-400 pl-6">
                                        {kegiatan.excerpt}
                                    </div>
                                )}

                                {/* Main Article Body (Updated Colors) */}
                                <article className="prose prose-lg prose-blue max-w-none 
                                    prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                                    prose-p:text-gray-600 prose-p:leading-relaxed 
                                    prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline
                                    prose-blockquote:border-l-cyan-500 prose-blockquote:bg-cyan-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                                    prose-img:rounded-2xl prose-img:shadow-lg
                                    prose-li:text-gray-600">
                                    {kegiatan.body && kegiatan.body.length > 0 ? (
                                        <PortableText value={kegiatan.body} />
                                    ) : (
                                        <p className="text-gray-500 italic">Konten artikel belum tersedia.</p>
                                    )}
                                </article>

                                {/* Share / Tags Footer */}
                                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4">
                                    <Link
                                        href="/kegiatan"
                                        className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-600 font-semibold transition-colors group"
                                    >
                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                        Kembali ke Daftar
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>

                        {/* --- SIDEBAR COLUMN (4/12) --- */}
                        <aside className="lg:col-span-4 space-y-8">
                            
                            {/* Widget: CTA Donasi (Updated Gradient) */}
                            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-8 rounded-3xl relative overflow-hidden text-center shadow-lg">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                <h3 className="text-xl font-bold mb-3 relative z-10">Dukung Kegiatan Kami</h3>
                                <p className="text-blue-50 text-sm mb-6 relative z-10">
                                    Bantu kami terus menebar kebaikan untuk anak-anak yatim dan dhuafa.
                                </p>
                                <Link 
                                    href="/#donasi" 
                                    className="inline-block w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-xl hover:bg-white hover:scale-105 transition-all relative z-10 shadow-md"
                                >
                                    Donasi Sekarang
                                </Link>
                            </div>

                            {/* Widget: Navigasi Cepat (Info Lain) */}
                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
                                    Lihat Juga
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/profil" className="block p-3 rounded-xl hover:bg-cyan-50 text-gray-600 hover:text-cyan-700 transition-colors text-sm font-medium">
                                            Tentang Yayasan Bakti 45
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/kegiatan" className="block p-3 rounded-xl hover:bg-cyan-50 text-gray-600 hover:text-cyan-700 transition-colors text-sm font-medium">
                                            Berita & Kegiatan Lainnya
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/kontak" className="block p-3 rounded-xl hover:bg-cyan-50 text-gray-600 hover:text-cyan-700 transition-colors text-sm font-medium">
                                            Hubungi Kami / Jadi Relawan
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Generate Metadata
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
        description: kegiatan.excerpt || `Baca selengkapnya tentang ${kegiatan.title}.`,
        openGraph: {
            title: `${kegiatan.title} | Yayasan Bakti 45 Sejahtera`,
            description: kegiatan.excerpt,
            type: "article",
            images: kegiatan.mainImage ? [urlFor(kegiatan.mainImage).width(1200).height(630).url()] : [],
        },
    };
}