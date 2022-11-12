module.exports = {
  extends: [
    '@johnhom/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // es6
    'prefer-const': 'off',
    // @typescript-eslint/recommended
    '@typescript-eslint/prefer-as-const': 'off',
  }
}
