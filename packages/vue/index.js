module.exports = {
  extends: [
    '@johnhom/eslint-config-ts',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
  ],
  rules: {
    'vue/no-unused-components': 'off'
  }
};
