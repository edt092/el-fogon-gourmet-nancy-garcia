"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { whatsappLink } from "@/lib/config";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const quantities = [
  { event: "Reunión pequeña", guests: "10 personas", amount: "20 – 30 papas", icon: "🏠" },
  { event: "Cumpleaños familiar", guests: "25 personas", amount: "50 – 75 papas", icon: "🎂" },
  { event: "Fiesta mediana", guests: "50 personas", amount: "100 – 120 papas", icon: "🎉" },
  { event: "Evento corporativo", guests: "Desde 50 personas", amount: "Desde 100 unidades", icon: "🏢" },
  { event: "Evento grande", guests: "100+ personas", amount: "Hasta 500 papas", icon: "🎊" },
];

const ingredientes = [
  {
    h3: "Carne molida o carne desmechada",
    desc: "Al momento de hacer tu pedido puedes elegir entre carne molida o carne desmechada. Ambas preparadas con sazón casera bumanguesa.",
    emoji: "🥩",
  },
  {
    h3: "Arroz",
    desc: "Arroz blanco cocido que complementa el relleno y le da consistencia a cada papa.",
    emoji: "🍚",
  },
  {
    h3: "Huevo cocido picado",
    desc: "Huevo cocido finamente picado, parte esencial de la receta tradicional de la papa rellena bucaramanguesa.",
    emoji: "🥚",
  },
];

const steps = [
  {
    n: "01",
    title: "Escríbenos por WhatsApp con la cantidad y el tipo de carne que prefieres",
    desc: "Indícanos cuántas papas necesitas y si las quieres con carne molida o carne desmechada.",
  },
  {
    n: "02",
    title: "Confirmamos la fecha de entrega y los detalles de tu evento",
    desc: "Coordinamos la fecha, hora y punto de entrega en Bucaramanga para que todo llegue a tiempo.",
  },
  {
    n: "03",
    title: "Recibe tus papas rellenas listas para comer el día del evento",
    desc: "Sin cocinar, sin calentar. Llegan directamente a tu reunión familiar, fiesta o evento corporativo.",
  },
];

const faqs = [
  {
    q: "¿Cuál es el pedido mínimo de papas rellenas?",
    a: "El pedido mínimo es de 20 unidades. Para eventos grandes podemos preparar hasta 500 papas rellenas con reserva anticipada.",
  },
  {
    q: "¿Qué tipo de carne puedo elegir para el relleno?",
    a: "Puedes elegir entre carne molida o carne desmechada. En ambos casos la papa viene rellena con la carne elegida, arroz y huevo cocido picado. Solo indícanos tu preferencia al hacer el pedido.",
  },
  {
    q: "¿Las papas rellenas se entregan frías o listas para comer?",
    a: "Se entregan listas para comer. No necesitas freírlas, calentarlas ni cocinar nada adicional — llegan directamente a tu evento listas para servir.",
  },
  {
    q: "¿Con cuántos días de anticipación debo hacer el pedido?",
    a: "Recomendamos mínimo 2 días de anticipación. Para pedidos de más de 100 unidades, de 3 a 5 días para garantizar la calidad.",
  },
  {
    q: "¿Hacen entregas a domicilio en Bucaramanga?",
    a: "Sí, coordinamos la entrega en Bucaramanga según la fecha y el lugar de tu evento. Contáctanos para confirmar disponibilidad.",
  },
  {
    q: "¿Puedo combinar papas rellenas con otros productos en el mismo pedido?",
    a: "Sí, puedes combinar papas rellenas con arepas rellenas, ayacos o tamales en un mismo pedido. Indícanos todo lo que necesitas al escribirnos.",
  },
  {
    q: "¿Atienden eventos corporativos?",
    a: "Sí, atendemos reuniones de trabajo, refrigerios empresariales y celebraciones corporativas en Bucaramanga. Contáctanos para cotizar según el número de asistentes.",
  },
];

const related = [
  { name: "Arepas rellenas", href: "/arepas-rellenas-bucaramanga/", emoji: "🫓", desc: "Arepas rellenas de carne desmechada o de huevo. Pedidos para eventos." },
  { name: "Ayacos", href: "/ayacos-bucaramanga/", emoji: "🌽", desc: "Comida típica bumanguesa hecha bajo pedido para reuniones." },
  { name: "Tamales santandereanos", href: "/tamales-bucaramanga/", emoji: "🍃", desc: "Receta tradicional santandereana para eventos y celebraciones." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-bold text-sm sm:text-base leading-snug">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="size-5 text-[#ff4400] flex-shrink-0" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 sm:px-6 pb-5 text-slate-400 text-sm leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

export default function PapasRellenasContent() {
  const wa = (msg: string) => window.open(whatsappLink(msg), "_blank");

  const featuredRef = useRef<HTMLElement>(null);
  const ingredRef = useRef<HTMLElement>(null);
  const quantRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const ingredInView = useInView(ingredRef, { once: true, margin: "-80px" });
  const quantInView = useInView(quantRef, { once: true, margin: "-80px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });
  const relatedInView = useInView(relatedRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ─── BREADCRUMB ─────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-20 bg-[#1a0f0a]">
        <ol className="max-w-[1200px] mx-auto flex items-center gap-2 text-xs text-white/40 font-medium">
          <li>
            <a href="/" className="hover:text-[#ff4400] transition-colors">Inicio</a>
          </li>
          <li><ChevronRight className="size-3" /></li>
          <li className="text-white/70">Papas Rellenas Bucaramanga</li>
        </ol>
      </nav>

      {/* ─── HERO ───────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-[#1a0f0a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff4400]/15 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1200px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <span className="flex size-2 rounded-full bg-[#ff4400] animate-pulse" />
                <span className="text-white text-xs font-bold tracking-widest uppercase">
                  50 búsquedas/mes · Terreno libre en Google
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-[1.1] tracking-tight">
                Papas rellenas en{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#ff4400]">Bucaramanga</span>
                  <motion.span
                    className="absolute inset-x-0 -bottom-1 h-1 bg-[#ff4400] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                </span>{" "}
                — carne, arroz y huevo, listas para tu evento
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Papas rellenas caseras rellenas de carne, arroz y huevo cocido, listas para comer.
                Perfectas para reuniones familiares, cumpleaños y eventos en Bucaramanga.
                Pedidos desde <strong className="text-white">20 unidades</strong> con entrega el día de tu evento.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => wa("Hola, quiero hacer un pedido de papas rellenas para mi evento en Bucaramanga")}
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-black px-7 py-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-shadow text-sm sm:text-base"
                >
                  <WhatsAppIcon className="size-5" />
                  PEDIR MIS PAPAS RELLENAS
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto w-full rounded-3xl overflow-hidden border-2 border-[#ff4400]/30 shadow-[0_0_60px_rgba(255,68,0,0.2)]"
            >
              <Image
                src="/img/papas-rellenas.png"
                alt="papas rellenas bucaramanga El Fogón Gourmet"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120a07]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#120a07]/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10">
                <p className="text-white font-bold text-xs">🥩 Carne · 🍚 Arroz · 🥚 Huevo cocido</p>
                <p className="text-slate-400 text-xs mt-0.5">Listas para comer · Entrega en Bucaramanga</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── "LA PAPA RELLENA MÁS PEDIDA" ──────────────────────── */}
      <section ref={featuredRef} className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-20 bg-[#120a07]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#ff4400]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1200px] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              ⭐ Historia real de pedido
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight mb-6">
              La papa rellena bucaramanguesa más pedida para reuniones
            </h2>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                La <strong className="text-white">papa rellena bucaramanguesa</strong> es uno de los platos más
                representativos de la cocina casera de Bucaramanga. En El Fogón Gourmet la preparamos con el relleno
                completo: carne (molida o desmechada según tu preferencia), arroz y huevo cocido picado — todo junto
                dentro de una sola papa, como manda la receta tradicional.
              </p>
              <p>
                Se entregan listas para comer, sin que tengas que cocinar ni calentar nada. Son ideales para
                eventos donde necesitas <strong className="text-white">comida para eventos bucaramanga</strong> en cantidad:
                reuniones de familia, fiestas, cumpleaños y eventos de empresa. Pedido directo con la cocinera, sin intermediarios,
                por WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── QUÉ LLEVA ──────────────────────────────────────────── */}
      <section ref={ingredRef} className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-20 bg-[#1a0f0a]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ingredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 space-y-3"
          >
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Receta casera bumanguesa
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight">
              ¿Qué lleva nuestra papa rellena?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {ingredientes.map((ing, i) => (
              <motion.div
                key={ing.h3}
                initial={{ opacity: 0, y: 30 }}
                animate={ingredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-[#120a07]/60 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#ff4400]/30 transition-colors"
              >
                <div className="size-12 rounded-xl bg-[#ff4400]/10 border border-[#ff4400]/20 flex items-center justify-center text-xl">
                  {ing.emoji}
                </div>
                <h3 className="text-white font-black text-base sm:text-lg font-serif">{ing.h3}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{ing.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ingredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="bg-[#120a07]/60 border border-[#ff4400]/20 rounded-2xl p-6 sm:p-8"
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed italic">
              "Todos los ingredientes van juntos dentro de la papa — así es la receta casera que hacemos
              en El Fogón Gourmet. Una sola papa, tres ingredientes,{" "}
              <strong className="text-white not-italic">todo el sabor de Bucaramanga</strong>."
            </p>
            <p className="font-signature italic text-[#ffb300]/70 text-right text-xl mt-4">— Nancy García</p>
          </motion.div>
        </div>
      </section>

      {/* ─── CANTIDADES ─────────────────────────────────────────── */}
      <section ref={quantRef} className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-20 bg-[#120a07]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={quantInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 space-y-3"
          >
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Guía de cantidades
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight">
              ¿Cuántas papas rellenas necesitas para tu evento?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {quantities.map((q, i) => (
              <motion.div
                key={q.event}
                initial={{ opacity: 0, y: 30 }}
                animate={quantInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                className="bg-[#1a0f0a]/60 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#ff4400]/30 transition-colors"
              >
                <span className="text-3xl">{q.icon}</span>
                <div>
                  <p className="text-white font-black text-base">{q.event}</p>
                  <p className="text-white/40 text-xs mt-0.5">{q.guests}</p>
                </div>
                <p className="text-[#ff4400] font-bold text-sm">{q.amount}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={quantInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-[#1a0f0a]/60 border border-[#ff4400]/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <p className="text-white font-bold text-sm sm:text-base">
                ✅ Ya hemos atendido pedidos de 100 papas rellenas para reuniones familiares en Bucaramanga.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cuéntanos el número de invitados y te ayudamos a calcular la cantidad exacta sin compromiso.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => wa("Hola, necesito ayuda para calcular cuántas papas rellenas necesito para mi evento")}
              className="flex items-center gap-2 bg-[#25D366] text-white font-black px-6 py-3 rounded-full text-sm shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.5)] transition-shadow whitespace-nowrap"
            >
              <WhatsAppIcon className="size-4" />
              CALCULAR MI PEDIDO
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ─── CÓMO PEDIR ─────────────────────────────────────────── */}
      <section
        ref={stepsRef}
        className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-20"
        style={{ background: "linear-gradient(135deg, #1a0f0a 0%, #2d1208 50%, #1a0f0a 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 space-y-3 text-center"
          >
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Proceso sencillo
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight">
              ¿Cómo hacer tu pedido de papas rellenas?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-[#120a07]/70 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:border-[#ff4400]/30 transition-colors"
              >
                <div className="size-14 rounded-2xl bg-[#ff4400]/10 border border-[#ff4400]/20 flex items-center justify-center text-[#ff4400] font-black text-xl">
                  {s.n}
                </div>
                <p className="text-white font-bold text-base sm:text-lg leading-snug">{s.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => wa("Hola, quiero pedir papas rellenas de carne molida para mi evento en Bucaramanga")}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-black px-8 py-5 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_40px_rgba(37,211,102,0.6)] transition-shadow text-sm sm:text-base"
            >
              <WhatsAppIcon className="size-5" />
              PEDIR CON CARNE MOLIDA
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => wa("Hola, quiero pedir papas rellenas de carne desmechada para mi evento en Bucaramanga")}
              className="inline-flex items-center justify-center gap-3 border-2 border-[#25D366] text-[#25D366] font-black px-8 py-5 rounded-full hover:bg-[#25D366] hover:text-white transition-all text-sm sm:text-base"
            >
              <WhatsAppIcon className="size-5" />
              PEDIR CON CARNE DESMECHADA
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────── */}
      <section ref={faqRef} className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-20 bg-[#120a07]">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-10 space-y-3"
          >
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Resolvemos tus dudas
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight">
              Preguntas frecuentes
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-3"
          >
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── RELACIONADOS ───────────────────────────────────────── */}
      <section ref={relatedRef} className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-20 bg-[#1a0f0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-10 space-y-2"
          >
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Más opciones
            </p>
            <h2 className="text-white text-2xl sm:text-3xl font-black font-serif">
              También puedes pedir para tu evento
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((r, i) => (
              <motion.a
                key={r.name}
                href={r.href}
                initial={{ opacity: 0, y: 30 }}
                animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="bg-[#120a07]/60 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#ff4400]/30 transition-all group"
              >
                <span className="text-4xl">{r.emoji}</span>
                <p className="text-white font-black text-lg font-serif group-hover:text-[#ff4400] transition-colors">
                  {r.name}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                <span className="text-[#ff4400] text-xs font-bold flex items-center gap-1 mt-auto">
                  Ver más <ChevronRight className="size-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MOBILE STICKY CTA ──────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0d0604]/95 backdrop-blur-md border-t border-white/10 p-4">
        <button
          onClick={() => wa("Hola, quiero hacer un pedido de papas rellenas para mi evento en Bucaramanga")}
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-black py-4 rounded-2xl text-base shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
        >
          <WhatsAppIcon className="size-5" />
          💬 Pedir por WhatsApp
        </button>
      </div>
    </>
  );
}
