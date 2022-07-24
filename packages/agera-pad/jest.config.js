module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/packages/**/*.vue'],
  testMatch: ['**/packages/**/*.spec.ts'],
};
