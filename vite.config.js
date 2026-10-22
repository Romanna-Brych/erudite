import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "node:path";

export default defineConfig(({ command }) => {
  const base = command === "serve" ? "/" : "/erudite/";

  return {
    base,
    plugins: [
      handlebars({
        partialDirectory: resolve(process.cwd(), "src/partials"),
        context: {
          base,
        },
      }),
    ],
  };
});
