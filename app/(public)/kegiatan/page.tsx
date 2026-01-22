import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Heart, BookOpen, GraduationCap, Star } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { Metadata } from "next";
import { kegiatanListQuery, kegiatanCountQuery, type KegiatanListItem } from "@/sanity/lib/queries";

export const metadata: Metadata = {
    title: "Kegiatan & Berita | Yayasan Bakti 45 Sejahtera",
    description: "Dokumentasi aktivitas harian, program rutin, dan cerita inspiratif dari anak-anak asuh Yayasan Bakti 45 Sejahtera. Ikuti kabar terbaru kami.",
    openGraph: {
        title: "Kegiatan & Berita | Yayasan Bakti 45 Sejahtera",
        description: "Dokumentasi aktivitas harian, program rutin, dan cerita inspiratif dari anak-anak asuh Yayasan Bakti 45 Sejahtera.",
        type: "website",
        locale: "id_ID",
        url: "https://bakti45.or.id/kegiatan", // Adjust domain if needed, provided as placeholder based on context
        siteName: "Yayasan Bakti 45 Sejahtera",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kegiatan & Berita | Yayasan Bakti 45 Sejahtera",
        description: "Kabar terbaru dan dokumentasi kegiatan Yayasan Bakti 45 Sejahtera.",
    },
    alternates: {
        canonical: "/kegiatan",
    }
};

/**
 * Kegiatan (Activities/News) page component.
 * Fetches paginated content from Sanity CMS for display.
 * Part of the Legal Traceability chain - all news content sourced from CMS.
 */

const ITEMS_PER_PAGE = 6;

export default async function KegiatanPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const params = await searchParams;
    const currentPage = Math.max(1, parseInt(params.page || '1', 10));
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    // Fetch paginated kegiatan items and total count in parallel
    const [newsItems, totalCount] = await Promise.all([
        client.fetch<KegiatanListItem[]>(kegiatanListQuery, { start, end }),
        client.fetch<number>(kegiatanCountQuery),
    ]);

    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    const routineActivities = [
        {
            title: "Jum'at Berkah",
            desc: "Kegiatan rutin mingguan meliputi tadarus Al-Qur'an, tausiyah agama, dan makan bersama nasi box dari para donatur.",
            icon: Heart,
            color: "text-pink-500",
            bg: "bg-pink-50"
        },
        {
            title: "Bimbel & Seni Tari",
            desc: "Setiap hari Minggu diadakan bimbingan belajar gratis untuk akademik dan latihan seni tari untuk pengembangan bakat.",
            icon: BookOpen,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Silaturahmi Donatur",
            desc: "Anak-anak asuh aktif menghadiri undangan syukuran atau doa bersama yang diselenggarakan oleh para donatur.",
            icon: Star,
            color: "text-yellow-600",
            bg: "bg-yellow-50"
        },
        {
            title: "Kolaborasi Kampus",
            desc: "Berpartisipasi dalam kegiatan mahasiswa (KKN, P2M), pemeriksaan kesehatan, dan edukasi dari berbagai universitas.",
            icon: GraduationCap,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
    ];

    // Generate Structured Data (JSON-LD) for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Kegiatan & Berita Yayasan Bakti 45 Sejahtera",
        "description": "Daftar kegiatan, berita, dan program rutin Yayasan Bakti 45 Sejahtera.",
        "url": "https://bakti45.or.id/kegiatan",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": newsItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://bakti45.or.id/kegiatan/${item.slug.current}`,
                "name": item.title,
                "image": item.mainImage ? urlFor(item.mainImage).width(800).height(600).url() : undefined
            }))
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 font-sans selection:bg-brand-yellow selection:text-brand-blue">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />


            {/* =========================================
          1. HEADER SECTION
      ========================================= */}
            <section className="relative pt-44 pb-24 bg-brand-blue text-white overflow-hidden">
                {/* Dekorasi Background */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="absolute -left-20 top-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-yellow font-bold text-xs uppercase tracking-wider mb-4 backdrop-blur-md">
                        Kabar Yayasan
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Kegiatan & Berita</h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Dokumentasi aktivitas harian, program rutin, dan cerita inspiratif dari anak-anak asuh Yayasan Bakti 45 Sejahtera.
                    </p>
                </div>
            </section>

            {/* =========================================
          2. KEGIATAN RUTIN (Grid Cards)
      ========================================= */}
            <section className="py-20 -mt-10 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Kegiatan Rutin Kami</h2>
                            <p className="text-gray-500 mt-2">Aktivitas positif yang membangun karakter dan kemandirian.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {routineActivities.map((item, idx) => (
                                <div key={idx} className="group p-6 rounded-3xl border border-gray-100 hover:border-brand-yellow hover:shadow-lg transition-all bg-white flex flex-col items-center text-center">
                                    <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
          3. LIST BERITA (Grid Masonry Style)
      ========================================= */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Berita Terbaru</h2>
                            <p className="text-gray-600">Update terkini seputar kegiatan yayasan.</p>
                        </div>
                        {/* Filter/Search bisa ditambahkan di sini nanti */}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.length === 0 ? (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-500 text-lg">Belum ada berita terbaru.</p>
                            </div>
                        ) : (
                            newsItems.map((news) => (
                                <article key={news._id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                    {/* Gambar Berita - Clickable */}
                                    <Link href={`/kegiatan/${news.slug?.current || ''}`} className="relative h-56 w-full overflow-hidden bg-gray-100 block">
                                        {news.mainImage ? (
                                            <Image
                                                src={urlFor(news.mainImage).width(600).height(400).url()}
                                                alt={news.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                <span className="text-gray-400">No Image</span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-brand-blue text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                Kegiatan
                                            </span>
                                        </div>
                                    </Link>

                                    {/* Konten Berita */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                <span>
                                                    {news.publishedAt
                                                        ? new Date(news.publishedAt).toLocaleDateString('id-ID', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })
                                                        : 'Tanggal tidak tersedia'}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                                            <Link href={`/kegiatan/${news.slug?.current || ''}`}>
                                                {news.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            {news.excerpt || 'Klik untuk membaca selengkapnya...'}
                                        </p>

                                        <div className="pt-4 border-t border-gray-50 mt-auto">
                                            <Link
                                                href={`/kegiatan/${news.slug?.current || ''}`}
                                                className="text-brand-blue font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                                            >
                                                Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <Link
                                    key={pageNum}
                                    href={`/kegiatan?page=${pageNum}`}
                                    className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-colors ${pageNum === currentPage
                                        ? 'bg-brand-blue text-white'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    {pageNum}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

        </main>
    );
}