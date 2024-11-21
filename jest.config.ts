import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'vue'],
  testEnvironment: 'jsdom',
}

export default config
