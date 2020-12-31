module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
  },
};
