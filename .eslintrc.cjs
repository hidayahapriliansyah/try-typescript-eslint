/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  'rules': {
    '@typescript-eslint/semi': 'warn',
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/block-spacing': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/brace-style': 'warn',
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/func-call-spacing': ['warn', 'never'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/key-spacing': 'error',
    'prefer-const': 'warn',
    'object-curly-spacing': ['warn', 'always'],
  },
};