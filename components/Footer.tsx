import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowRight, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-blue text-white pt-20 pb-10 overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      {/* Pola Titik-titik Halus */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      {/* Efek Cahaya (Blur) di Pojok Kanan Atas */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          {/* KOLOM 1: IDENTITAS (Lebar 5 kolom) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
               <div className="relative w-16 h-16 bg-white rounded-2xl p-2 shadow-lg shadow-blue-900/50 flex items-center justify-center">
                  <Image 
                    src="/logo45.png" 
                    alt="Logo Yayasan" 
                    width={50} 
                    height={50}
                    className="object-contain"
                  />
               </div>
               <div>
                  <h3 className="font-bold text-2xl leading-none tracking-tight">Yayasan <br/>Bakti 45 Sejahtera</h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-medium tracking-wide border border-white/20 text-brand-yellow">
                    AHU-0017530.AH.01.06.
                  </span>
               </div>
            </div>
            <p className="text-blue-100 leading-relaxed text-sm md:text-base max-w-md">
              "Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain." <br/>
              Mari bersama kami menjadi jembatan kebaikan bagi anak-anak yatim dan dhuafa untuk meraih masa depan yang mandiri.
            </p>
            
            <div className="flex gap-3 pt-2">
               {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                 <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 </a>
               ))}
            </div>
          </div>

          {/* KOLOM 2: JELAJAHI (Lebar 3 kolom) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-yellow rounded-full"></span>
              Jelajahi
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Tentang Kami', href: '/profil' },
                { label: 'Program Unggulan', href: '/#program' },
                { label: 'Berita & Kabar', href: '/kegiatan' },
                { label: 'Jadi Relawan', href: 'https://wa.me/62881023512953?text=Saya%20mau%20jadi%20relawan' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-blue-100/80 hover:text-brand-yellow transition-colors flex items-center gap-2 group text-sm font-medium">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-yellow" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: NEWSLETTER & KONTAK (Lebar 4 kolom) */}
          <div className="md:col-span-4 space-y-8">
            
            {/* Widget Kontak */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-brand-yellow rounded-full"></span>
                Hubungi Kami
              </h4>
              <ul className="space-y-4 text-sm text-blue-100">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-yellow">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="opacity-90 leading-relaxed">Jl. Nagrak Kulon RT.03 RW.09, Sukajaya, Kecamatan Lembang, <br/>Kab.Bandung Barat, 40391</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-yellow">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="opacity-90 font-mono text-base">+62 881-0235-12953</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* GARIS PEMBATAS & COPYRIGHT */}
        <div className="border-t border-blue-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p className="text-center md:text-left">
            &copy; {currentYear} <strong>Yayasan Bakti 45 Sejahtera</strong>. Dilindungi Undang-undang.
          </p>
          <div className="flex gap-6">
             <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
             <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}