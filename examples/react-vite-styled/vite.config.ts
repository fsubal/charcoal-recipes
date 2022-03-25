import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import dynamicImport from "@rollup/plugin-dynamic-import-vars";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), charcoalIcons()],
});

/**
 * vite で @charcoal-ui/icons が動くようにするプラグイン
 */
function charcoalIcons(): PluginOption {
  return {
    name: "charcoal-icons",
    config() {
      return {
        optimizeDeps: {
          // 開発環境の Pre-bundling で壊れる
          // https://vitejs.dev/guide/dep-pre-bundling.html#the-why
          exclude: ["@charcoal-ui/icons"],
        },
        build: {
          rollupOptions: {
            // dynamicImport がビルド時に解決されない
            // `build.dynamicImportVarsOptions` を追加しても治らなかった
            // https://vitejs.dev/config/#build-dynamicimportvarsoptions
            plugins: [dynamicImport()],
          },
        },
      };
    },
  };
}
