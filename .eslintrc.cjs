module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
