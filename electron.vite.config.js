import { defineConfig, externalizeDepsPlugin } from "electron-vite";

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
});
