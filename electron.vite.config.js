import { viteStaticCopy } from "vite-plugin-static-copy";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";

export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin(),
      viteStaticCopy({
        targets: [
          {
            src: "prisma/dev.db",
            dest: "./",
          },
          {
            src: "icons/Icon-Llog.icns",
            dest: "./",
          },
        ],
      }),
    ],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
});
