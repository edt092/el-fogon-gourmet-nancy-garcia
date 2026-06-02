"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { whatsappLink } from "@/lib/config";

const steps = [
  {
    number: "01",
    icon: <MessageCircle className="size-5" />,
    title: "Escríbenos por WhatsApp con el plato y la cantidad",
    desc: "Dinos qué quieres pedir — arepas rellenas, papas rellenas, ayacos, tamales — y cuántas unidades necesitas.",
  },
  {
    number: "02",
    icon: <Clock className="size-5" />,
    title: "Confirmamos disponibilidad y acordamos fecha de entrega",
    desc: "Verificamos disponibilidad para tu evento en Bucaramanga y acordamos la fecha y hora de entrega.",
  },
  {
    number: "03",
    icon: <MapPin className="size-5" />,
    title: "Recibe tu comida el día del evento",
    desc: "Comida típica santandereana bajo encargo, lista para tu reunión familiar, cumpleaños o evento corporativo.",
  },
];

export default function Location() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsApp = () => {
    window.open(
      whatsappLink("Hola El Fogon Gourmet quiero hacer un pedido"),
      "_blank"
    );
  };

  const handleDirections = () => {
    window.open(
      "https://maps.google.com/?q=CC.+Mercahogar+Bucaramanga+CRA+28A+40-12",
      "_blank"
    );
  };

  return (
    <section
      ref={ref}
      id="como-pedir"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-20 bg-[#120a07] border-t border-white/5"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#ff4400] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3">
                Proceso de pedido
              </p>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight">
                ¿Cómo hacer tu pedido?
              </h2>
            </div>

            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="size-12 rounded-2xl bg-[#ff4400]/10 border border-[#ff4400]/20 flex items-center justify-center text-[#ff4400] flex-shrink-0 group-hover:bg-[#ff4400]/20 transition-colors font-black text-sm">
                    {step.number}
                  </div>
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg">{step.title}</p>
                    <p className="text-slate-400 text-sm mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-7 py-4 rounded-full font-black text-sm shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)] transition-shadow"
              >
                <MessageCircle className="size-5" fill="currentColor" />
                EMPEZAR PEDIDO POR WHATSAPP
              </motion.button>

              <motion.button
                onClick={handleDirections}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/15 text-white px-7 py-4 rounded-full font-black text-sm hover:bg-white/10 hover:border-white/25 transition-all"
              >
                <Navigation className="size-4" />
                ASADOS — VER UBICACIÓN
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Map — punto de venta dominical */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative min-h-[350px] sm:min-h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            id="ubicacion"
          >
            <iframe
              src="https://maps.google.com/maps?q=CC.+Mercahogar+Bucaramanga+Carrera+28A&output=embed&z=16&hl=es"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px", filter: "invert(0.9) hue-rotate(180deg) saturate(0.7)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación El Fogón Gourmet — Asados Dominicales CC. Mercahogar Bucaramanga"
            />
            {/* Pin overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#120a07]/90 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-[#ff4400] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="size-5 text-white" fill="currentColor" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">El Fogón Gourmet — Asados Dominicales</p>
                  <p className="text-slate-400 text-xs">CC. Mercahogar, CRA 28A 40-12 · Solo domingos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
