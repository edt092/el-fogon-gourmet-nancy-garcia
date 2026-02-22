"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame } from "lucide-react";

const stats = [
  { value: "5+", label: "Años de tradición" },
  { value: "100%", label: "Ingredientes frescos" },
  { value: "★ 5.0", label: "Valoración clientes" },
  { value: "♾️", label: "Amor por la brasa" },
];

const testimonials = [
  {
    text: "La sopa de gallina de Nancy es lo más rico que he comido. ¡Me recuerda a la cocina de mi abuela pero mejor!",
    name: "María F.",
    role: "Cliente fiel desde 2020",
  },
  {
    text: "Los cortes premium son de otro nivel. Se nota que hay pasión y técnica en cada preparación.",
    name: "Andrés R.",
    role: "Amante del asado",
  },
  {
    text: "Cada domingo me toca llegar temprano porque se acaba. La mejor inversión del fin de semana.",
    name: "Carolina M.",
    role: "Vecina del Mercahogar",
  },
];

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden bg-[#1a0f0a]">
      {/* Decorative fire line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff4400]/50 to-transparent" />

      <div className="max-w-[1200px] mx-auto">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-[#ff4400] text-3xl sm:text-4xl lg:text-5xl font-black font-serif mb-2">
                {stat.value}
              </p>
              <p className="text-white/50 text-xs sm:text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px flex-1 bg-white/10" />
          <div className="flex items-center gap-2 text-[#ff4400]">
            <Flame className="size-4" fill="currentColor" />
            <span className="text-xs font-black uppercase tracking-widest text-white/50">Lo que dicen nuestros clientes</span>
            <Flame className="size-4" fill="currentColor" />
          </div>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-[#120a07]/80 border border-white/8 rounded-2xl p-6 sm:p-7 flex flex-col gap-4 hover:border-[#ff4400]/20 transition-colors"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-[#ffb300] text-sm">★</span>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic flex-1">"{t.text}"</p>
              <div>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
