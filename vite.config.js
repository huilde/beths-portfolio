import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  // Other Vite configuration options...

  build: {
    rollupOptions: {
      external: ["styled-components"],
    },
  },
};
