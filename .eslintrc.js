module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 12
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
    // "eslint:recommended",
    // "prettier/@typescript-eslint"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "vue/require-render-return": 0,
    "vue/require-explicit-emits": 0,
    "prefer-const": 0
  }
};
