// eslint-disable-next-line
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'react'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-curly-spacing': ['error', { 'when': 'always', 'children': true }],
    'react/react-in-jsx-scope': [0, 'never'],
    'react/jsx-curly-brace-presence': ['error', 'always'],
    'react/jsx-space-before-closing': ['error', 'always']
  }
};
