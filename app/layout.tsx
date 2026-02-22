import type { Metadata, Viewport } from "next";
import { Work_Sans, Bree_Serif, Playfair_Display } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  variable: "--font-bree-serif",
  weight: "400",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Fogón Gourmet | Nancy García — Tradición y Brasa",
  description:
    "Asados artesanales, cortes premium, gallina criolla y sazón único de Nancy García. Domingos en CC. Mercahogar, Bucaramanga. ¡Haz tu pedido por WhatsApp!",
  keywords: [
    "asado",
    "parrilla",
    "fogón gourmet",
    "Nancy García",
    "Bucaramanga",
    "comida a la brasa",
    "cortes premium",
    "gallina criolla",
  ],
  openGraph: {
    title: "El Fogón Gourmet | Nancy García",
    description: "Tradición y brasa en cada bocado artesanal. ¡Pide ya!",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ff4400",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${workSans.variable} ${breeSerif.variable} ${playfair.variable}`}>
      <body className="font-display antialiased bg-[#1a0f0a] text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
