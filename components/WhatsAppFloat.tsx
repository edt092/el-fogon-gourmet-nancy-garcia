"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { whatsappLink } from "@/lib/config";

// Path oficial de WhatsApp — burbuja + auricular (Font Awesome / Meta brand)
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="white"
    className="size-7"
    aria-hidden="true"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export default function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 2000);
    const t2 = setTimeout(() => {
      if (!dismissed) setShowBubble(true);
    }, 4000);
    const t3 = setTimeout(() => setShowBubble(false), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [dismissed]);

  const handleClick = () => {
    window.open(
      whatsappLink("Hola El Fogon Gourmet quiero hacer un pedido"),
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
          {/* Bubble */}
          <AnimatePresence>
            {showBubble && !dismissed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10, originX: 1, originY: 1 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative bg-white text-[#120a07] rounded-2xl rounded-br-sm px-4 py-3 shadow-xl max-w-[220px] sm:max-w-[260px]"
              >
                <button
                  onClick={() => { setShowBubble(false); setDismissed(true); }}
                  className="absolute -top-2 -right-2 size-5 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="size-3 text-white" />
                </button>
                <p className="text-xs font-bold leading-snug">
                  🫓 ¿Tienes un evento en Bucaramanga?
                </p>
                <p className="text-xs text-gray-500 mt-1">Pedimos arepas, ayacos, tamales y más.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            aria-label="Contactar por WhatsApp"
            className="relative size-14 sm:size-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.7)] transition-shadow"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
            <WhatsAppIcon />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
