// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc()],
  redirects: {
    "/blog/posts/[...slug]": {
      status: 301, // Permanent redirect (as opposed to 302, a temporary redirect)
      destination: "/blog/[...slug]",
    },
  },
});