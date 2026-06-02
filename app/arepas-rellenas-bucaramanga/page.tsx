import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ArepassRellenasContent from "@/components/ArepassRellenasContent";

export const metadata: Metadata = {
  title: "Arepas Rellenas en Bucaramanga — Pedidos para eventos y reuniones | El Fogón Gourmet",
  description:
    "Pide tus arepas rellenas en Bucaramanga para reuniones, fiestas y eventos. Pedidos desde 20 unidades. Comida casera y tradicional bajo encargo.",
  keywords: [
    "arepas rellenas bucaramanga",
    "arepas rellenas para eventos",
    "arepas rellenas para reuniones",
    "comida para eventos bucaramanga",
    "comida para fiestas económicas",
    "comidas para reuniones familiares sencillas",
    "arepas rellenas caseras bucaramanga",
    "pedido de arepas bucaramanga",
    "El Fogón Gourmet",
  ],
  openGraph: {
    title: "Arepas Rellenas en Bucaramanga — El Fogón Gourmet",
    description:
      "Arepas rellenas caseras para eventos y reuniones en Bucaramanga. Pedidos desde 20 hasta 500 unidades bajo encargo.",
    type: "website",
    locale: "es_CO",
    url: "https://elfogongourmet.online/arepas-rellenas-bucaramanga/",
  },
  alternates: {
    canonical: "https://elfogongourmet.online/arepas-rellenas-bucaramanga/",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Arepas Rellenas Bucaramanga",
  description:
    "Arepas rellenas caseras para eventos y reuniones en Bucaramanga. Pedidos desde 20 hasta 500 unidades bajo encargo.",
  image: "https://elfogongourmet.online/img/arepas-rellenas.jpg",
  brand: {
    "@type": "Brand",
    name: "El Fogón Gourmet",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "COP",
    areaServed: "Bucaramanga",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://elfogongourmet.online",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Arepas Rellenas Bucaramanga",
      item: "https://elfogongourmet.online/arepas-rellenas-bucaramanga/",
    },
  ],
};

export default function ArepassRellenasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <Header />
        <ArepassRellenasContent />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
