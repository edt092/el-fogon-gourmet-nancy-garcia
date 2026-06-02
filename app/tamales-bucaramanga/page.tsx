import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TamalesContent from "@/components/TamalesContent";

export const metadata: Metadata = {
  title: "Tamales en Bucaramanga — Tamales santandereanos en hoja de plátano bajo pedido | El Fogón Gourmet",
  description:
    "Pide tamales bucaramangueses en hoja de plátano para eventos y reuniones. Rellenos de carne, pollo, tocino, garbanzo y verduras. Listos para calentar. Pedidos desde 20.",
  keywords: [
    "tamales bucaramanga",
    "tamales santandereanos",
    "tamales para eventos bucaramanga",
    "tamales para reuniones",
    "comida para eventos bucaramanga",
    "comida típica santandereana para eventos",
    "comidas para reuniones familiares sencillas",
    "pedido de tamales bucaramanga",
    "El Fogón Gourmet",
  ],
  openGraph: {
    title: "Tamales en Bucaramanga — El Fogón Gourmet",
    description:
      "Tamales santandereanos envueltos en hoja de plátano, rellenos de carne, pollo, tocino, garbanzo y verduras. Listos para calentar. Pedidos desde 20 hasta 500 unidades.",
    type: "website",
    locale: "es_CO",
    url: "https://elfogongourmet.online/tamales-bucaramanga/",
  },
  alternates: {
    canonical: "https://elfogongourmet.online/tamales-bucaramanga/",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tamales Bucaramanga",
  description:
    "Tamales santandereanos envueltos en hoja de plátano, rellenos de carne, pollo, tocino, garbanzo, zanahoria, cebolla y perejil. Listos para calentar. Pedidos para eventos y reuniones en Bucaramanga desde 20 hasta 500 unidades.",
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
      name: "Tamales Bucaramanga",
      item: "https://elfogongourmet.online/tamales-bucaramanga/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el pedido mínimo de tamales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El pedido mínimo es de 20 unidades. Para eventos grandes podemos preparar hasta 500 tamales con reserva anticipada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué lleva el tamal bucaramangués?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestros tamales llevan carne, pollo, tocino, garbanzo, zanahoria, cebolla y perejil, envueltos en hoja de plátano. Es la receta tradicional santandereana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se calientan los tamales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se pueden calentar al baño maría, que es la forma tradicional, o en microondas. Vienen listos para que tú los calientes a tu gusto y los sirvas directamente.",
      },
    },
  ],
};

export default function TamalesPage() {
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
        <TamalesContent />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
