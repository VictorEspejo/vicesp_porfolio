// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFileSync } from "fs";
import react from "@vitejs/plugin-react";

const images = [
  "victorlogo_144.png",
  "victorlogo_192.png",
  "victorlogo_384.png",
  "victorlogo_512.png",
];

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-sw",
      writeBundle() {
        copyFileSync(
          resolve(process.cwd(), "./sw.js"),
          resolve(process.cwd(), "./dist/sw.js")
        );
      },
    },
    {
      name: "copy-assets",
      writeBundle() {
        const manifestPath = resolve(process.cwd(), "./manifest.json");

        // Copia el manifest.json a la carpeta dist
        copyFileSync(
          manifestPath,
          resolve(process.cwd(), "./dist/manifest.json")
        );

        // Copia todas las imágenes referenciadas en la manifest.json a la carpeta dist
        images.forEach((image) => {
          const imagePath = resolve(process.cwd(), `./public/${image}`);
          copyFileSync(imagePath, resolve(process.cwd(), `./dist/${image}`));
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
      "@constants": "/src/constants",
    },
  },
});
