import * as defaultTheme from "tailwindcss/defaultTheme";

import typography from "@tailwindcss/typography";

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

export default {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              fontWeight: "500",
              backgroundColor: theme("colors.gray.100"),
              paddingTop: em(2, 12),
              paddingRight: em(4, 12),
              paddingBottom: em(2, 12),
              paddingLeft: em(4, 12),
              borderRadius: rem(3),
            },
            "code::before": {
              display: "none",
            },
            "code::after": {
              display: "none",
            },
          },
        },
      }),
    },
    screens: {
      xxs: "350px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography],
};
