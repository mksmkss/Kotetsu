module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 'off', // 拡張子なしのパスを許可
    'linebreak-style': 'off', // 改行コードLF、CR、CRLF全て許可
    'no-use-before-define': 'off', // 定義前に使用することを許可
    'no-restricted-exports': 'off', // export { default } from './src' in App.tsxを許可

    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // JSXファイルを許可
    'react/style-prop-object': ['error', { allow: ['StatusBar'] }], // StatusBar以外はstyleにはObjectのみに制限
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }], // 関数コンポーネントをアロー関数のみに制限
    'default-param-last': 'off', // const func = (state = initState, action) => {} を許可

    // provisional rules
    'no-unused-vars': ['error', { argsIgnorePattern: '[pP]rops', varsIgnorePattern: 'styles' }], // styles, props以外は未使用の変数を禁止
    'react/jsx-props-no-spreading': 'off', // {...props}を許可
    'no-empty-pattern': 'off', // const { } = propsを許可
    'react/require-default-props': 'off', // defaultPropsを許可
  },
  settings: {
    'import/resolver': {
      // importで省略する拡張子
      node: { extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'] },
      // 絶対パス
      alias: {
        map: [
          ['src', './src'],
          ['assets', './assets'],
        ],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
};
