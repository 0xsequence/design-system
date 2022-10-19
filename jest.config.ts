import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testRegex: '.*\\.test\\.(ts|tsx)$',
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
    '.*\\.test\\.(ts|tsx)$': [
      'ts-jest',
      {
        babelConfig: {
          plugins: ['@vanilla-extract/babel-plugin']
        }
      }
    ]
  }
}

export default config
