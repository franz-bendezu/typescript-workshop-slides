import { SlidevPluginOptions } from "@slidev/cli";
import { markdownItShikiTwoslashSetup } from "markdown-it-shiki-twoslash";
import { defineConfig } from "vite";

export default defineConfig({
  slidev: {
    markdown: {
      /* markdown-it options */
      async markdownItSetup(md) {
        const shiki = await markdownItShikiTwoslashSetup({
          theme: "min-dark",
        });
        console.log(md, shiki);
        md.use(shiki);
      },
    },
    /* options for other plugins */
  } as unknown as SlidevPluginOptions,
});
