const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/base'
  ],
  rules: {
    'no-console': [
      1,
      { allow: ['warn', 'error'] }
    ],
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    'no-plusplus': 0,
    'no-param-reassign': 0
  },
  settings: {
    'import/resolver': {
      node: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        paths: ['src'],
        extensions: ['*', '.js', '.vue', '.json']
      }
    }
  }
};
