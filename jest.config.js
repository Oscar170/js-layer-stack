module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  moduleFileExtensions: ['js', 'jsx'],
  notify: true,
  notifyMode: 'always',
  roots: ['<rootDir>packages'],
  testMatch: ['**/__tests__/*.+(js|jsx)', '**/*.spec.+(js|jsx)'],
};
