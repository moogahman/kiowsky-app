export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['dist'],
    transform: { '\\.[jt]sx?$': ['ts-jest', { useESM: true }] },
    moduleNameMapper: {
        '(.+)\\.js': '$1',
    },
    extensionsToTreatAsEsm: ['.ts'],
};
