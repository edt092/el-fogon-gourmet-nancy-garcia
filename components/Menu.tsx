"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ShoppingCart, Star, Flame, ChevronRight } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);
import { whatsappLink } from "@/lib/config";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  badge?: string;
  featured?: boolean;
  cookOptions?: string[];
};

const menuItems: MenuItem[] = [
  {
    id: "cortes-premium",
    name: "Cortes Premium",
    description: "Chatas, carne fresca y semioreada. Marmoleado de alta calidad, asado lentamente sobre leña de guayabo con el toque secreto de Nancy.",
    image: "/img/cortes-premium.png",
    category: "cortes",
    badge: "⭐ El más pedido",
    cookOptions: ["1/2", "3/4", "WD"],
  },
  {
    id: "sopa-arroz-gallina",
    name: "Sopa de Arroz de Gallina",
    description: "Nuestra joya de la corona. Preparada por Nancy García durante 6 horas a fuego lento. El sabor del hogar en cada cucharada.",
    image: "/img/sopa-arroz-gallina.png",
    category: "especialidades",
    badge: "🏆 Recomendado",
    featured: true,
  },
  {
    id: "gallina-tradicional",
    name: "Gallina Tradicional",
    description: "Criolla, asada con leña. Piel dorada y jugosa por dentro. Un clásico de El Fogón Gourmet que enamora a cada domingo.",
    image: "/img/gallina-tradicional.png",
    category: "aves",
  },
  {
    id: "gallina-filete-plancha",
    name: "Filete de Pechuga a la Plancha",
    description: "Pechuga de gallina criolla a la plancha con marinada especial de Nancy. Light, sabrosa y con el toque gourmet que nos distingue.",
    image: "/img/gallina-filete-plancha.png",
    category: "aves",
    badge: "🌿 Opción Light",
  },
  {
    id: "spaguettis-pollo",
    name: "Spaguettis con Pollo",
    description: "Fusión criolla. Spaguettis al dente con pollo asado y salsa artesanal de Nancy García. Un plato que sorprende y convence.",
    image: "/img/spaguettis-pollo.png",
    category: "fusion",
  },
  {
    id: "spaguettis-brasa",
    name: "Fusión Brasa",
    description: "Spaguettis con pollo y carne a la brasa. Lo mejor de dos mundos: pasta italiana con el fuego colombiano. ¡Irresistible!",
    image: "/img/spaguettis-brasa.png",
    category: "fusion",
    badge: "🆕 Nuevo",
  },
];

const categories = [
  { id: "todos", label: "Todo el Menú" },
  { id: "cortes", label: "Cortes" },
  { id: "aves", label: "Gallina" },
  { id: "especialidades", label: "Especialidades" },
  { id: "fusion", label: "Fusión" },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  const handleOrder = () => {
    const msg = `¡Hola! Quiero ordenar *${item.name}* de El Fogón Gourmet 🔥`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative bg-[#120a07]/60 border rounded-2xl overflow-hidden transition-all duration-500 flex flex-col ${
        item.featured
          ? "border-[#ff4400]/50 shadow-[0_0_30px_rgba(255,68,0,0.15)] md:col-span-2 lg:col-span-1"
          : "border-white/10 hover:border-[#ff4400]/40"
      }`}
    >
      {/* Badge */}
      {item.badge && (
        <div className="absolute top-3 left-3 z-20 bg-[#ff4400] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
          {item.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1a0f0a]">
        <motion.div
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 2}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#120a07]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
        <h3 className="text-white font-black text-lg sm:text-xl font-serif leading-tight">{item.name}</h3>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.description}</p>

        {/* Cook options */}
        {item.cookOptions && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">Término:</span>
            <div className="flex gap-1.5">
              {item.cookOptions.map((opt) => (
                <span key={opt} className="text-[10px] border border-white/20 text-white/50 px-2 py-0.5 rounded-full">
                  {opt}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
          <span className="font-signature italic text-[#ffb300]/80 text-base">Nancy García</span>

          <motion.button
            onClick={handleOrder}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#ff4400] text-white text-xs font-black px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(255,68,0,0.3)] hover:shadow-[0_4px_25px_rgba(255,68,0,0.5)] transition-shadow"
          >
            <ShoppingCart className="size-3.5" />
            PEDIR
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = menuItems.filter(
    (item) => activeCategory === "todos" || item.category === activeCategory
  );

  return (
    <section ref={ref} id="menu" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-20 bg-[#120a07]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff4400]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-2">
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm flex items-center gap-2">
              <Flame className="size-4" fill="currentColor" />
              Nuestra Parrilla
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight">
              Selección de la Brasa
            </h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-1 bg-black/30 p-1.5 rounded-full border border-white/5">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors duration-200 ${
                  activeCategory === cat.id
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 bg-[#ff4400] rounded-full shadow-[0_2px_10px_rgba(255,68,0,0.4)]"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <p className="text-white/50 text-sm mb-5">¿Quieres saber precios o tienes alguna duda? Escríbenos directo.</p>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              window.open(
                whatsappLink("Hola, quiero saber más sobre el menú disponible 🍽️"),
                "_blank"
              );
            }}
            className="inline-flex items-center gap-3 border-2 border-[#25D366] text-[#25D366] font-black px-8 py-4 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
          >
            <WhatsAppIcon className="size-4" />
            CONSULTAR PRECIOS POR WHATSAPP
            <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
