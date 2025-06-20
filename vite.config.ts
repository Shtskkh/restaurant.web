import TanStackRouterVite from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://localhost:5173",
  },
});
