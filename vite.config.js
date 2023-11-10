// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "src/"),
        resolve(__dirname, "src/components/"),
        resolve(__dirname, "src/components/general"),
        resolve(__dirname, "src/components/cards"),
        resolve(__dirname, "src/elements/"),
        resolve(__dirname, "src/elements/icons/"),
        resolve(__dirname, "src/elements/buttons/"),
      ],
    }),
    ViteImageOptimizer({
      /* pass your config */
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 70,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 70,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 70,
      },
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
        magazines: resolve(__dirname, "magazines.html"),
        section: resolve(__dirname, "section.html"),
        author: resolve(__dirname, "author.html"),
        posts: resolve(__dirname, "posts.html"),
        terms: resolve(__dirname, "terms.html"),
        category: resolve(__dirname, "category.html"),
        podcasts: resolve(__dirname, "podcasts.html"),
      },
    },
  },
});
