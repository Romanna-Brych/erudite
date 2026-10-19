import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(process.cwd(), "src/partials"),
    }),
  ],
});
