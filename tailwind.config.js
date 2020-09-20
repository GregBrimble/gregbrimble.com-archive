const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gregbrimble: {
          primary: `#40C3F7`,
          neutral: `#3E4C59`,
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/ui"),
    require("./lib/tailwindTypographyPlugin"),
  ],
  variants: {
    margin: ["first", "responsive"],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
