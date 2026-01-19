'use client';

import Image from "next/image";
import Link from "next/link";
import { Heart, Users, BookOpen, ArrowRight, CheckCircle, Copy, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-brand-yellow selection:text-brand-blue">
      
      {/* =========================================
          1. HERO SECTION 
          (Sitemap: Foto anak-anak + Headline)
      ========================================= */}
      <section className="relative bg-gradient-to-br from-brand-blue via-blue-900 to-brand-blue text-white overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Teks Hero */}
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-yellow font-medium text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Terdaftar Resmi Kemenkumham</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Menebar Kasih, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">
                  Merajut Masa Depan
                </span>
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed max-w-lg mx-auto md:mx-0">
                Setiap anak berhak memiliki mimpi. Di sini, kami mendampingi mereka mewujudkan cita-cita mulia.
              </p>
              
              {/* Tombol Awal (Opsional, arahkan ke bawah) */}
              <div className="pt-4 flex justify-center md:justify-start">
                 <Link href="#donasi" className="bg-brand-yellow text-brand-blue font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-yellow-500/50 hover:-translate-y-1 transition-all">
                    Mulai Berdonasi
                 </Link>
              </div>
            </div>

            {/* Foto Hero */}
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 rotate-3 hover:rotate-0 transition-all duration-500">
                <Image 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                  alt="Keceriaan Anak Panti"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* =========================================
          2. SEKILAS PROFIL 
          (Sitemap: Visi Singkat)
      ========================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
             {/* Ilustrasi/Foto Profil */}
             <div className="md:w-1/2 relative">
                <div className="absolute top-0 -left-4 w-24 h-24 bg-brand-yellow/20 rounded-full blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video bg-gray-100">
                   {/* Placeholder Image Profil */}
                   <Image 
                     src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop"
                     alt="Kebersamaan Panti"
                     width={600}
                     height={400}
                     className="object-cover w-full h-full"
                   />
                </div>
             </div>

             {/* Teks Visi Singkat */}
             <div className="md:w-1/2 space-y-6">
                <span className="text-brand-blue font-bold tracking-wider text-sm uppercase">Siapa Kami?</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                   Menjadi Rumah Harapan bagi Generasi Penerus
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                   Yayasan Bakti 45 didirikan dengan visi sederhana namun kuat: 
                   <strong> "Memastikan tidak ada anak yang kehilangan hak untuk bermimpi karena keterbatasan ekonomi."</strong>
                </p>
                
                <div className="space-y-4 pt-2">
                   <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-brand-yellow shrink-0" />
                      <p className="text-gray-700">Membekali anak dengan pendidikan formal & agama.</p>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-brand-yellow shrink-0" />
                      <p className="text-gray-700">Menciptakan lingkungan tumbuh kembang yang aman & penuh kasih.</p>
                   </div>
                </div>

                <div className="pt-4">
                   <Link href="/profil" className="text-brand-blue font-bold hover:text-brand-yellow transition-colors inline-flex items-center gap-2">
                      Baca Sejarah Lengkap <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. PROGRAM UNGGULAN 
          (Sitemap: Card Singkat)
      ========================================= */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Unggulan</h2>
             <p className="text-gray-600">Upaya kami dalam membentuk karakter mandiri dan berakhlak.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
                 <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-brand-blue">
                    <BookOpen className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-800 mb-2">Pendidikan Formal</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">
                    Beasiswa sekolah penuh hingga jenjang SMA/SMK demi masa depan cerah.
                 </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
                 <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 text-brand-yellow">
                    <Heart className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-800 mb-2">Binaan Akhlak</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">
                    Rutinitas ibadah dan hafalan Quran untuk pondasi karakter yang kuat.
                 </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
                 <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                    <Users className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-800 mb-2">Kemandirian</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">
                    Pelatihan Life-skill (Komputer, Menjahit) sebagai bekal wirausaha.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* =========================================
          4. CTA DONASI 
          (Sitemap: Rekening)
      ========================================= */}
      <section id="donasi" className="py-24 bg-brand-blue relative overflow-hidden text-white">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-[2.5rem] border border-white/20 p-8 md:p-12 overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                 
                 {/* Teks Ajakan */}
                 <div className="md:w-1/2 text-center md:text-left">
                    <span className="text-brand-yellow font-bold tracking-wider text-sm uppercase mb-2 block">Mari Berbagi</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Uluran Tangan Anda, Senyuman Mereka.</h2>
                    <p className="text-blue-100 mb-8 leading-relaxed">
                       Setiap rupiah yang Anda donasikan akan disalurkan langsung untuk kebutuhan makan, pendidikan, dan kesehatan 45+ anak asuh kami.
                    </p>
                    <Link href="https://wa.me/628123456789?text=Assalamualaikum,%20saya%20mau%20konfirmasi%20donasi" className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all">
                       Konfirmasi Donasi via WA
                    </Link>
                 </div>

                 {/* Kartu Rekening (Highlight Utama) */}
                 <div className="md:w-1/2 w-full">
                    <div className="bg-white rounded-2xl p-6 shadow-xl text-gray-800 relative group">
                       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-yellow to-brand-blue rounded-t-2xl"></div>
                       
                       <div className="flex justify-between items-start mb-6">
                          <div>
                             <p className="text-sm text-gray-500 font-semibold uppercase">Bank Transfer</p>
                             <h4 className="text-2xl font-bold text-brand-blue mt-1">Bank Syariah Indonesia</h4>
                          </div>
                          {/* Logo Bank Placeholder */}
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 text-xs">BSI</div>
                       </div>

                       <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4 flex justify-between items-center">
                          <div>
                             <p className="text-xs text-gray-400 mb-1">Nomor Rekening</p>
                             <p className="text-xl md:text-2xl font-mono font-bold tracking-wider text-gray-800">7123 456 7890</p>
                          </div>
                          <button 
                            className="p-2 hover:bg-white rounded-lg transition-colors text-brand-blue"
                            title="Salin Nomor"
                            onClick={() => { navigator.clipboard.writeText('71234567890'); alert('Nomor Rekening Disalin!'); }}
                          >
                             <Copy className="w-5 h-5" />
                          </button>
                       </div>

                       <p className="text-sm text-center text-gray-500">
                          a.n. <strong>Yayasan Bakti 45 Peduli</strong>
                       </p>
                    </div>
                 </div>

              </div>
           </div>
        </div>
      </section>

    </main>
  );
}