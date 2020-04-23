const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const gradients = theme('gradients', {});
  const gradientVariants = variants('gradients', []);

  let utilities = {};
  Object.entries(gradients).forEach(([name, [direction, start, end]])  => {
    if (!end) {
      end = start;
      start = direction;
      direction = 'to right';
    }
    utilities[`.bg-gradient-${e(name)}`] = {
      backgroundImage: `linear-gradient(${direction}, ${start}, ${end})`
    };
  });

  addUtilities(utilities, gradientVariants)
});
