return {
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended",
      "@vue/typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      // This should disable any rules that conflict with Prettier, so do this last.
      "prettier",
    ],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": "error"
    },
    "parserOptions": {
      "parser": "@typescript-eslint/parser",
      "ecmaVersion": 2020,
      "sourceType": "module"
    }
  }
}