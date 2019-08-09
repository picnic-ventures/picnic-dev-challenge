module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, variables: false },
    ],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Enforced by prettier
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',

    // Enforced by TypeScript
    '@typescript-eslint/no-unused-vars': 'off',
    'react/prop-types': 'off',
  },
}
