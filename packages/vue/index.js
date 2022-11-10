module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslit-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    }
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@johnhom/eslint-config-ts',
  ]
}