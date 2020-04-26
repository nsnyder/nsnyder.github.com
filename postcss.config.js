const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./public/**/*.html",
    // etc.
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    // Only run these in production to speed up development build time.
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
