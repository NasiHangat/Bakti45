'use client';

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, ArrowUpRight, Copy } from "lucide-react";

export default function KontakPage() {
  
  // Data Nomor Telepon
  const contacts = [
    { label: "Admin 1", number: "0881-0235-12953", link: "62881023512953" },
    { label: "Admin 2", number: "0896-5224-4458", link: "6289652244458" },
    { label: "Admin 3", number: "0878-8581-5328", link: "6287885815328" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-brand-yellow selection:text-blue-600">
      
      {/* =========================================
          1. HEADER SECTION (Updated Gradient)
      ========================================= */}
      <section className="relative pt-44 pb-24 bg-gradient-to-br from-cyan-500 via-blue-400 to-sky-500 text-white overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute -left-20 top-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/40 text-yellow-300 font-bold text-xs uppercase tracking-wider mb-4 backdrop-blur-md shadow-sm">
              Layanan Informasi
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-md">Hubungi Kami</h1>
            <p className="text-blue-50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-sm">
              Pintu kami selalu terbuka. Jangan ragu untuk menyapa, bertanya seputar program, atau sekadar bersilaturahmi.
            </p>
        </div>
      </section>

      {/* =========================================
          2. KONTEN UTAMA
      ========================================= */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-cyan-900/10 border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
            
              {/* --- KOLOM KIRI: INFO KONTAK --- */}
              <div className="p-8 md:p-14 space-y-10">
                 <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Informasi Kontak</h2>
                    <p className="text-gray-500">
                       Silakan kunjungi sekretariat kami atau hubungi melalui saluran resmi di bawah ini.
                    </p>
                 </div>

                 <div className="space-y-6">
                    {/* Card: Alamat */}
                    <div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-cyan-50/50 transition-colors border border-transparent hover:border-cyan-100">
                       <div className="bg-cyan-50 text-cyan-600 p-3.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                          <MapPin className="w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="font-bold text-gray-900 mb-1 text-lg">Alamat Sekretariat</h3>
                          <p className="text-gray-600 leading-relaxed">
                             Jl. Nagrak Kulon RT.03 RW.09, Desa Sukajaya,<br/>
                             Kecamatan Lembang, Kab. Bandung Barat, 40391
                          </p>
                       </div>
                    </div>

                    {/* Card: Telepon/WA (Highlight) */}
                    <div className="flex items-start gap-5 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                       <div className="bg-green-100 text-green-600 p-3.5 rounded-xl shrink-0">
                          <Phone className="w-6 h-6" />
                       </div>
                       <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-4 text-lg">Telepon & WhatsApp</h3>
                          <div className="space-y-3">
                             {contacts.map((item, idx) => (
                               <Link 
                                 key={idx}
                                 href={`https://wa.me/${item.link}?text=Assalamualaikum,%20saya%20ingin%20bertanya`}
                                 target="_blank"
                                 className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                               >
                                  <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider group-hover:text-green-600">{item.label}</span>
                                    <span className="text-sm font-bold text-gray-800 font-mono tracking-wide">{item.number}</span>
                                  </div>
                                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <MessageCircle className="w-4 h-4" />
                                  </div>
                               </Link>
                             ))}
                          </div>
                       </div>
                    </div>

                    {/* Card: Email & Jam (Grid Kecil) */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="group flex items-start gap-4 p-2 rounded-xl">
                           <div className="bg-orange-100 text-orange-600 p-3 rounded-xl shrink-0 group-hover:rotate-12 transition-transform">
                              <Mail className="w-5 h-5" />
                           </div>
                           <div>
                              <h3 className="font-bold text-gray-900 text-sm mb-0.5">Email Resmi</h3>
                              <p className="text-gray-600 text-sm">info@bakti45.org</p>
                           </div>
                        </div>

                        <div className="group flex items-start gap-4 p-2 rounded-xl">
                           <div className="bg-purple-100 text-purple-600 p-3 rounded-xl shrink-0 group-hover:rotate-12 transition-transform">
                              <Clock className="w-5 h-5" />
                           </div>
                           <div>
                              <h3 className="font-bold text-gray-900 text-sm mb-0.5">Jam Operasional</h3>
                              <p className="text-gray-600 text-sm">08.00 - 17.00 WIB</p>
                           </div>
                        </div>
                    </div>
                 </div>

                 {/* Social Media Link */}
                 <div className="pt-8 border-t border-gray-100">
                    <Link 
                      href="https://www.instagram.com/bakti45bdg" 
                      className="inline-flex items-center gap-3 text-gray-500 hover:text-cyan-600 font-semibold transition-colors group"
                    >
                       <span className="bg-gradient-to-tr from-yellow-400 to-orange-500 text-white p-2 rounded-lg group-hover:scale-110 transition-transform shadow-sm">
                          <Instagram className="w-5 h-5" />
                       </span>
                       Ikuti keseharian kami di Instagram
                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                 </div>
              </div>

              {/* --- KOLOM KANAN: MAP (Full Height) --- */}
              <div className="relative min-h-[400px] lg:min-h-full h-full bg-gray-200 lg:rounded-r-[2.5rem] lg:rounded-bl-none overflow-hidden border-l border-gray-100">
                 {/* Overlay Gradient untuk transisi halus */}
                 <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/5 to-transparent z-10 pointer-events-none"></div>
                 
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575841452395!2d107.633987!3d-6.821367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDknMTYuOSJTIDEwN8KwMzgnMDIuNCJF!5e0!3m2!1sen!2sid!4v1631234567890"
                   width="100%" 
                   height="100%" 
                   style={{ border: 0, position: 'absolute', top: 0, left: 0, filter: 'grayscale(0.1)' }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="w-full h-full"
                 ></iframe>
                 
                 {/* Floating Badge di atas Peta (Updated Colors) */}
                 <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 z-20 flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Lokasi Kami</p>
                        <p className="text-sm font-bold text-gray-800">Kecamatan Lembang, Bandung Barat</p>
                    </div>
                    <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-white animate-pulse shadow-md">
                        <MapPin className="w-5 h-5" />
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}