// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import markdoc from "@astrojs/markdoc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc()],
  redirects: {
    "/blog/posts/[...slug]": {
      status: 302,
      destination: "/blog/[...slug]",
    },
  },
  markdown: {
    remarkPlugins: [[remarkMath, {}]],
    rehypePlugins: [rehypeKatex],
  },
});
