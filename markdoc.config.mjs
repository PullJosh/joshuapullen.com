import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    inlineEmailSignupForm: {
      render: component("./src/components/InlineEmailSignupForm.astro"),
      attributes: {},
    },
  },
});
