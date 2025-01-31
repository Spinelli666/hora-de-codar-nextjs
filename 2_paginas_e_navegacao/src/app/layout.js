import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meu projeto em Next",
  description: "Generated by create next app",
};

// Aula 5 - Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <h1>Cabeçalho da página</h1>
        {/* AUla 7 - Link ativo */}
        <Nav />
        {children}
        {/* Aula 6 - Componentes no Nest */}
        <Footer />
      </body>
    </html>
  );
}
