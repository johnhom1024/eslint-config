module.exports = {
  extends: [
    '@johnhom/eslint-config-basic',
    'airbnb-typescript/base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // es6
    'prefer-const': 'off',
    '@typescript-eslint/prefer-as-const': 'off'
  }
}