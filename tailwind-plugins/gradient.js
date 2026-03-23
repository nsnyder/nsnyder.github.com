const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, theme }) => {
  const gradients = theme("gradients", {});

  const utilities = {};
  Object.entries(gradients).forEach(([name, [direction, start, end]]) => {
    if (!end) {
      end = start;
      start = direction;
      direction = "to right";
    }
    utilities[`.bg-gradient-${name}`] = {
      backgroundImage: `linear-gradient(${direction}, ${start}, ${end})`,
    };
  });

  addUtilities(utilities);
});
