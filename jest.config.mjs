export default {
    preset: 'ts-jest/presets/default-esm', // Use this preset for ESM support
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ESM
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1', // Resolve .js extensions to .ts files
    },
    transform: {
        '^.+\\.ts$': 'ts-jest', // Transform TypeScript files
    },
    transformIgnorePatterns: [
        'node_modules/(?!firebase)', // Add modules you want to be transformed by Jest here
    ],
};
