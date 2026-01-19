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

  if (pathname.startsWith("/studio")) {
    return null;
  }

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
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20 py-3'
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
            
            <div className={`flex flex-col justify-center transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                <span className="font-bold text-lg leading-none tracking-tight drop-shadow-sm">Yayasan</span>
                <span className="text-sm font-medium opacity-95 leading-tight drop-shadow-sm">Bakti 45 Sejahtera</span>
                <span className="text-[10px] opacity-80 uppercase tracking-wide mt-0.5 drop-shadow-sm">
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
              className={`font-medium text-sm transition-all relative group ${
                scrolled 
                  ? 'text-gray-700 hover:text-cyan-600 drop-shadow-sm' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              } ${pathname === link.href ? 'font-bold' : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                scrolled ? 'bg-cyan-500' : 'bg-yellow-400'
              }`}></span>
            </Link>
          ))}
          
          <Link
            href="#donasi"
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 transform hover:scale-105 shadow-lg ${
                scrolled 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-cyan-500/30' 
                : 'bg-yellow-400 text-blue-900 hover:bg-yellow-300 shadow-yellow-400/40'
            }`}
          >
            <Heart className="w-4 h-4 fill-current" />
            Donasi
          </Link>
        </div>

        {/* Mobile ver */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
             <X className={`w-8 h-8 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
             <Menu className={`w-8 h-8 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobl dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-b border-white/20 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium text-lg border-b border-gray-100 pb-3 transition-colors ${
                pathname === link.href 
                  ? 'text-cyan-600 font-bold' 
                  : 'text-gray-700 hover:text-cyan-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#donasi"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-4 rounded-xl font-bold mt-2 flex justify-center items-center gap-2 shadow-lg shadow-cyan-500/30 hover:from-cyan-600 hover:to-blue-600 transition-all"
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