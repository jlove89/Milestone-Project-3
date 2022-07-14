module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parserOptions: {
    ecmaVersion: 8,
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    quotes: ["error", "double"],
    fix: 0,
  },
};
