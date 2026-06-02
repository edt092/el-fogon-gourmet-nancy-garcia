import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AyacosContent from "@/components/AyacosContent";

export const metadata: Metadata = {
  title: "Ayacos en Bucaramanga — Hallacos de cerdo, pollo, queso y mixtos bajo pedido | El Fogón Gourmet",
  description:
    "Pide ayacos en Bucaramanga para eventos y reuniones. Hallacos de cerdo, pollo, queso y mixtos con arroz. Listos para calentar y comer. Pedidos desde 20 unidades.",
  keywords: [
    "ayacos bucaramanga",
    "hallacos bucaramanga",
    "hayacos bucaramanga",
    "ayacos para eventos",
    "ayacos para reuniones",
    "comida para eventos bucaramanga",
    "comida típica santandereana para eventos",
    "comidas para reuniones familiares sencillas",
    "pedido de ayacos bucaramanga",
    "El Fogón Gourmet",
  ],
  openGraph: {
    title: "Ayacos en Bucaramanga — El Fogón Gourmet",
    description:
      "Ayacos (hallacos) caseros de cerdo, pollo, queso y mixto con arroz. Listos para calentar. Pedidos para eventos en Bucaramanga desde 20 hasta 500 unidades.",
    type: "website",
    locale: "es_CO",
    url: "https://elfogongourmet.online/ayacos-bucaramanga/",
  },
  alternates: {
    canonical: "https://elfogongourmet.online/ayacos-bucaramanga/",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ayacos Bucaramanga",
  description:
    "Ayacos (hallacos) caseros de carne de cerdo, pollo, queso y mixto con arroz. Listos para calentar y comer. Pedidos para eventos y reuniones en Bucaramanga desde 20 hasta 500 unidades.",
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
      name: "Ayacos Bucaramanga",
      item: "https://elfogongourmet.online/ayacos-bucaramanga/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el pedido mínimo de ayacos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El pedido mínimo es de 20 unidades. Para eventos grandes podemos preparar hasta 500 ayacos con reserva anticipada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se calientan los ayacos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se pueden calentar al baño maría o en microondas. Vienen listos para que tú los calientes a tu gusto y los sirvas directamente en tu evento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre ayaco, hallaco y hayaco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Son el mismo plato. Ayaco, hallaco y hayaco son distintas formas de escribir la misma palabra según la región o la persona.",
      },
    },
  ],
};

export default function AyacosPage() {
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
        <AyacosContent />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
