'use client';

import Image from "next/image";
import Link from "next/link";
import { Heart, Users, BookOpen, ArrowRight, CheckCircle, Copy, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-brand-yellow selection:text-brand-blue">
      
      {/* =========================================
          1. HERO SECTION 
      ========================================= */}
      <section className="relative bg-gradient-to-br from-brand-blue via-blue-900 to-brand-blue text-white overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
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
                Wujudkan kepedulian nyata untuk membantu mereka yang membutuhkan akses pendidikan dan kehidupan layak.
              </p>
              
              <div className="pt-4 flex justify-center md:justify-start">
                 <Link href="#donasi" className="bg-brand-yellow text-brand-blue font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-yellow-500/50 hover:-translate-y-1 transition-all">
                    Mulai Berdonasi
                 </Link>
              </div>
            </div>

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
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* =========================================
          2. SEKILAS PROFIL (VISI & MISI UPDATED) 
      ========================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-16">
             {/* Foto Profil */}
             <div className="md:w-1/2 relative sticky top-24">
                <div className="absolute top-0 -left-4 w-24 h-24 bg-brand-yellow/20 rounded-full blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100 border border-gray-100">
                   <Image 
                     src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop"
                     alt="Kebersamaan Panti"
                     fill
                     className="object-cover"
                   />
                </div>
                {/* Quote Badge */}
                <div className="absolute -bottom-6 right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                    <p className="text-gray-600 italic text-sm">
                        "Membangun generasi muda yang peduli, mandiri, kreatif, dan inovatif."
                    </p>
                </div>
             </div>

             {/* Teks Visi Misi */}
             <div className="md:w-1/2 space-y-8">
                <div>
                    <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-2 block">Visi Yayasan</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Mewujudkan Kesejahteraan & Generasi Mandiri
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mt-4 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                    "Menjadi lembaga sosial terpercaya, ikut andil dalam mensejahterakan masyarakat kurang mampu yang terbatas mendapat akses pendidikan dan kehidupan layak juga berkontribusi dalam membangun generasi muda yang peduli, mandiri, kreatif, dan inovatif."
                    </p>
                </div>
                
                <div>
                    <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-4 block">Misi Kami</span>
                    <div className="space-y-4">
                        {[
                            "Menyelenggarakan kegiatan sosial kreatif berbasis generasi muda sebagai pusat kegiatan.",
                            "Membangun kerjasama antar lembaga/kelompok lain yang memiliki tujuan yang sama.",
                            "Mendidik generasi muda melalui kegiatan pendidikan dan pelatihan yang berkualitas.",
                            "Mewujudkan generasi muda yang peduli, mandiri, kreatif dan inovatif melalui pemberdayaan masyarakat."
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                                <div className="bg-brand-yellow/10 p-2 rounded-full shrink-0 mt-0.5">
                                    <CheckCircle className="w-5 h-5 text-brand-yellow" />
                                </div>
                                <p className="text-gray-700 leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                   <Link href="/profil" className="text-brand-blue font-bold hover:text-brand-yellow transition-colors inline-flex items-center gap-2 group">
                      Lihat Sejarah Lengkap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. PROGRAM YAYASAN (FOTO VERSION)
      ========================================= */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Yayasan</h2>
             <p className="text-gray-600">Aktivitas utama kami dalam memberdayakan umat dan membina anak asuh.</p>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
              
              {/* 1. Anak Asuh */}
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100 flex flex-col h-full">
                 <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1529390003868-6c01d73923f0?q=80&w=1000&auto=format&fit=crop"
                      alt="Program Anak Asuh"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-6">
                       <span className="bg-brand-yellow text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Unggulan</span>
                    </div>
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">Program Anak Asuh</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                        Mengangkat anak yatim piatu dan dhuafa. Anak asuh dibina untuk memiliki komitmen menjadi relawan yayasan selama menjadi anak asuh, serta didukung kebutuhan tempat tinggal dan pendidikannya.
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                        <span className="text-brand-blue font-semibold text-sm flex items-center gap-2">
                            Selengkapnya <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                 </div>
              </div>

              {/* 2. Bakti Sosial */}
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100 flex flex-col h-full">
                 <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop"
                      alt="Bakti Sosial"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">Bakti Sosial</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                        Santunan rutin setiap bulan Ramadhan dan momen tahunan khusus bagi fakir miskin, yatim piatu, lansia, dan penyandang disabilitas di wilayah sekitar yayasan.
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                        <span className="text-brand-blue font-semibold text-sm flex items-center gap-2">
                            Selengkapnya <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                 </div>
              </div>

              {/* 3. Bimbel Gratis */}
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100 flex flex-col h-full">
                 <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
                      alt="Bimbel Gratis"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">Bimbel Gratis (LKP 45 Plus)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                        Bimbingan belajar gratis Matematika, Bahasa Inggris, dan PAI. Dilaksanakan Minggu di Masjid Al-Musyawarah, serta Selasa & Kamis di Panti Asuhan Wisma Putera.
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                        <span className="text-brand-blue font-semibold text-sm flex items-center gap-2">
                            Selengkapnya <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                 </div>
              </div>

              {/* 4. Kegiatan Lain */}
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100 flex flex-col h-full">
                 <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
                      alt="Kegiatan Lain"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">Kemitraan & Kegiatan Lain</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                        Menerima mahasiswa KKN dari berbagai universitas, santunan lansia, serta aktif mengikuti pelatihan dan rapat kemitraan baik dengan instansi pemerintah maupun swasta.
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                        <span className="text-brand-blue font-semibold text-sm flex items-center gap-2">
                            Selengkapnya <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* =========================================
          4. CTA DONASI 
      ========================================= */}
      <section id="donasi" className="py-24 bg-brand-blue relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-[2.5rem] border border-white/20 p-8 md:p-12 overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                 
                 <div className="md:w-1/2 text-center md:text-left">
                    <span className="text-brand-yellow font-bold tracking-wider text-sm uppercase mb-2 block">Mari Berbagi</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Uluran Tangan Anda, Senyuman Mereka.</h2>
                    <p className="text-blue-100 mb-8 leading-relaxed">
                       Donasi Anda mendukung penuh program anak asuh, bimbel gratis, dan bakti sosial yang kami jalankan.
                    </p>
                    <Link href="https://wa.me/628123456789?text=Assalamualaikum,%20saya%20mau%20konfirmasi%20donasi" className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all">
                       Konfirmasi Donasi via WA
                    </Link>
                 </div>

                 <div className="md:w-1/2 w-full">
                    <div className="bg-white rounded-2xl p-6 shadow-xl text-gray-800 relative group">
                       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-yellow to-brand-blue rounded-t-2xl"></div>
                       
                       <div className="flex justify-between items-start mb-6">
                          <div>
                             <p className="text-sm text-gray-500 font-semibold uppercase">Bank Transfer</p>
                             <h4 className="text-2xl font-bold text-brand-blue mt-1">Bank Syariah Indonesia</h4>
                          </div>
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