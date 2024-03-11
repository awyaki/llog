import path from "node:path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  main: {
    build: {
      outDir: "./out",
    },
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    build: {
      outDir: "./out",
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    plugins: [react()],
    resolve: {
      alias: { "~": path.resolve(__dirname, "src/renderer") },
    },
  },
});
