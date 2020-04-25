module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/base",
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    // This should disable any rules that conflict with Prettier, so do this last.
    "prettier",
  ],
  ignorePatterns: [
    "vue.config.js",
    "tailwind.config.js",
    "babel.config.js",
    "postcss.config.js",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.vue", "**/*.ts"],
      rules: {
        "vue/max-attributes-per-line": "off"
      },
    },
  ],
};
