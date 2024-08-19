import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import baseConfig from '../eslint.config.mjs';

export default [
    ...js.configs.recommended,
    ...baseConfig,
    {
        files: ['functions/**/*.{js,ts}'],
        languageOptions: {
            parser: tseslintParser,
            sourceType: 'module',
            ecmaVersion: 2022,
            parserOptions: {
                project: [
                    './functions/tsconfig.json',
                    './functions/tsconfig.dev.json',
                ],
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            import: importPlugin,
        },
        rules: {
            quotes: ['error', 'double'],
            'import/no-unresolved': 'off',
            indent: ['error', 2],
            ...tseslint.configs['recommended'].rules,
        },
        settings: {
            'import/resolver': {
                typescript: {},
            },
        },
    },
    {
        ignores: ['/functions/lib/**/*', '/functions/generated/**/*'],
    },
];
