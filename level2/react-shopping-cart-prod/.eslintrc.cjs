module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended', // recommended-type-checked는 엄격
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'no-console': 'off',
    // import React from 'react' 없이 사용 가능
    'react/react-in-jsx-scope': 'off',
    // 컴포넌트 arrow function
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
      },
    ],
    // prop types off는 typescript 사용으로 인해 off
    'react/prop-types': 'off',
    // prop types off는 typescript 사용으로 인해 off
    'react/require-default-props': 'off',
    // prefer default export off는 여러 개 export 가능하게 하기 위해 off
    'import/prefer-default-export': 'off',
    // jsx-props-no-spreading off는 props를 spread 하기 위해 off
    'react/jsx-props-no-spreading': 'off',
    // import/no-extraneous-dependencies off는 storybook 관련 설정
    'import/no-extraneous-dependencies': 'off',
    // 위에서 선언된 변수명 사용 가능하게 하기 위해 off
    '@typescript-eslint/no-shadow': 'off',
    // no-use-before-define off는 typescript 사용으로 인해 off
    '@typescript-eslint/no-use-before-define': 'off',
    // index로 배열 key 사용 가능
    'react/no-array-index-key': 'off',
    // error boundary fallbackRender 사용 가능하게 하기 위해 off
    'react/no-unstable-nested-components': 'off',
    // consistent-return off는 typescript 사용으로 인해 off
    'consistent-return': 'off',
    // import 순서 관련
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react*'],
        alphabetize: {
          order: 'desc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
