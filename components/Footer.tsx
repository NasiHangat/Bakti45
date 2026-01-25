import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, ArrowRight } from 'lucide-react';

// Komponen Ikon TikTok Custom (karena Lucide default belum ada ikon TikTok spesifik)
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Gradient Biru Utama (Cyan - Blue)
    <footer className="relative bg-gradient-to-br from-cyan-600 to-blue-700 text-white pt-20 pb-10 overflow-hidden">

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* KOLOM 1: IDENTITAS */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 bg-white rounded-2xl p-2 shadow-lg shadow-blue-900/20 flex items-center justify-center shrink-0">
                <Image
                  src="/logo45.png"
                  alt="Logo Yayasan"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl leading-none tracking-tight">Yayasan <br />Bakti 45 Sejahtera</h3>
                <span className="block text-xs font-medium text-cyan-100 mt-1 uppercase tracking-wide opacity-90">
                  Rumah Cinta Yatim Piatu Duafa
                </span>
                <span className="inline-block mt-3 px-3 py-1 bg-white/10 rounded-full text-[10px] font-medium tracking-wide border border-white/20 text-yellow-300">
                  AHU-0008346.AH.01.04.
                </span>
              </div>
            </div>
            <p className="text-blue-50 leading-relaxed text-sm md:text-base max-w-md">
              "Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain." <br />
              Mari bersama kami menjadi jembatan kebaikan bagi anak-anak yatim dan dhuafa untuk meraih masa depan yang mandiri.
            </p>

            <div className="flex gap-3 pt-2">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/baktiempatlimabdg' },
                { Icon: Instagram, href: 'https://www.instagram.com/bakti45bdg' },
                { Icon: TiktokIcon, href: 'https://www.tiktok.com/@baktiempatlimabdg' }, // UPDATED: TikTok
              ].map(({ Icon, href }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: JELAJAHI */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
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
                  <Link href={item.href} className="text-blue-100 hover:text-yellow-300 transition-colors flex items-center gap-2 group text-sm font-medium">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-yellow-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: KONTAK */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
                Hubungi Kami
              </h4>
              <ul className="space-y-4 text-sm text-blue-50">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-yellow-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="opacity-90 leading-relaxed">Jl. Nagrak Kulon RT.03 RW.09, Sukajaya, Kecamatan Lembang, <br />Kab.Bandung Barat, 40391</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-yellow-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="opacity-90 font-mono text-base">+62 881-0235-12953 <br /> +62 896-5224-4458 <br />+62 878-8581-5328</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100">
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