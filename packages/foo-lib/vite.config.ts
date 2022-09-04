import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    dts({
      tsConfigFilePath: "tsconfig.app.json",
      entryRoot: "src",
      insertTypesEntry: true,
    }),],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ['es'],
    },
    rollupOptions: {
      external: ["vue"],
    },
    sourcemap: true,
  },
});
