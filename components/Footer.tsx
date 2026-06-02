"use client";

import { motion } from "framer-motion";
import { Flame, MessageCircle, Instagram } from "lucide-react";
import { whatsappLink } from "@/lib/config";

const productLinks = [
  { label: "Arepas Rellenas", href: "/arepas-rellenas-bucaramanga/" },
  { label: "Papas Rellenas", href: "/papas-rellenas-bucaramanga/" },
  { label: "Ayacos", href: "/ayacos-bucaramanga/" },
  { label: "Tamales", href: "/tamales-bucaramanga/" },
  { label: "Asados", href: "/asados-dominicales-bucaramanga/" },
];

export default function Footer() {
  const handleWhatsApp = () => {
    window.open(
      whatsappLink("Hola El Fogon Gourmet quiero hacer un pedido"),
      "_blank"
    );
  };

  return (
    <footer className="relative bg-[#0d0604] pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-20 border-t border-white/5">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#ff4400]/60 to-transparent" />

      <div className="max-w-[1200px] mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col items-center text-center gap-10 mb-14">
          {/* Fire divider */}
          <div className="flex items-center gap-4">
            <div className="h-px w-16 sm:w-24 bg-[#ff4400]/30" />
            <Flame className="size-6 text-[#ff4400]" fill="currentColor" />
            <div className="h-px w-16 sm:w-24 bg-[#ff4400]/30" />
          </div>

          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-1"
          >
            <h3 className="text-white text-2xl sm:text-3xl font-black font-serif">El Fogón Gourmet</h3>
            <p className="font-signature italic text-[#ffb300] text-lg sm:text-xl">Nancy García</p>
          </motion.div>

          {/* Product links for SEO */}
          <nav aria-label="Nuestros platos">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#ff4400] text-sm font-semibold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-[#25D366] hover:text-[#20ba57] text-sm font-semibold transition-colors"
                >
                  Hacer pedido
                </button>
              </li>
            </ul>
          </nav>

          {/* Quote */}
          <blockquote className="text-slate-400 text-base sm:text-lg md:text-xl italic max-w-2xl leading-relaxed">
            "Comida típica santandereana hecha con{" "}
            <span className="text-white font-semibold">tradición</span> y amor por{" "}
            <span className="font-signature text-[#ffb300] not-italic text-xl sm:text-2xl">Nancy García</span>.
            Pedidos bajo encargo en Bucaramanga."
          </blockquote>

          {/* CTA */}
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#ff4400] text-white font-black px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,68,0,0.4)] hover:shadow-[0_0_50px_rgba(255,68,0,0.6)] transition-shadow text-sm sm:text-base"
          >
            <MessageCircle className="size-5" fill="currentColor" />
            HACER MI PEDIDO AHORA
          </motion.button>

          {/* Social */}
          <div className="flex gap-5">
            <button
              onClick={() => window.open("https://instagram.com", "_blank")}
              className="size-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-[#ff4400] hover:border-[#ff4400]/40 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="size-5" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="size-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-5" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} El Fogón Gourmet — Comida tradicional bumanguesa bajo encargo. Bucaramanga, Colombia.
          </p>
          <div className="flex gap-5">
            <button className="text-white/25 hover:text-white/50 text-xs transition-colors">
              Términos y Condiciones
            </button>
            <button className="text-white/25 hover:text-white/50 text-xs transition-colors">
              Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
