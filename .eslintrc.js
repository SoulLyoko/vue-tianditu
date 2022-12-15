module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    T: "readonly",
    VT: "readonly"
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true }
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "vue/require-render-return": 0,
    "vue/require-explicit-emits": 0,
    "vue/require-default-prop": 0,
    "vue/multi-word-component-names": 0,
    "import/no-unresolved": 0,
    "import/order": [
      "warn",
      {
        groups: ["type", "builtin", "external"],
        "newlines-between": "always"
      }
    ]
  }
};
