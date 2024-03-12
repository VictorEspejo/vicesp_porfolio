// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const images = [
  {
    src: "/victorlogo_144.png",
    sizes: "144x144",
    type: "image/png",
    purpose: "any",
  },
  {
    src: "/victorlogo_192.png",
    sizes: "192x192",
    type: "image/png",
    purpose: "any",
  },
  {
    src: "/victorlogo_384.png",
    sizes: "384x384",
    type: "image/png",
    purpose: "any",
  },
  {
    src: "/victorlogo_512.png",
    sizes: "512x512",
    type: "image/png",
    purpose: "maskable",
  },
];

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "inline",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,pdf}"],
        cleanupOutdatedCaches: true,
      },
      manifest: {
        short_name: "VicEspejo",
        name: "Victor Espejo",
        start_url: ".",
        background_color: "#0284c7",
        theme_color: "#0284c7",
        display: "standalone",
        scope: "/",
        icons: images.map((image) => image),
      },
    }),
  ],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
      "@constants": "/src/constants",
      "@views": "/src/views",
    },
  },
});
