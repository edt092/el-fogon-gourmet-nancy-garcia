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
  title: "Comida típica para eventos en Bucaramanga — El Fogón Gourmet | Pedidos bajo encargo",
  description:
    "Pedidos de arepas rellenas, papas rellenas, ayacos y tamales en Bucaramanga. Comida típica santandereana para eventos y reuniones. Sin restaurante, todo bajo encargo.",
  keywords: [
    "arepas rellenas bucaramanga",
    "papas rellenas bucaramanga",
    "ayacos bucaramanga",
    "tamales santandereanos",
    "comida para eventos bucaramanga",
    "comida bajo encargo bucaramanga",
    "comida típica santandereana",
    "comida para fiestas bucaramanga",
    "comida para reuniones familiares",
    "El Fogón Gourmet",
    "Nancy García",
  ],
  openGraph: {
    title: "El Fogón Gourmet — Comida típica para eventos en Bucaramanga",
    description:
      "Arepas rellenas, papas rellenas, ayacos y tamales bajo encargo. Pedidos para reuniones y eventos en Bucaramanga.",
    type: "website",
    locale: "es_CO",
    url: "https://elfogongourmet.online",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ff4400",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "El Fogón Gourmet",
  description:
    "Comida típica bumanguesa bajo encargo para eventos y reuniones en Bucaramanga",
  areaServed: "Bucaramanga",
  servesCuisine: ["Colombiana", "Santandereana"],
  telephone: "+573017787067",
  url: "https://elfogongourmet.online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${workSans.variable} ${breeSerif.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-display antialiased bg-[#1a0f0a] text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
