import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve("src/assets"),
      "@components": resolve("src/components"),
      "@hooks": resolve("src/components/hooks"),
      "@layouts": resolve("src/components/layouts"),
      "@pages": resolve("src/components/pages"),
      // Добавьте здесь любые другие алиасы, которые вам нужны
    },
  },
});
