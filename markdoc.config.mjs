import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    inlineEmailSignupForm: {
      render: component("./src/components/InlineEmailSignupForm.astro"),
      attributes: {},
    },
    youtube: {
      render: component("./src/components/YoutubeEmbed.astro"),
      attributes: {
        videoId: {
          type: String,
          required: true,
        },
        autoplay: {
          type: Boolean,
          default: false,
        },
        loop: {
          type: Boolean,
          default: false,
        },
        aspectRatio: {
          type: String,
          default: "16 / 9",
        },
      },
    },
  },
});
