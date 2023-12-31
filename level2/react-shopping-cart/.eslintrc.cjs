/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    // storybook play에서 await을 사용할 수 없어서 off
    '@typescript-eslint/await-thenable': 'off',
    // storybook에서 useState를 사용할 수 없어서 off
    'react-hooks/rules-of-hooks': 'off',
    // any 타입 사용
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // void 함수 이렇게 쓰라길래 끔
    '@typescript-eslint/no-floating-promises': 'off',
    // await 사용하라고 강요해서
    '@typescript-eslint/no-misused-promises': 'off',
    // await 사용하라고 강요해서
    '@typescript-eslint/no-unsafe-return': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react*'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {},
};
