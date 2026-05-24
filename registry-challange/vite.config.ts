import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": "/src" },
  },
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://hub.docker.com",
        changeOrigin: true,
        secure: true,
      },
      "/v2": {
        target: "https://hub.docker.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
