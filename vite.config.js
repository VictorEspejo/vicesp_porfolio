// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFileSync } from "fs";
import react from "@vitejs/plugin-react";

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
