const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const stripes = theme('stripes', {});
  const stripeVariants = variants('stripes', []);

  let utilities = {};
  Object.entries(stripes).forEach(([name, [direction, color1, color2, width]])  => {
    if (!color2) {
      width = color2;
      color2 = color1;
      color1 = direction;
      direction = '-45deg';
    }
    if (!width) {
      width = 10;
    }
    utilities[`.bg-stripe-${e(name)}`] = {
      background: `repeating-linear-gradient(
        ${direction},
        ${color1},
        ${color1} ${width}px,
        ${color2} ${width}px,
        ${color2} ${width*2}px)`
    };
  });

  addUtilities(utilities, stripeVariants)
});
