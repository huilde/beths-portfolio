import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  // Other Vite configuration options...
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["styled-components"],
    },
  },
};
