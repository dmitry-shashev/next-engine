// https://nextjs.org/docs/testing
const nextJest = require('next/jest')
const tsconfig = require('./tsconfig.json')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// for naming imports in tests
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleNameMapper,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/**/*.test.(ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
