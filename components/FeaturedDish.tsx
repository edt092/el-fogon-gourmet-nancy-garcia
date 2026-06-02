"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";

const benefits = [
  {
    icon: "📦",
    title: "Pedidos desde 20 hasta 500 unidades",
    desc: "Adaptamos la cantidad a tu evento, reunión o fiesta.",
  },
  {
    icon: "🎉",
    title: "Ideal para reuniones familiares, cumpleaños y eventos corporativos",
    desc: "Comida para fiestas en Bucaramanga con sabor casero y tradicional.",
  },
  {
    icon: "🚚",
    title: "Entrega en Bucaramanga con reserva previa",
    desc: "Coordina tu pedido con anticipación y recibe tu comida el día del evento.",
  },
];

export default function FeaturedDish() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleOrder = () => {
    const msg = "Hola, quiero cotizar un pedido de comida para mi evento en Bucaramanga";
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <section
      ref={ref}
      id="eventos"
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
            Sin cocinar, sin estrés
            <Flame className="size-4" fill="currentColor" />
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif">
            Comida para eventos sin que tú cocines
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Organiza tu evento en Bucaramanga y deja la comida en nuestras manos.
            Comida típica santandereana hecha bajo pedido, con calidad casera.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#120a07]/70 border-2 border-[#ff4400]/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,68,0,0.15)] max-w-5xl mx-auto"
        >
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col gap-8">
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                  className="flex flex-col gap-3"
                >
                  <div className="size-14 rounded-2xl bg-[#ff4400]/10 border border-[#ff4400]/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base leading-snug mb-1">{b.title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                ¿Cuántas personas son? ¿Cuáles son los platos? Escríbenos por WhatsApp y te
                cotizamos <strong className="text-white">comida para reuniones familiares sencillas</strong> o
                grandes eventos corporativos en Bucaramanga.
              </p>
              <motion.button
                onClick={handleOrder}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-white text-[#120a07] font-black py-4 px-8 rounded-2xl text-sm sm:text-base hover:bg-[#ff4400] hover:text-white transition-all shadow-lg whitespace-nowrap"
              >
                <MessageCircle className="size-5" fill="currentColor" />
                COTIZA TU PEDIDO POR WHATSAPP
              </motion.button>
            </div>

            <p className="font-signature italic text-[#ffb300]/60 text-right text-xl">
              — Nancy García
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
