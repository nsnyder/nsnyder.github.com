module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "layer", "variant", "config"],
      },
    ],
    "color-no-invalid-hex": true,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": null,
    "no-descending-specificity": true,
  },
};
