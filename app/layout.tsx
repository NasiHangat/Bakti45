import "./globals.css";  
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yayasan Bakti 45",
  description: "Panti Asuhan Resmi & Terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}