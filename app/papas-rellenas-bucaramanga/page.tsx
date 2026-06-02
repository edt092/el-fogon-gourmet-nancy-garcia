import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PapasRellenasContent from "@/components/PapasRellenasContent";

export const metadata: Metadata = {
  title: "Papas Rellenas en Bucaramanga — Rellenas de carne, arroz y huevo bajo pedido | El Fogón Gourmet",
  description:
    "Pide papas rellenas en Bucaramanga para eventos y reuniones. Rellenas de carne, arroz y huevo cocido, listas para comer. Pedidos desde 20 unidades.",
  keywords: [
    "papas rellenas bucaramanga",
    "papas rellenas para eventos",
    "papas rellenas para reuniones",
    "comida para eventos bucaramanga",
    "comidas para reuniones familiares sencillas",
    "comida para fiestas económicas",
    "papas rellenas caseras bucaramanga",
    "pedido de papas rellenas bucaramanga",
    "El Fogón Gourmet",
  ],
  openGraph: {
    title: "Papas Rellenas en Bucaramanga — El Fogón Gourmet",
    description:
      "Papas rellenas de carne molida o desmechada, arroz y huevo cocido. Listas para comer. Pedidos para eventos y reuniones en Bucaramanga desde 20 hasta 500 unidades.",
    type: "website",
    locale: "es_CO",
    url: "https://elfogongourmet.online/papas-rellenas-bucaramanga/",
  },
  alternates: {
    canonical: "https://elfogongourmet.online/papas-rellenas-bucaramanga/",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Papas Rellenas Bucaramanga",
  description:
    "Papas rellenas de carne molida o desmechada, arroz y huevo cocido picado. Listas para comer. Pedidos para eventos y reuniones en Bucaramanga desde 20 hasta 500 unidades.",
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
      name: "Papas Rellenas Bucaramanga",
      item: "https://elfogongourmet.online/papas-rellenas-bucaramanga/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el pedido mínimo de papas rellenas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El pedido mínimo es de 20 unidades. Para eventos grandes podemos preparar hasta 500 papas rellenas con reserva anticipada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipo de carne puedo elegir para el relleno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes elegir entre carne molida o carne desmechada. En ambos casos la papa viene rellena con la carne elegida, arroz y huevo cocido picado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las papas rellenas se entregan listas para comer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, se entregan listas para comer. No necesitas freírlas ni calentarlas — llegan directamente a tu evento listas para servir.",
      },
    },
  ],
};

export default function PapasRellenasPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Header />
        <PapasRellenasContent />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
