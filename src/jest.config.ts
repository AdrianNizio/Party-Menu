import type { Config } from 'jest';

const config: Config = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageReporters: ['json', 'html'],
    globalSetup: 'jest-preset-angular/global-setup',
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '^uuid$': require.resolve('uuid'),
    },
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    verbose: false,
    workerIdleMemoryLimit: '512MB',
};

export default config;
