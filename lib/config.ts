// ============================================================
// CONFIGURACIÓN CENTRAL — El Fogón Gourmet
// Edita aquí tus datos y se actualiza en toda la web
// ============================================================

export const BUSINESS = {
  name: "El Fogón Gourmet",
  tagline: "Nancy García Signature",
  owner: "Nancy García",

  // ⚠️  REEMPLAZA con el número real de WhatsApp
  // Formato: código país + número sin espacios ni guiones
  // Ejemplo Colombia: 573001234567
  whatsapp: "573017787067",

  address: {
    street: "CRA 28A 40-12",
    place: "CC. Mercahogar, Primer Piso",
    city: "Bucaramanga",
    country: "Colombia",
  },

  schedule: "Domingos desde las 11:00 AM",
  scheduleWarning: "Hasta agotar existencias",

  social: {
    instagram: "", // ← Agrega tu URL de Instagram
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
