import { SlidevPluginOptions } from "@slidev/cli";
import { PluginWithOptions } from "markdown-it";
import { markdownItShikiTwoslashSetup } from "markdown-it-shiki-twoslash";
import { UserConfigSettings } from "shiki-twoslash";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    slidev: {
      markdown: {
        /* markdown-it options */
        async markdownItSetup(md: { use: (arg0: PluginWithOptions<UserConfigSettings>) => void; }) {
          if (mode === "development") {
            const shiki = await markdownItShikiTwoslashSetup({
              theme: "min-dark",
            });
            md.use(shiki);
          }
        },
      },
      /* options for other plugins */
    } as unknown as SlidevPluginOptions,
  };
});
