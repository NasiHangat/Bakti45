import Image from "next/image";
import Link from "next/link";
import { Heart, Users, BookOpen, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- SECTION 1: HERO (Kesan Pertama) --- 
          Desain: Foto besar di kanan, Teks ajakan di kiri. 
          Menggunakan warna brand-blue.
      */}
      <section className="relative bg-brand-blue text-white overflow-hidden">
        {/* Background Pattern (Opsional agar tidak terlalu polos) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Teks Hero */}
            <div className="md:w-1/2 space-y-6">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-yellow font-semibold text-sm mb-2 border border-brand-yellow/30">
                Resmi & Terpercaya (SK Kemenkumham)
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Menebar Kasih, <br />
                <span className="text-brand-yellow">Merajut Masa Depan</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
                Selamat datang di Yayasan Bakti 45. Rumah bagi anak-anak asuh untuk tumbuh, belajar, dan meraih cita-cita mulia.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/donasi" 
                  className="bg-brand-yellow text-brand-blue font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  Salurkan Donasi
                </Link>
                <Link 
                  href="/profil" 
                  className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>

            {/* Gambar Hero */}
            <div className="md:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                {/* Placeholder Image: Ganti dengan foto anak-anak panti yang sedang tersenyum */}
                <Image 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                  alt="Anak-anak Panti Bahagia"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-brand-blue p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                   <Users className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Total Anak Asuh</p>
                  <p className="text-2xl font-bold">45+ Anak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PROGRAM KAMI (Grid Layout) --- 
          Desain: Card putih dengan shadow halus, icon di tengah.
      */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Program Unggulan</h2>
            <p className="text-gray-600">
              Kami tidak hanya sekadar menampung, tapi membekali mereka dengan pendidikan dan akhlak untuk masa depan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <BookOpen className="w-7 h-7 text-brand-blue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pendidikan Formal</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Memastikan setiap anak mendapatkan hak sekolah yang layak hingga jenjang SMA/SMK.
              </p>
            </div>

             {/* Card 2 */}
             <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors">
                <Heart className="w-7 h-7 text-brand-yellow group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tahfidz Quran</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Program hafalan Quran harian untuk membentuk karakter anak yang sholeh dan sholehah.
              </p>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                <Users className="w-7 h-7 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Kewirausahaan</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pelatihan skill (menjahit, komputer, pertanian) agar mandiri saat lulus nanti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: KEGIATAN TERBARU (Preview CMS) --- 
          Nanti section ini akan diganti dengan data dari Sanity
      */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-2">Kabar Panti</h2>
              <p className="text-gray-600">Dokumentasi kegiatan anak-anak sehari-hari.</p>
            </div>
            <Link href="/kegiatan" className="hidden md:flex items-center gap-2 text-brand-blue font-semibold hover:text-blue-800">
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid Berita (Static Mockup) */}
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                   <div className="absolute inset-0 bg-gray-200 animate-pulse"></div> {/* Placeholder loading */}
                   {/* Nanti Image dari Sanity ditaruh sini */}
                </div>
                <span className="text-xs font-semibold text-brand-yellow uppercase tracking-wider">12 Jan 2026</span>
                <h4 className="text-lg font-bold text-gray-800 group-hover:text-brand-blue transition-colors mt-1">
                  Kegiatan Belajar Bersama Mahasiswa KKN
                </h4>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link href="/kegiatan" className="inline-block py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold">
                Lihat Semua Kegiatan
             </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: LOKASI & KONTAK (Sticky Maps solution) --- */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">Mari Berkunjung</h2>
                    <p className="text-blue-100 mb-8 leading-relaxed">
                        Pintu kami selalu terbuka untuk Anda yang ingin bersilaturahmi atau melihat langsung kegiatan anak-anak.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
                            <div>
                                <h5 className="font-bold text-lg">Alamat Panti</h5>
                                <p className="text-blue-100">Jl. Contoh No. 45, Kecamatan Sukasari, Kota Bandung, Jawa Barat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                         <Link href="https://wa.me/628123456789" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
                             Hubungi via WhatsApp
                         </Link>
                    </div>
                </div>
                {/* Embed Map Manual (Solusi Titik Ngaco) */}
                <div className="md:w-1/2 w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.686522339832!2d107.616!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJTIDEwN8KwMzcnMDAuMCJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}