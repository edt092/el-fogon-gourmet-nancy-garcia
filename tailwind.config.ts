import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4400",
        "primary-dark": "#cc3700",
        "amber-gold": "#ffb300",
        "bg-dark": "#1a0f0a",
        charcoal: "#120a07",
      },
      fontFamily: {
        display: ["var(--font-work-sans)", "sans-serif"],
        serif: ["var(--font-bree-serif)", "serif"],
        signature: ["var(--font-playfair)", "serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255,68,0,0.3)" },
          "100%": { boxShadow: "0 0 60px rgba(255,68,0,0.8)" },
        },
      },
      backgroundImage: {
        "fire-gradient": "linear-gradient(135deg, #ff4400 0%, #ff8c00 50%, #ffb300 100%)",
        "dark-gradient": "linear-gradient(180deg, #1a0f0a 0%, #120a07 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
