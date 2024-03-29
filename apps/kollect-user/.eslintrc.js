/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/app.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.node.json',
  },
};
