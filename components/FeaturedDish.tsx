"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";

export default function FeaturedDish() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleOrder = () => {
    const msg = "¡Hola! Quiero ordenar la *Sopa de Arroz de Gallina* 🍲🔥";
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <section
      ref={ref}
      id="especialidades"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0f0a 0%, #2d1208 50%, #1a0f0a 100%)",
      }}
    >
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff4400]/10 rounded-full blur-[130px]" />
        <div className="absolute right-1/4 top-1/3 w-[300px] h-[300px] bg-[#ffb300]/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-3"
        >
          <p className="text-[#ff4400] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm flex items-center justify-center gap-2">
            <Flame className="size-4" fill="currentColor" />
            La Joya de la Casa
            <Flame className="size-4" fill="currentColor" />
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif">
            Plato Estrella
          </h2>
        </motion.div>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#120a07]/70 border-2 border-[#ff4400]/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,68,0,0.15)] max-w-5xl mx-auto"
        >
          {/* RECOMENDADO ribbon */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
            <div className="bg-[#ff4400] text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <span>★</span> RECOMENDADO
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-full md:w-[45%] aspect-square md:aspect-auto md:min-h-[420px] overflow-hidden"
            >
              <Image
                src="/img/sopa-arroz-gallina.png"
                alt="Sopa de Arroz de Gallina - El Fogón Gourmet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#120a07]/30 md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120a07]/60 to-transparent md:hidden" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-center gap-6">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black font-serif leading-tight mb-3">
                  Sopa de Arroz de Gallina
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Nuestra joya de la corona. Preparada por{" "}
                  <span className="font-signature italic text-[#ffb300] text-lg">Nancy García</span>{" "}
                  durante <strong className="text-white">6 horas a fuego lento</strong>. Caldo espeso,
                  gallina criolla tierna y arroz de la región. El sabor del hogar en cada cucharada.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🕐", label: "6h de cocción lenta" },
                  { icon: "🐓", label: "Gallina criolla local" },
                  { icon: "🔥", label: "Brasa artesanal" },
                  { icon: "💛", label: "Receta de familia" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-slate-400">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                onClick={handleOrder}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-white text-[#120a07] font-black py-4 rounded-2xl text-sm sm:text-base hover:bg-[#ff4400] hover:text-white transition-all shadow-lg"
              >
                <MessageCircle className="size-5" fill="currentColor" />
                PEDIR ESTA SOPA AHORA
              </motion.button>

              <p className="font-signature italic text-[#ffb300]/60 text-right text-xl">
                — Nancy García
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
