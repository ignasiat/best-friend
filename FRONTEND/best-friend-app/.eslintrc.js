module.exports = {
  env: {
    browser: true,
    es2021: true,
    jasmine: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'comma-dangle': [2, 'never'],
    'no-underscore-dangle': 0,
    'no-useless-constructor': 0
  }
}
