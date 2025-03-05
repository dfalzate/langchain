import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./src', './tests'],
  transform: {
    '^.+\\.js?$': 'ts-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};

export default config;

// setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  // globalSetup: '<rootDir>/tests/global-setup.ts',