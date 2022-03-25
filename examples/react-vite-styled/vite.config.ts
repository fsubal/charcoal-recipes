import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dynamicImport from "@rollup/plugin-dynamic-import-vars";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["@charcoal-ui/icons"],
  },
  build: {
    rollupOptions: {
      // for @charcoal-ui/icons
      plugins: [dynamicImport()],
    },
  },
  plugins: [react()],
});
