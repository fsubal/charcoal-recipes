import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /.*\/svg\/([^\/]+)\/([^\/]+)\.svg$/,
        replacement: path.resolve(
          projectRootDir,
          "node_modules",
          "@charcoal-ui",
          "icons",
          "svg",
          "$1",
          "$2.svg"
        ),
      },
    ],
  },
});
