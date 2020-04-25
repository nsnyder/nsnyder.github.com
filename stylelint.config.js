module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "color-no-invalid-hex": true,
    "declaration-block-trailing-semicolon": "always",
    "no-descending-specificity": true,
  },
};
