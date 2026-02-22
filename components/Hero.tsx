"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown, Flame } from "lucide-react";
import { whatsappLink } from "@/lib/config";

// Floating fire particles — static so SSR-safe
const particles = [
  { id: 0, size: 5, left: 8, delay: 0, duration: 8 },
  { id: 1, size: 7, left: 18, delay: 1.5, duration: 7 },
  { id: 2, size: 4, left: 28, delay: 0.5, duration: 9 },
  { id: 3, size: 6, left: 38, delay: 2.5, duration: 6.5 },
  { id: 4, size: 8, left: 48, delay: 1, duration: 8.5 },
  { id: 5, size: 5, left: 58, delay: 3, duration: 7.5 },
  { id: 6, size: 4, left: 68, delay: 0.8, duration: 9.5 },
  { id: 7, size: 7, left: 78, delay: 2, duration: 6 },
  { id: 8, size: 6, left: 88, delay: 1.2, duration: 8 },
  { id: 9, size: 5, left: 95, delay: 3.5, duration: 7 },
];

const INITIAL_SECONDS = 10 * 60 * 60; // 10 horas

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function CountdownTimer() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s <= 1 ? INITIAL_SECONDS : s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const isUrgent = seconds < 3600; // último hora en rojo intenso

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="flex flex-col items-center gap-2"
    >
      {/* Label */}
      <p className={`text-[10px] font-black tracking-[0.25em] uppercase ${isUrgent ? "text-[#ff4400]" : "text-white/50"}`}>
        ⏳ Tiempo restante para pedir
      </p>

      {/* Clock blocks */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className={`relative flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl font-black text-2xl sm:text-3xl tabular-nums overflow-hidden
            ${isUrgent
              ? "bg-[#ff4400] text-white shadow-[0_0_20px_rgba(255,68,0,0.6)]"
              : "bg-white/10 backdrop-blur-md text-white border border-white/15"
            }`}
          >
            <motion.span
              key={h}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {pad(h)}
            </motion.span>
          </div>
          <span className="text-white/40 text-[9px] mt-1 font-bold uppercase tracking-wider">horas</span>
        </div>

        <span className="text-white/60 text-2xl sm:text-3xl font-black mb-4 animate-pulse">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className={`relative flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl font-black text-2xl sm:text-3xl tabular-nums overflow-hidden
            ${isUrgent
              ? "bg-[#ff4400] text-white shadow-[0_0_20px_rgba(255,68,0,0.6)]"
              : "bg-white/10 backdrop-blur-md text-white border border-white/15"
            }`}
          >
            <motion.span
              key={m}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {pad(m)}
            </motion.span>
          </div>
          <span className="text-white/40 text-[9px] mt-1 font-bold uppercase tracking-wider">min</span>
        </div>

        <span className="text-white/60 text-2xl sm:text-3xl font-black mb-4 animate-pulse">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className={`relative flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl font-black text-2xl sm:text-3xl tabular-nums overflow-hidden
            ${isUrgent
              ? "bg-[#ff4400] text-white shadow-[0_0_20px_rgba(255,68,0,0.6)]"
              : "bg-white/10 backdrop-blur-md text-white border border-white/15"
            }`}
          >
            <motion.span
              key={s}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {pad(s)}
            </motion.span>
          </div>
          <span className="text-white/40 text-[9px] mt-1 font-bold uppercase tracking-wider">seg</span>
        </div>
      </div>

      {/* Urgency text */}
      <p className="text-white/40 text-[10px] font-medium">
        {isUrgent ? "🔥 ¡Últimas unidades! No esperes más" : "Pedidos se cierran pronto — Stock limitado"}
      </p>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleOrder = () => {
    window.open(
      whatsappLink("¡Hola! Quiero hacer un pedido en El Fogón Gourmet 🔥"),
      "_blank"
    );
  };

  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={ref} className="relative h-[100svh] min-h-[620px] max-h-[1050px] flex items-start justify-center pt-20 sm:pt-24 overflow-hidden">
      {/* Background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0a]/50 to-[#1a0f0a] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0a]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3d1a00] via-[#1a0f0a] to-[#0d0604]" />
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#ff4400]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[#ff8c00]/25 rounded-full blur-[60px]" />
        </div>
      </motion.div>

      {/* Fire particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute z-10 rounded-full bg-[#ff6600] opacity-0"
          style={{ left: `${p.left}%`, bottom: 0, width: p.size, height: p.size * 1.5 }}
          animate={{
            y: [0, -900],
            opacity: [0, 0.7, 0.4, 0],
            scale: [1, 0.6, 0.2],
            x: [0, p.id % 2 === 0 ? 60 : -60],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-4xl w-full px-5 sm:px-8 text-center flex flex-col items-center gap-5 sm:gap-6 py-8 sm:py-12"
      >
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        >
          <span className="flex size-2 rounded-full bg-[#ff4400] animate-pulse" />
          <span className="text-white text-xs font-bold tracking-widest uppercase">
            Este Domingo — Solo hasta agotar stock
          </span>
        </motion.div>

        {/* Countdown timer */}
        <CountdownTimer />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-serif leading-[1.05] tracking-tight text-shadow-fire"
        >
          ¡El asado del{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#ff4400]">domingo</span>
            <motion.span
              className="absolute inset-x-0 -bottom-2 h-1 bg-[#ff4400] rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            />
          </span>{" "}
          que todos van a recordar!
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Sazón único de{" "}
            <span className="font-signature italic text-[#ffb300] text-xl sm:text-2xl">
              Nancy García
            </span>{" "}
            • Cortes premium, gallina criolla y brasa artesanal.
          </p>
          <p className="text-[#ff4400] text-sm font-bold tracking-wide uppercase">
            📍 CC. Mercahogar • Domingos desde las 11 AM
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.button
            onClick={handleOrder}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden bg-[#ff4400] text-white text-base sm:text-lg font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-[0_0_40px_rgba(255,68,0,0.5)] hover:shadow-[0_0_60px_rgba(255,68,0,0.7)] transition-shadow group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Flame className="size-5" fill="currentColor" />
              ¡QUIERO PEDIR AHORA!
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#ff6600] to-[#ff4400] opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.button>

          <motion.button
            onClick={scrollToMenu}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full backdrop-blur-sm hover:border-white/60 hover:bg-white/5 transition-all"
          >
            Ver el Menú
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-1"
        >
          {["🔥 Brasa Artesanal", "✅ Pedidos por WhatsApp", "⏰ Domingos Limited Edition"].map((badge) => (
            <span key={badge} className="text-white/60 text-xs sm:text-sm font-medium">
              {badge}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors z-20"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Ver Menú</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="size-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
