import type {Config} from '@jest/types';


const config: Config.InitialOptions = {
  // Basic options
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
};

// noinspection JSUnusedGlobalSymbols
export default config;
