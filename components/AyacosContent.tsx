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

const variants = [
  {
    h3: "Ayaco de carne de cerdo",
    emoji: "🐷",
    desc: "Masa de maíz rellena con arroz y carne de cerdo preparada con sazón casera bucaramanguesa. Una de las variedades más pedidas para reuniones familiares.",
    waMsg: "Hola, quiero pedir ayacos de carne de cerdo para mi evento en Bucaramanga",
    btn: "Pedir ayaco de cerdo",
  },
  {
    h3: "Ayaco de pollo",
    emoji: "🍗",
    desc: "Masa de maíz rellena con arroz y pollo desmenuzado. Una opción más ligera y perfecta para eventos con invitados de todos los gustos.",
    waMsg: "Hola, quiero pedir ayacos de pollo para mi evento en Bucaramanga",
    btn: "Pedir ayaco de pollo",
  },
  {
    h3: "Ayaco de queso",
    emoji: "🧀",
    desc: "Masa de maíz rellena con arroz y queso fundido. Ideal para quienes prefieren una opción sin carne en el evento.",
    waMsg: "Hola, quiero pedir ayacos de queso para mi evento en Bucaramanga",
    btn: "Pedir ayaco de queso",
  },
  {
    h3: "Ayaco mixto (cerdo y pollo)",
    emoji: "🌽",
    desc: "Masa de maíz rellena con arroz, carne de cerdo y pollo. La variante más completa para quienes quieren los dos sabores en un solo ayaco.",
    waMsg: "Hola, quiero pedir ayacos mixtos de cerdo y pollo para mi evento en Bucaramanga",
    btn: "Pedir ayaco mixto",
  },
];

const quantities = [
  { event: "Reunión pequeña", guests: "10 personas", amount: "20 – 25 ayacos", icon: "🏠" },
  { event: "Cumpleaños familiar", guests: "25 personas", amount: "50 – 60 ayacos", icon: "🎂" },
  { event: "Fiesta mediana", guests: "50 personas", amount: "100 – 120 ayacos", icon: "🎉" },
  { event: "Evento corporativo", guests: "Desde 50 personas", amount: "Desde 100 unidades", icon: "🏢" },
  { event: "Evento grande", guests: "100+ personas", amount: "Hasta 500 ayacos", icon: "🎊" },
];

const steps = [
  {
    n: "01",
    title: "Escríbenos por WhatsApp con la variedad de ayaco y la cantidad de cada tipo",
    desc: "Indícanos si quieres cerdo, pollo, queso, mixto o una combinación, y cuántos de cada uno.",
  },
  {
    n: "02",
    title: "Confirmamos la fecha de entrega y los detalles de tu evento",
    desc: "Coordinamos la fecha, hora y punto de entrega en Bucaramanga para que todo llegue a tiempo.",
  },
  {
    n: "03",
    title: "Recibe tus ayacos listos para calentar y servir el día del evento",
    desc: "Solo los calientas al baño maría o en microondas y los sirves directamente. Sin cocinar nada más.",
  },
];

const faqs = [
  {
    q: "¿Cuál es el pedido mínimo de ayacos?",
    a: "El pedido mínimo es de 20 unidades. Para eventos grandes podemos preparar hasta 500 ayacos con reserva anticipada.",
  },
  {
    q: "¿Puedo combinar varias variedades en el mismo pedido?",
    a: "Sí, puedes combinar cerdo, pollo, queso y mixto en un mismo pedido. Solo indícanos cuántos de cada variedad al escribirnos por WhatsApp.",
  },
  {
    q: "¿Cómo se calientan los ayacos?",
    a: "Se pueden calentar al baño maría o en microondas — como prefieras. Vienen listos para que tú los calientes a tu gusto y los sirvas directamente en tu evento.",
  },
  {
    q: "¿Con cuántos días de anticipación debo hacer el pedido?",
    a: "Recomendamos mínimo 2 días de anticipación. Para pedidos de más de 100 unidades, de 3 a 5 días para garantizar la calidad.",
  },
  {
    q: "¿Qué diferencia hay entre un ayaco, un hallaco y un hayaco?",
    a: "Son el mismo plato — ayaco, hallaco y hayaco son distintas formas de escribir la misma palabra según la región o la persona. En El Fogón Gourmet los llamamos ayacos, pero los conocerás con cualquiera de los tres nombres.",
  },
  {
    q: "¿Los ayacos llevan algo además de la carne y el arroz?",
    a: "Sí, todos los ayacos llevan masa de maíz por fuera, arroz y el relleno de la variedad que elijas — cerdo, pollo, queso o mixto (cerdo y pollo). Nada más, nada menos — receta casera tradicional.",
  },
  {
    q: "¿Hacen entregas a domicilio en Bucaramanga?",
    a: "Sí, coordinamos la entrega en Bucaramanga según la fecha y el lugar de tu evento. Contáctanos para confirmar disponibilidad.",
  },
  {
    q: "¿Puedo combinar ayacos con otros productos en el mismo pedido?",
    a: "Sí, puedes combinar ayacos con arepas rellenas, papas rellenas o tamales en un mismo pedido. Indícanos todo lo que necesitas al escribirnos.",
  },
];

const related = [
  { name: "Arepas rellenas", href: "/arepas-rellenas-bucaramanga/", emoji: "🫓", desc: "De carne desmechada o de huevo. Pedidos para eventos desde 20 unidades." },
  { name: "Papas rellenas", href: "/papas-rellenas-bucaramanga/", emoji: "🥔", desc: "Rellenas de carne, arroz y huevo cocido. Listas para comer." },
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

export default function AyacosContent() {
  const wa = (msg: string) => window.open(whatsappLink(msg), "_blank");

  const featuredRef = useRef<HTMLElement>(null);
  const variantsRef = useRef<HTMLElement>(null);
  const quantRef = useRef<HTMLElement>(null);
  const howtRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const variantsInView = useInView(variantsRef, { once: true, margin: "-80px" });
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
          <li className="text-white/70">Ayacos Bucaramanga</li>
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
                  Ayacos · Hallacos · Hayacos · Bucaramanga
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-[1.1] tracking-tight">
                Ayacos en{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#ff4400]">Bucaramanga</span>
                  <motion.span
                    className="absolute inset-x-0 -bottom-1 h-1 bg-[#ff4400] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                </span>{" "}
                — cerdo, pollo, queso y mixtos, listos para tu evento
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Ayacos caseros elaborados con masa de maíz, arroz y relleno a tu elección —
                cerdo, pollo, queso o mixto. Listos para calentar y comer. Pedidos desde{" "}
                <strong className="text-white">20 unidades</strong> con entrega en Bucaramanga
                para tu evento o reunión.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => wa("Hola, quiero hacer un pedido de ayacos para mi evento en Bucaramanga")}
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-black px-7 py-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-shadow text-sm sm:text-base"
              >
                <WhatsAppIcon className="size-5" />
                PEDIR MIS AYACOS
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto w-full rounded-3xl overflow-hidden border-2 border-[#ff4400]/30 shadow-[0_0_60px_rgba(255,68,0,0.2)]"
            >
              <Image
                src="/img/ayacos-original.jpg"
                alt="ayacos bucaramanga El Fogón Gourmet"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120a07]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#120a07]/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10">
                <p className="text-white font-bold text-xs">4 variedades: cerdo · pollo · queso · mixto</p>
                <p className="text-slate-400 text-xs mt-0.5">Listos para calentar · Entrega en Bucaramanga</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── "EL AYACO MÁS PEDIDO" ──────────────────────────────── */}
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
              Comida típica santandereana para eventos
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight mb-6">
              El ayaco bucaramangués más pedido para reuniones y eventos
            </h2>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                El ayaco — también escrito <strong className="text-white">hallaco</strong> o hayaco — es uno
                de los platos más tradicionales de la cocina bucaramanguesa. En El Fogón Gourmet lo preparamos
                con masa de maíz rellena con arroz y la carne o queso de la variante que elijas. Un plato de
                toda la vida, hecho bajo pedido con la receta casera de Nancy García.
              </p>
              <p>
                Nuestros <strong className="text-white">ayacos bucaramanga</strong> vienen listos para calentar:
                el cliente solo los pone al baño maría o en microondas y los sirve directamente. Sin cocinar
                nada adicional. Perfectos para{" "}
                <strong className="text-white">comida para eventos bucaramanga</strong> en cantidad — reuniones
                familiares, fiestas, cumpleaños y eventos de empresa. Pedido directo con la cocinera,
                sin intermediarios.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── VARIEDADES ─────────────────────────────────────────── */}
      <section ref={variantsRef} className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-20 bg-[#1a0f0a]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={variantsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 space-y-3"
          >
            <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Elige tu favorito
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight">
              Nuestras cuatro variedades de ayaco
            </h2>
          </motion.div>

          {/* Grid 2x2 mobile, 4 en línea desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {variants.map((v, i) => (
              <motion.div
                key={v.h3}
                initial={{ opacity: 0, y: 30 }}
                animate={variantsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[#120a07]/60 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-[#ff4400]/30 transition-colors"
              >
                {/* Placeholder imagen — FOTO REAL: [variante del ayaco] — reemplazar cuando haya imagen disponible */}
                <div
                  className="relative aspect-[4/3] flex flex-col items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #3d1a00, #2d1208)" }}
                  aria-label="ayacos bucaramanga El Fogón Gourmet"
                >
                  <span className="text-5xl select-none">{v.emoji}</span>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest px-2 text-center">
                    {v.h3}
                  </p>
                </div>

                {/* Contenido */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-white font-black text-base sm:text-lg font-serif leading-snug">{v.h3}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{v.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => wa(v.waMsg)}
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-black py-2.5 rounded-full text-xs shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-shadow mt-auto"
                  >
                    <WhatsAppIcon className="size-3.5" />
                    {v.btn.toUpperCase()}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={variantsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-sm text-center"
          >
            ¿Quieres combinar varias variedades en un mismo pedido? Sin problema —{" "}
            <button
              onClick={() => wa("Hola, quiero combinar varias variedades de ayacos en un mismo pedido para mi evento en Bucaramanga")}
              className="text-[#25D366] font-bold hover:underline"
            >
              indícanos cuántos de cada tipo al escribirnos.
            </button>
          </motion.p>
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
              ¿Cuántos ayacos necesitas para tu evento?
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
              ¿No sabes cuántos necesitas? Cuéntanos el número de invitados y te ayudamos a calcular
              sin compromiso.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => wa("Hola, necesito ayuda para calcular cuántos ayacos necesito para mi evento")}
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
              <p className="text-[#ff4400] font-bold text-xs uppercase tracking-widest">Cómo calentar tus ayacos</p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Los ayacos se entregan listos para calentar. Puedes calentarlos a tu gusto — las dos
                formas más prácticas son <strong className="text-white">al baño maría</strong> o en{" "}
                <strong className="text-white">microondas</strong>. No necesitas cocinar nada adicional,
                solo calentar y servir directamente en tu evento.
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
                {steps.map((s, i) => (
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
              onClick={() => wa("Hola, quiero hacer un pedido de ayacos para mi evento en Bucaramanga")}
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
              Preguntas frecuentes sobre nuestros ayacos
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
          onClick={() => wa("Hola, quiero hacer un pedido de ayacos para mi evento en Bucaramanga")}
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-black py-4 rounded-2xl text-base shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
        >
          <WhatsAppIcon className="size-5" />
          💬 Pedir por WhatsApp
        </button>
      </div>
    </>
  );
}
