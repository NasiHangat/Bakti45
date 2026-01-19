'use client';

import Image from "next/image";
import Link from "next/link";
import { Award, FileText, Users, Heart, CheckCircle, ShieldCheck, CreditCard, FileCheck } from "lucide-react";

export default function ProfilPage() {
  
  // Data Pengurus (Dummy)
  const teamMembers = [
    {
      name: "H. Ahmad Fauzi",
      role: "Ketua Yayasan",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Siti Aminah, S.Pd",
      role: "Sekretaris",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Rudi Hermawan, S.E",
      role: "Bendahara",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Drs. Budi Santoso",
      role: "Pengawas",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
  ];

  const legalDocs = [
    { label: "NPWP Yayasan", value: "92.135.725.7-421.000" }, //
    { label: "SK Kemenkumham RI", value: "AHU-0017530.AH.01.06. Tahun 2024" }, //
    { label: "Akta Pendirian", value: "No. 1 Tanggal 10 Juni 2019" }, //
    { label: "SKT Dinsos Provinsi", value: "062/194/PPSKS/2022" }, //
    { label: "Izin Operasional DPMPTSP", value: "062/3/TDLKS/DPMPTSP/IV/2022" }, //
    { label: "Akreditasi Kemensos RI", value: "0790.SA.LKS.B/2024" }, //
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* =========================================
          1. HEADER SECTION
      ========================================= */}
      <section className="relative pt-40 pb-20 bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Mengenal lebih dekat Yayasan Bakti 45 Sejahtera. Sejarah pengabdian, legalitas resmi, dan orang-orang tulus di baliknya.
            </p>
        </div>
      </section>

      {/* =========================================
          2. SEJARAH & LATAR BELAKANG
      ========================================= */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Foto Ilustrasi */}
            <div className="md:w-1/2">
               <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-gray-100 rotate-2 hover:rotate-0 transition-all duration-500">
                  <Image 
                    src="/bakti_sosial.jpg"
                    alt="Sejarah Yayasan"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-blue/10"></div>
               </div>
            </div>

            {/* Teks Sejarah */}
            <div className="md:w-1/2 space-y-6">
               <div className="inline-flex items-center gap-2 text-brand-blue font-bold tracking-wider text-sm uppercase">
                  <span className="w-8 h-1 bg-brand-yellow rounded-full"></span>
                  Sejarah Kami
               </div>
               <h2 className="text-3xl font-bold text-gray-900">Dari "45 Plus" Menjadi Yayasan Bakti 45 Sejahtera</h2>
               <div className="text-gray-600 space-y-4 leading-relaxed text-justify text-sm md:text-base">
                 <p>
                   Cikal bakal yayasan ini bermula dari komunitas <strong>Empat Lima Plus (45 Plus)</strong> yang diprakarsai oleh Fatahilah Imansyah (Mahasiswa Pascasarjana UNPAD) dan rekannya Salim. Awalnya, kegiatan berupa bimbingan belajar gratis Bahasa Mandarin, Matematika, dan Bahasa Inggris di sebuah rumah kost di Hegarmanah dengan peserta awal hanya 8 orang.
                 </p>
                 <p>
                   Seiring berjalannya waktu dan dukungan warga, peserta didik bertambah pesat hingga mencapai 130 orang. Lokasi kegiatan pun berpindah-pindah demi menampung semangat belajar, mulai dari Masjid Ar-Ridho, Aula Kelurahan Hegarmanah, Panti Wisma Putra, SDN Ciumbuleuit 1, SDN Bandung Baru 2, hingga akhirnya berpusat di Masjid Al-Musyawarah.
                 </p>
                 <p>
                   Demi kebermanfaatan yang lebih luas dan legalitas resmi, pada tanggal 10 Juni 2019, komunitas ini resmi berbadan hukum dengan nama baru <strong>Yayasan Bakti 45 Sejahtera</strong>. Legalitas ini dikukuhkan melalui Akta Notaris No. 1 dan SK Kemenkumham, menandai babak baru pengabdian kami untuk umat.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

        {/* =========================================
           3. LEGALITAS LENGKAP 
        ========================================= */}
        <section id="legalitas" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Legalitas & Akreditasi Resmi</h2>
             <p className="text-gray-600">Yayasan Bakti 45 Sejahtera beroperasi secara transparan, akuntabel, dan dilindungi hukum.</p>
           </div>

           {/* Grid Kartu Utama */}
           <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {/* Card Kemenkumham */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex items-start gap-4">
                 <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                    <ShieldCheck className="w-8 h-8 text-brand-blue" />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900">Badan Hukum Resmi</h3>
                    <p className="text-xs text-gray-500 mb-2">Kementerian Hukum & HAM RI</p>
                    <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1.5 rounded-md font-mono">
                      AHU-0017530.AH.01.06.
                    </span>
                 </div>
              </div>

              {/* Card Akreditasi */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-yellow-100 flex items-start gap-4">
                 <div className="bg-yellow-50 p-3 rounded-xl shrink-0">
                    <Award className="w-8 h-8 text-yellow-600" />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900">Terakreditasi B</h3>
                    <p className="text-xs text-gray-500 mb-2">Kementerian Sosial RI</p>
                    <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1 w-fit">
                      <CheckCircle className="w-3 h-3" /> Standar Pelayanan Terjamin
                    </span>
                 </div>
              </div>
           </div>

           {/* Tabel Detail Legalitas & Rekening */}
           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* List Detail Dokumen */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                 <h4 className="font-bold text-lg mb-6 flex items-center gap-2 border-b pb-4">
                    <FileCheck className="w-5 h-5 text-gray-400" />
                    Dokumen Perizinan
                 </h4>
                 <ul className="space-y-4">
                    {legalDocs.map((doc, idx) => (
                       <li key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center text-sm gap-1 sm:gap-4">
                          <span className="text-gray-500 shrink-0 sm:w-1/3">{doc.label}</span>
                          <span className="text-gray-800 font-medium sm:text-right break-words sm:w-2/3">{doc.value}</span>
                       </li>
                    ))}
                 </ul>
              </div>

              {/* List Rekening Resmi (Hanya BNI) */}
              <div className="bg-brand-blue text-white rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 
                 <h4 className="font-bold text-lg mb-6 flex items-center gap-2 border-b border-white/20 pb-4 relative z-10">
                    <CreditCard className="w-5 h-5 text-brand-yellow" />
                    Rekening Donasi
                 </h4>
                 <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">
                    Salurkan bantuan terbaik Anda melalui rekening resmi yayasan. Hati-hati terhadap penipuan yang mengatasnamakan lembaga.
                 </p>

                 <div className="space-y-4 relative z-10">
                    {/* BNI - Satu-satunya Rekening */}
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/20 transition-colors">
                       <div>
                          <p className="text-xs text-brand-yellow font-bold uppercase mb-1">Bank BNI</p>
                          <p className="font-mono text-2xl font-bold tracking-wider">0840 4020 01</p>
                          <p className="text-[11px] text-blue-200 mt-1 uppercase tracking-wide">an. Yayasan Bakti 45 Sejahtera</p>
                       </div>
                       <div className="h-10 w-14 bg-white rounded-lg flex items-center justify-center text-brand-blue font-bold text-sm shadow-md">BNI</div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* =========================================
          4. PROFIL PENGURUS
      ========================================= */}
      <section className="py-20">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-2 block">Tim Kami</span>
               <h2 className="text-3xl font-bold text-gray-900">Struktur Pengurus</h2>
            </div>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
               {teamMembers.map((member, idx) => (
                 <div key={idx} className="group text-center">
                    <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-brand-yellow transition-colors shadow-lg">
                       <Image 
                         src={member.image} 
                         alt={member.name}
                         fill
                         className="object-cover group-hover:scale-110 transition-transform duration-500"
                       />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-brand-blue text-sm font-medium uppercase tracking-wide">{member.role}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* =========================================
          5. CTA / PENUTUP
      ========================================= */}
      <section className="py-20 bg-brand-blue text-white text-center">
         <div className="container mx-auto px-6">
            <Heart className="w-12 h-12 text-brand-yellow mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-6">Bergabunglah Dalam Kebaikan</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
               Pintu kami selalu terbuka bagi Anda yang ingin berkunjung, menjadi relawan, atau menyalurkan bantuan.
            </p>
            <Link 
              href="/kontak"
              className="bg-brand-yellow text-brand-blue font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white transition-all"
            >
               Hubungi Kami
            </Link>
         </div>
      </section>

    </main>
  );
}