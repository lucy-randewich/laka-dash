module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
