'use client';

import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Heart, BookOpen, Users, GraduationCap, Star } from "lucide-react";

export default function KegiatanPage() {

  // DATA DUMMY: Kegiatan Rutin (Sesuai Request)
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

  // DATA DUMMY: Berita / Artikel (Bisa diganti CMS nanti)
  const newsItems = [
    {
      id: 1,
      title: "Keseruan Lomba 17 Agustus Bersama Kakak KKN UPI",
      date: "17 Agustus 2025",
      author: "Admin Yayasan",
      category: "Kegiatan",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
      excerpt: "Semangat kemerdekaan terasa meriah dengan berbagai lomba tradisional yang diadakan bersama mahasiswa KKN."
    },
    {
      id: 2,
      title: "Pemeriksaan Kesehatan Gratis & Penyuluhan Gizi",
      date: "10 Agustus 2025",
      author: "Tim Medis",
      category: "Kesehatan",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
      excerpt: "Kerjasama dengan Fakultas Kedokteran UNPAD dalam memantau kesehatan dan tumbuh kembang anak asuh."
    },
    {
      id: 3,
      title: "Wisata Edukasi: Mengenal Alam di Lembang",
      date: "25 Juli 2025",
      author: "Admin Yayasan",
      category: "Rekreasi",
      image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=600&auto=format&fit=crop",
      excerpt: "Mengisi waktu liburan sekolah dengan kegiatan tadabur alam yang menyenangkan dan mendidik."
    },
    {
      id: 4,
      title: "Santunan Bulanan & Doa Bersama Donatur",
      date: "01 Juli 2025",
      author: "Pengurus",
      category: "Sosial",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop",
      excerpt: "Rutin mendoakan para donatur agar senantiasa diberikan keberkahan rezeki dan kesehatan."
    },
    {
      id: 5,
      title: "Pelatihan Komputer Dasar untuk Remaja Panti",
      date: "15 Juni 2025",
      author: "Relawan IT",
      category: "Edukasi",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
      excerpt: "Membekali anak asuh jenjang SMP & SMA dengan kemampuan digital agar siap menghadapi masa depan."
    },
    {
      id: 6,
      title: "Panen Sayuran Hidroponik Hasil Kebun Sendiri",
      date: "05 Juni 2025",
      author: "Divisi Usaha",
      category: "Kewirausahaan",
      image: "https://images.unsplash.com/photo-1622383563227-0440114a8520?q=80&w=600&auto=format&fit=crop",
      excerpt: "Mengajarkan kemandirian pangan dan kewirausahaan melalui bercocok tanam metode hidroponik."
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-brand-yellow selection:text-brand-blue">
      
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
               {newsItems.map((news) => (
                  <article key={news.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                     {/* Gambar Berita */}
                     <div className="relative h-56 w-full overflow-hidden">
                        <Image 
                           src={news.image} 
                           alt={news.title}
                           fill
                           className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                           <span className="bg-white/90 backdrop-blur-sm text-brand-blue text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                              {news.category}
                           </span>
                        </div>
                     </div>

                     {/* Konten Berita */}
                     <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                           <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{news.date}</span>
                           </div>
                           <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{news.author}</span>
                           </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                           <Link href={`/kegiatan/${news.id}`}>
                              {news.title}
                           </Link>
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                           {news.excerpt}
                        </p>

                        <div className="pt-4 border-t border-gray-50 mt-auto">
                           <Link 
                              href="#" 
                              className="text-brand-blue font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                              onClick={(e) => {e.preventDefault(); alert("Fitur Detail Berita akan segera hadir dengan CMS!")}}
                           >
                              Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                           </Link>
                        </div>
                     </div>
                  </article>
               ))}
            </div>

            {/* Pagination Dummy */}
            <div className="mt-12 flex justify-center gap-2">
               <button className="w-10 h-10 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center">1</button>
               <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-bold border border-gray-200 hover:bg-gray-50 flex items-center justify-center">2</button>
               <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-bold border border-gray-200 hover:bg-gray-50 flex items-center justify-center">3</button>
            </div>
         </div>
      </section>

    </main>
  );
}