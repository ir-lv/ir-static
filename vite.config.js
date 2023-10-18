// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "src/"),
        resolve(__dirname, "src/components/"),
        resolve(__dirname, "src/components/general"),
        resolve(__dirname, "src/elements/"),
        resolve(__dirname, "src/elements/icons/"),
        resolve(__dirname, "src/elements/buttons/"),
      ],
    }),
  ],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        article: resolve(__dirname, "article.html"),
        search: resolve(__dirname, "search.html"),
        magazine: resolve(__dirname, "magazine.html"),
        section: resolve(__dirname, "section.html"),
        author: resolve(__dirname, "auhor.html"),
      },
    },
  },
});
