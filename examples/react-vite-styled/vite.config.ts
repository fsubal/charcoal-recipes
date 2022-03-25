import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["@charcoal-ui/icons"],
  },
  build: {
    dynamicImportVarsOptions: {
      include: ["./node_modules/@charcoal-ui/icons/svg/**/*.svg"],
      warnOnError: true,
    },
  },
  plugins: [react() as unknown as PluginOption],
});
