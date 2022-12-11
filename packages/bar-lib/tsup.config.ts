import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/node.ts"],
    format: ["cjs", "esm"],
    target: "node16",
    sourcemap: true,
    dts: true,
  },
  {
    entry: ["src/browser.ts"],
    format: ["esm"],
    target: "es2021",
    platform: "browser",
    sourcemap: true,
    dts: true,
  },
]);
