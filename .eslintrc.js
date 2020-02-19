/* define module */

const rules = {
  'no-console': process.env.NODE_ENV === 'prod' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV === 'prod' ? 'error' : 'off',
  'brace-style': [2, '1tbs'],
  'camelcase': [1, { 'ignoreDestructuring': true, 'properties': 'never' }],
  'comma-dangle': [1, 'always-multiline'],
  'comma-spacing': 1,
  'complexity': [1, 15],
  'curly': [2, 'all'],
  'dot-location': [2, 'property'],
  'eol-last': 2,
  'func-call-spacing': 2,
  'import/first': [2],
  // 'import/order': [1],
  'import/no-duplicates': [2],
  'import/newline-after-import': ['error', { 'count': 1 }],
  'indent': [2, 2, { 'SwitchCase': 1 }],
  'key-spacing': 1,
  'keyword-spacing': 2,
  'line-comment-position': 'off',
  'max-depth': [2, 10],
  'max-len': [2, { 'code': 180, 'ignoreComments': true, 'ignoreTrailingComments': true }],
  'max-lines': [1, { 'max': 400, 'skipBlankLines': true, 'skipComments': true }],
  'max-nested-callbacks': [1, 4],
  'max-statements': [1, 30],
  'no-empty': 2,
  'no-multi-spaces': 1,
  'no-multiple-empty-lines': [1, { 'max': 1, 'maxEOF': 0 }],
  'no-prototype-builtins': 0,
  'no-restricted-imports': [2, { 'patterns': ['*.js'] }],
  'no-sequences': 2,
  'no-trailing-spaces': 1,
  'no-undef': 2,
  'no-underscore-dangle': 1,
  'no-unneeded-ternary': 2,
  'no-unused-vars': [2, { 'args': 'none' }],
  'no-var': 2,
  'no-warning-comments': [1, { 'terms': ['fixme', 'xxx', 'TODO'] }],
  'no-whitespace-before-property': 2,
  'object-curly-spacing': [2, 'always'],
  'object-shorthand': 1,
  'prefer-promise-reject-errors': 1,
  'quotes': [2, 'single'],
  'radix': 2,
  'semi': [2, 'always'],
  'semi-spacing': 2,
  'semi-style': 2,
  'space-before-blocks': 2,
  'space-before-function-paren': 1,
  'space-in-parens': 2,
  'space-infix-ops': 2,
  'space-unary-ops': 2,
  'spaced-comment': 2,
  'strict': [2, 'never'],
  'switch-colon-spacing': 2,
  'unicode-bom': 2,

  'vue/component-name-in-template-casing': ["error", "PascalCase"],
  'vue/html-indent': ["error", 2],
  'vue/html-self-closing': [
    "error",
    {
      "html": {
        "void": "always",
        "normal": "never"
      }
    }
  ],
  "vue/max-attributes-per-line": "off",
  "vue/multiline-html-element-content-newline": "off",
  "vue/name-property-casing": ["error", "PascalCase"],
  "vue/singleline-html-element-content-newline": "off",
};

module.exports = {
  root: true,
  env: {
    es6: true,
    // commonjs: true;
    browser: true,
    // jest: true,
    node: true
  },
  globals: {
    // $nuxt: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  plugins: [
    'standard',
    'babel',
    'vue',
    'promise',
    'import',
    'node'
  ],

  rules,

  overrides: [
    {
      files: [
        '**/__tests__/*.js?(x)',
        '**/tests/unit/**/*.spec.js?(x)'
      ],
      env: {
        jest: true
      }
    },
  ]
};
