'use client';

import Image from "next/image";
import Link from "next/link";
import { Award, FileText, Users, Heart, CheckCircle, ShieldCheck, CreditCard, FileCheck, Gift, User, UserCheck } from "lucide-react";

export default function ProfilPage() {
  
  // Data Legalitas
  const legalDocs = [
    { label: "NPWP Yayasan", value: "92.135.725.7-421.000" },
    { label: "SK Kemenkumham RI", value: "AHU-0008346.AH.01.04.Tahun 2019" },
    { label: "Akta Pendirian", value: "No. 1 Tanggal 10 Juni 2019" },
    { label: "SKT Dinsos Provinsi", value: "062/194/PPSKS/2022" },
    { label: "Izin Operasional DPMPTSP", value: "062/3/TDLKS/DPMPTSP/IV/2022" },
    { label: "Akreditasi Kemensos RI", value: "0790.SA.LKS.B/2024" },
  ];

  // Data Relawan (Syarat & Benefit)
  const volunteerRequirements = [
    "Mahasiswa/Umum",
    "Berdedikasi dalam dunia pendidikan dan sosial",
    "Berkomitmen dan bertangggung jawab",
    "Pengalaman atau non pengalaman dapat bergabung",
    "CV keren kamu"
  ];

  const volunteerBenefits = [
    "Menambah relasi bareng relawan hebat lainnya",
    "Meningkatkan kemampuan mengajar",
    "Memperoleh kemampuan dan pengetahuan baru",
    "E-sertifikat"
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-yellow-200 selection:text-blue-900">
      
      {/* =========================================
          1. HEADER SECTION (Updated Gradient)
      ========================================= */}
      <section className="relative pt-44 pb-24 bg-gradient-to-br from-cyan-500 via-blue-400 to-sky-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute -left-20 top-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-md">Tentang Kami</h1>
            <p className="text-blue-50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-sm">
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
               <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-gray-100 rotate-2 hover:rotate-0 transition-all duration-500 group">
                  <Image 
                    src="/bakti_sosial.jpg"
                    alt="Sejarah Yayasan"
                    width={600}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-cyan-600/10 group-hover:bg-transparent transition-colors"></div>
               </div>
            </div>

            {/* Teks Sejarah */}
            <div className="md:w-1/2 space-y-6">
               <div className="inline-flex items-center gap-2 text-cyan-600 font-bold tracking-wider text-sm uppercase">
                  <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
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
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-cyan-100 flex items-start gap-4">
                 <div className="bg-cyan-50 p-3 rounded-xl shrink-0">
                    <ShieldCheck className="w-8 h-8 text-cyan-600" />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900">Badan Hukum Resmi</h3>
                    <p className="text-xs text-gray-500 mb-2">Kementerian Hukum & HAM RI</p>
                    <span className="inline-block bg-cyan-50 text-cyan-700 text-xs font-bold px-3 py-1.5 rounded-md font-mono border border-cyan-100">
                      AHU-0008346.AH.01.04.Tahun 2019
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

              {/* List Rekening Resmi (Updated Gradient) */}
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 
                 <h4 className="font-bold text-lg mb-6 flex items-center gap-2 border-b border-white/20 pb-4 relative z-10">
                    <CreditCard className="w-5 h-5 text-yellow-300" />
                    Rekening Donasi
                 </h4>
                 <p className="text-blue-50 text-sm mb-6 relative z-10 leading-relaxed">
                    Salurkan bantuan terbaik Anda melalui rekening resmi yayasan. Hati-hati terhadap penipuan yang mengatasnamakan lembaga.
                 </p>

                 <div className="space-y-4 relative z-10">
                    {/* BNI - Satu-satunya Rekening */}
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/20 transition-colors">
                       <div>
                          <p className="text-xs text-yellow-300 font-bold uppercase mb-1">Bank BNI</p>
                          <p className="font-mono text-2xl font-bold tracking-wider">0840 4020 01</p>
                          <p className="text-[11px] text-blue-100 mt-1 uppercase tracking-wide">an. Yayasan Bakti 45 Sejahtera</p>
                       </div>
                       <div className="h-10 w-14 bg-white rounded-lg flex items-center justify-center text-blue-800 font-bold text-sm shadow-md">BNI</div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* =========================================
          4. PROFIL PENGURUS (Updated Colors)
      ========================================= */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-cyan-600 font-bold tracking-wider text-sm uppercase mb-2 block">Struktur Organisasi</span>
               <h2 className="text-3xl font-bold text-gray-900">Pengurus Yayasan</h2>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
               
               {/* Level 1: PEMBINA */}
               <div className="w-full max-w-sm">
                 <div className="bg-white border-2 border-cyan-500 rounded-2xl p-6 shadow-xl text-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-cyan-500"></div>
                    <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-100">
                        <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Eka Wijayanti S.Pd.I</h3>
                    <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest">Pembina</p>
                 </div>
               </div>

               {/* Garis Konektor Vertical */}
               <div className="h-8 w-0.5 bg-gray-300"></div>

               {/* Level 2: PENGAWAS */}
               <div className="w-full">
                  <div className="flex flex-col md:flex-row justify-center gap-6">
                     {[
                       { name: "Elis Qodariah, S.Ap., M.BA", role: "Pengawas" },
                       { name: "M. Hanif Bay", role: "Pengawas" }
                     ].map((member, idx) => (
                       <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-center w-full md:w-64">
                          <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <ShieldCheck className="w-6 h-6" />
                          </div>
                          <h4 className="font-bold text-gray-800 text-sm mb-0.5">{member.name}</h4>
                          <p className="text-xs font-semibold text-gray-400 uppercase">{member.role}</p>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Garis Konektor Vertical */}
               <div className="h-8 w-0.5 bg-gray-300"></div>

               {/* Level 3: KETUA */}
               <div className="w-full max-w-xs">
                 <div className="bg-white border-2 border-yellow-400 rounded-2xl p-6 shadow-lg text-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-yellow-400"></div>
                    <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-100">
                        <UserCheck className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Salim</h3>
                    <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest">Ketua Yayasan</p>
                 </div>
               </div>

               {/* Garis Konektor Vertical */}
               <div className="h-8 w-0.5 bg-gray-300"></div>
               
               {/* Garis Konektor Horizontal (Cabang) */}
               <div className="w-1/2 h-4 border-t-2 border-l-2 border-r-2 border-gray-300 rounded-t-xl hidden md:block"></div>

               {/* Level 4: SEKRETARIS & BENDAHARA */}
               <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
                  {/* Sekretaris */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-center flex-1">
                      <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <FileText className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">Tasya Meilani</h4>
                      <p className="text-xs font-semibold text-gray-400 uppercase">Sekretaris</p>
                  </div>

                  {/* Bendahara */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-center flex-1">
                      <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CreditCard className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">Sumirah</h4>
                      <p className="text-xs font-semibold text-gray-400 uppercase">Bendahara</p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* =========================================
          5. INFO RELAWAN (Updated Colors)
      ========================================= */}
      <section id="snk" className="py-24 bg-cyan-50/30 border-t border-cyan-100 relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <span className="text-cyan-600 font-bold tracking-wider text-sm uppercase mb-2 block">Gabung Bersama Kami</span>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Menjadi Relawan Bakti 45</h2>
             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Mari berkontribusi nyata untuk pendidikan dan sosial bersama tim yang hebat.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Kartu Syarat */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-cyan-400 transition-colors relative group">
              <div className="absolute top-0 left-0 w-full h-2 bg-cyan-500 rounded-t-3xl"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center">
                   <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Syarat & Ketentuan</h3>
              </div>
              
              <ul className="space-y-4">
                {volunteerRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                     <span className="text-gray-700 font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kartu Benefit */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-yellow-400 transition-colors relative group">
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 rounded-t-3xl"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center">
                   <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Benefit Relawan</h3>
              </div>
              
              <ul className="space-y-4">
                {volunteerBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                     <Heart className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5 fill-yellow-100" />
                     <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          6. CTA / PENUTUP (Updated Gradient)
      ========================================= */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white text-center">
         <div className="container mx-auto px-6">
            <Heart className="w-12 h-12 text-yellow-300 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-6">Siap Menjadi Bagian dari Kebaikan?</h2>
            <p className="text-blue-50 text-lg max-w-2xl mx-auto mb-10">
               Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan seputar pendaftaran relawan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://wa.me/62881023512953?text=Halo%20Admin,%20saya%20tertarik%20menjadi%20relawan"
                  className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-cyan-700 transition-all flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Daftar Sekarang
                </Link>
                <Link 
                  href="/kontak"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-cyan-700 transition-all"
                >
                  Hubungi Kami
                </Link>
            </div>
         </div>
      </section>

    </main>
  );
}