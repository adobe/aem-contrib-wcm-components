'use strict';

module.exports = {
    preset: "ts-jest",
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ['<rootDir>/**/*.test.ts','<rootDir>/**/*.test.tsx'],
    testPathIgnorePatterns: ['node_modules','lib', 'dist', 'node'],
    collectCoverageFrom: [
        '**/*.{ts,tsx}'
    ],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/lib/",
        "/dist/",
        "/node/"
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
};