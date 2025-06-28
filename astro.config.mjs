// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc()],
  redirects: {
    "/blog/posts/[...slug]": {
      status: 302,
      destination: "/blog/[...slug]",
    },
  },
});
