import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        privacy: resolve(__dirname, "privacy.html"),
        tos: resolve(__dirname, "tos.html"),
        "ja/index": resolve(__dirname, "ja/index.html"),
        "ja/privacy": resolve(__dirname, "ja/privacy.html"),
        "ja/tos": resolve(__dirname, "ja/tos.html"),
        "zh/index": resolve(__dirname, "zh/index.html"),
        "zh/privacy": resolve(__dirname, "zh/privacy.html"),
        "zh/tos": resolve(__dirname, "zh/tos.html"),
        "ko/index": resolve(__dirname, "ko/index.html"),
        "ko/privacy": resolve(__dirname, "ko/privacy.html"),
        "ko/tos": resolve(__dirname, "ko/tos.html"),
      },
    },
  },
});
