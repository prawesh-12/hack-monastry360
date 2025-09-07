import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "pwa-192x192.png", "pwa-512x512.png", "screenshot1-512-512.png", "screenshot1-1895x1076.png"],
      manifest: {
        name: "My React PWA",
        short_name: "ReactPWA",
        description: "A React app with PWA support",
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "pwa-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        screenshots: [
          {
            src: "screenshot1-512-512.png",
            sizes: "512x512",
            type: "image/png",
            form_factor: "narrow"
          },
          {
            src: "screenshot1-1895x1076.png",
            sizes: "1895x1076",
            type: "image/png",
            form_factor: "wide"
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));