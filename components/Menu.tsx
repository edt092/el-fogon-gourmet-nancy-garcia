"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MessageCircle, Star, Flame, ChevronRight } from "lucide-react";
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
            className="flex items-center gap-2 bg-[#25D366] text-white text-xs font-black px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.25)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.5)] transition-shadow"
          >
            <MessageCircle className="size-3.5" fill="currentColor" />
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
            <MessageCircle className="size-4" fill="currentColor" />
            CONSULTAR PRECIOS POR WHATSAPP
            <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
