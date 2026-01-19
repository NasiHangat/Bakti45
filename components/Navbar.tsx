'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Sembunyikan Navbar jika sedang di halaman Admin Studio
  if (pathname.startsWith("/studio")) {
    return null;
  }

  // Efek Glassmorphism saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // DAFTAR MENU
  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/profil' },
    { name: 'Program', href: '/#program' },
    { name: 'Berita', href: '/kegiatan' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO BRAND */}
        <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 group-hover:rotate-6 transition-transform">
                <Image 
                    src="/logo45.png" 
                    alt="Logo Yayasan Bakti 45" 
                    width={48} 
                    height={48}
                    className="object-contain drop-shadow-md"
                />
            </div>
            
            <div className={`flex flex-col justify-center ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                <span className="font-bold text-lg leading-none tracking-tight">Yayasan</span>
                <span className="text-sm font-medium opacity-95 leading-tight">Bakti 45 Sejahtera</span>
                {/* --- TEKS TAMBAHAN --- */}
                <span className="text-[10px] opacity-80 uppercase tracking-wide mt-0.5">
                  Rumah Cinta Yatim Piatu Duafa
                </span>
            </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium text-sm transition-colors relative group ${
                scrolled ? 'text-gray-600 hover:text-brand-blue' : 'text-blue-100 hover:text-white'
              } ${pathname === link.href ? 'font-bold' : ''}`}
            >
              {link.name}
              {/* Garis bawah animasi saat hover */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${scrolled ? 'bg-brand-blue' : 'bg-brand-yellow'}`}></span>
            </Link>
          ))}
          
          <Link
            href="#donasi"
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 transform hover:scale-105 ${
                scrolled 
                ? 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-lg shadow-blue-900/20' 
                : 'bg-brand-yellow text-brand-blue hover:bg-yellow-400 shadow-lg shadow-yellow-500/20'
            }`}
          >
            <Heart className="w-4 h-4 fill-current animate-pulse" />
            Donasi
          </Link>
        </div>

        {/* MOBILE MENU BUTTON (Hamburger) */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
             <X className={`w-8 h-8 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
             <Menu className={`w-8 h-8 ${scrolled ? 'text-brand-blue' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium text-lg border-b border-gray-50 pb-2 ${pathname === link.href ? 'text-brand-blue font-bold' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#donasi"
            className="bg-brand-blue text-white text-center py-4 rounded-xl font-bold mt-2 flex justify-center items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Heart className="w-5 h-5 fill-current" />
            Donasi Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
}