# El Fogón Gourmet - Nancy García 🔥🥩

**El Fogón Gourmet** is a premium landing page designed for a local culinary business. This project showcases a modern, high-performance frontend architecture focused on user experience, visual storytelling, and conversion optimization via direct WhatsApp integration.

![Project Banner](public/banner.jpg) <!-- Si tienes una captura de pantalla, ponla aquí, si no, borra esta línea -->

## 🚀 Technical Overview

This project serves as a demonstration of modern web development practices, utilizing the latest features of the React ecosystem.

- **Framework:** **Next.js (App Router)** for optimized routing and server-side rendering capabilities.
- **Core Library:** **React 19** (RC/Latest), leveraging the newest hooks and concurrent features.
- **Styling:** **Tailwind CSS** for a responsive, mobile-first design system with a custom dark-themed palette.
- **Animations:** **Framer Motion** is used extensively for:
  - Scroll-triggered reveal effects (`useInView`).
  - Parallax scrolling backgrounds in the Hero section.
  - Complex micro-interactions (floating fire particles, countdown timers).
- **Language:** **TypeScript** for type safety and maintainable code structure.

## ✨ Key Features

### 1. Immersive Hero Section
The landing page opens with a visually striking Hero component featuring:
- **Parallax Background:** Depth effects created using `useScroll` and `useTransform`.
- **Particle System:** A custom implementation of floating fire embers using Framer Motion arrays.
- **Urgency Logic:** A dynamic `CountdownTimer` component that calculates remaining time for orders, changing visual states based on urgency (e.g., turning red in the last hour).

### 2. Interactive Menu System
A filterable menu component (`Menu.tsx`) that demonstrates:
- **State Management:** Efficient filtering logic to switch between categories (Cortes, Aves, Fusión).
- **UX Details:** Hover effects on cards and layout animations using `AnimatePresence` for smooth transitions between categories.
- **Direct Conversion:** Each item links directly to a pre-filled WhatsApp message for streamlined ordering.

### 3. Performance & SEO
- Optimized image loading with `next/image`.
- Component modularity to ensure fast First Contentful Paint (FCP).
- Responsive design ensuring perfect rendering from mobile devices to large desktops.

## 🛠️ Installation & Setup

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/el-fogon-gourmet.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open http://localhost:3000 with your browser to see the result.

## 📂 Project Structure

```bash
src/
├── app/              # Next.js App Router structure
├── components/       # Reusable UI components
│   ├── Hero.tsx      # Parallax & Particle logic
│   ├── Menu.tsx      # Filterable grid system
│   └── SocialProof.tsx # Scroll-triggered testimonials
├── lib/              # Utility functions (WhatsApp config, etc.)
└── public/           # Static assets
