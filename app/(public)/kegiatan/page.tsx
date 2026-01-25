import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Heart, BookOpen, GraduationCap, Star, Tag, Image as ImageIcon } from "lucide-react";
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
        url: "https://bakti45.or.id/kegiatan",
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
            bg: "bg-pink-50",
            border: "hover:border-pink-200"
        },
        {
            title: "Bimbel & Seni Tari",
            desc: "Setiap hari Minggu diadakan bimbingan belajar gratis untuk akademik dan latihan seni tari untuk pengembangan bakat.",
            icon: BookOpen,
            color: "text-cyan-600",
            bg: "bg-cyan-50",
            border: "hover:border-cyan-200"
        },
        {
            title: "Silaturahmi Donatur",
            desc: "Anak-anak asuh aktif menghadiri undangan syukuran atau doa bersama yang diselenggarakan oleh para donatur.",
            icon: Star,
            color: "text-yellow-500",
            bg: "bg-yellow-50",
            border: "hover:border-yellow-200"
        },
        {
            title: "Kolaborasi Kampus",
            desc: "Berpartisipasi dalam kegiatan mahasiswa (KKN, P2M), pemeriksaan kesehatan, dan edukasi dari berbagai universitas.",
            icon: GraduationCap,
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "hover:border-purple-200"
        },
    ];

    // JSON-LD Structured Data
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
        <main className="min-h-screen bg-white font-sans selection:bg-yellow-200 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* =========================================
                 1. HERO SECTION (Updated: Blue/Cyan Gradient)
            ========================================= */}
            <section className="relative pt-44 pb-24 bg-gradient-to-br from-cyan-500 via-blue-400 to-sky-500 text-white overflow-hidden">
                {/* Dekorasi Background */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="absolute -left-20 top-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
                <div className="absolute right-0 bottom-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/20 border border-white/40 text-yellow-300 font-bold text-xs uppercase tracking-wider mb-6 backdrop-blur-md shadow-sm">
                        <Tag className="w-3 h-3" />
                        Kabar Yayasan
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-md">
                        Kegiatan & Berita
                    </h1>
                    <p className="text-blue-50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-sm">
                        Dokumentasi aktivitas harian, program rutin, dan cerita inspiratif dari anak-anak asuh Yayasan Bakti 45 Sejahtera.
                    </p>
                </div>
            </section>

            {/* =========================================
                 2. KEGIATAN RUTIN (Redesigned Cards)
            ========================================= */}
            <section className="py-20 -mt-16 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 p-8 md:p-14 border border-gray-100">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900">Kegiatan Rutin Kami</h2>
                            <p className="text-gray-500 mt-3 text-lg">Aktivitas positif yang membangun karakter dan kemandirian.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {routineActivities.map((item, idx) => (
                                <div key={idx} className={`group p-8 rounded-3xl border border-gray-100 transition-all duration-300 bg-white hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center ${item.border}`}>
                                    <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
                 3. LIST BERITA (Masonry Grid Style)
            ========================================= */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Berita Terbaru</h2>
                            <div className="h-1 w-20 bg-cyan-500 rounded-full mb-3"></div>
                            <p className="text-gray-600">Update terkini seputar kegiatan dan pencapaian yayasan.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.length === 0 ? (
                            <div className="col-span-full flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <p className="text-gray-500 text-lg font-medium">Belum ada berita terbaru saat ini.</p>
                            </div>
                        ) : (
                            newsItems.map((news) => (
                                <article key={news._id} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                                    {/* Gambar Berita */}
                                    <Link href={`/kegiatan/${news.slug?.current || ''}`} className="relative h-64 w-full overflow-hidden bg-gray-200 block">
                                        {news.mainImage ? (
                                            <Image
                                                src={urlFor(news.mainImage).width(800).height(600).url()}
                                                alt={news.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            /* FIX ERROR: Mengganti Next.js Image dengan Lucide Icon untuk placeholder */
                                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                                                <ImageIcon className="w-12 h-12 mb-2 opacity-20" />
                                                <span className="text-xs font-medium uppercase tracking-widest">No Image</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/95 backdrop-blur text-cyan-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wide">
                                                Kegiatan
                                            </span>
                                        </div>
                                    </Link>

                                    {/* Konten Berita */}
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                                            <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                                                <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                                                <span>
                                                    {news.publishedAt
                                                        ? new Date(news.publishedAt).toLocaleDateString('id-ID', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })
                                                        : '-'}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors line-clamp-2 leading-snug">
                                            <Link href={`/kegiatan/${news.slug?.current || ''}`}>
                                                {news.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                            {news.excerpt || 'Klik untuk membaca selengkapnya tentang kegiatan ini...'}
                                        </p>

                                        <div className="pt-6 border-t border-gray-100 mt-auto">
                                            <Link
                                                href={`/kegiatan/${news.slug?.current || ''}`}
                                                className="text-cyan-600 font-bold text-sm inline-flex items-center gap-2 hover:gap-4 transition-all group/link"
                                            >
                                                Baca Selengkapnya 
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))
                        )}
                    </div>

                    {/* Pagination Modern */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex justify-center gap-3">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <Link
                                    key={pageNum}
                                    href={`/kegiatan?page=${pageNum}`}
                                    className={`w-12 h-12 rounded-xl font-bold flex items-center justify-center transition-all duration-300 shadow-sm ${pageNum === currentPage
                                            ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white scale-110 shadow-blue-500/30'
                                            : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 hover:border-cyan-300 hover:text-cyan-600'
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