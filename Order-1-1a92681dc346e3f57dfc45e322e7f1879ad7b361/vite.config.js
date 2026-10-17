import { defineConfig } from "vite";

export default defineConfig({
  // Relative base so the build works on Netlify, Vercel, GitHub Pages subpaths, and plain static hosts.
  base: "./",
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    emptyOutDir: true,
  },
});
