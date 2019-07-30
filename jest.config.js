module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^config$': '<rootDir>/src/config',
    '^config/(.*)$': '<rootDir>/src/config/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^static/(.*)$': '<rootDir>/static/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  verbose: true,
}
