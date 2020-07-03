const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    gradients: theme => ({
      "blue-purple": [
        "135deg",
        theme("colors.blue.500"),
        theme("colors.purple.500"),
      ],
      "shades-of-gray": [
        "135deg",
        theme("colors.gray.300"),
        theme("colors.gray.200"),
      ],
    }),
    rotate: () => ({
      ...defaultTheme.rotate,
      "30": "30deg",
      "-12": "-12deg",
    }),
    stripes: theme => ({
      construction: [theme("colors.orange.700"), theme("colors.gray.900")],
      // split: [
      //   "12deg",
      //   theme("colors.gray.300"),
      //   theme("colors.gray.200"),
      //   "50%",
      // ],
    }),
  },
  variants: {
    padding: ["responsive"],
    "border-width": ["hover"],
  },
  plugins: [
    require("./tailwind-plugins/gradient"),
    require("./tailwind-plugins/stripes"),
  ],
};
