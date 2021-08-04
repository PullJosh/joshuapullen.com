const defaultTheme = require("tailwindcss/defaultTheme");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              color: theme("colors.gray.800", defaultTheme.colors.gray[800]),
              backgroundColor: theme(
                "colors.gray.200",
                defaultTheme.colors.gray[200]
              ),
            },
            code: {
              color: theme("colors.gray.800", defaultTheme.colors.gray[800]),
              backgroundColor: theme(
                "colors.gray.200",
                defaultTheme.colors.gray[200]
              ),
              fontWeight: "400",
              borderRadius: rem(3),
              paddingTop: em(2, 14),
              paddingRight: em(4, 14),
              paddingBottom: em(2, 14),
              paddingLeft: em(4, 14),
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
          },
        },
      }),
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
