// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'linebreak-style': 'off',
  },
};
