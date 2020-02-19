module.exports = {
  verbose: true,

  // Jest MUST NOT load with these patterns
  testPathIgnorePatterns: [
    '/coverage/',
    '/dist/',
    '/node_modules/',
    '/src/server/',
    '/tests/cypress/',
    '/tests/integration/',
  ],

  // Module Configuration
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],

  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.runtime.js',
    '^api$': '<rootDir>/src/api', // unit-tests will always use mock
    '^actions/(.*)': '<rootDir>/src/store/actions/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^layouts/(.*)': '<rootDir>/src/layouts/$1',
    '^locales/(.*)': '<rootDir>/src/locales/$1',
    '^plugins/(.*)': '<rootDir>/src/plugins/$1',
    '^views/(.*)': '<rootDir>/src/views/$1',
    '^router$': '<rootDir>/src/router',
    '^actions$': '<rootDir>/src/store/actions',
    '^store$': '<rootDir>/src/store',
    '.+\\.(css|scss|png|jpg|jpeg|gif|svg|eot|otf|ttf|woff|woff2)$': 'jest-transform-stub',
  },

  // File type transforms
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },

  // Snapshot Serialization
  snapshotSerializers: [
    'jest-serializer-vue',
  ],

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/App.vue',
    '!src/main.js',
    '!**/_*.js', // not underscore files
    '!**/_*/**', // not in (underscore) folders
  ],

  coverageReporters: [
    'text',
  ],

  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
