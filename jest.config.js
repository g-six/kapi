module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  verbose: true,
}
