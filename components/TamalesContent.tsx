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

const ingredientes = [
  {
    h3: "Carnes: carne y pollo",
    emoji: "🥩",
    desc: "Cada tamal lleva carne y pollo juntos — dos proteínas en un solo bocado, preparadas con sazón casera bucaramanguesa.",
  },
  {
    h3: "Verduras y legumbres: cebolla, perejil, garbanzo y zanahoria",
    emoji: "🥕",
    desc: "El garbanzo, la zanahoria, la cebolla y el perejil son parte esencial del relleno tradicional del tamal santandereano. Le dan cuerpo, color y el sabor que lo hace inconfundible.",
  },
  {
    h3: "El toque especial: tocino y hoja de plátano",
    emoji: "🍃",
    desc: "El tocino dentro del relleno aporta ese sabor profundo y casero que distingue al tamal bucaramangués. Y la hoja de plátano no es solo presentación — le da al tamal un aroma y una textura que ningún otro envoltorio logra.",
  },
];

const quantities = [
  { event: "Reunión pequeña", guests: "10 personas", amount: "20 – 25 tamales", icon: "🏠" },
  { event: "Cumpleaños familiar", guests: "25 personas", amount: "50 – 60 tamales", icon: "🎂" },
  { event: "Fiesta mediana", guests: "50 personas", amount: "100 – 120 tamales", icon: "🎉" },
  { event: "Evento corporativo", guests: "Desde 50 personas", amount: "Desde 100 unidades", icon: "🏢" },
  { event: "Evento grande", guests: "100+ personas", amount: "Hasta 500 tamales", icon: "🎊" },
];

const steps = [
  {
    n: "01",
    title: "Escríbenos por WhatsApp con la cantidad de tamales que necesitas",
    desc: "Cuéntanos para cuántas personas es el evento y te ayudamos a calcular la cantidad exacta.",
  },
  {
    n: "02",
    title: "Confirmamos la fecha de entrega y los detalles de tu evento",
    desc: "Coordinamos fecha, hora y punto de entrega en Bucaramanga para que todo llegue a tiempo.",
  },
  {
    n: "03",
    title: "Recibe tus tamales santandereanos listos para calentar y servir el día del evento",
    desc: "Envueltos en hoja de plátano, listos para el baño maría o microondas. Solo calentar y servir.",
  },
];

const faqs = [
  {
    q: "¿Cuál es el pedido mínimo de tamales?",
    a: "El pedido mínimo es de 20 unidades. Para eventos grandes podemos preparar hasta 500 tamales con reserva anticipada.",
  },
  {
    q: "¿Qué lleva el tamal bucaramangués?",
    a: "Nuestros tamales llevan carne, pollo, tocino, garbanzo, zanahoria, cebolla y perejil — todos los ingredientes juntos en un solo tamal, envuelto en hoja de plátano. Es la receta tradicional santandereana sin modificaciones.",
  },
  {
    q: "¿Por qué el tamal se envuelve en hoja de plátano?",
    a: "La hoja de plátano es parte de la receta tradicional del tamal bucaramangués. No es solo presentación — le aporta un aroma y una textura característica que distingue al tamal santandereano de otros tamales colombianos.",
  },
  {
    q: "¿Cómo se calientan los tamales?",
    a: "Se pueden calentar al baño maría, que es la forma tradicional y la que mejor conserva el sabor, o en microondas si prefieres algo más rápido. Vienen listos para que tú los calientes a tu gusto y los sirvas directamente.",
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
    q: "¿Puedo combinar tamales con otros productos en el mismo pedido?",
    a: "Sí, puedes combinar tamales con arepas rellenas, papas rellenas o ayacos en un mismo pedido. Indícanos todo lo que necesitas al escribirnos por WhatsApp.",
  },
  {
    q: "¿Atienden eventos corporativos con tamales?",
    a: "Sí, atendemos desayunos empresariales, reuniones de trabajo y celebraciones corporativas en Bucaramanga. Los tamales son una de las opciones más pedidas para desayunos de empresa por su practicidad y sabor tradicional.",
  },
];

const related = [
  { name: "Arepas rellenas", href: "/arepas-rellenas-bucaramanga/", emoji: "🫓", desc: "De carne desmechada o de huevo. Pedidos para eventos desde 20 unidades." },
  { name: "Papas rellenas", href: "/papas-rellenas-bucaramanga/", emoji: "🥔", desc: "Rellenas de carne, arroz y huevo cocido. Listas para comer." },
  { name: "Ayacos santandereanos", href: "/ayacos-bucaramanga/", emoji: "🌽", desc: "De cerdo, pollo, queso o mixto. Listos para calentar y servir." },
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

export default function TamalesContent() {
  const wa = (msg: string) => window.open(whatsappLink(msg), "_blank");

  const featuredRef = useRef<HTMLElement>(null);
  const ingredRef = useRef<HTMLElement>(null);
  const quantRef = useRef<HTMLElement>(null);
  const howtRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const ingredInView = useInView(ingredRef, { once: true, margin: "-80px" });
  const quantInView = useInView(quantRef, { once: true, margin: "-80px" });
  const howtInView = useInView(howtRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });
  const relatedInView = useInView(relatedRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ─── BREADCRUMB ─────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-20 bg-[#1a0f0a]">
        <ol className="max-w-[1200px] mx-auto flex items-center gap-2 text-xs text-white/40 font-medium">
          <li><a href="/" className="hover:text-[#ff4400] transition-colors">Inicio</a></li>
          <li><ChevronRight className="size-3" /></li>
          <li className="text-white/70">Tamales Bucaramanga</li>
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
                  Envueltos en hoja de plátano · Receta tradicional
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-[1.1] tracking-tight">
                Tamales en{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#ff4400]">Bucaramanga</span>
                  <motion.span
                    className="absolute inset-x-0 -bottom-1 h-1 bg-[#ff4400] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                </span>{" "}
                — santandereanos en hoja de plátano, listos para tu evento
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Tamales bucaramangueses envueltos en hoja de plátano, rellenos de carne, pollo, tocino,
                garbanzo, zanahoria, cebolla y perejil. Listos para calentar y servir. Pedidos desde{" "}
                <strong className="text-white">20 unidades</strong> con entrega en Bucaramanga para tu
                evento o reunión.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => wa("Hola, quiero hacer un pedido de tamales para mi evento en Bucaramanga")}
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-black px-7 py-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-shadow text-sm sm:text-base"
              >
                <WhatsAppIcon className="size-5" />
                PEDIR MIS TAMALES
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto w-full rounded-3xl overflow-hidden border-2 border-[#ff4400]/30 shadow-[0_0_60px_rgba(255,68,0,0.2)]"
            >
              <Image
                src="/img/tamales.jpeg"
                alt="tamales bucaramanga santandereanos El Fogón Gourmet"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120a07]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#120a07]/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10">
                <p className="text-white font-bold text-xs">🍃 Envueltos en hoja de plátano · Receta santandereana</p>
                <p className="text-slate-400 text-xs mt-0.5">Listos para calentar · Entrega en Bucaramanga</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── "EL TAMAL MÁS PEDIDO" ──────────────────────────────── */}
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
              Gastronomía bumanguesa
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight mb-6">
              El tamal bucaramangués más pedido para reuniones y eventos
            </h2>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                El <strong className="text-white">tamal santandereano</strong> es uno de los platos más
                representativos de la gastronomía de Bucaramanga y toda la región. En El Fogón Gourmet lo
                elaboramos con masa de maíz envuelta en hoja de plátano — la presentación tradicional que le
                da ese sabor y aroma característico que ningún otro envoltorio logra.
              </p>
              <p>
                El relleno combina carne, pollo, tocino, garbanzo, zanahoria, cebolla y perejil — todos los
                ingredientes juntos en un solo tamal, sin atajos. Se entregan listos para calentar, sin que
                tengas que cocinar nada. Perfectos para{" "}
                <strong className="text-white">comida para eventos bucaramanga</strong> en cantidad: reuniones
                familiares, fiestas, cumpleaños y eventos de empresa que buscan{" "}
                <strong className="text-white">tamales bucaramanga</strong> con sabor casero de verdad.
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
              Receta tradicional sin atajos
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight">
              ¿Qué lleva nuestro tamal santandereano?
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
                <h3 className="text-white font-black text-base sm:text-lg font-serif leading-snug">{ing.h3}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{ing.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ingredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="bg-[#120a07]/60 border border-[#ff4400]/20 rounded-2xl p-6 sm:p-8 mb-8"
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed italic">
              "Todo esto en un solo tamal, envuelto a mano en hoja de plátano. Así es la receta que
              hacemos en El Fogón Gourmet —{" "}
              <strong className="text-white not-italic">sin atajos, sin ingredientes de más ni de menos</strong>."
            </p>
            <p className="font-signature italic text-[#ffb300]/70 text-right text-xl mt-4">— Nancy García</p>
          </motion.div>

          {/* Placeholder visual ingredientes — FOTO REAL: tamal bucaramangués en hoja de plátano — reemplazar cuando haya imagen disponible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ingredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="relative w-full aspect-[4/3] max-w-2xl mx-auto rounded-3xl overflow-hidden border border-[#ff4400]/20"
            aria-label="tamales bucaramanga santandereanos El Fogón Gourmet"
          >
            {/* FOTO REAL: tamal bucaramangués en hoja de plátano — reemplazar este div cuando haya imagen disponible */}
            <div className="w-full h-full bg-gradient-to-br from-[#2d1208] via-[#3d1a00] to-[#1a0f0a] flex flex-col items-center justify-center gap-3">
              <span className="text-7xl sm:text-8xl select-none">🍃</span>
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest text-center px-4">
                Tamal bucaramangués en hoja de plátano · El Fogón Gourmet
              </p>
            </div>
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
              ¿Cuántos tamales necesitas para tu evento?
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
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ¿No sabes cuántos tamales necesitas? Cuéntanos el número de invitados y te ayudamos a
              calcular sin compromiso.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => wa("Hola, necesito ayuda para calcular cuántos tamales necesito para mi evento")}
              className="flex items-center gap-2 bg-[#25D366] text-white font-black px-6 py-3 rounded-full text-sm shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.5)] transition-shadow whitespace-nowrap"
            >
              <WhatsAppIcon className="size-4" />
              CALCULAR MI PEDIDO
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ─── CÓMO CALENTAR + CÓMO PEDIR ────────────────────────── */}
      <section
        ref={howtRef}
        className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-20"
        style={{ background: "linear-gradient(135deg, #1a0f0a 0%, #2d1208 50%, #1a0f0a 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howtInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 space-y-3 text-center"
          >
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Fácil y práctico
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight">
              ¿Cómo se calientan y cómo hacer tu pedido?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Bloque A — Cómo calentar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={howtInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-[#120a07]/70 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
            >
              <div className="size-14 rounded-2xl bg-[#ff4400]/10 border border-[#ff4400]/20 flex items-center justify-center text-2xl">
                🔥
              </div>
              <p className="text-[#ff4400] font-bold text-xs uppercase tracking-widest">Cómo calentar tus tamales</p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Los tamales se entregan listos para calentar, envueltos en su hoja de plátano. Puedes
                calentarlos{" "}
                <strong className="text-white">al baño maría</strong> — que es la forma tradicional y la que
                mejor conserva el sabor — o en{" "}
                <strong className="text-white">microondas</strong> si prefieres algo más rápido. No necesitas
                cocinar nada adicional, solo calentar y servir directamente en tu evento.
              </p>
            </motion.div>

            {/* Bloque B — Cómo pedir */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={howtInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#120a07]/70 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
            >
              <div className="size-14 rounded-2xl bg-[#ff4400]/10 border border-[#ff4400]/20 flex items-center justify-center text-2xl">
                📋
              </div>
              <p className="text-[#ff4400] font-bold text-xs uppercase tracking-widest">Cómo hacer tu pedido</p>
              <div className="flex flex-col gap-4">
                {steps.map((s) => (
                  <div key={s.n} className="flex items-start gap-3">
                    <div className="size-8 rounded-xl bg-[#ff4400]/10 border border-[#ff4400]/20 flex items-center justify-center text-[#ff4400] font-black text-xs flex-shrink-0">
                      {s.n}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-snug">{s.title}</p>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={howtInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => wa("Hola, quiero pedir tamales santandereanos en hoja de plátano para mi evento en Bucaramanga")}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-black px-10 py-5 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_40px_rgba(37,211,102,0.6)] transition-shadow text-base sm:text-lg"
            >
              <WhatsAppIcon className="size-5" />
              HACER MI PEDIDO AHORA
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
              Preguntas frecuentes sobre nuestros tamales
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-3"
          >
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
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
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">Más opciones</p>
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
                <p className="text-white font-black text-lg font-serif group-hover:text-[#ff4400] transition-colors">{r.name}</p>
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
          onClick={() => wa("Hola, quiero hacer un pedido de tamales en El Fogón Gourmet")}
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-black py-4 rounded-2xl text-base shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
        >
          <WhatsAppIcon className="size-5" />
          💬 Pedir por WhatsApp
        </button>
      </div>
    </>
  );
}
